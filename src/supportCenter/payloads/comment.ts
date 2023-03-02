import { IssueCreatedByType } from '../entities/issue/issue';
import { IssueCommentFields } from '../entities/issue/comment';

export type AddIssueCommentPayload = {
  [IssueCommentFields.COLUMN_BODY]: string;
  [IssueCommentFields.COLUMN_CREATED_BY]?: IssueCreatedByType;
};
