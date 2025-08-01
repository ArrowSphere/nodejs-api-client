import { Merge, Schema } from 'type-fest';
import {
  ArrowCompanyType,
  BaseCompanyType,
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
import { SubscriptionType } from './entities/subscription';
import { SpecialPriceRateType } from './entities/specialPriceRate';
import {
  GraphqlApiOrderHistoryType,
  GraphqlApiOrderLinkType,
  GraphqlApiOrderListType,
  OrderItemsType,
  OrdersType,
} from './entities/order';
import {
  GraphqlApiProgramType,
  ProgramBenefitType,
  ProgramLevelType,
  ProgramRequirementType,
  ProgramLevelOptionGroupType,
  ProgramLevelOptionType,
  SubscribedProgramType,
  SubscriptionExtraFieldType,
} from './entities/program';
import {
  LicenseBudgetNotificationType,
  LicenseBudgetType,
} from './entities/licenseBudget';
import { UserHistoryType, UserType } from './entities/user';
import { OrganizationUnitsType } from './entities/organizationUnit';
import { CurrencyType } from './entities/currency';
import {
  ItemData,
  NameValueType,
  QuoteItemType,
  QuoteType,
} from './entities/quote';
import { QuoteVersion } from './entities/quoteVersion';
import { Comment } from './entities/comment';
import {
  GraphqlApiReportItemType,
  GraphqlApiReportStatusType,
  GraphqlApiReportType,
} from './entities/report';
import { GraphqlApiEavType } from './entities/eav';
import { GraphqlApiSupportLevel } from './entities/supportLevel';
import {
  GraphqlApiContributorRoleType,
  GraphqlApiStaffType,
} from './entities/contributor';

export type PartnertagSchema = Schema<PartnertagType, boolean>;

type MissingFieldsOfCompanySchema = {
  contacts?: ContactsSchema;
  currency?: CurrencySchema;
  extraInformations?: CompanyExtraInformationSchema;
  orders?: OrdersSchema;
  organizationUnits?: OrganizationUnitSchema;
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
  country?: CountrySchema;
};

type MissingFieldsOfOrderItemSchema = {
  migratedFrom?: GraphqlApiOrderLinkSchema;
  migratedTo?: GraphqlApiOrderLinkSchema;
  priceRates?: SpecialPriceRateSchema;
  itemData?: ItemDataSchema;
};

type MissingFieldsOfOrdersSchema = {
  eavs?: GraphqlApiEavSchema;
  items?: OrderItemsSchema;
};

type MissingFieldsOfContactSchema = {
  companies?: BaseCompanySchema;
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
  comments?: CommentSchema;
  items?: QuoteItemSchema;
  partner?: PartnerSchema;
  versions?: QuoteVersionSchema;
  lastVersion?: QuoteVersionSchema;
};

type MissingFieldsOfQuoteItemSchema = {
  program?: GraphqlApiProgramSchema;
  itemData?: ItemDataSchema;
  version?: QuoteVersionSchema;
};
type MissingFieldsOfCommentSchema = {
  user?: UserSchema;
};

export type QuoteItemSchema = Merge<
  Schema<QuoteItemType, boolean>,
  MissingFieldsOfQuoteItemSchema
>;

export type CommentSchema = Merge<
  Schema<Comment, boolean>,
  MissingFieldsOfCommentSchema
>;

export type QuoteVersionSchema = Schema<QuoteVersion, boolean>;

type MissingFieldsOfCountrySchema = {
  continent?: ContinentSchema;
};

type NameValueTypeSchema = Schema<NameValueType, boolean>;

type MissingFieldsOfItemDataSchema = {
  attributes?: NameValueTypeSchema;
};

export type ItemDataSchema = Merge<
  Schema<ItemData, boolean>,
  MissingFieldsOfItemDataSchema
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

type MissingFieldsOfReportSchema = {
  items?: ReportItemSchema;
};

export type ReportSchema = Merge<
  Schema<GraphqlApiReportType, boolean>,
  MissingFieldsOfReportSchema
>;

export type ReportItemSchema = Schema<GraphqlApiReportItemType, boolean>;

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

export type CountrySchema = Merge<
  Schema<CountryType, boolean>,
  MissingFieldsOfCountrySchema
>;

export type CurrencySchema = Schema<CurrencyType, boolean>;
export type ErrorsSchema = Schema<ErrorsType, boolean>;
export type GraphqlApiEavSchema = Schema<GraphqlApiEavType, boolean>;
export type GraphqlApiOrderHistorySchema = Schema<
  GraphqlApiOrderHistoryType,
  boolean
>;
export type GraphqlApiOrderLinkSchema = Schema<
  GraphqlApiOrderLinkType,
  boolean
>;
export type GraphqlApiOrderListSchema = Schema<
  GraphqlApiOrderListType,
  boolean
>;
export type LicenseBudgetNotificationSchema = Schema<
  LicenseBudgetNotificationType,
  boolean
>;
export type BaseCompanySchema = Schema<BaseCompanyType, boolean>;
export type OrganizationUnitSchema = Schema<OrganizationUnitsType, boolean>;
export type PageSchema = Schema<PageType, boolean>;
export type ProgramBenefitSchema = Schema<ProgramBenefitType, boolean>;
export type ProgramLevelOptionSchema = Schema<ProgramLevelOptionType, boolean>;
export type ProgramRequirementSchema = Schema<ProgramRequirementType, boolean>;
export type ProgramLevelSchema = Merge<
  Schema<ProgramLevelType, boolean>,
  MissingFieldsOfLevelSchema
>;

export type MissingFieldsOfLevelSchema = {
  benefits?: ProgramBenefitSchema;
  programLevelOptionGroups?: ProgramLevelOptionGroupSchema;
  requirements?: ProgramRequirementSchema;
};

type MissingFieldsOfProgramLevelOptionGroupSchema = {
  programLevelOptions?: ProgramLevelOptionSchema;
};

export type ProgramLevelOptionGroupSchema = Merge<
  Schema<ProgramLevelOptionGroupType, boolean>,
  MissingFieldsOfProgramLevelOptionGroupSchema
>;

export type SubscriptionExtraFieldSchema = Schema<
  SubscriptionExtraFieldType,
  boolean
>;

export type MissingFieldsOfProgramSchema = {
  levels?: ProgramLevelSchema;
  subscriptionExtraFields?: SubscriptionExtraFieldSchema;
};
export type GraphqlApiProgramSchema = Merge<
  Schema<GraphqlApiProgramType, boolean>,
  MissingFieldsOfProgramSchema
>;
type MissingFieldsOfStaffSchema = {
  roles?: GraphqlApiContributorRoleSchema;
};
export type GraphqlApiStaffSchema = Merge<
  Schema<GraphqlApiStaffType, boolean>,
  MissingFieldsOfStaffSchema
>;
export type GraphqlApiContributorRoleSchema = Schema<
  GraphqlApiContributorRoleType,
  boolean
>;
export type ReportStatusSchema = Schema<GraphqlApiReportStatusType, boolean>;
export type SpecialPriceRateSchema = Schema<SpecialPriceRateType, boolean>;
export type SubscribedProgramSchema = Schema<SubscribedProgramType, boolean>;
export type SubscriptionSchema = Schema<SubscriptionType, boolean>;
export type UserHistorySchema = Schema<UserHistoryType, boolean>;
export type WorkgroupSchema = Schema<WorkgroupType, boolean>;
export type SupportLevelSchema = Schema<GraphqlApiSupportLevel, boolean>;

export type SelectAllResultSchema = {
  [SelectableField.DATA]?: SelectAllResponseDataSchema;
  [SelectableField.ERRORS]?: ErrorsSchema;
  [SelectableField.PAGINATION]?: PageSchema;
};

export type SelectAllResponseDataSchema = {
  [SelectDataField.ARROW_COMPANY]?: ArrowCompanySchema;
  [SelectDataField.CONTACT]?: ContactsSchema;
  [SelectDataField.CONTINENT]?: ContinentSchema;
  [SelectDataField.COUNTRY]?: CountrySchema;
  [SelectDataField.END_CUSTOMER]?: EndCustomerSchema;
  [SelectDataField.LICENSE_BUDGET]?: LicenseBudgetSchema;
  [SelectDataField.ORGANIZATION_UNIT]?: OrganizationUnitSchema;
  [SelectDataField.ORDER]?: OrdersSchema;
  [SelectDataField.ORDER_HISTORY]?: GraphqlApiOrderHistoryType;
  [SelectDataField.PARTNER]?: PartnerSchema;
  [SelectDataField.PARTNERTAG]?: PartnertagSchema;
  [SelectDataField.PROGRAM]?: GraphqlApiProgramSchema;
  [SelectDataField.PROGRAM_LEVEL]?: ProgramLevelSchema;
  [SelectDataField.PROGRAM_LEVEL_OPTION_GROUP]?: ProgramLevelOptionGroupSchema;
  [SelectDataField.QUOTE]?: QuoteSchema;
  [SelectDataField.REPORT]?: ReportSchema;
  [SelectDataField.REPORT_STATUS]?: ReportStatusSchema;
  [SelectDataField.STAFF]?: GraphqlApiStaffSchema;
  [SelectDataField.SUBSCRIBED_PROGRAM]?: SubscribedProgramSchema;
  [SelectDataField.SUBSCRIPTION]?: SubscriptionSchema;
  [SelectDataField.USER]?: UserSchema;
  [SelectDataField.USER_HISTORY]?: UserHistorySchema;
  [SelectDataField.WORKGROUP]?: WorkgroupSchema;
  [SelectDataField.SUPPORT_LEVEL]?: SupportLevelSchema;
};

export type SelectOneResultSchema = {
  [SelectableField.DATA]?: SelectOneResponseDataSchema;
  [SelectableField.ERRORS]?: ErrorsSchema;
};

export type SelectOneResponseDataSchema = SelectAllResponseDataSchema;

export type SelectAllQuerySchema = {
  [Queries.SELECT_ALL]?: SelectAllResultSchema;
};

export type SelectOneQuerySchema = {
  [Queries.SELECT_ONE]?: SelectOneResultSchema;
};
