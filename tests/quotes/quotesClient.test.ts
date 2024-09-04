import { expect } from 'chai';
import {
  CreateQuoteRequestType,
  PublicApiClient,
  PublishQuoteRequestType,
} from '../../src';
import { Axios, AxiosResponse } from 'axios';
import sinon from 'sinon';
import nock from 'nock';

const QUOTES_MOCK_URL = 'https://quotes.localhost';
const QUOTE_REFERENCE = 'XSP999';

describe('QuotesClient', () => {
  const client = new PublicApiClient()
    .getQuotesClient()
    .setUrl(QUOTES_MOCK_URL);

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
        config: {},
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
        .get(`/quotes/request/${quoteReference}/validate`)
        .reply(200, PAYLOAD_RESPONSE);

      const result = await quoteClient.validateQuote(quoteReference);

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });

  describe('createQuote', () => {
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
                value: 0,
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
        .post(`/quotes/request/${quoteReference}/publish`)
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
                value: 0,
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
});
