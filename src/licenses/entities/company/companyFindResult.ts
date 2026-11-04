import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum CompanyFindResultFields {
  COMPANY_REF = 'companyRef',
  COMPANY_NAME = 'companyName',
  ACRONYM = 'acronym',
  ERP_ID = 'erpId',
}

export type CompanyFiltersParameters = {
  [CompanyFindResultFields.COMPANY_REF]?: FiltersParameters;
  [CompanyFindResultFields.COMPANY_NAME]?: FiltersParameters;
  [CompanyFindResultFields.ACRONYM]?: FiltersParameters;
  [CompanyFindResultFields.ERP_ID]?: FiltersParameters;
};

export type CompanyDataKeywords = {
  [CompanyFindResultFields.COMPANY_REF]?: DataKeywords;
  [CompanyFindResultFields.COMPANY_NAME]?: DataKeywords;
  [CompanyFindResultFields.ACRONYM]?: DataKeywords;
  [CompanyFindResultFields.ERP_ID]?: DataKeywords;
};

export type CompanySortParameters = {
  [CompanyFindResultFields.COMPANY_REF]?: SortParameters;
  [CompanyFindResultFields.COMPANY_NAME]?: SortParameters;
  [CompanyFindResultFields.ACRONYM]?: SortParameters;
  [CompanyFindResultFields.ERP_ID]?: SortParameters;
};
