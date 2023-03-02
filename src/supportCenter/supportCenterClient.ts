import {
  AbstractClient,
  Parameters,
  ParametersWithPaginationType,
} from '../abstractClient';
import { Issue, Issues, IssueStatusesType } from './entities/issue/issue';
import { GetResult } from '../getResult';
import { IssueAttachment, IssueAttachments } from './entities/issue/attachment';
import { CreateIssuePayload, UpdateIssuePayload } from './payloads/issue';
import { IssueComment, IssueComments } from './entities/issue/comment';
import { CreateCommentPayload } from './payloads/comment';
import { CreateAttachmentPayload } from './payloads/attachment';
import { Topics } from './entities/topic';

export enum ListIssueParametersFields {
  DIR = 'dir',
  END_CUSTOMER_REF = 'endCustomerRef',
  PROGRAM = 'program',
  RESELLER_REF = 'resellerRef',
  SKU = 'sku',
  SORT = 'sort',
  STATUSES = 'statuses',
  TITLE = 'title',
}

export type ListIssueParametersType = ParametersWithPaginationType & {
  [ListIssueParametersFields.DIR]?: string;
  [ListIssueParametersFields.END_CUSTOMER_REF]?: string;
  [ListIssueParametersFields.PROGRAM]?: string;
  [ListIssueParametersFields.RESELLER_REF]?: string;
  [ListIssueParametersFields.SKU]?: string;
  [ListIssueParametersFields.SORT]?: 'title' | 'updated' | 'status';
  [ListIssueParametersFields.STATUSES]?: IssueStatusesType;
  [ListIssueParametersFields.TITLE]?: string;
};

export class SupportCenterClient extends AbstractClient {
  protected basePath = '/support';

  public async listTopics(
    parameters: Parameters = {},
  ): Promise<GetResult<Topics>> {
    this.path = `/topics`;
    return new GetResult(Topics, await this.get(parameters));
  }

  public async listIssues(
    parameters: ListIssueParametersType = {},
  ): Promise<GetResult<Issues>> {
    this.path = `/issues`;
    return new GetResult(Issues, await this.get(parameters));
  }

  public async createIssue(
    issuePayload: CreateIssuePayload,
    parameters: Parameters = {},
  ): Promise<GetResult<Issue>> {
    this.path = `/issues`;
    return new GetResult(Issue, await this.post(issuePayload, parameters));
  }

  public async getIssue(
    issueId: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Issue>> {
    this.path = `/issues/${issueId}`;

    return new GetResult(Issue, await this.get(parameters));
  }

  public async updateIssue(
    issueId: string,
    payload: UpdateIssuePayload,
    parameters: Parameters = {},
  ): Promise<GetResult<Issue>> {
    this.path = `/${issueId}`;
    return new GetResult(Issue, await this.patch(payload, parameters));
  }

  public async listComments(
    issueId: string,
    parameters: Parameters = {},
  ): Promise<GetResult<IssueComments>> {
    this.path = `/${issueId}/comments`;

    return new GetResult(IssueComments, await this.get(parameters));
  }

  public async addComment(
    issueId: string,
    payload: CreateCommentPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<IssueComment>> {
    this.path = `/${issueId}/comments`;

    return new GetResult(IssueComment, await this.post(payload, parameters));
  }

  public async listAttachments(
    issueId: string,
    parameters: Parameters = {},
  ): Promise<GetResult<IssueAttachments>> {
    this.path = `/${issueId}/attachments`;

    return new GetResult(IssueAttachments, await this.get(parameters));
  }

  public async addAttachment(
    issueId: string,
    payload: CreateAttachmentPayload,
    parameters: Parameters = {},
  ): Promise<GetResult<IssueAttachment>> {
    this.path = `/${issueId}/attachments`;

    return new GetResult(IssueAttachment, await this.post(payload, parameters));
  }

  public async downloadAttachment(
    issueId: string,
    attachmentId: string,
    parameters: Parameters = {},
  ): Promise<GetResult<IssueAttachment>> {
    this.path = `/${issueId}/attachments/${attachmentId}`;

    return new GetResult(IssueAttachment, await this.get(parameters));
  }
}
