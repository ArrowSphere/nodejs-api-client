import { expect } from 'chai';
import { PublicApiClient } from '../src';
import { LicensesClient } from '../src/licenses/';
import { WhoAmIClient } from '../src/general';

describe('PublicApiClient', () => {
  describe('getWhoAmIClient', () => {
    it('returns a WhoAmIClient', () => {
      const client = new PublicApiClient();
      expect(client.getWhoamiClient).to.exist;
      const whoAmIClient = client.getWhoamiClient();
      expect(whoAmIClient).to.be.instanceOf(WhoAmIClient);
    });
  });

  describe('getLicensesClient', () => {
    it('returns a LicensesClient', () => {
      const client = new PublicApiClient();
      expect(client.getWhoamiClient).to.exist;
      const licensesClient = client.getLicensesClient();
      expect(licensesClient).to.be.instanceOf(LicensesClient);
    });
  });
});
