import { AbstractEntity } from '../../../abstractEntity';

export enum EavKeyEnum {
  AVEPOINT_EMAIL = 'avepoint_email',
  AWS_ACCOUNT_NUMBER = 'aws_account_number',
  AWS_ACCOUNT_CREATION_DATE = 'aws_account_creation_date',
  AWS_ADDENDUM = 'aws_addendum',
  AWS_COMPETENCY = 'aws_competency',
  AWS_LAST_MONTH_TOTAL_AMOUNT_CONSUMPTION = 'aws_last_month_total_amount_consumption',
  AWS_PUBLIC_SECTOR = 'aws_public_sector',
  BINERO_CLOUD_EMAIL = 'binero_cloud_email',
  BINERO_CLOUD_USERNAME = 'binero_cloud_username',
  CHECKPOINT_USER_CENTER_ID = 'checkpoint_user_center_id',
  DECLINE_PROMOTION = 'decline_promotion',
  EXOSCALE_ORGANIZATION_EMAIL = 'exoscale_organization_email',
  FRIENDLY_NAME = 'friendly_name',
  GOOGLE_ORDER_EMAIL = 'google_order_email',
  GREENLAKE_OPPORTUNITY_ID = 'greenlake_opportunity_id',
  GREENLAKE_QUOTE_ID = 'greenlake_quote_id',
  IBM_ODER_REFERENCE_NUMBER = 'ibm_order_reference_number',
  IBM_VERIFY_TENANT_NAME = 'ibm_verify_tenant_name',
  IBM_VERIFY_REGION = 'ibm_verify_region',
  REALORDER_VENDOR_SUBSCRIPTION_ID = 'realorder_vendor_subscription_id',
  ORACLE_ONLINE_KEY = 'oracle_online_key',
  ORACLE_ORGANIZATION_EMAIL = 'oracle_organization_email',
  ORDER_COMMENT_ONE = 'order_comment_1',
  ORDER_COMMENT_TWO = 'order_comment_2',
  ORDER_PROMOTION_CODE = 'order_promotion_code',
  PARTNER_ATTESTATION = 'partner_attestation',
  QUOTE_PROMOTION_CODE = 'quote_promotion_code',
  SCALEWAY_ORDER_EMAIL = 'scaleway_order_email',
  SOPHOS_ADMIN_EMAIL = 'sophos_admin_email',
  SOPHOS_ADMIN_FIRST_NAME = 'sophos_admin_first_name',
  SOPHOS_ADMIN_LAST_NAME = 'sophos_admin_last_name',
  SOPHOS_ORDER_COUNTRY = 'sophos_order_country',
  SUBSCRIPTION_START_DATE = 'subscription_start_date',
  SUBSCRIPTION_END_DATE = 'subscription_end_date',
  VENDOR_SUBSCRIPTION_ID = 'vendor_subscription_id',
  VM_WARE_ORAN = 'vm_ware_oran',
}

export enum CompanyDetailKeyEnum {
  DOMAIN_NAME = 'DOMAIN_NAME',
  ORACLE_ONLINE_KEY = 'ORACLE_ONLINE_KEY',
  IBM_PARTNER_ID = 'IBM_PARTNER_ID',
  IBM_CE_ID = 'IBM_CE_ID',
  MIGRATION = 'MIGRATION',
  MICRO_EU_ENROL_NU = 'MICRO_EU_ENROL_NU',
  IBM_CUSTOMER_NUMBER = 'IBM_CUSTOMER_NUMBER',
  IBM_MAAS_ACCOUNT_ID = 'IBM_MAAS_ACCOUNT_ID',
  TENANT_ID = 'TENANT_ID',
  AZURE_TENANT_ID = 'AZURE_TENANT_ID',
  VADE_SECURE_TENANT_ID = 'VADE_SECURE_TENANT_ID',
  XCP_DOMAIN = 'XCP_DOMAIN',
  PRIVATE_CATALOG_EMAIL = 'PRIVATE_CATALOG_EMAIL',
}

