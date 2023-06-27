import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  CREATE_ISSUE_PAYLOAD,
  GET_ISSUE_RESPONSE,
  GET_ISSUE_WITH_ALL_DATA_RESPONSE,
  LIST_ISSUE_RESPONSE,
  UPDATE_ISSUE_PAYLOAD,
} from './mocks/issue.mocks';
import { LIST_TOPIC_RESPONSE } from './mocks/topic.mocks';
import {
  ADD_ISSUE_COMMENT_PAYLOAD,
  ADD_ISSUE_COMMENT_RESPONSE,
  LIST_ISSUE_COMMENTS_RESPONSE,
} from './mocks/comment.mocks';
import {
  ADD_ISSUE_ATTACHMENT_PAYLOAD,
  DOWNLOAD_ISSUE_ATTACHMENT_RESPONSE,
  LIST_ISSUE_ATTACHMENTS_RESPONSE,
} from './mocks/attchment.mocks';

export const SUPPORT_CENTER_MOCK_URL = 'https://support.localhost';
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

export const CREATE_ISSUE_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues`,
);

export const UPDATE_ISSUE_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues/[0-9]+(\\?.*)?`,
);

export const LIST_ISSUE_COMMENTS_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues/[0-9]+/comments`,
);

export const ADD_ISSUE_COMMENT_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues/[0-9]+/comments`,
);

export const LIST_ISSUE_ATTACHMENTS_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues/[0-9]+/attachments`,
);

export const ADD_ISSUE_ATTACHMENT_URL_INTERCEPTOR = new RegExp(
  `^${SUPPORT_CENTER_MOCK_PATH}/issues/[0-9]+/attachments`,
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

    it('call the get method with all data', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(GET_ISSUE_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, GET_ISSUE_WITH_ALL_DATA_RESPONSE);

      const response = await client.getIssue('123');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        GET_ISSUE_WITH_ALL_DATA_RESPONSE,
      );
    });
  });

  describe('create issues', function () {
    it('call the post method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .post(CREATE_ISSUE_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, GET_ISSUE_RESPONSE);

      const response = await client.createIssue(CREATE_ISSUE_PAYLOAD);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(GET_ISSUE_RESPONSE);
    });
  });

  describe('update issues', function () {
    it('call the post method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .patch(UPDATE_ISSUE_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, GET_ISSUE_RESPONSE);

      const response = await client.updateIssue('123', UPDATE_ISSUE_PAYLOAD);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(GET_ISSUE_RESPONSE);
    });
  });

  describe('list issue comments', function () {
    it('call the get method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(LIST_ISSUE_COMMENTS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, LIST_ISSUE_COMMENTS_RESPONSE);

      const response = await client.listIssueComments('123');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(LIST_ISSUE_COMMENTS_RESPONSE);
    });
  });

  describe('add issue comments', function () {
    it('call the post method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .post(ADD_ISSUE_COMMENT_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, ADD_ISSUE_COMMENT_RESPONSE);

      const response = await client.addIssueComment(
        '123',
        ADD_ISSUE_COMMENT_PAYLOAD,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(ADD_ISSUE_COMMENT_RESPONSE);
    });
  });

  describe('list issue attachments', function () {
    it('call the post method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(LIST_ISSUE_ATTACHMENTS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, LIST_ISSUE_ATTACHMENTS_RESPONSE);

      const response = await client.listIssueAttachments('123');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        LIST_ISSUE_ATTACHMENTS_RESPONSE,
      );
    });
  });

  describe('add issue attachment', function () {
    it('call the post method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .post(ADD_ISSUE_ATTACHMENT_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, DOWNLOAD_ISSUE_ATTACHMENT_RESPONSE);

      const response = await client.addIssueAttachment(
        '123',
        ADD_ISSUE_ATTACHMENT_PAYLOAD,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        DOWNLOAD_ISSUE_ATTACHMENT_RESPONSE,
      );
    });
  });

  describe('download issue attachment', function () {
    it('call the get method', async function () {
      nock(SUPPORT_CENTER_MOCK_URL)
        .get(ADD_ISSUE_ATTACHMENT_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, DOWNLOAD_ISSUE_ATTACHMENT_RESPONSE);

      const response = await client.downloadIssueAttachment('123', '123');

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        DOWNLOAD_ISSUE_ATTACHMENT_RESPONSE,
      );
    });
  });
});
