import { CountableType } from './counting';
import { GraphqlApiOrderSoftwareType } from './order';
import { SubscriptionType } from './subscription';

export type GraphqlApiReportType = {
  id?: number;
  adminNote?: string;
  createdAt?: string;
  endedAt?: string;
  items?: GraphqlApiReportItemType[];
  lastUpdatedAt?: string;
  reportMonth?: string;
  subscription?: SubscriptionType;
  totalAmount?: number;
  userNote?: string;
  quantityCount?: number;
  quantitySum?: CountableType;
  order?: GraphqlApiOrderSoftwareType;
  status?: GraphqlApiReportStatusType;
};

export type GraphqlApiReportItemType = {
  id?: number;
  quantity?: number;
  report?: GraphqlApiReportType;
};

export type GraphqlApiReportStatusType = {
  id?: number;
  name?: string;
};
