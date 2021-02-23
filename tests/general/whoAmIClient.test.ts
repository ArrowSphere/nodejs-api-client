// Test tools
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import nock from 'nock'

// Sources
import { PublicApiClient } from '../../src'
import { WhoAmI, WhoAmIResponseFields } from '../../src/general'

chai.use(sinonChai)

const WHOAMI_MOCK_URL = 'https://whoami.localhost'
const WHOAMI_ENDPOINT = '/whoami'

describe('WhoAmIClient', () => {
  describe('getWhoamiRaw', () => {
    const expectedData = { myData: true }

    it('calls /whoami with a get verb', async () => {
      nock(WHOAMI_MOCK_URL).get(WHOAMI_ENDPOINT).reply(200, expectedData)
      const publicClient = new PublicApiClient().setUrl(WHOAMI_MOCK_URL)
      const client = publicClient.getWhoamiClient()
      await client.getWhoamiRaw()
      expect(nock.isDone())
    })

    it('returns the raw response', async () => {
      nock(WHOAMI_MOCK_URL).get(WHOAMI_ENDPOINT).reply(200, expectedData)
      const publicClient = new PublicApiClient().setUrl(WHOAMI_MOCK_URL)
      const client = publicClient.getWhoamiClient()
      const result = await client.getWhoamiRaw()
      expect(result).to.eqls(expectedData)
    })
  })
  describe('getWhoami', () => {
    const expectedData = {
      [WhoAmIResponseFields.COLUMN_COMPANY_NAME]: 'companyName',
      [WhoAmIResponseFields.COLUMN_ADDRESS_LINE_1]: 'addressLine1',
      [WhoAmIResponseFields.COLUMN_ADDRESS_LINE_2]: 'addressLine2',
      [WhoAmIResponseFields.COLUMN_ZIP]: 'zip',
      [WhoAmIResponseFields.COLUMN_CITY]: 'city',
      [WhoAmIResponseFields.COLUMN_COUNTRY_CODE]: 'countryCode',
      [WhoAmIResponseFields.COLUMN_STATE]: 'state',
      [WhoAmIResponseFields.COLUMN_RECEPTION_PHONE]: 'receptionPhone',
      [WhoAmIResponseFields.COLUMN_WEBSITE_URL]: 'websiteUrl',
      [WhoAmIResponseFields.COLUMN_EMAIL_CONTACT]: 'emailContact',
      [WhoAmIResponseFields.COLUMN_HEADCOUNT]: 'headcount',
      [WhoAmIResponseFields.COLUMN_TAX_NUMBER]: 'taxNumber',
      [WhoAmIResponseFields.COLUMN_REFERENCE]: 'reference',
      [WhoAmIResponseFields.COLUMN_REF]: 'ref',
      [WhoAmIResponseFields.COLUMN_BILLING_ID]: 'billingId',
      [WhoAmIResponseFields.COLUMN_INTERNAL_REFERENCE]: 'internalReference',
    }

    it('calls whoAmIRaw', async () => {
      nock(WHOAMI_MOCK_URL)
        .get(WHOAMI_ENDPOINT)
        .reply(200, { data: expectedData })
      const publicClient = new PublicApiClient().setUrl(WHOAMI_MOCK_URL)
      const client = publicClient.getWhoamiClient()
      const spy = sinon.spy(client, 'getWhoamiRaw')
      await client.getWhoami()
      expect(spy).to.have.been.called
      spy.restore()
    })

    it('returns the formatted entity toJSON result', async () => {
      nock(WHOAMI_MOCK_URL)
        .get(WHOAMI_ENDPOINT)
        .reply(200, { data: expectedData })
      const publicClient = new PublicApiClient().setUrl(WHOAMI_MOCK_URL)
      const client = publicClient.getWhoamiClient()
      const result = await client.getWhoami()
      expect(result).to.eql(new WhoAmI(expectedData).toJSON())
    })
  })
})
