import { expect } from 'chai'
import { PublicApiClient } from '../src'

describe('PublicApiClient', () => {
  describe('getWhoAmIClient', () => {
    it('returns a WhoAmIClient', function () {
      const client = new PublicApiClient()
      expect(client.getWhoamiClient).to.exist
      const whoAmIClient = client.getWhoamiClient()
      expect(whoAmIClient).to.exist
    })
  })
})
