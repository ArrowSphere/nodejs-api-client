import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { AbstractGraphQLClient } from '../../src/abstractGraphQLClient';
import { SecurityScoreGraphQLClient } from '../../src/securityScore';
import {
  GetPartnerDataQuery,
  GetCustomerDataQuery,
  GetCustomerAccountDataQuery,
} from '../../src/securityScore/types/securityScoreGraphQLQueries';
import {
  SecurityScoreQueries,
  SearchBodyFields,
  SearchFilterFields,
  SearchFilterValues,
} from '../../src/securityScore/types/queryArguments';

describe('SecurityScoreGraphQLClient', () => {
  const client = new SecurityScoreGraphQLClient();
  let graphQLClient: SinonStub;

  beforeEach(() => {
    graphQLClient = sinon.stub(AbstractGraphQLClient.prototype, <any>'post');
  });

  afterEach(() => {
    graphQLClient.restore();
  });

  describe('getPartnerData', () => {
    it('makes a graphql POST request on the specified URL calling getPartnerData', async () => {
      const query: GetPartnerDataQuery = {
        [SecurityScoreQueries.GET_PARTNER_DATA]: {
          __args: {
            searchBody: {
              [SearchBodyFields.MARKETPLACE]: [['FR']],
            },
          },
          avgCurrentScore: true,
          period: {
            from: true,
            to: true,
          },
          endCustomersAgg: {
            customers: {
              reference: true,
              progression: true,
              data: {
                date: true,
                accounts: true,
                avgCurrentScore: true,
                failed: true,
                passed: true,
                subscriptionReferences: true,
              },
            },
          },
          issueAgg: {
            issues: {
              name: true,
              data: {
                count: true,
                date: true,
              },
              progression: true,
            },
          },
        },
      };

      const graphqlQuery =
        '{getPartnerData (searchBody: {marketplace: [["FR"]]}) { avgCurrentScore period { from to } endCustomersAgg { customers { reference progression data { date accounts avgCurrentScore failed passed subscriptionReferences } } } issueAgg { issues { name data { count date } progression } } }}';

      const expectedResult = {
        getPartnerData: {
          avgCurrentScore: 6.5,
          period: {
            from: '2023-01',
            to: '2023-02',
          },
          endCustomersAgg: {
            customers: [
              {
                customerRef: 'XSP0',
                progression: null,
                data: [],
              },
            ],
          },
        },
      };

      graphQLClient.resolves(expectedResult);

      expect(await client.getPartnerData(query)).to.be.equals(expectedResult);
      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });
  });

  describe('getCustomerData', () => {
    it('makes a graphql POST request on the specified URL calling getCustomerData', async () => {
      const query: GetCustomerDataQuery = {
        [SecurityScoreQueries.GET_CUSTOMER_DATA]: {
          __args: {
            searchBody: {
              [SearchBodyFields.MARKETPLACE]: [['FR']],
              [SearchBodyFields.FILTERS]: [
                {
                  [SearchFilterFields.NAMES]: [
                    SearchFilterValues.REGISTRATION_CUSTOMER_REFERENCE,
                  ],
                  [SearchFilterFields.VALUES]: [['XSP0']],
                },
              ],
            },
          },
          avgCurrentScore: true,
          period: {
            from: true,
            to: true,
          },
          accountsAgg: {
            accounts: {
              accountRef: true,
              data: {
                date: true,
                avgCurrentScore: true,
                failed: true,
                passed: true,
              },
              progression: true,
            },
          },
        },
      };

      const graphqlQuery =
        '{getCustomerData (searchBody: {marketplace: [["FR"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}]}) { avgCurrentScore period { from to } accountsAgg { accounts { accountRef data { date avgCurrentScore failed passed } progression } } }}';

      const expectedResult = {
        getCustomerData: {
          avgCurrentScore: 6.5,
          period: {
            from: '2023-01',
            to: '2023-02',
          },
          accountsAgg: {
            accounts: [
              {
                accountRef: 'XSP0',
                progression: null,
                data: [],
              },
            ],
          },
        },
      };

      graphQLClient.resolves(expectedResult);

      expect(await client.getCustomerData(query)).to.be.equals(expectedResult);
      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });
  });

  describe('getCustomerAccountData', () => {
    it.skip('makes a graphql POST request on the specified URL calling getCustomerAccountData', async () => {
      const query: GetCustomerAccountDataQuery = {
        [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: {
          __args: {
            searchBody: {
              [SearchBodyFields.MARKETPLACE]: [['FR']],
              [SearchBodyFields.FILTERS]: [
                {
                  [SearchFilterFields.NAMES]: [
                    SearchFilterValues.REGISTRATION_CUSTOMER_REFERENCE,
                  ],
                  [SearchFilterFields.VALUES]: [['XSP0']],
                },
                // {
                //   [SearchFilterFields.NAMES]: [
                //     SearchFilterValues.ACCOUNT_REFERENCE,
                //   ],
                //   [SearchFilterFields.VALUES]: [['arrowsphere']],
                // },
              ],
            },
          },
          avgCurrentScore: true,
          period: {
            from: true,
            to: true,
          },
          standardsAgg: {
            standards: {
              name: true,
              progression: true,
              data: {
                date: true,
                score: true,
                failed: true,
                passed: true,
              },
            },
          },
          severityAgg: {
            severities: {
              name: true,
              progression: true,
              data: {
                count: true,
                date: true,
              },
            },
          },
        },
      };

      const graphqlQuery =
        '{getCustomerAccountData (searchBody: {marketplace: [["FR"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}]}) { avgCurrentScore period { from to } standardsAgg { standards { name progression data { date score failed } } } severityAgg { severities { name progression data { count date } } } }}';

      const expectedResult = {
        getCustomerAccountData: {
          avgCurrentScore: 6.5,
          period: {
            from: '2023-01',
            to: '2023-02',
          },
          standardsAgg: {
            standards: [
              {
                name: 'arrowsphere',
                progression: null,
                data: [],
              },
            ],
          },
        },
      };

      graphQLClient.resolves(expectedResult);

      expect(await client.getCustomerAccountData(query)).to.be.equals(
        expectedResult,
      );

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });
  });
});
