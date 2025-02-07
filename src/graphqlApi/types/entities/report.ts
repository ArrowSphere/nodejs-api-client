import { CountableType } from './counting';
import { GraphqlApiRealOrderType } from './order';
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
  quantitySum?: CountableType;
  order?: GraphqlApiRealOrderType;
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