export declare enum XspTableNameEnum {
  QUOTE_ITEM = 'QUOTE_ITEM',
  ORDER_ITEM = 'ORDER_ITEM',
  ORDER_INFO = 'ORDER_INFO',
  REALORDER = 'REALORDER',
  QUOTE_INFO = 'QUOTE_INFO',
}

export enum ExtraDataEavFields {
  EAV_KEY_NAME = 'eavkeyName',
  TABLE_NAME = 'tableName',
  VALUE = 'value',
}

export enum ExtraDataCompanyDetailFields {
  NAME = 'name',
  VALUE = 'value',
}

type ExtraDataEav = {
  [ExtraDataEavFields.EAV_KEY_NAME]: string;
  [ExtraDataEavFields.TABLE_NAME]: string;
  [ExtraDataEavFields.VALUE]?: string;
};

type ExtraDataCompanyDetail = {
  [ExtraDataCompanyDetailFields.NAME]: string;
  [ExtraDataCompanyDetailFields.VALUE]?: string;
};

export enum ExtraDataFields {
  EAVS = 'eavs',
  COMPANY_DETAILS = 'company_details',
}

export type ExtraData = {
  [ExtraDataFields.EAVS]?: ExtraDataEav[];
  [ExtraDataFields.COMPANY_DETAILS]?: ExtraDataCompanyDetail[];
};

export class ExtraDataEavResult extends AbstractEntity<ExtraDataEav> {
  readonly #eavkeyName: string;
  readonly #tableName: string;
  readonly #value?: string;

  public constructor(data: ExtraDataEav) {
    super(data);

    this.#eavkeyName = data[ExtraDataEavFields.EAV_KEY_NAME];
    this.#tableName = data[ExtraDataEavFields.TABLE_NAME];
    this.#value = data[ExtraDataEavFields.VALUE];
  }

  public toJSON(): ExtraDataEav {
    return {
      [ExtraDataEavFields.EAV_KEY_NAME]: this.#eavkeyName,
      [ExtraDataEavFields.TABLE_NAME]: this.#tableName,
      [ExtraDataEavFields.VALUE]: this.#value,
    };
  }
}

export class ExtraDataCompanyDetailResult extends AbstractEntity<ExtraDataCompanyDetail> {
  readonly #name: string;
  readonly #value?: string;

  public constructor(data: ExtraDataCompanyDetail) {
    super(data);

    this.#name = data[ExtraDataCompanyDetailFields.NAME];
    this.#value = data[ExtraDataCompanyDetailFields.VALUE];
  }

  public toJSON(): ExtraDataCompanyDetail {
    return {
      [ExtraDataCompanyDetailFields.NAME]: this.#name,
      [ExtraDataCompanyDetailFields.VALUE]: this.#value,
    };
  }
}

export class ExtraDataGetResult extends AbstractEntity<ExtraData> {
  readonly #eavs?: ExtraDataEavResult[];
  readonly #companyDetails?: ExtraDataCompanyDetailResult[];

  public constructor(data: ExtraData) {
    super(data);

    this.#eavs = data[ExtraDataFields.EAVS]?.map(
      (result: ExtraDataEav): ExtraDataEavResult =>
        new ExtraDataEavResult(result),
    );
    this.#companyDetails = data[ExtraDataFields.COMPANY_DETAILS]?.map(
      (result: ExtraDataCompanyDetail): ExtraDataCompanyDetailResult =>
        new ExtraDataCompanyDetailResult(result),
    );
  }

  public toJSON(): ExtraData {
    return {
      [ExtraDataFields.EAVS]: this.#eavs?.map(
        (extraDataEavResult: ExtraDataEavResult): ExtraDataEav =>
          extraDataEavResult.toJSON(),
      ),
      [ExtraDataFields.COMPANY_DETAILS]: this.#companyDetails?.map(
        (
          extraDataCompanyDetailResult: ExtraDataCompanyDetailResult,
        ): ExtraDataCompanyDetail => extraDataCompanyDetailResult.toJSON(),
      ),
    };
  }
}
