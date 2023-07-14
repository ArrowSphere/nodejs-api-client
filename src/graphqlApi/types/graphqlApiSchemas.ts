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
  PaginationType,
  Queries,
  SelectDataFields,
  SelectableFields,
} from './graphqlApiQueries';

export type PartnertagSchema = Schema<PartnertagType, boolean>;

type MissingFieldsOfCompanySchema = {
  partnerTags?: PartnertagSchema;
};

export type EndCustomerSchema = Merge<
  Schema<EndCustomerType, boolean>,
  MissingFieldsOfCompanySchema
>;

export type PartnerSchema = Merge<
  Schema<PartnerType, boolean>,
  MissingFieldsOfCompanySchema
>;

export type ArrowCompanySchema = Schema<ArrowCompanyType, boolean>;
export type ContinentSchema = Schema<ContinentType, boolean>;
export type CountrySchema = Schema<CountryType, boolean>;
export type ErrorsSchema = Schema<ErrorsType, boolean>;
export type PaginationSchema = Schema<PaginationType, boolean>;
export type WorkgroupSchema = Schema<WorkgroupType, boolean>;

export type SelectAllResultSchema = {
  [SelectableFields.DATA]?: SelectAllResponseDataSchema;
  [SelectableFields.ERRORS]?: ErrorsSchema;
  [SelectableFields.PAGINATION]?: PaginationSchema;
};

export type SelectAllResponseDataSchema = {
  [SelectDataFields.ARROW_COMPANY]?: ArrowCompanySchema;
  [SelectDataFields.CONTINENT]?: ContinentSchema;
  [SelectDataFields.COUNTRY]?: CountrySchema;
  [SelectDataFields.END_CUSTOMER]?: EndCustomerSchema;
  [SelectDataFields.PARTNER]?: PartnerSchema;
  [SelectDataFields.PARTNERTAG]?: PartnertagSchema;
  [SelectDataFields.WORKGROUP]?: WorkgroupSchema;
};

export type SelectOneResultSchema = {
  [SelectableFields.DATA]?: SelectOneResponseDataSchema;
  [SelectableFields.ERRORS]?: ErrorsSchema;
};

export type SelectOneResponseDataSchema = {
  [SelectDataFields.ARROW_COMPANY]?: ArrowCompanySchema;
  [SelectDataFields.CONTINENT]?: ContinentSchema;
  [SelectDataFields.COUNTRY]?: CountrySchema;
  [SelectDataFields.END_CUSTOMER]?: EndCustomerSchema;
  [SelectDataFields.PARTNER]?: PartnerSchema;
  [SelectDataFields.PARTNERTAG]?: PartnertagSchema;
  [SelectDataFields.WORKGROUP]?: WorkgroupSchema;
};

export type SelectAllQuerySchema = {
  [Queries.SELECT_ALL]?: SelectAllResultSchema;
};

export type SelectOneQuerySchema = {
  [Queries.SELECT_ONE]?: SelectOneResultSchema;
};
