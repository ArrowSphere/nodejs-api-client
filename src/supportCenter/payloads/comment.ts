import { IssueCreatedByType } from '../entities/issue/issue';

export type CreateCommentPayload = {
  body: string;
  createdBy?: IssueCreatedByType;
};
