import { CatalogGraphQLClient, PublicGraphQLClient } from '../src';
import { expect } from 'chai';

describe('publicGraphQLClient', () => {
  describe('getCatalogGraphQLClient', () => {
    it('returns a PublicGraphQLClient', () => {
      const client = new PublicGraphQLClient();
      expect(client.getCatalogGraphQLClient()).to.exist;
      const catalogGraphQLClient = client.getCatalogGraphQLClient();
      expect(catalogGraphQLClient).to.be.instanceOf(CatalogGraphQLClient);
    });
  });
});
