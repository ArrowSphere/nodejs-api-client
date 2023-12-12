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

export enum ExtraDataFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUE = 'value',
}

export type ExtraDataType = {
  [ExtraDataFields.COLUMN_NAME]: string;
  [ExtraDataFields.COLUMN_VALUE]?: string;
};

export class ExtraDataResult extends AbstractEntity<ExtraDataType> {
  readonly #name: string;
  readonly #value?: string;

  public constructor(data: ExtraDataType) {
    super(data);

    this.#name = data[ExtraDataFields.COLUMN_NAME];
    this.#value = data[ExtraDataFields.COLUMN_VALUE];
  }

  public toJSON(): ExtraDataType {
    return {
      [ExtraDataFields.COLUMN_NAME]: this.#name,
      [ExtraDataFields.COLUMN_VALUE]: this.#value,
    };
  }
}
