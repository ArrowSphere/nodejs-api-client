import {
  IssueAdditionalDataType,
  IssueCreatedByType,
  IssueOfferType,
  IssueStatusesType,
} from '../entities/issue/issue';
import { Payload } from '../../abstractClient';

export enum IssueProgramsType {
  MSCSP = 'MSCSP',
  ARWS_AMS = 'ARWS-AMS',
}

export type CreateIssuePayload = {
  title: string;
  description: string;
  topicId: string;
  program: IssueProgramsType;
  offer?: IssueOfferType;
  createdBy?: IssueCreatedByType;
  endCustomerRef?: string;
  additionalData?: Array<IssueAdditionalDataType>;
};

export type UpdateIssueStatusOperation = {
  op: 'replace';
  path: 'status';
  value: IssueStatusesType.CLOSED;
};

export enum StatusDetailsValueEnum {
  RESOLVED = 'RESOLVED',
  CANCELLED = 'CANCELLED',
  SELF_RESOLVED = 'SELF_RESOLVED',
}

export type UpdateIssueStatusDetailsOperation = {
  op: 'replace';
  path: 'statusDetails';
  value: StatusDetailsValueEnum;
};

export type UpdateIssuePayload =
  | [UpdateIssueStatusOperation, UpdateIssueStatusDetailsOperation]
  | Payload;
