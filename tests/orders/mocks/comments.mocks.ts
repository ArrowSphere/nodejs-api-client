import {
  CommentOrderFields,
  CommentOrderType,
  CreateOrderCommentInputFields,
  CreateOrderCommentInputType,
  DataListOrderCommentsType,
  GetData,
  GetResultFields,
  PaginationFields,
} from '../../../src';

export const PAYLOAD_CREATE_ORDER_COMMENT: CreateOrderCommentInputType = {
  [CreateOrderCommentInputFields.COLUMN_BODY]: 'This is a comment',
};

export const PAYLOAD_CREATE_ORDER_COMMENT_RESULT: GetData<CommentOrderType> = {
  [GetResultFields.COLUMN_STATUS]: 201,
  [GetResultFields.COLUMN_DATA]: {
    [CommentOrderFields.COLUMN_CREATED_AT]: '2026-08-26T09:48:55Z',
    [CommentOrderFields.COLUMN_CREATED_BY]: 'arrowuser',
    [CommentOrderFields.COLUMN_VALUE]: 'This is a comment',
  },
};

export const PAYLOAD_LIST_ORDER_COMMENTS: GetData<DataListOrderCommentsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [CommentOrderFields.COLUMN_CREATED_AT]: '2026-08-26T09:48:55Z',
      [CommentOrderFields.COLUMN_CREATED_BY]: 'arrowuser',
      [CommentOrderFields.COLUMN_VALUE]: 'First comment',
    },
    {
      [CommentOrderFields.COLUMN_CREATED_AT]: '2026-08-27T10:00:00Z',
      [CommentOrderFields.COLUMN_CREATED_BY]: 'otheruser',
      [CommentOrderFields.COLUMN_VALUE]: 'Second comment',
    },
  ],
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 5,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 2,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 3,
    [PaginationFields.COLUMN_TOTAL]: 12,
    [PaginationFields.COLUMN_NEXT]:
      '/orders/XSPO123/comments?per_page=5&page=3',
    [PaginationFields.COLUMN_PREVIOUS]:
      '/orders/XSPO123/comments?per_page=5&page=1',
  },
};

export const PAYLOAD_EMPTY_LIST_ORDER_COMMENTS: GetData<DataListOrderCommentsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [],
};
