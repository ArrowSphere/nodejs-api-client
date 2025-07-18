import {
  IssueAdditionalDataType,
  IssueCreatedByType,
  IssueFields,
  IssueOfferType,
  IssueStatusesType,
} from '../entities/issue/issue';
import { Payload } from '../../abstractRestfulClient';

export enum IssueProgramsType {
  MSCSP = 'MSCSP',
  ARWS_AMS = 'ARWS-AMS',
}

export type CreateIssuePayload = {
  [IssueFields.COLUMN_ADDITIONAL_DATA]?: Array<IssueAdditionalDataType>;
  [IssueFields.COLUMN_CREATED_BY]?: IssueCreatedByType;
  [IssueFields.COLUMN_DESCRIPTION]: string;
  [IssueFields.COLUMN_END_CUSTOMER_REF]?: string;
  [IssueFields.COLUMN_OFFER]?: IssueOfferType;
  [IssueFields.COLUMN_PROGRAM]: IssueProgramsType;
  [IssueFields.COLUMN_RESELLER]?: string;
  [IssueFields.COLUMN_TITLE]: string;
  [IssueFields.COLUMN_TOPIC_ID]: string;
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
