import {
  GetData,
  GetResultFields,
  IssueCreatedByFields,
  AddIssueCommentPayload,
  IssueCommentsType,
  IssueCommentFields,
  IssueCommentType,
} from '../../../src';

export const ADD_ISSUE_COMMENT_PAYLOAD: AddIssueCommentPayload = {
  [IssueCommentFields.COLUMN_BODY]: 'body',
  [IssueCommentFields.COLUMN_CREATED_BY]: {
    [IssueCreatedByFields.COLUMN_EMAIL]: 'email',
    [IssueCreatedByFields.COLUMN_FIRST_NAME]: 'firstName',
    [IssueCreatedByFields.COLUMN_LAST_NAME]: 'lastName',
    [IssueCreatedByFields.COLUMN_PHONE]: 'phone',
  },
};

export const LIST_ISSUE_COMMENTS_RESPONSE: GetData<IssueCommentsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [IssueCommentFields.COLUMN_ID]: 'id',
      [IssueCommentFields.COLUMN_BODY]: 'body',
      [IssueCommentFields.COLUMN_CREATED_BY]: {
        [IssueCreatedByFields.COLUMN_EMAIL]: 'email',
        [IssueCreatedByFields.COLUMN_FIRST_NAME]: 'firstName',
        [IssueCreatedByFields.COLUMN_LAST_NAME]: 'lastName',
        [IssueCreatedByFields.COLUMN_PHONE]: 'phone',
      },
      [IssueCommentFields.COLUMN_DATE]: '2020-02-01T19:00:00.000Z',
    },
  ],
};

export const ADD_ISSUE_COMMENTS_RESPONSE: GetData<IssueCommentType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [IssueCommentFields.COLUMN_ID]: 'id',
    [IssueCommentFields.COLUMN_BODY]: 'body',
    [IssueCommentFields.COLUMN_CREATED_BY]: {
      [IssueCreatedByFields.COLUMN_EMAIL]: 'email',
      [IssueCreatedByFields.COLUMN_FIRST_NAME]: 'firstName',
      [IssueCreatedByFields.COLUMN_LAST_NAME]: 'lastName',
      [IssueCreatedByFields.COLUMN_PHONE]: 'phone',
    },
    [IssueCommentFields.COLUMN_DATE]: '2020-02-01T19:00:00.000Z',
  },
};

export const ADD_ISSUE_COMMENT_RESPONSE: GetData<IssueCommentType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [IssueCommentFields.COLUMN_ID]: 'id',
  },
};
