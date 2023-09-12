import { Merge, Schema } from 'type-fest';
import {
  AccountType,
  CheckType,
  FilterValuesType,
  MonthlyTrendAggType,
  PeriodsType,
  RegistrationType,
  StandardAggType,
  StandardType,
  EndCustomerByDateAggType,
  AccountByDateAggType,
  CheckAggType,
  PaginationsType,
  ScoreByDateAggType,
  StandardWithCheckType,
  ChecksByStandardType,
  CheckByDateType,
  NameCountByDateAggType,
  EndCustomerAggType,
  SeverityAggType,
  AccountAggType,
  StandardByDateAggType,
  ScoreByMonthAggType,
  ScoresAggType,
  MarketplaceAggType,
  MarketplaceByDateAggType,
  MarketplacePartnerAggType,
  MarketplacePartnerAggByDateAggType,
  CheckCountByDateAggType,
  PartnerByDateAggType,
  PartnerAggType,
  UnregisteredOfferIaasSubscriptionType,
  UnregisteredOfferIaasType,
  UnregisteredOfferSaasType,
  UnregisteredEndCustomerAggType,
} from './securityScoreGraphQLTypes';

type MissingFieldsOfMonthlyTrendAggSchema = {
  scores?: Schema<ScoreByMonthAggType, boolean>;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MonthlyTrendAggSchema = Merge<
  Schema<MonthlyTrendAggType, boolean>,
  MissingFieldsOfMonthlyTrendAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PaginationSchema = Schema<PaginationsType, boolean>;

type EndCustomerByDateAggSchema = Schema<EndCustomerByDateAggType, boolean>;

type MissingFieldsInEndCustomerAggSchema = {
  data?: EndCustomerByDateAggSchema;
};

type EndCustomerAggSchema = Merge<
  Schema<EndCustomerAggType, boolean>,
  MissingFieldsInEndCustomerAggSchema
>;

type UnregisteredOfferIaasSubscriptionSchema = Schema<
  UnregisteredOfferIaasSubscriptionType,
  boolean
>;
type MissingFieldsInUnregisteredOfferIaasSchema = {
  subscriptions?: UnregisteredOfferIaasSubscriptionSchema;
};

type UnregisteredOfferIaasSchema = Merge<
  Schema<UnregisteredOfferIaasType, boolean>,
  MissingFieldsInUnregisteredOfferIaasSchema
>;

type UnregisteredOfferSaasSchema = Schema<UnregisteredOfferSaasType, boolean>;

type UnregisteredOffersSchema = {
  iaas?: UnregisteredOfferIaasSchema;
  saas?: UnregisteredOfferSaasSchema;
};

type UnregisteredEndCustomerAggTypeSchema = Schema<
  UnregisteredEndCustomerAggType,
  boolean
>;
type MissingFieldsInUnregisteredEndCustomerAggSchema = {
  offers?: UnregisteredOffersSchema;
};

type UnregisteredEndCustomerAggSchema = Merge<
  UnregisteredEndCustomerAggTypeSchema,
  MissingFieldsInUnregisteredEndCustomerAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type EndCustomersAggSchema = {
  customers?: EndCustomerAggSchema;
  unregisteredCustomers?: UnregisteredEndCustomerAggSchema;
};

type AccountByDateAggSchema = Schema<AccountByDateAggType, boolean>;

type MissingFieldsInAccountAggSchema = {
  data?: AccountByDateAggSchema;
};

type AccountAggSchema = Merge<
  Schema<AccountAggType, boolean>,
  MissingFieldsInAccountAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type AccountsAggSchema = {
  accounts?: AccountAggSchema;
  unregisteredAccounts?: UnregisteredOffersSchema;
};

type FilterValuesSchema = Schema<FilterValuesType, boolean>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type FilterSchema = {
  name?: boolean;
  values?: FilterValuesSchema;
};

type NameCountByDateAggSchema = Schema<NameCountByDateAggType, boolean>;

type MissingFieldsInSeverityAggSchema = {
  data?: NameCountByDateAggSchema;
};

type CheckCountByDateAggSchema = Schema<CheckCountByDateAggType, boolean>;

type MissingFieldsInCheckAggSchema = {
  data?: CheckCountByDateAggSchema;
};

type CheckAggSchema = Merge<
  Schema<CheckAggType, boolean>,
  MissingFieldsInCheckAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ChecksAggSchema = {
  checks?: CheckAggSchema;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PeriodsSchema = Schema<PeriodsType, boolean>;

type CheckSchema = Schema<CheckType, boolean>;

type MissingFieldsInStandardType = {
  checks?: CheckSchema;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardSchema = Merge<
  Schema<StandardType, boolean>,
  MissingFieldsInStandardType
>;

type MissingFieldsInAccountSchema = {
  standards?: StandardSchema;
};

type AccountSchema = Merge<
  Schema<AccountType, boolean>,
  MissingFieldsInAccountSchema
>;

type RegistrationSchema = Schema<RegistrationType, boolean>;
/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ScoreResultSchema = {
  account?: AccountSchema;
  registration?: RegistrationSchema;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type SeverityAggSchema = Merge<
  Schema<SeverityAggType, boolean>,
  MissingFieldsInSeverityAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type SeveritiesAggSchema = {
  severities?: SeverityAggSchema;
};

type StandardByDateAggSchema = Schema<StandardByDateAggType, boolean>;

type MissingFieldsInStandardAggSchema = {
  data?: StandardByDateAggSchema;
};

type StandardAggSchema = Merge<
  Schema<StandardAggType, boolean>,
  MissingFieldsInStandardAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardsAggSchema = { standards?: StandardAggSchema };

type ScoreByDateAggSchema = Schema<ScoreByDateAggType, boolean>;

type MissingFieldsInScoresAggSchema = {
  scores?: ScoreByDateAggSchema;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type ScoresAggSchema = Merge<
  Schema<ScoresAggType, boolean>,
  MissingFieldsInScoresAggSchema
>;

type CheckByDateSchema = Schema<CheckByDateType, boolean>;

type MissingFieldsInChecksByStandardSchema = {
  data?: CheckByDateSchema;
};

type ChecksByStandardSchema = Merge<
  Schema<ChecksByStandardType, boolean>,
  MissingFieldsInChecksByStandardSchema
>;

type MissingFieldsInStandardWithCheckSchema = {
  checks?: ChecksByStandardSchema;
};

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type StandardWithCheckSchema = Merge<
  Schema<StandardWithCheckType, boolean>,
  MissingFieldsInStandardWithCheckSchema
>;

type MarketplacePartnerAggByDateAggSchema = Schema<
  MarketplacePartnerAggByDateAggType,
  boolean
>;

type MissingFieldsInMarketplacePartnerAggSchema = {
  data?: MarketplacePartnerAggByDateAggSchema;
};

type MarketplacePartnerAggSchema = Merge<
  Schema<MarketplacePartnerAggType, boolean>,
  MissingFieldsInMarketplacePartnerAggSchema
>;

type MarketplaceByDateAggSchema = Schema<MarketplaceByDateAggType, boolean>;

type MissingFieldsInMarketplaceAggSchema = {
  data?: MarketplaceByDateAggSchema;
  partners?: MarketplacePartnerAggSchema;
};

type MarketplaceAggSchema = Merge<
  Schema<MarketplaceAggType, boolean>,
  MissingFieldsInMarketplaceAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type MarketplacesAggSchema = {
  marketplaces?: MarketplaceAggSchema;
};

type PartnerByDateAggTypeSchema = Schema<PartnerByDateAggType, boolean>;

type MissingFieldsInPartnerAggSchema = {
  data?: PartnerByDateAggTypeSchema;
};

type PartnerAggSchema = Merge<
  Schema<PartnerAggType, boolean>,
  MissingFieldsInPartnerAggSchema
>;

/**
 * @deprecated
 * Prefer using equivalent type in the wellArchitected
 */
export type PartnersAggSchema = {
  partners?: PartnerAggSchema;
};
