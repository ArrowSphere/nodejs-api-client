import { PublicGraphQLClient } from '../../src';
import nock from 'nock';
import { ACCOUNT_QUERY, ACCOUNT_RESULT_ONE_USER } from './mocks/account.mocks';
import { expect } from 'chai';

export const ACCOUNT_MOCK_URL = 'https://account.localhost';
export const ACCOUNT_MOCK_URL_GRAPHQL = '/v2/graphql';

describe('AccountGraphQLClient', function () {
  const client = new PublicGraphQLClient()
    .getGraphqlAccountClient()
    .setUrl(ACCOUNT_MOCK_URL);

  describe('findByQuery', function () {
    it('search an user by query', async function () {
      nock(ACCOUNT_MOCK_URL)
        .post(ACCOUNT_MOCK_URL_GRAPHQL)
        .reply(200, { data: ACCOUNT_RESULT_ONE_USER });

      const response = await client.findByQuery(ACCOUNT_QUERY);

      // expect(nock.isDone()).to.be.true;
      expect(response).to.be.deep.equals(ACCOUNT_RESULT_ONE_USER);
    });
  });
});
