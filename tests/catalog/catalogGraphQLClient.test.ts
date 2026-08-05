import nock from 'nock';
import { expect } from 'chai';
import { CatalogGraphQLClient, CatalogQuery, ProductType } from '../../src';

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

  describe('ProductType bundleBaseProducts field', () => {
    it('should allow a product to contain bundleBaseProducts as an array of ProductType', async () => {
      const client = new CatalogGraphQLClient()
        .setUrl(CATALOG_GRAPHQL_URL)
        .setHeaders({ authorization: 'test' });

      const baseProduct: ProductType = {
        name: 'Base Product',
        marketplace: 'FR',
      };

      const bundleProduct: ProductType = {
        name: 'Bundle Product',
        marketplace: 'FR',
        bundleBaseProducts: [baseProduct],
      };

      const products: ProductType[] = [bundleProduct];
      const bodyResponse = {
        data: {
          getProducts: products,
        },
      };

      nock(CATALOG_GRAPHQL_URL).post(CATALOG_POST_URL).reply(200, bodyResponse);

      const query: CatalogQuery = {
        getProducts: {
          __args: {
            paginate: { page: 1, perPage: 12 },
            searchBody: { ignoreCatalogPlan: true },
          },
          products: { name: true, bundleBaseProducts: { name: true } },
        },
      };

      const response = await client.findByQuery(query);
      expect(response).to.eql(bodyResponse.data);
      expect(
        (response as typeof bodyResponse.data).getProducts[0]
          .bundleBaseProducts,
      ).to.eql([baseProduct]);
    });
  });

  describe('PriceBandType offer field', () => {
    it('should allow a priceBand to contain an offer of OfferLightType', async () => {
      const client = new CatalogGraphQLClient()
        .setUrl(CATALOG_GRAPHQL_URL)
        .setHeaders({ authorization: 'test' });

      const products: ProductType[] = [
        {
          name: 'Office 365',
          marketplace: 'FR',
          defaultPriceBand: {
            name: 'default',
            isBuyable: true,
            isEnabled: true,
            offer: {
              identifiers: {
                arrowsphere: { sku: 'XSP001' },
              },
              name: 'Office 365 Business',
              classification: 'SAAS',
              arrowCategories: ['Productivity'],
              arrowSubCategories: ['Office'],
              lastUpdate: '2024-01-01T00:00:00Z',
              isAddon: false,
              hasAddons: true,
              environmentAvailability: 'PUBLIC',
              isEnabled: true,
              isTrial: false,
            },
          },
        },
      ];

      const bodyResponse = {
        data: {
          getProducts: products,
        },
      };

      nock(CATALOG_GRAPHQL_URL).post(CATALOG_POST_URL).reply(200, bodyResponse);

      const query: CatalogQuery = {
        getProducts: {
          __args: {
            paginate: { page: 1, perPage: 12 },
            searchBody: { ignoreCatalogPlan: true },
          },
          products: {
            name: true,
            defaultPriceBand: {
              name: true,
              offer: {
                identifiers: { arrowsphere: { sku: true } },
                name: true,
                classification: true,
                arrowCategories: true,
                arrowSubCategories: true,
                lastUpdate: true,
                isAddon: true,
                hasAddons: true,
                environmentAvailability: true,
                isEnabled: true,
                isTrial: true,
              },
            },
          },
        },
      };

      const response = await client.findByQuery(query);
      expect(response).to.eql(bodyResponse.data);
      expect(
        (response as typeof bodyResponse.data).getProducts[0].defaultPriceBand
          ?.offer,
      ).to.eql(products[0].defaultPriceBand?.offer);
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
            ignoreCatalogPlan: true,
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

    it('makes a graphql POST request on the specified URL calling findByQuery', async () => {
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
          marketplace: 'FR',
          defaultPriceBand: {
            name: 'default',
            isBuyable: true,
            isEnabled: true,
          },
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
