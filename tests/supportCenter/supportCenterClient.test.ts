import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import { GET_ISSUE_RESPONSE, LIST_ISSUE_RESPONSE } from './mocks/issue.mocks';
import { LIST_TOPIC_RESPONSE } from './mocks/topic.mocks';

export const SUPPORT_CENTER_MOCK_URL = 'https://support.localhost/';
export const SUPPORT_CENTER_MOCK_PATH = '/support';

export const LIST_TOPICS_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/topics`,
);

export const LIST_ISSUES_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues`,
);

export const GET_ISSUE_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues/[A-Za-z0-9]+(\\?.*)?`,
);
describe('SupportCenterClient', function () {
  const client = new PublicApiClient()
    .getSupportCenterClient()
    .setUrl(SUPPORT_CENTER_MOCK_URL);

  describe('list topics', function () {
    it('call the get method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(LIST_TOPICS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, LIST_TOPIC_RESPONSE);

      const response = await client.listTopics();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(LIST_TOPIC_RESPONSE);
    });
  });

  describe('list issues', function () {
    it('call the get method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(LIST_ISSUES_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, LIST_ISSUE_RESPONSE);

      const response = await client.listIssues();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(LIST_ISSUE_RESPONSE);
    });
  });

  describe('get issues', function () {
    it('call the get method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(GET_ISSUE_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, GET_ISSUE_RESPONSE);

      const response = await client.getIssue('123');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(GET_ISSUE_RESPONSE);
    });
  });
});
