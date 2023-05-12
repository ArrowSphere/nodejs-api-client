import { Merge, Schema } from 'type-fest';
import {
  AccountType,
  CheckType,
  CompareAccountAggType,
  CompareEndCustomerAggType,
  CompareStandardAggType,
  FilterValuesType,
  IssueDataAggType,
  MonthlyTrendAggType,
  NameCountByDateType,
  PeriodsType,
  RegistrationType,
  ScoreByMonthType,
  StandardAggType,
  StandardType,
} from './securityScoreGraphQLTypes';

type MissingFieldsOfMonthlyTrendAggSchema = {
  scores?: Schema<ScoreByMonthType, boolean>;
};
export type MonthlyTrendAggSchema = Merge<
  Schema<MonthlyTrendAggType, boolean>,
  MissingFieldsOfMonthlyTrendAggSchema
>;

type CompareEndCustomerAggSchema = Schema<CompareEndCustomerAggType, boolean>;

type EndCustomerAggSchema = {
  reference?: boolean;
  name?: boolean;
  data?: CompareEndCustomerAggSchema;
  progression?: boolean;
};
export type EndCustomersAggSchema = {
  customers: EndCustomerAggSchema;
};

type CompareAccountAggSchema = Schema<CompareAccountAggType, boolean>;
export type AccountAggSchema = {
  accountRef?: boolean;
  data?: CompareAccountAggSchema;
  progression?: boolean;
};
export type AccountsAggSchema = {
  accounts: AccountAggSchema;
};

type FilterValuesSchema = Schema<FilterValuesType, boolean>;
export type FilterSchema = {
  name?: boolean;
  values?: FilterValuesSchema;
};

type NameCountByDateSchema = Schema<NameCountByDateType, boolean>;
type NameAggSchema = {
  name?: boolean;
  data?: NameCountByDateSchema;
  progression?: boolean;
};
type MissingFieldsInIssueDataAggSchema = {
  data?: NameCountByDateSchema;
};
type IssueDataAggSchema = Merge<
  Schema<IssueDataAggType, boolean>,
  MissingFieldsInIssueDataAggSchema
>;
export type IssuesAggSchema = {
  issues: IssueDataAggSchema;
};

export type PeriodsSchema = Schema<PeriodsType, boolean>;

export type CheckSchema = Schema<CheckType, boolean>;
type MissingFieldsInStandardType = {
  checks?: CheckSchema;
};
export type StandardSchema = Merge<
  Schema<StandardType, boolean>,
  MissingFieldsInStandardType
>;
type MissingFieldsInAccountSchema = {
  standards: StandardSchema;
};
type AccountSchema = Merge<
  Schema<AccountType, boolean>,
  MissingFieldsInAccountSchema
>;
type RegistrationSchema = Schema<RegistrationType, boolean>;
export type ScoreResultSchema = {
  account?: AccountSchema;
  registration?: RegistrationSchema;
};

export type SeveritiesAggSchema = {
  severities: NameAggSchema;
};

type CompareStandardAggSchema = Schema<CompareStandardAggType, boolean>;
type MissingFieldsInStandardAggSchema = {
  data?: CompareStandardAggSchema;
};
type StandardAggSchema = Merge<
  Schema<StandardAggType, boolean>,
  MissingFieldsInStandardAggSchema
>;

export type StandardsAggSchema = { standards: StandardAggSchema };
