import nock from 'nock';
import { expect } from 'chai';
import { CatalogGraphQLClient } from '../../src';

const CATALOG_GRAPHQL_URL = 'https://graphql.localhost';
const CATALOG_POST_URL = '/catalog/graphql';

describe('AbstractGraphQLClient', () => {
  describe('post', () => {
    const client = new CatalogGraphQLClient().setUrl(CATALOG_GRAPHQL_URL);
    const query = '';
    const bodyResponse = {
      data: {
        getProduct: {
          name: 'name',
        },
      },
    };

    it('makes a graphql POST request on the specified URL', async () => {
      nock(CATALOG_GRAPHQL_URL).post(CATALOG_POST_URL).reply(200, bodyResponse);

      await client.find(query);
      expect(nock.isDone()).to.be.true;
    });
    it('returns the endpoint response data', async () => {
      nock(CATALOG_GRAPHQL_URL).post(CATALOG_POST_URL).reply(200, bodyResponse);

      const response = await client.find(query);
      expect(response).to.eql(bodyResponse.data);
    });
    it('prefixes with admin if the endpoint has the option and headers options', async () => {
      const client = new CatalogGraphQLClient()
        .setUrl(CATALOG_GRAPHQL_URL)
        .setOptions({ isAdmin: true })
        .setOptionsHeader({ authorization: 'test' });

      nock(CATALOG_GRAPHQL_URL + '/admin')
        .post(CATALOG_POST_URL)
        .reply(200, bodyResponse);

      const response = await client.find(query);
      expect(response).to.eql(bodyResponse.data);
    });
  });
});
