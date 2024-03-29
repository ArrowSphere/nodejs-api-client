import { expect } from 'chai';
import sinon from 'sinon';
import {
  GetPartnerDataType,
  GetCustomerDataType,
  GetCustomerAccountDataType,
  SecurityScoreGraphQLClient,
  GetAdminDataType,
} from '../../src/securityScore';
import {
  Hooks,
  HttpExceptionHandler,
  HandleHttpExceptionOutput,
} from '../../src/exception/exception-handlers';
import { PublicApiClientException } from '../../src/exception';
import * as SecurityScoreQueryMock from './mocks/securityScoreQueries.mocks';
import { GraphQLClient } from 'graphql-request';
import { SECURITY_MOCK_URL } from './mocks/securityScoreQueries.mocks';

describe('SecurityScoreGraphQLClient', () => {
  const client = new SecurityScoreGraphQLClient().setUrl(SECURITY_MOCK_URL);
  let graphQLClient: sinon.SinonStubbedInstance<GraphQLClient>;

  beforeEach(() => {
    graphQLClient = sinon.stub(GraphQLClient.prototype);
    graphQLClient.setHeaders.returnsThis();
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('find', () => {
    it('makes a graphql POST request on the specified URL and handle exception', async () => {
      const query = '{getPartnerData { avgCurrentScore}}';

      graphQLClient.request.rejects(new Error('unexpected error'));

      const result: GetPartnerDataType | null = await client.find<GetPartnerDataType>(
        query,
      );

      graphQLClient.request.calledOnceWithExactly(sinon.match(query));

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

      graphQLClient.request
        .onCall(0)
        .rejects({ message: 'unexpected error', response: { status: 403 } })
        .onCall(1)
        .resolves(expectedResult);

      const result: GetPartnerDataType | null = await client.find<GetPartnerDataType>(
        query,
      );

      sinon.assert.calledTwice(graphQLClient.request);

      expect(result).to.be.equals(expectedResult);
    });
  });

  describe('getPartnerData', () => {
    it('makes a graphql POST request on the specified URL getPartnerData', async () => {
      const expectedResult = {
        getPartnerData: {
          avgCurrentScore: 6.5,
          period: {
            from: '2023-01',
            to: '2023-02',
          },
          endCustomersAgg: {
            customers: {
              data: [
                {
                  date: '2023-04-02',
                  accounts: 3,
                  avgCurrentScore: 45.53,
                  failed: 0,
                  passed: 1,
                  subscriptionReferences: 'arrowsphere-1',
                },
                {
                  date: '2023-04-01',
                  accounts: 3,
                  avgCurrentScore: 46.53,
                  failed: 0,
                  passed: 1,
                  subscriptionReferences: 'arrowsphere-1',
                },
              ],
              last: {
                date: '2023-04-02',
                accounts: 3,
                avgCurrentScore: 45.53,
                failed: 0,
                passed: 1,
                subscriptionReferences: 'arrowsphere-1',
              },
              name: 'arrowsphere',
              progression: 0.5,
              reference: 'XSP0',
            },
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: GetPartnerDataType | null = await client.getPartnerData(
        SecurityScoreQueryMock.GET_PARTNER_DATA_QUERY,
      );

      expect(result?.period).to.be.equals(expectedResult.getPartnerData.period);
      expect(result?.endCustomersAgg).to.be.equals(
        expectedResult.getPartnerData.endCustomersAgg,
      );

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_PARTNER_DATA_GQL),
      );
    });

    it('makes a graphql POST request on the specified URL getPartnerData must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: GetPartnerDataType | null = await client.getPartnerData(
        SecurityScoreQueryMock.GET_PARTNER_DATA_QUERY,
      );

      expect(result).to.be.null;

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_PARTNER_DATA_GQL),
      );
    });
  });

  describe('getAdminData', () => {
    it('makes a graphql POST request on the specified URL getAdminData', async () => {
      const expectedResult = {
        getAdminData: {
          avgCurrentScore: 6.5,
          period: {
            from: '2023-01',
            to: '2023-02',
          },
          partnersAgg: {
            partners: {
              data: [
                {
                  avgCurrentScore: 35.53,
                  date: '2023-04-02',
                  failed: 0,
                  passed: 3,
                  total: 4,
                },
                {
                  avgCurrentScore: 32.09,
                  date: '2023-04-01',
                  failed: 1,
                  passed: 2,
                  total: 3,
                },
              ],
              last: {
                avgCurrentScore: 32.09,
                date: '2023-04-01',
                failed: 1,
                passed: 2,
                total: 3,
              },
              name: 'arrowsphere',
              progression: 0.5,
              reference: 'XSP0',
            },
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: GetAdminDataType | null = await client.getAdminData(
        SecurityScoreQueryMock.GET_ADMIN_DATA_QUERY,
      );

      expect(result?.period).to.be.equals(expectedResult.getAdminData.period);
      expect(result?.partnersAgg).to.be.equals(
        expectedResult.getAdminData.partnersAgg,
      );

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_ADMIN_DATA_GQL),
      );
    });

    it('makes a graphql POST request on the specified URL getAdminData must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: GetAdminDataType | null = await client.getAdminData(
        SecurityScoreQueryMock.GET_ADMIN_DATA_QUERY,
      );

      expect(result).to.be.null;

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_ADMIN_DATA_GQL),
      );
    });
  });

  describe('getCustomerData', () => {
    it('makes a graphql POST request on the specified URL getCustomerData', async () => {
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

      graphQLClient.request.resolves(expectedResult);

      const result: GetCustomerDataType | null = await client.getCustomerData(
        SecurityScoreQueryMock.GET_CUSTOMER_DATA_QUERY,
      );

      expect(result?.period).to.be.equals(
        expectedResult.getCustomerData.period,
      );
      expect(result?.accountsAgg).to.be.equals(
        expectedResult.getCustomerData.accountsAgg,
      );

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_CUSTOMER_DATA_GQL),
      );
    });

    it('makes a graphql POST request on the specified URL getCustomerData must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: GetCustomerDataType | null = await client.getCustomerData(
        SecurityScoreQueryMock.GET_CUSTOMER_DATA_QUERY,
      );

      expect(result).to.be.null;

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_CUSTOMER_DATA_GQL),
      );
    });
  });

  describe('getCustomerAccountData', () => {
    it('makes a graphql POST request on the specified URL getCustomerAccountData', async () => {
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

      graphQLClient.request.resolves(expectedResult);

      const result: GetCustomerAccountDataType | null = await client.getCustomerAccountData(
        SecurityScoreQueryMock.GET_CUSTOMER_ACCOUNT_DATA_QUERY,
      );

      expect(result?.period).to.be.equals(
        expectedResult.getCustomerAccountData.period,
      );
      expect(result?.standardsAgg).to.be.equals(
        expectedResult.getCustomerAccountData.standardsAgg,
      );

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_CUSTOMER_ACCOUNT_DATA_GQL),
      );
    });

    it('makes a graphql POST request on the specified URL getCustomerAccountData must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: GetCustomerAccountDataType | null = await client.getCustomerAccountData(
        SecurityScoreQueryMock.GET_CUSTOMER_ACCOUNT_DATA_QUERY,
      );

      expect(result).to.be.null;

      graphQLClient.request.calledOnceWithExactly(
        sinon.match(SecurityScoreQueryMock.GET_CUSTOMER_ACCOUNT_DATA_GQL),
      );
    });
  });
});
