import { Merge, Schema } from 'type-fest';
import {
  ArrowCompanyType,
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

export type PartnertagSchema = Schema<PartnertagType, boolean>;

type MissingFieldsOfCompanySchema = {
  contacts?: ContactsSchema;
  partnerTags?: PartnertagSchema;
  subscriptions?: SubscriptionSchema;
};

type MissingFieldsOfArrowCompanySchema = {
  subscriptions?: SubscriptionSchema;
};

type MissingFieldsOfEndCustomerSchema = {
  contacts?: ContactsSchema;
  partnerTags?: PartnertagSchema;
  partner?: PartnerSchema;
};

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

export type ContactsSchema = Schema<ContactsType, boolean>;
export type ContinentSchema = Schema<ContinentType, boolean>;
export type CountrySchema = Schema<CountryType, boolean>;
export type ErrorsSchema = Schema<ErrorsType, boolean>;
export type PageSchema = Schema<PageType, boolean>;
export type ProgramSchema = Schema<ProgramType, boolean>;
export type SubscriptionSchema = Schema<SubscriptionType, boolean>;
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
  [SelectDataField.PARTNER]?: PartnerSchema;
  [SelectDataField.PARTNERTAG]?: PartnertagSchema;
  [SelectDataField.SUBSCRIPTION]?: SubscriptionSchema;
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
  [SelectDataField.PARTNER]?: PartnerSchema;
  [SelectDataField.PARTNERTAG]?: PartnertagSchema;
  [SelectDataField.SUBSCRIPTION]?: SubscriptionSchema;
  [SelectDataField.WORKGROUP]?: WorkgroupSchema;
};

export type SelectAllQuerySchema = {
  [Queries.SELECT_ALL]?: SelectAllResultSchema;
};

export type SelectOneQuerySchema = {
  [Queries.SELECT_ONE]?: SelectOneResultSchema;
};
