import { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import { AbstractGraphQLClient } from '../../src/abstractGraphQLClient';
import {
  GetPartnerDataType,
  GetCustomerDataType,
  GetCustomerAccountDataType,
  SecurityScoreGraphQLClient,
  GetPartnerDataQuery,
  GetCustomerDataQuery,
  GetCustomerAccountDataQuery,
  SecurityScoreQueries,
  SearchBodyFields,
  SearchFilterFields,
  SearchFilterValues,
} from '../../src/securityScore';
import {
  Hooks,
  HttpExceptionHandler,
  HandleHttpExceptionOutput,
} from '../../src/exception/exception-handlers';
import { PublicApiClientException } from '../../src/exception';

describe('SecurityScoreGraphQLClient', () => {
  const client = new SecurityScoreGraphQLClient();
  let graphQLClient: SinonStub;

  beforeEach(() => {
    graphQLClient = sinon.stub(AbstractGraphQLClient.prototype, <any>'post');
  });

  afterEach(() => {
    graphQLClient.restore();
  });

  describe('find', () => {
    it('makes a graphql POST request on the specified URL and handle exception', async () => {
      const query = '{getPartnerData { avgCurrentScore}}';

      graphQLClient.rejects(new Error('unexpected error'));

      const result: GetPartnerDataType | null = await client.find<GetPartnerDataType>(
        query,
      );

      sinon.assert.calledOnceWithExactly(graphQLClient, query);

      expect(result).to.be.null;
    });

    it('makes a graphql POST request on the specified URL twice', async () => {
      const query = '{getPartnerData { avgCurrentScore}}';

      const expectedResult = { avgCurrentScore: 50.2 };

      const exceptionHandler: HttpExceptionHandler = {
        handle(
          error: PublicApiClientException,
          hooks: Hooks,
        ): Promise<HandleHttpExceptionOutput> {
          return Promise.resolve({
            mustRetry: true,
            error,
            hooks,
          });
        },

        getHandledHttpStatuses(): number[] {
          return [403];
        },
      };

      client.registerHttpExceptionHandler(exceptionHandler);

      graphQLClient
        .onCall(0)
        .rejects({ message: 'unexpected error', response: { status: 403 } });

      graphQLClient.onCall(1).resolves(expectedResult);

      const result: GetPartnerDataType | null = await client.find<GetPartnerDataType>(
        query,
      );

      sinon.assert.calledTwice(graphQLClient);

      expect(result).to.be.equals(expectedResult);
    });
  });

  describe('getPartnerData', () => {
    it('makes a graphql POST request on the specified URL getPartnerData', async () => {
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

      const result: GetPartnerDataType | null = await client.getPartnerData(
        query,
      );

      expect(result?.avgCurrentScore).to.be.equals(
        expectedResult.getPartnerData.avgCurrentScore,
      );

      expect(result?.period).to.be.equals(expectedResult.getPartnerData.period);
      expect(result?.endCustomersAgg).to.be.equals(
        expectedResult.getPartnerData.endCustomersAgg,
      );

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });

    it('makes a graphql POST request on the specified URL getPartnerData must return null', async () => {
      const query: GetPartnerDataQuery = {
        [SecurityScoreQueries.GET_PARTNER_DATA]: {
          __args: {
            searchBody: {
              [SearchBodyFields.MARKETPLACE]: [['FR']],
            },
          },
          avgCurrentScore: true,
        },
      };

      const graphqlQuery =
        '{getPartnerData (searchBody: {marketplace: [["FR"]]}) { avgCurrentScore }}';

      graphQLClient.resolves(null);

      const result: GetPartnerDataType | null = await client.getPartnerData(
        query,
      );

      expect(result).to.be.null;

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });
  });

  describe('getCustomerData', () => {
    it('makes a graphql POST request on the specified URL getCustomerData', async () => {
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

      const result: GetCustomerDataType | null = await client.getCustomerData(
        query,
      );

      expect(result?.avgCurrentScore).to.be.equals(
        expectedResult.getCustomerData.avgCurrentScore,
      );

      expect(result?.period).to.be.equals(
        expectedResult.getCustomerData.period,
      );
      expect(result?.accountsAgg).to.be.equals(
        expectedResult.getCustomerData.accountsAgg,
      );

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });

    it('makes a graphql POST request on the specified URL getCustomerData must return null', async () => {
      const query: GetCustomerDataQuery = {
        [SecurityScoreQueries.GET_CUSTOMER_DATA]: {
          __args: {
            searchBody: {
              [SearchBodyFields.MARKETPLACE]: [['FR']],
            },
          },
          avgCurrentScore: true,
        },
      };

      const graphqlQuery =
        '{getCustomerData (searchBody: {marketplace: [["FR"]]}) { avgCurrentScore }}';

      graphQLClient.resolves(null);

      const result: GetCustomerDataType | null = await client.getCustomerData(
        query,
      );

      expect(result).to.be.null;

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });
  });

  describe('getCustomerAccountData', () => {
    it('makes a graphql POST request on the specified URL getCustomerAccountData', async () => {
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
        '{getCustomerAccountData (searchBody: {marketplace: [["FR"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}]}) { avgCurrentScore period { from to } standardsAgg { standards { name progression data { date score failed passed } } } severityAgg { severities { name progression data { count date } } } }}';

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

      const result: GetCustomerAccountDataType | null = await client.getCustomerAccountData(
        query,
      );

      expect(result?.avgCurrentScore).to.be.equals(
        expectedResult.getCustomerAccountData.avgCurrentScore,
      );

      expect(result?.period).to.be.equals(
        expectedResult.getCustomerAccountData.period,
      );
      expect(result?.standardsAgg).to.be.equals(
        expectedResult.getCustomerAccountData.standardsAgg,
      );

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });

    it('makes a graphql POST request on the specified URL getCustomerAccountData must return null', async () => {
      const query: GetCustomerAccountDataQuery = {
        [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: {
          __args: {
            searchBody: {
              [SearchBodyFields.MARKETPLACE]: [['FR']],
            },
          },
          avgCurrentScore: true,
        },
      };

      const graphqlQuery =
        '{getCustomerAccountData (searchBody: {marketplace: [["FR"]]}) { avgCurrentScore }}';

      graphQLClient.resolves(null);

      const result: GetCustomerAccountDataType | null = await client.getCustomerAccountData(
        query,
      );

      expect(result).to.be.null;

      sinon.assert.calledOnceWithExactly(graphQLClient, graphqlQuery);
    });
  });
});
