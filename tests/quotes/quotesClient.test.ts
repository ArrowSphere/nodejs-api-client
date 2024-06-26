import { PublicApiClient } from '../../src';
import { expect } from 'chai';
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
      const PAYLOAD_RESPONSE = {
        status: 200,
        data: {
          message:
            'Your reference as been sent successfully to the vendor IBM.',
        },
      };

      nock(QUOTES_MOCK_URL)
        .post('/quotes/request/ibm')
        .reply(200, PAYLOAD_RESPONSE);

      const result = await quoteClient.requestQuoteForVendor('ibm', {
        reference: 'XSP123456',
      });

      expect(nock.isDone()).to.be.true;
      expect(result.data.toJSON()).to.be.eqls(PAYLOAD_RESPONSE.data);
    });
  });
});
