import { expect } from 'chai';
import {
  CreateCommentType,
  CreateQuoteRequestType,
  OrderPartner,
  PublicApiClient,
  PublishQuoteRequestType,
  QuoteLastVersion,
  QuoteList,
  QuoteProduct,
  QuoteProductAssets,
  QuoteProductIdentifiers,
  QuoteProductPrices,
  QuoteProductProgram,
  ReferenceLink,
} from '../../src';
import { Quote, QuoteData } from '../../src/quotes/entities/Quote';
import { Axios, AxiosHeaders, AxiosResponse } from 'axios';
import sinon from 'sinon';
import nock from 'nock';

const QUOTES_MOCK_URL = 'https://quotes.localhost';
const QUOTE_REFERENCE = 'XSP999';

describe('QuotesClient', () => {
  const quote: QuoteData = {
    quoteReference: 'Q-ARWS-ef0e6bd8-17727',
    reference: 'XSPQ1473674',
    status: 'Sent to end customer',
    dateCreation: '2026-10-12 14:03:16',
    dateUpdate: '2026-10-14 12:37:40',
    dateEnd: '2026-10-27 23:59:59',
    ponumber: 'PO-123',
    endCustomerPONumber: 'CUSTOMER-PO-456',
    partner: {
      companyName: 'Partner company name',
      contact: {
        firstName: 'Partner contact first name',
        lastName: 'Partner contact last name',
        email: 'Partner contact email',
      },
    },
    customer: {
      reference: 'XSP399744',
      link: '/api/customers/XSP399744',
    },
    lastVersion: {
      version: 2,
      dateUpdate: '2026-10-14 12:37:40',
    },
    products: [
      {
        sku: 'SAAS||Microsoft||MICROSOFT-365-BUSINESS||CFQ7TTC0LH18:0001',
        quantity: 2,
        prices: {
          buy: 13.3,
          sell: 13.3,
          currency: 'EUR',
          periodicity: 'per Month',
          periodicityCode: 720,
          term: 'twelveMonths',
          termCode: 8640,
        },
        license: {
          reference: 'XSP4510792',
          link: '/api/licenses/XSP4510792',
        },
        name: 'Microsoft 365 Business Basic',
        isAddon: false,
        isTrial: false,
        classification: 'SaaS',
        arrowSubCategories: ['NCE'],
        identifiers: {
          vendor: {
            name: 'Microsoft',
            sku: 'CFQ7TTC0LH18:0001',
          },
        },
        program: {
          legacyCode: 'microsoft',
          internalName: 'MSCSP',
        },
        assets: {
          mainLogoUrl: 'https://websource.myportal.cloud/images/microsoft.png',
          squareLogoUrl:
            'https://websource.myportal.cloud/images/icon/microsoft.png',
        },
        arrowSpherePriceBandSku: 'MS-0B-O365-BUSINESS-BASIC-NCE',
      },
    ],
  };

  const client = new PublicApiClient()
    .getQuotesClient()
    .setUrl(QUOTES_MOCK_URL);

  describe('getQuote', (): void => {
    afterEach(() => {
      sinon.restore();
    });

    it('should get a quote by reference and deserialize nested entities', async () => {
      const payload = { status: 200, data: quote };
      const scope = nock(QUOTES_MOCK_URL)
        .get(`/quotes/${quote.reference}`)
        .reply(200, payload);

      const result = await client.getQuote(quote.reference);

      expect(scope.isDone()).to.be.true;
      expect(result.status).to.equal(200);
      expect(result.data).to.be.instanceOf(Quote);
      expect(result.data.partner).to.be.instanceOf(OrderPartner);
      expect(result.data.customer).to.be.instanceOf(ReferenceLink);
      expect(result.data.ponumber).to.equal(quote.ponumber);
      expect(result.data.endCustomerPONumber).to.equal(
        quote.endCustomerPONumber,
      );
      const product = result.data.products[0];
      expect(product).to.be.instanceOf(QuoteProduct);
      expect(product.prices).to.be.instanceOf(QuoteProductPrices);
      expect(product.license).to.be.instanceOf(ReferenceLink);
      expect(product.identifiers).to.be.instanceOf(QuoteProductIdentifiers);
      expect(product.program).to.be.instanceOf(QuoteProductProgram);
      expect(product.assets).to.be.instanceOf(QuoteProductAssets);
      expect(result.data.lastVersion).to.be.instanceOf(QuoteLastVersion);
      expect(product.arrowSpherePriceBandSku).to.equal(
        'MS-0B-O365-BUSINESS-BASIC-NCE',
      );
      expect(result.data.toJSON()).to.deep.equal(quote);
      expect(result.pagination).to.be.undefined;
    });

    it('should support absent optional fields and empty products', async () => {
      const minimalQuote: QuoteData = {
        quoteReference: quote.quoteReference,
        reference: quote.reference,
        status: quote.status,
        dateCreation: quote.dateCreation,
        dateUpdate: quote.dateUpdate,
        products: [],
      };
      const payload = { status: 200, data: minimalQuote };
      const scope = nock(QUOTES_MOCK_URL)
        .get(`/quotes/${quote.reference}`)
        .reply(200, payload);

      const result = await client.getQuote(quote.reference);

      expect(scope.isDone()).to.be.true;
      expect(result.data.dateEnd).to.be.undefined;
      expect(result.data.partner).to.be.undefined;
      expect(result.data.customer).to.be.undefined;
      expect(result.data.ponumber).to.be.undefined;
      expect(result.data.endCustomerPONumber).to.be.undefined;
      expect(result.data.lastVersion).to.be.undefined;
      expect(result.data.products).to.deep.equal([]);
      expect(result.toJSON()).to.deep.equal(payload);
    });
  });

  describe('getQuote with partial product data', (): void => {
    it('should support a product without program internal name, logos nor price band sku', async () => {
      const productWithoutOptionalData = {
        ...quote.products[0],
        program: { legacyCode: 'microsoft' },
        assets: { mainLogoUrl: null, squareLogoUrl: null },
        arrowSpherePriceBandSku: undefined,
      };
      const payload = {
        status: 200,
        data: { ...quote, products: [productWithoutOptionalData] },
      };
      const scope = nock(QUOTES_MOCK_URL)
        .get(`/quotes/${quote.reference}`)
        .reply(200, payload);

      const result = await client.getQuote(quote.reference);
      const product = result.data.products[0];

      expect(scope.isDone()).to.be.true;
      expect(product.program.legacyCode).to.equal('microsoft');
      expect(product.program.internalName).to.be.undefined;
      expect(product.assets.mainLogoUrl).to.be.null;
      expect(product.assets.squareLogoUrl).to.be.null;
      expect(product.identifiers.vendor).to.deep.equal({
        name: 'Microsoft',
        sku: 'CFQ7TTC0LH18:0001',
      });
      expect(product.prices.periodicityCode).to.equal(720);
      expect(product.prices.termCode).to.equal(8640);
      expect(product.arrowSpherePriceBandSku).to.be.undefined;
    });
  });

  describe('listQuotes', (): void => {
    it('should list quotes with pagination', async () => {
      const payload = {
        status: 200,
        data: [quote, { ...quote, reference: 'XSPQ1473675' }],
        pagination: {
          per_page: 25,
          current_page: 1,
          total_page: 1,
          total: 2,
          next: null,
          previous: null,
        },
      };
      const scope = nock(QUOTES_MOCK_URL)
        .get('/quotes?per_page=25')
        .reply(200, payload);

      const result = await client.listQuotes(25, 1);

      expect(scope.isDone()).to.be.true;
      expect(result.data).to.be.instanceOf(QuoteList);
      expect(result.data.quotes).to.have.lengthOf(2);
      result.data.quotes.forEach((item) => {
        expect(item).to.be.instanceOf(Quote);
        expect(item.products[0]).to.be.instanceOf(QuoteProduct);
      });
      expect(result.data.toJSON()).to.deep.equal(payload.data);
      expect(result.pagination?.toJSON()).to.deep.equal(payload.pagination);
      expect(result.toJSON()).to.deep.equal(payload);
    });

    it('should support an empty quote list without pagination', async () => {
      const payload = { status: 200, data: [] };
      const scope = nock(QUOTES_MOCK_URL)
        .get('/quotes?per_page=25')
        .reply(200, payload);

      const result = await client.listQuotes();

      expect(scope.isDone()).to.be.true;
      expect(result.data.quotes).to.deep.equal([]);
      expect(result.pagination).to.be.undefined;
      expect(result.toJSON()).to.deep.equal(payload);
    });
  });

  describe('deleteQuote', () => {
    let axiosClient: sinon.SinonStubbedInstance<Axios>;

    beforeEach(() => {
      axiosClient = sinon.stub(Axios.prototype);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should succesfully delete a quote', async () => {
      const expectedResult: AxiosResponse = {
        status: 201,
        data: {
          status: 201,
        },
        statusText: 'success',
        headers: {},
        config: {
          headers: new AxiosHeaders(),
        },
      };

      axiosClient.request.resolves(expectedResult);

      const result = await client.deleteQuote(QUOTE_REFERENCE);

      expect(result).to.be.deep.equals(expectedResult.data);
    });
  });

  describe('requestQuote', () => {
    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);
    it('should call requestQuote method', async () => {
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          message: 'Your reference as been sent successfully.',
        },
      };

      nock(QUOTES_MOCK_URL)
        .post('/quotes/request')
        .reply(200, PAYLOAD_RESPONSE);

      const result = await quoteClient.requestQuote({
        agreeToReceiveCommunications: true,
        agreeSharingInformation: true,
        company: 'The Company',
        country: 'FR',
        email: 'user@the-company.com',
        firstName: 'TheFirstname',
        lastName: 'TheLastname',
        phoneNumber: '',
        vendor: 'PALOALTO',
        sku: 'SKU123456',
      });

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('requestQuoteForIbm', () => {
    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);
    it('should call requestQuoteForIbm method', async () => {
      nock(QUOTES_MOCK_URL).post('/quotes/request/ibm').reply(204);

      await quoteClient.requestQuoteForVendor('ibm', {
        reference: 'XSP123456',
      });

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('validateQuote', () => {
    const quoteReference = 'XSP123456';

    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);

    it('should call validateQuote method', async () => {
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          link: `/api/quotes/${quoteReference}`,
          reference: `XSPQ${quoteReference}`,
          status: 'Validated',
        },
      };

      nock(QUOTES_MOCK_URL)
        .get(`/quotes/${quoteReference}/validate`)
        .reply(200, PAYLOAD_RESPONSE);

      const result = await quoteClient.validateQuote(quoteReference);

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('reopenQuote', () => {
    const quoteReference = 'XSP123456';

    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);

    it('should call reopenQuote method', async () => {
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          link: `/api/quotes/${quoteReference}`,
          reference: `XSPQ${quoteReference}`,
          status: 'In Progress',
        },
      };

      nock(QUOTES_MOCK_URL)
        .get(`/quotes/${quoteReference}/reopen`)
        .reply(200, PAYLOAD_RESPONSE);

      const result = await quoteClient.reopenQuote(quoteReference);

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('createQuote', () => {
    const quoteReference = 'XSP123456';

    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);

    it('should call createQuote method', async () => {
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          link: `/api/quotes/${quoteReference}`,
          reference: `XSPQ${quoteReference}`,
          status: 'In progress',
        },
      };

      nock(QUOTES_MOCK_URL).post('/quotes').reply(200, PAYLOAD_RESPONSE);

      const payload: CreateQuoteRequestType = {
        customer: {
          reference: 'XSP123456',
        },
        items: [
          {
            arrowSpherePriceBandSku:
              'MSCSP_CFQ7TTC0LDPB-0001_FR_EUR_1_720_8640',
            quantity: 2,
            prices: {
              customer: {
                rate: {
                  rateType: 'discount',
                  value: 0.01,
                },
                fixedPrice: 0,
              },
            },
          },
        ],
      };

      const result = await quoteClient.createQuote(payload);

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('publishQuote', () => {
    const quoteReference = 'XSP123456';

    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);

    it('should call publishQuote method', async () => {
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          link: `/api/quotes/${quoteReference}`,
          reference: `XSPQ${quoteReference}`,
          status: 'In progress',
        },
      };

      nock(QUOTES_MOCK_URL)
        .post(`/quotes/${quoteReference}/publish`)
        .reply(200, PAYLOAD_RESPONSE);

      const payload: PublishQuoteRequestType = {
        customer: {
          reference: 'XSP123456',
        },
        items: [
          {
            arrowSpherePriceBandSku:
              'MSCSP_CFQ7TTC0LDPB-0001_FR_EUR_1_720_8640',
            quantity: 2,
            prices: {
              partner: {
                rate: {
                  rateType: 'discount',
                  value: 0.06,
                },
                fixedPrice: 0,
              },
            },
          },
        ],
        startDate: '2021-01-01 10:00:00',
        endDate: '2021-01-31 10:00:00',
        name: 'The quote name',
      };

      const result = await quoteClient.publishQuote(quoteReference, payload);

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('createQuoteComment', () => {
    const quoteReference = 'XSP123456';
    const bodyMessage = 'random test body message';

    const quoteClient = new PublicApiClient()
      .getQuotesClient()
      .setUrl(QUOTES_MOCK_URL);

    it('should call addCommentToQuote method', async () => {
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          body: bodyMessage,
        },
      };

      nock(QUOTES_MOCK_URL)
        .post(`/quotes/${quoteReference}/comments`)
        .reply(200, PAYLOAD_RESPONSE);

      const payload: CreateCommentType = {
        body: bodyMessage,
      };

      const result = await quoteClient.addCommentToQuote(
        quoteReference,
        payload,
      );

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('deleteQuoteComment', () => {
    let axiosClient: sinon.SinonStubbedInstance<Axios>;

    beforeEach(() => {
      axiosClient = sinon.stub(Axios.prototype);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should successfully delete a quote comment', async () => {
      const commentId = '123';
      const expectedResult: AxiosResponse = {
        status: 201,
        data: {
          status: 201,
        },
        statusText: 'success',
        headers: {},
        config: {
          headers: new AxiosHeaders(),
        },
      };

      axiosClient.request.resolves(expectedResult);

      const result = await client.deleteQuoteComment(
        QUOTE_REFERENCE,
        commentId,
      );

      expect(result).to.be.deep.equals(expectedResult.data);
    });
  });
});
