// Test tools
import axios from 'axios'
import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
import nock from 'nock'

// Sources
import { ParameterKeys } from '../src'
import { NotFoundException, PublicApiClientException } from '../src/exception'
import {
  axiosExpectInterceptor,
  ExpectFunctionParameters,
  MOCK_URL,
  TEST_ENDPOINT,
  TestClient,
} from './TestClient'

chai.use(chaiAsPromised)

describe('AbstractClient', () => {
  describe('constructor', () => {
    beforeEach(() => {
      nock(MOCK_URL).get('/').reply(200)
    })

    it('uses the passed axios instance', (done) => {
      const axiosClient = axios.create()
      axiosClient.interceptors.request.use((value) => {
        done()
        return value
      })
      const client = new TestClient(axiosClient)
      client.get()
    })

    it('creates a new axios client', (done) => {
      const client = new TestClient()
      client
        .get()
        .then(() => done())
        .catch(console.error)
    })
  })

  describe('get', () => {
    const expectedData = { result: true }
    const client = new TestClient()

    beforeEach(() => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200, expectedData)
    })

    it('makes a HTTP GET request on the specified URL', async () => {
      await client.getTest()
      expect(nock.isDone()).to.be.true
    })

    it('returns the endpoint response data', async () => {
      const result = await client.getTest()
      expect(nock.isDone()).to.be.true
      expect(result).to.eql(expectedData)
    })
  })

  describe('post', () => {
    const expectedData = { result: true }
    const client = new TestClient()

    beforeEach(() => {
      nock(MOCK_URL).post(TEST_ENDPOINT).reply(200, expectedData)
    })

    it('makes a HTTP POST request on the specified URL', async () => {
      await client.postTest()
      expect(nock.isDone()).to.be.true
    })

    it('returns the endpoint response data', async () => {
      const result = await client.postTest()
      expect(nock.isDone()).to.be.true
      expect(result).to.eql(expectedData)
    })
  })

  describe('getResponse', () => {
    it('throws a NotFoundException if the status code is 404', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(404)
      const client = new TestClient()

      try {
        await client.getTest()
      } catch (error) {
        expect(error).to.be.instanceOf(NotFoundException)
      }
    })

    it('throws a PublicApiClientException if the status code is between 400 and 599', async () => {
      const nockInterceptor = nock(MOCK_URL).get(TEST_ENDPOINT)
      const client = new TestClient()
      let asserted = 0
      let i

      for (i = 400; i <= 599; i++) {
        if (i === 404) {
          continue
        }
        nockInterceptor.reply(i)
        try {
          await client.getTest()
        } catch (error) {
          expect(error).to.be.instanceOf(PublicApiClientException)
        }
        asserted++
      }

      expect(asserted).to.equal(i - 400 - 1)
      expect(nock.isDone()).to.be.true
    })

    it('returns the response data', async () => {
      const expectedData = { result: true }
      const client = new TestClient()

      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200, expectedData)

      expect(await client.getTest()).to.eqls(expectedData)
    })
  })

  describe('prepareHeaders', () => {
    it('adds the API key parameter in the headers', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200)

      const apiKey = 'apiKey'
      const axiosClient = axios.create()
      const client = new TestClient(axiosClient).setApiKey(apiKey)

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(({ config }: ExpectFunctionParameters) => {
          expect(config?.headers[ParameterKeys.API_KEY]).to.equal(apiKey)
        }),
      )

      await client.getTest()
    })
  })

  describe('generatePagination', () => {
    it('does not set pagination parameters if page is 1 and per page is falsy', async () => {
      nock(MOCK_URL).get(TEST_ENDPOINT).reply(200)

      const apiKey = 'apiKey'
      const axiosClient = axios.create()
      const client = new TestClient(axiosClient).setApiKey(apiKey)

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PAGE)).not.to.exist
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).not.to.exist
          },
        ),
      )

      client.setPage(1)
      client.setPerPage(0)
      await client.getTest()
    })

    it('adds the page and per page parameters if the page value is above 1 and per page is above 0', async () => {
      nock(MOCK_URL)
        .get(new RegExp(`${TEST_ENDPOINT}.+`))
        .reply(200)

      const apiKey = 'apiKey'
      const axiosClient = axios.create()
      const client = new TestClient(axiosClient).setApiKey(apiKey)
      const perPage = 10
      const page = 2

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PAGE)).to.equal(
              page.toString(),
            )
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).to.equal(
              perPage.toString(),
            )
          },
        ),
      )

      client.setPerPage(perPage)
      client.setPage(page)
      await client.getTest()
    })

    it('does not set pagination parameters if the page value is not above 1 and per page not above 0', async () => {
      nock(MOCK_URL)
        .get(new RegExp(`${TEST_ENDPOINT}.*`))
        .reply(200)

      const apiKey = 'apiKey'
      const axiosClient = axios.create()
      const client = new TestClient(axiosClient).setApiKey(apiKey)
      const perPage = -1
      const page = 1

      axiosClient.interceptors.request.use(
        axiosExpectInterceptor(
          ({ queryParameters }: ExpectFunctionParameters) => {
            expect(queryParameters?.get(ParameterKeys.PAGE)).not.to.exist
            expect(queryParameters?.get(ParameterKeys.PER_PAGE)).not.to.exist
          },
        ),
      )

      client.setPerPage(perPage)
      client.setPage(page)
      await client.getTest()
    })
  })
})
