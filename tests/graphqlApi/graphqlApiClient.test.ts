import { expect } from 'chai';
import sinon from 'sinon';
import {
  Hooks,
  HttpExceptionHandler,
  HandleHttpExceptionOutput,
} from '../../src/exception/exception-handlers';
import { PublicApiClientException } from '../../src/exception';
import * as GraphqlApiQueryMock from './mocks/graphqlApiQueries.mocks';
import { GraphQLClient } from 'graphql-request';
import { GRAPHQL_API_MOCK_URL } from './mocks/graphqlApiQueries.mocks';
import {
  GraphqlApiClient,
  Queries,
  SelectAllQueryType,
  SelectAllResultType,
  SelectDataField,
  SelectOneResultType,
  SelectableField,
} from '../../src/graphqlApi';

describe('GraphqlApiClient', () => {
  const client = new GraphqlApiClient().setUrl(GRAPHQL_API_MOCK_URL);
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

      const result: SelectAllQueryType | null = await client.find<SelectAllQueryType>(
        query,
      );

      graphQLClient.request.calledOnceWithExactly(sinon.match(query));

      expect(result).to.be.null;
    });

    it('makes a graphql POST request on the specified URL twice', async () => {
      const query = '{selectAll { data { endCustomer {id name}}}}';

      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.END_CUSTOMER]: [
              {
                id: 123,
                name: 'Arrow ECS',
              },
            ],
          },
        },
      };

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

      const result: SelectAllQueryType | null = await client.find<SelectAllQueryType>(
        query,
      );

      sinon.assert.calledTwice(graphQLClient.request);

      expect(result).to.be.equals(expectedResult);
    });
  });

  describe('selectAll EndCustomer', () => {
    it('makes a graphql POST request on the specified URL to selectAll EndCustomer', async () => {
      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.END_CUSTOMER]: [
              {
                id: 1,
                name: 'Company 1',
              },
              {
                id: 2,
                name: 'Company 2',
              },
            ],
          },
          [SelectableField.ERRORS]: undefined,
          [SelectableField.PAGINATION]: {
            currentPage: 1,
            next: 2,
            perPage: 2,
            previous: 0,
            total: 11,
            totalPage: 2,
            totalPages: 6,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectAllResultType | null = await client.selectAll(
        GraphqlApiQueryMock.SELECT_ALL_END_CUSTOMER_QUERY,
      );

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ALL_END_CUSTOMER_GQL),
      );

      expect(result).to.deep.equals(expectedResult);
    });

    it('makes a graphql POST request on the specified URL to selectAll EndCustomer -> must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: SelectAllResultType | null = await client.selectAll(
        GraphqlApiQueryMock.SELECT_ALL_END_CUSTOMER_QUERY,
      );

      expect(result).to.be.null;

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ALL_END_CUSTOMER_GQL),
      );
    });
  });

  describe('selectAll Partner', () => {
    it('makes a graphql POST request on the specified URL to selectAll Partner', async () => {
      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.PARTNER]: [
              {
                id: 1,
                name: 'Company 1',
              },
              {
                id: 2,
                name: 'Company 2',
              },
              {
                id: 3,
                name: 'Company 3',
              },
              {
                id: 4,
                name: 'Company 4',
              },
            ],
          },
          [SelectableField.ERRORS]: undefined,
          [SelectableField.PAGINATION]: {
            currentPage: 1,
            next: 2,
            perPage: 4,
            previous: 0,
            total: 30,
            totalPage: 4,
            totalPages: 8,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectAllResultType | null = await client.selectAll(
        GraphqlApiQueryMock.SELECT_ALL_PARTNERS_QUERY,
      );

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ALL_PARTNERS_GQL),
      );

      expect(result).to.deep.equals(expectedResult);
    });
  });

  describe('selectOne', () => {
    it('makes a graphql POST request on the specified URL selectOne', async () => {
      const expectedResult: SelectOneResultType = {
        [Queries.SELECT_ONE]: {
          [SelectableField.DATA]: {
            [SelectDataField.END_CUSTOMER]: {
              id: 123,
              name: 'Arrow ECS',
            },
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectOneResultType | null = await client.selectOne(
        GraphqlApiQueryMock.SELECT_ONE_END_CUSTOMER_QUERY,
      );

      expect(result).to.deep.equals(expectedResult);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ONE_END_CUSTOMER_GQL),
      );
    });

    it('makes a graphql POST request on the specified URL selectAll must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: SelectOneResultType | null = await client.selectOne(
        GraphqlApiQueryMock.SELECT_ONE_END_CUSTOMER_QUERY,
      );

      expect(result).to.be.null;

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ONE_END_CUSTOMER_GQL),
      );
    });
  });
});
