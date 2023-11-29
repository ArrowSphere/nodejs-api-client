import { expect } from 'chai';
import sinon from 'sinon';
import { GraphQLClient } from 'graphql-request';
import {
  Hooks,
  HttpExceptionHandler,
  HandleHttpExceptionOutput,
} from '../../src/exception/exception-handlers';
import { PublicApiClientException } from '../../src/exception';
import * as LicensesEventQueryMock from './licensesEvent.mocks';
import {
  LicensesEventClient,
  LicensesEventGetEventsQueryField,
  LicensesEventGetEventsResponseField,
  LicensesEventGetEventsResponseType,
  LicensesEventQueries,
} from '../../src/licenses';

describe('LicensesEventClient', () => {
  const licensesEventclient = new LicensesEventClient().setUrl(
    'http://localhost/licenses/event',
  );
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
      const query = '{getEvents { event {}}}';

      graphQLClient.request.rejects(new Error('unexpected error'));

      const result: LicensesEventGetEventsResponseType | null = await licensesEventclient.find<LicensesEventGetEventsResponseType>(
        query,
      );

      graphQLClient.request.calledOnceWithExactly(sinon.match(query));

      expect(result).to.be.null;
    });

    it('makes a graphql POST request on the specified URL twice', async () => {
      const query = '{getEvents { event {}}}';

      const expectedResult: LicensesEventGetEventsResponseType = {
        [LicensesEventQueries.GET_EVENTS]: {
          [LicensesEventGetEventsQueryField.EVENTS]:
            LicensesEventQueryMock.EVENTS_SAMPLE,
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

      licensesEventclient.registerHttpExceptionHandler(exceptionHandler);

      graphQLClient.request
        .onCall(0)
        .rejects({ message: 'unexpected error', response: { status: 403 } })
        .onCall(1)
        .resolves(expectedResult);

      const result: LicensesEventGetEventsResponseType | null = await licensesEventclient.find<LicensesEventGetEventsResponseType>(
        query,
      );

      sinon.assert.calledTwice(graphQLClient.request);

      expect(result).to.be.equals(expectedResult);
    });
  });

  describe('getEvents', () => {
    it('makes a graphql POST request on the specified URL to getEvents', async () => {
      const expectedResult: LicensesEventGetEventsResponseType = {
        [LicensesEventQueries.GET_EVENTS]: {
          [LicensesEventGetEventsQueryField.EVENTS]:
            LicensesEventQueryMock.EVENTS_SAMPLE,
          [LicensesEventGetEventsResponseField.PAGINATION]: {
            currentPage: 1,
            perPage: 2,
            total: 11,
            totalPage: 2,
          },
        },
      };

      graphQLClient.request.resolves(expectedResult);

      const result: LicensesEventGetEventsResponseType | null = await licensesEventclient.getEvents(
        LicensesEventQueryMock.GET_EVENTS_QUERY,
      );

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(LicensesEventQueryMock.GET_EVENTS_GQL),
      );

      expect(result).to.deep.equals(expectedResult);
    });

    it('makes a graphql POST request on the specified URL to get licenses events -> must return null', async () => {
      graphQLClient.request.resolves(null);

      const result: LicensesEventGetEventsResponseType | null = await licensesEventclient.getEvents(
        LicensesEventQueryMock.GET_EVENTS_QUERY,
      );

      expect(result).to.be.null;

      sinon.assert.calledWithExactly(
        graphQLClient.request,
        sinon.match(LicensesEventQueryMock.GET_EVENTS_GQL),
      );
    });
  });
});
