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
  ArrowCompanyType,
  EndCustomerType,
  ErrorsField,
  GraphqlApiClient,
  LicenseBudgetType,
  PartnerType,
  Queries,
  SelectAllQueryType,
  SelectAllResultType,
  SelectDataField,
  SelectOneResultType,
  SelectableField,
  UserHistoryType,
  UserType,
} from '../../src/graphqlApi';
import { QuoteType } from '../../src/graphqlApi/types/entities/quote';

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

  describe('selectAll SubscribedProgram', () => {
    it('makes a graphql POST request on the specified URL to selectAll SubscribedProgram', async () => {
      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.SUBSCRIBED_PROGRAM]: [
              {
                id: 1,
                availabilityEndedAt: '',
                availabilityStartedAt: '2020-01-09 00:00:00',
                companyId: 1,
                internalName: 'ALIBABA-RESELLER',
                subscriptionEndedAt: '',
                vendorCode: 'alibabacloud',
                vendorName: 'Alibaba Cloud',
              },
              {
                id: 2,
                availabilityEndedAt: '',
                availabilityStartedAt: '2016-04-12 00:00:00',
                companyId: 1,
                internalName: 'MSCSP',
                subscriptionEndedAt: '',
                vendorCode: 'Microsoft',
                vendorName: 'Microsoft',
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
        GraphqlApiQueryMock.SELECT_ALL_SUBSCRIBED_PROGRAM_QUERY,
      );

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ALL_SUBSCRIBED_PROGRAM_GQL),
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

  describe('findPartnerById', () => {
    it('makes a graphql POST request on the specified URL findPartnerById', async () => {
      const partnerCompany: PartnerType = {
        id: 1,
        name: 'The Partner Company',
      };

      const expectedResult: SelectOneResultType = {
        [Queries.SELECT_ONE]: {
          [SelectableField.DATA]: {
            [SelectDataField.PARTNER]: partnerCompany,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: PartnerType | null = await client.findOneById<PartnerType>(
        1,
        {
          [SelectDataField.PARTNER]: {
            id: true,
            name: true,
          },
        },
        {
          perPage: 1,
        },
      );

      expect(result).to.deep.equals(partnerCompany);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(
          '{selectOne (filters: {groups: [{items: [{name: "id", operator: "EQUALS", value: ["1"]}]}]}, pagination: {page: 1, perPage: 1}) { data { partner { id name } } errors { message } }}',
        ),
      );
    });

    it('makes a graphql POST request on the specified URL findPartnerById and throw error', async () => {
      const expectedResult: SelectOneResultType = {
        [Queries.SELECT_ONE]: {
          [SelectableField.DATA]: {
            [SelectDataField.PARTNER]: {},
          },
          [SelectableField.ERRORS]: {
            [ErrorsField.MESSAGE]: 'Bad query',
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      try {
        await client.findOneById<PartnerType>(1, {
          [SelectDataField.PARTNER]: {
            id: true,
            name: true,
          },
        });
      } catch (error: unknown) {
        expect(`${error}`).to.equals('Error: Bad query');
      }

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(
          '{selectOne (filters: {groups: [{items: [{name: "id", operator: "EQUALS", value: ["1"]}]}]}) { data { partner { id name } } errors { message } }}',
        ),
      );
    });
  });

  describe('findEndCustomerById', () => {
    it('makes a graphql POST request on the specified URL findEndCustomerById', async () => {
      const endCustomer: EndCustomerType = {
        id: 2,
        name: 'The End Company',
      };

      const expectedResult: SelectOneResultType = {
        [Queries.SELECT_ONE]: {
          [SelectableField.DATA]: {
            [SelectDataField.END_CUSTOMER]: endCustomer,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: EndCustomerType | null = await client.findEndCustomerById(
        2,
        {
          id: true,
          name: true,
        },
        {
          page: 1,
        },
      );

      expect(result).to.deep.equals(endCustomer);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(
          '{selectOne (filters: {groups: [{items: [{name: "id", operator: "EQUALS", value: ["2"]}]}]}, pagination: {page: 1}) { data { endCustomer { id name } } errors { message } }}',
        ),
      );
    });
  });

  describe('findArrowCompanyById', () => {
    it('makes a graphql POST request on the specified URL findArrowCompanyById', async () => {
      const arrowCompany: ArrowCompanyType = {
        id: 3,
        name: 'The Arrow Company',
      };

      const expectedResult: SelectOneResultType = {
        [Queries.SELECT_ONE]: {
          [SelectableField.DATA]: {
            [SelectDataField.ARROW_COMPANY]: arrowCompany,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: ArrowCompanyType | null = await client.findArrowCompanyById(
        3,
        {
          id: true,
          name: true,
        },
      );

      expect(result).to.deep.equals(arrowCompany);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(
          '{selectOne (filters: {groups: [{items: [{name: "id", operator: "EQUALS", value: ["3"]}]}]}) { data { arrowCompany { id name } } errors { message } }}',
        ),
      );
    });
  });

  describe('findLicenseBudgetByLicenseId', () => {
    it('makes a graphql POST request on the specified URL selectOne', async () => {
      const licenseBudget: LicenseBudgetType = {
        id: 3,
        threshold: 6500.0,
        type: 'CONSUMED',
        notifications: [
          {
            id: 37954,
            name: '50',
          },
          {
            id: 37955,
            name: '75',
          },
          {
            id: 37956,
            name: '90',
          },
        ],
      };

      const expectedResult: SelectOneResultType = {
        [Queries.SELECT_ONE]: {
          [SelectableField.DATA]: {
            [SelectDataField.LICENSE_BUDGET]: licenseBudget,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectOneResultType | null = await client.selectOne(
        GraphqlApiQueryMock.SELECT_ONE_LICENSE_BUDGET_QUERY,
      );

      expect(result).to.deep.equals(expectedResult);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_ONE_LICENSE_BUDGET_GQL),
      );
    });
  });

  describe('GetUserHistory', () => {
    it('makes a graphql POST request on the specified URL to selectAll paginated user history', async () => {
      const userHistories: UserHistoryType[] = [
        {
          action: 'User impersonated',
          createdAt: '2017-04-04 14:44:44',
          description: '-',
          impactedUser: {
            contact: {
              firstname: 'Thomas',
              lastname: 'Andersen',
            },
          },
          originatorUser: {
            contact: {
              firstname: 'Adyl',
              lastname: 'IT',
            },
          },
        },
      ];

      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.USER_HISTORY]: userHistories,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectAllResultType | null = await client.selectAll(
        GraphqlApiQueryMock.SELECT_USER_HISTORY_QUERY,
      );

      expect(result).to.deep.equals(expectedResult);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_USER_HISTORY_GQL),
      );
    });
  });

  describe('GetUsers', () => {
    it('makes a graphql POST request on the specified URL to selectAll paginated users', async () => {
      const users: UserType[] = [
        {
          allowDirectLogin: true,
          validatedAt: '2017-04-04 14:44:44',
          contact: {
            firstname: 'Adyl',
            lastname: 'IT',
          },
        },
      ];

      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.USER]: users,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectAllResultType | null = await client.selectAll(
        GraphqlApiQueryMock.SELECT_USER_QUERY,
      );

      expect(result).to.deep.equals(expectedResult);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_USER_GQL),
      );
    });
  });

  describe('GetQuotes', () => {
    it('makes a graphql POST request on the specified URL to selectAll paginated quotes', async () => {
      const quotes: QuoteType[] = [
        {
          id: 1,
          arrowCompany: {
            id: 1,
            name: 'Arrow ECS',
          },
          commitmentAmountTotal: 1000,
          createdAt: '2017-04-04 14:44:44',
          endCustomer: {
            id: 1,
            name: 'Company 1',
          },
          items: [
            {
              id: 1,
              name: 'Item 1',
              program: {
                id: 1,
                name: 'Program 1',
              },
              reference: 'REF1',
              vendorName: 'Vendor 1',
              vendorNamesSerialized: 'Vendor 1',
            },
          ],
          partner: {
            id: 1,
            name: 'Company 1',
            currency: {
              name: 'Euro',
            },
          },
          promotionCode: 'PROMO1',
          reference: 'REF1',
        },
      ];

      const expectedResult: SelectAllResultType = {
        [Queries.SELECT_ALL]: {
          [SelectableField.DATA]: {
            [SelectDataField.QUOTE]: quotes,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: SelectAllResultType | null = await client.selectAll(
        GraphqlApiQueryMock.SELECT_QUOTES_QUERY,
      );
      expect(result).to.deep.equals(expectedResult);

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(GraphqlApiQueryMock.SELECT_QUOTES_GQL),
      );
    });
  });
});
