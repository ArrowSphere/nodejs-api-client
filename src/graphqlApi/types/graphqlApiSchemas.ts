import { Merge, Schema } from 'type-fest';
import {
  ArrowCompanyType,
  CompanyExtraInformation,
  EndCustomerType,
  PartnerType,
} from './entities/company';
import { PartnertagType } from './entities/partnertag';
import { ContinentType, CountryType } from './entities/country';
import { WorkgroupType } from './entities/workgroup';
import {
  ErrorsType,
  PageType,
  Queries,
  SelectDataField,
  SelectableField,
} from './graphqlApiQueries';
import { ContactsType } from './entities/contact';
import { ProgramType } from '../../catalog';
import { SubscriptionType } from './entities/subscription';
import { SpecialPriceRateType } from './entities/specialPriceRate';
import { OrderItemsType, OrdersType } from './entities/order';
import { VendorsType } from './entities/vendor';
import { SubscribedProgramType } from './entities/program';
import {
  LicenseBudgetNotificationType,
  LicenseBudgetType,
} from './entities/licenseBudget';
import { UserHistoryType, UserType } from './entities/user';
import { OrganizationUnitsType } from './entities/organizationUnit';
import { CurrencyType } from './entities/currency';
import { QuoteItemType, QuoteType } from './entities/quote';

export type PartnertagSchema = Schema<PartnertagType, boolean>;

type MissingFieldsOfCompanySchema = {
  contacts?: ContactsSchema;
  currency?: CurrencySchema;
  extraInformations?: CompanyExtraInformationSchema;
  orders?: OrdersSchema;
  partnerTags?: PartnertagSchema;
  subscribedPrograms?: SubscribedProgramSchema;
  subscriptions?: SubscriptionSchema;
};

type MissingFieldsOfArrowCompanySchema = {
  extraInformations?: CompanyExtraInformationSchema;
  orders?: OrdersSchema;
  subscriptions?: SubscriptionSchema;
};

type MissingFieldsOfEndCustomerSchema = {
  extraInformations?: CompanyExtraInformationSchema;
  contacts?: ContactsSchema;
  orders?: OrdersSchema;
  partnerTags?: PartnertagSchema;
  partner?: PartnerSchema;
};

type MissingFieldsOfOrderItemSchema = {
  priceRates?: SpecialPriceRateSchema;
};

type MissingFieldsOfOrdersSchema = {
  items?: OrderItemsSchema;
};

type MissingFieldsOfContactSchema = {
  organizationUnits?: OrganizationUnitSchema;
};

type MissingFieldsOfUserSchema = {
  contact?: ContactsSchema;
  userTags?: PartnertagSchema;
};

type MissingFieldsOfLicenseBudgetSchema = {
  notifications?: LicenseBudgetNotificationSchema;
};

type MissingFieldsOfQuoteSchema = {
  arrowCompany?: ArrowCompanySchema;
  endCustomer?: EndCustomerSchema;
  items?: QuoteItemSchema;
  partner?: PartnerSchema;
};

type MissingFieldsOfQuoteItemSchema = {
  program?: LicenseBudgetNotificationSchema;
};

export type QuoteItemSchema = Merge<
  Schema<QuoteItemType, boolean>,
  MissingFieldsOfQuoteItemSchema
>;

export type QuoteSchema = Merge<
  Schema<QuoteType, boolean>,
  MissingFieldsOfQuoteSchema
>;

export type ContactsSchema = Merge<
  Schema<ContactsType, boolean>,
  MissingFieldsOfContactSchema
>;

export type UserSchema = Merge<
  Schema<UserType, boolean>,
  MissingFieldsOfUserSchema
>;

export type LicenseBudgetSchema = Merge<
  Schema<LicenseBudgetType, boolean>,
  MissingFieldsOfLicenseBudgetSchema
>;

export type OrderItemsSchema = Merge<
  Schema<OrderItemsType, boolean>,
  MissingFieldsOfOrderItemSchema
>;

export type OrdersSchema = Merge<
  Schema<OrdersType, boolean>,
  MissingFieldsOfOrdersSchema
>;

export type EndCustomerSchema = Merge<
  Schema<EndCustomerType, boolean>,
  MissingFieldsOfEndCustomerSchema
