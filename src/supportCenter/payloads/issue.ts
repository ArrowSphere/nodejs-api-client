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

export enum IssueExtraDescriptionInfoFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUE = 'value',
}

export enum IssueExtraDescriptionInfoNameEnum {
  EXTRA_EMAIL = 'EXTRA EMAIL',
  SUBSCRIPTION_ID = 'SUBSCRIPTION ID',
  SUBSCRIPTION_ID_OR_LICENSE_REF = 'SUBSCRIPTION ID or LICENSE REF',
  FRIENDLY_NAME = 'FRIENDLY NAME',
  SUBSCRIPTION_FRIENDLY_NAME = 'SUBSCRIPTION FRIENDLY NAME',
  IMPACT = 'IMPACT',
  URGENCY = 'URGENCY',
  AVAILABILITY = 'AVAILABILITY',
  ENV_URL = 'ENV URL',
  AZURE_RESOURCES = 'AZURE RESOURCES',
  TROUBLESHOOTING = 'TROUBLESHOOTING',
}

export enum IssueExtraDescriptionInfoImpactEnum {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  LOW_SINGLE_USER = 'Low - Single user',
}

export enum IssueExtraDescriptionInfoUrgencyEnum {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  LOW_INCONVENIENT = 'Low - Inconvenient',
}

export enum IssueExtraDescriptionInfoAvailabilityEnum {
  BUSINESS_HOURS = 'Business hours',
  TWENTY_FOUR_SEVEN = '24/7',
}

export type IssueExtraDescriptionInfoType = {
  [IssueExtraDescriptionInfoFields.COLUMN_NAME]: IssueExtraDescriptionInfoNameEnum;
  [IssueExtraDescriptionInfoFields.COLUMN_VALUE]: string;
};

export type CreateIssuePayload = {
  [IssueFields.COLUMN_ADDITIONAL_DATA]?: Array<IssueAdditionalDataType>;
  [IssueFields.COLUMN_CREATED_BY]?: IssueCreatedByType;
  [IssueFields.COLUMN_DESCRIPTION]: string;
  [IssueFields.COLUMN_END_CUSTOMER_REF]?: string;
  [IssueFields.COLUMN_EXTRA_DESCRIPTION_INFO]?: Array<IssueExtraDescriptionInfoType>;
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
