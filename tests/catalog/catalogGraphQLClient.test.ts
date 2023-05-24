import nock from 'nock';
import { expect } from 'chai';
import { CatalogGraphQLClient, ProductType } from '../../src';
import { CatalogQuery } from '../../src/catalog/types/catalogGraphQLQueries';

const CATALOG_GRAPHQL_URL = 'https://graphql.localhost';
const CATALOG_POST_URL = '/catalog/graphql';

describe('CatalogGraphQLClient', () => {
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

    it('makes a graphql POST request on the specified URL calling find', async () => {
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
        .setHeaders({ authorization: 'test' });

      nock(CATALOG_GRAPHQL_URL + '/admin')
        .post(CATALOG_POST_URL)
        .reply(200, bodyResponse);

      const response = await client.find(query);
      expect(response).to.eql(bodyResponse.data);
    });
  });

  describe('should call http client using findByQuery', () => {
    const client = new CatalogGraphQLClient().setUrl(CATALOG_GRAPHQL_URL);
    const preparedQuery: CatalogQuery = {
      getProducts: {
        products: {
          name: true,
        },
        __args: {
          paginate: {
            page: 1,
            perPage: 12,
          },
          searchBody: {
            sort: {
              name: 'test',
            },
          },
        },
      },
    };
    const bodyResponse = {
      data: {
        getProduct: {
          name: 'name',
        },
      },
    };

    it.skip('makes a graphql POST request on the specified URL calling findByQuery', async () => {
      nock(CATALOG_GRAPHQL_URL).post(CATALOG_POST_URL).reply(200, bodyResponse);

      await client.findByQuery(preparedQuery);
      expect(nock.isDone()).to.be.true;
    });

    it('should return response corresponding to query', async () => {
      const client = new CatalogGraphQLClient()
        .setUrl(CATALOG_GRAPHQL_URL)
        .setHeaders({ authorization: 'test' });

      const products: ProductType[] = [
        {
          name: 'Office 365',
        },
      ];
      const bodyResponse = {
        data: {
          getProducts: products,
        },
      };

      nock(CATALOG_GRAPHQL_URL).post(CATALOG_POST_URL).reply(200, bodyResponse);

      const response = await client.findByQuery(preparedQuery);
      expect(response).to.eql(bodyResponse.data);
    });
  });
});