>;

export type PartnerSchema = Merge<
  Schema<PartnerType, boolean>,
  MissingFieldsOfCompanySchema
>;

export type ArrowCompanySchema = Merge<
  Schema<ArrowCompanyType, boolean>,
  MissingFieldsOfArrowCompanySchema
>;

export type CompanyExtraInformationSchema = Schema<
  CompanyExtraInformation,
  boolean
>;

export type ContinentSchema = Schema<ContinentType, boolean>;
export type CountrySchema = Schema<CountryType, boolean>;
export type CurrencySchema = Schema<CurrencyType, boolean>;
export type ErrorsSchema = Schema<ErrorsType, boolean>;
export type LicenseBudgetNotificationSchema = Schema<
  LicenseBudgetNotificationType,
  boolean
>;
export type OrganizationUnitSchema = Schema<OrganizationUnitsType, boolean>;
export type PageSchema = Schema<PageType, boolean>;
export type ProgramSchema = Schema<ProgramType, boolean>;
export type SpecialPriceRateSchema = Schema<SpecialPriceRateType, boolean>;
export type SubscribedProgramSchema = Schema<SubscribedProgramType, boolean>;
export type SubscriptionSchema = Schema<SubscriptionType, boolean>;
export type UserHistorySchema = Schema<UserHistoryType, boolean>;
export type VendorSchema = Schema<VendorsType, boolean>;
export type WorkgroupSchema = Schema<WorkgroupType, boolean>;

export type SelectAllResultSchema = {
  [SelectableField.DATA]?: SelectAllResponseDataSchema;
  [SelectableField.ERRORS]?: ErrorsSchema;
  [SelectableField.PAGINATION]?: PageSchema;
};

export type SelectAllResponseDataSchema = {
  [SelectDataField.ARROW_COMPANY]?: ArrowCompanySchema;
  [SelectDataField.CONTINENT]?: ContinentSchema;
  [SelectDataField.COUNTRY]?: CountrySchema;
  [SelectDataField.END_CUSTOMER]?: EndCustomerSchema;
  [SelectDataField.LICENSE_BUDGET]?: LicenseBudgetSchema;
  [SelectDataField.PARTNER]?: PartnerSchema;
  [SelectDataField.PARTNERTAG]?: PartnertagSchema;
  [SelectDataField.QUOTE]?: QuoteSchema;
  [SelectDataField.SUBSCRIBED_PROGRAM]?: SubscribedProgramSchema;
  [SelectDataField.SUBSCRIPTION]?: SubscriptionSchema;
  [SelectDataField.USER]?: UserSchema;
  [SelectDataField.USER_HISTORY]?: UserHistorySchema;
  [SelectDataField.WORKGROUP]?: WorkgroupSchema;
};

export type SelectOneResultSchema = {
  [SelectableField.DATA]?: SelectOneResponseDataSchema;
  [SelectableField.ERRORS]?: ErrorsSchema;
};

export type SelectOneResponseDataSchema = {
  [SelectDataField.ARROW_COMPANY]?: ArrowCompanySchema;
  [SelectDataField.CONTINENT]?: ContinentSchema;
  [SelectDataField.COUNTRY]?: CountrySchema;
  [SelectDataField.END_CUSTOMER]?: EndCustomerSchema;
  [SelectDataField.LICENSE_BUDGET]?: LicenseBudgetSchema;
  [SelectDataField.PARTNER]?: PartnerSchema;
  [SelectDataField.PARTNERTAG]?: PartnertagSchema;
  [SelectDataField.QUOTE]?: QuoteSchema;
  [SelectDataField.SUBSCRIBED_PROGRAM]?: SubscribedProgramSchema;
  [SelectDataField.SUBSCRIPTION]?: SubscriptionSchema;
  [SelectDataField.USER]?: UserSchema;
  [SelectDataField.USER_HISTORY]?: UserHistorySchema;
  [SelectDataField.WORKGROUP]?: WorkgroupSchema;
};

export type SelectAllQuerySchema = {
  [Queries.SELECT_ALL]?: SelectAllResultSchema;
};

export type SelectOneQuerySchema = {
  [Queries.SELECT_ONE]?: SelectOneResultSchema;
};
