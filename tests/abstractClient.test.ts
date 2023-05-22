// Test tools
// import axios from 'axios';
import chai, { expect } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import nock from 'nock';

// Sources
import {
  AbstractRestfulClient,
  ConfigurationsClient,
  NotFoundException,
  ParameterKeys,
  PublicApiClientException,
} from '../src';
import {
  axiosExpectInterceptor,
  ExpectFunctionParameters,
  MOCK_URL,
  TEST_ENDPOINT,
  TestClient,
} from './TestClient';
import axios from 'axios';
import { constants } from 'http2';

chai.use(chaiAsPromised);
let client: TestClient;
const apiKey = 'apiKey';

describe('AbstractClient', () => {
  const expectedData = { result: true };
  beforeEach(() => {
    client = new TestClient().setUrl(MOCK_URL).setApiKey(apiKey);
  });

  describe('constructor', () => {
    nock(MOCK_URL).get('/').reply(200);
    it('creates a new axios client', (done) => {
      const client = new TestClient().setUrl(MOCK_URL);
      client
        .get()
        .then(() => done())
        .catch(console.error);
    });

    it('creates a new instance of TestClient with object parameters', () => {
      const configurations: ConfigurationsClient = {
        [ParameterKeys.URL]: MOCK_URL,
        [ParameterKeys.API_KEY]: 'api_key',
        [ParameterKeys.HEADERS]: {
          headers: 'information',
        },
      };
      const client = new TestClient(configurations);
      expect(client).to.be.an.instanceof(AbstractRestfulClient);
      expect(client['url']).to.be.equal(configurations[ParameterKeys.URL]);
      expect(client['apiKey']).to.be.equal(
        configurations[ParameterKeys.API_KEY],
      );
      expect(client['headers']).to.be.equal(
        configurations[ParameterKeys.HEADERS],
      );
    });
  });

  describe('get', () => {
    it('makes a HTTP GET request on the specified URL', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200, expectedData);
      await client.getTest();
      expect(nock.isDone()).to.be.true;
    });

    it('returns the endpoint response data', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200, expectedData);
      const result = await client.getTest();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });

    it('prefixes with admin if the endpoint has the option', async () => {
      nock(MOCK_URL)
        .get('/admin' + TEST_ENDPOINT)
        .reply(200, expectedData);
      const result = await client.getTestAdmin();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });
  });

  describe('post', () => {
    it('makes a HTTP POST request on the specified URL', async () => {
      nock(MOCK_URL).post(TEST_ENDPOINT).reply(200, expectedData);
      await client.postTest();
      expect(nock.isDone()).to.be.true;
    });

    it('returns the endpoint response data', async () => {
      nock(MOCK_URL).post(TEST_ENDPOINT).reply(200, expectedData);
      const result = await client.postTest();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });

    it('prefixes with admin if the endpoint has the option', async () => {
      nock(MOCK_URL + '/admin')
        .post(TEST_ENDPOINT)
        .reply(200, expectedData);
      const result = await client.postTestAdmin();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });
  });

  describe('put', () => {
    it('makes a HTTP PUT request on the specified URL', async () => {
      nock(MOCK_URL).put(TEST_ENDPOINT).reply(204);
      await client.putTest();
      expect(nock.isDone()).to.be.true;
    });

    it('prefixes with admin if the endpoint has the option', async () => {
      nock(MOCK_URL + '/admin')
        .put(TEST_ENDPOINT)
        .reply(204);
      await client.putTestAdmin();
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('patch', () => {
    it('makes a HTTP PUT request on the specified URL', async () => {
      nock(MOCK_URL)
        .patch(TEST_ENDPOINT)
        .reply(constants.HTTP_STATUS_OK, expectedData);
      const result = await client.patchTest();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });

    it('prefixes with admin if the endpoint has the option', async () => {
      nock(MOCK_URL + '/admin')
        .patch(TEST_ENDPOINT)
        .reply(constants.HTTP_STATUS_OK, expectedData);
      const result = await client.patchTestAdmin();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });
  });

  describe('delete', () => {
    it('makes a HTTP delete request on the specified URL', async () => {
      nock(MOCK_URL)
        .delete(TEST_ENDPOINT)
        .reply(constants.HTTP_STATUS_OK, expectedData);
      const result = await client.deleteTest();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });

    it('prefixes with admin if the endpoint has the option', async () => {
      nock(MOCK_URL + '/admin')
        .delete(TEST_ENDPOINT)
        .reply(constants.HTTP_STATUS_OK, expectedData);
      const result = await client.deleteTestAdmin();
      expect(nock.isDone()).to.be.true;
      expect(result).to.eql(expectedData);
    });
  });

  describe('getResponse', () => {
    it('throws a NotFoundException if the status code is 404', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(404);

      try {
        await client.getTest();
      } catch (error) {
        expect(error).to.be.instanceOf(NotFoundException);
      }
    });

    it('throws a PublicApiClientException if the status code is between 400 and 599', async () => {
      const nockInterceptor = nock(MOCK_URL).get(TEST_ENDPOINT);
      let asserted = 0;
      let i;

      for (i = 400; i <= 599; i++) {
        if (i === 404) {
          continue;
        }
        nockInterceptor.reply(i);
        try {
          await client.getTest();
        } catch (error) {
          expect(error).to.be.instanceOf(PublicApiClientException);
        }
        asserted++;
      }

      expect(asserted).to.equal(i - 400 - 1);
      expect(nock.isDone()).to.be.true;
    });

    it('returns the response data', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200, expectedData);

      expect(await client.getTest()).to.eqls(expectedData);
    });
  });

  describe('prepareHeaders', () => {
    it('adds the API key parameter in the headers', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200);
      const axiosClient = axios.create();

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(({ config }: ExpectFunctionParameters) => {
          expect(config?.headers?.[ParameterKeys.API_KEY]).to.equal(apiKey);
        }),
      );

      await client.getTest();
    });
  });

  describe('generatePagination', () => {
    it('does not set pagination parameters if page is 1 and per page is falsy', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200);

      const axiosClient = axios.create();

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PAGE)).not.to.exist;
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).not.to.exist;
          },
        ),
      );

      client.setPage(1);
      client.setPerPage(0);
      await client.getTest();
    });

    it('adds the page and per page parameters if the page value is above 1 and per page is above 0', async () => {
      nock(MOCK_URL)
        .get(new RegExp(`${TEST_ENDPOINT}.+`))
        .reply(200);

      const axiosClient = axios.create();
      const perPage = 10;
      const page = 2;

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PAGE)).to.equal(
              page.toString(),
            );
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).to.equal(
              perPage.toString(),
            );
          },
        ),
      );

      client.setPerPage(perPage);
      client.setPage(page);
      await client.getTest();
    });

    it('does not set pagination parameters if the page value is not above 1 and per page not above 0', async () => {
      nock(MOCK_URL)
        .get(new RegExp(`${TEST_ENDPOINT}.*`))
        .reply(200);

      const axiosClient = axios.create();
      const perPage = -1;
      const page = 1;

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PAGE)).not.to.exist;
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).not.to.exist;
          },
        ),
      );

      client.setPerPage(perPage);
      client.setPage(page);
      await client.getTest();
    });

    it('uses camel case pagination if client specifies it', async () => {
      nock(MOCK_URL)
        .get(new RegExp(`${TEST_ENDPOINT}.*`))
        .reply(200);

      const axiosClient = axios.create();
      const perPage = 25;

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PER_PAGE_CAMEL)).to.exist;
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).not.to.exist;
          },
        ),
      );

      client.setPerPage(perPage);
      await client.getTestCamel();
    });
  });
});
