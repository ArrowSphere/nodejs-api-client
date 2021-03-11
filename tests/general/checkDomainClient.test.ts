// Test tools
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import nock from 'nock'

// Sources
import { PublicApiClient } from '../../src'

chai.use(sinonChai)

const CHECKDOMAIN_MOCK_URL = 'https://checkdomain.localhost'
const CHECKDOMAIN_ENDPOINT = /\/vendors\/\w+\/checkDomain\/\w+/

describe('CheckDomainClient', () => {
  describe('checkDomainrawRaw', () => {
    const expectedData = { myData: true }

    it('calls /vendors/:vendorName/checkDomain/:domainName', async () => {
      nock(CHECKDOMAIN_MOCK_URL)
        .get(CHECKDOMAIN_ENDPOINT)
        .reply(200, expectedData)
      const publicClient = new PublicApiClient().setUrl(CHECKDOMAIN_MOCK_URL)
      const client = publicClient.getCheckDomainClient()
      await client.checkDomainRaw('microsoft', 'office')
      expect(nock.isDone())
    })

    it('returns the raw response', async () => {
      nock(CHECKDOMAIN_MOCK_URL)
        .get(CHECKDOMAIN_ENDPOINT)
        .reply(200, expectedData)
      const publicClient = new PublicApiClient().setUrl(CHECKDOMAIN_MOCK_URL)
      const client = publicClient.getCheckDomainClient()
      const result = await client.checkDomainRaw('microsoft', 'office')
      expect(result).to.eqls(expectedData)
    })
  })
  describe('checkDomain', () => {
    const expectedData = {
      isDomainAvailable: true,
    }

    it('calls checkDomainRaw', async () => {
      nock(CHECKDOMAIN_MOCK_URL)
        .get(CHECKDOMAIN_ENDPOINT)
        .reply(200, { data: expectedData })
      const publicClient = new PublicApiClient().setUrl(CHECKDOMAIN_MOCK_URL)
      const client = publicClient.getCheckDomainClient()
      const spy = sinon.spy(client, 'checkDomainRaw')
      await client.checkDomain('microsoft', 'office')
      expect(spy).to.have.been.called
      spy.restore()
    })

    it('returns the isDomainAvailable data value', async () => {
      nock(CHECKDOMAIN_MOCK_URL)
        .get(CHECKDOMAIN_ENDPOINT)
        .reply(200, { data: expectedData })
      const publicClient = new PublicApiClient().setUrl(CHECKDOMAIN_MOCK_URL)
      const client = publicClient.getCheckDomainClient()
      const result = await client.checkDomain('microsoft', 'office')
      expect(result).to.eql(expectedData.isDomainAvailable)
    })
  })
})
