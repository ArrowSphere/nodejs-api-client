import { AbstractEntity } from '../../../../abstractEntity';

export enum DetailsFields {
  COLUMN_MIGRATION = 'Migration',
  COLUMN_DOMAIN_NAME = 'DomainName',
  COLUMN_ORACLE_ONLINE_KEY = 'OracleOnlineKey',
  COLUMN_IBM_CE_ID = 'IBMCeId',
  COLUMN_MASS_360_RESELLER_ID = 'Maas360ResellerId',
  COLUMN_TENANT_ID = 'TenantID',
}

export type DetailsType = {
  [DetailsFields.COLUMN_MIGRATION]?: boolean;
  [DetailsFields.COLUMN_DOMAIN_NAME]?: string;
  [DetailsFields.COLUMN_ORACLE_ONLINE_KEY]?: string;
  [DetailsFields.COLUMN_IBM_CE_ID]?: string;
  [DetailsFields.COLUMN_MASS_360_RESELLER_ID]?: string;
  [DetailsFields.COLUMN_TENANT_ID]?: string;
};

export class Details extends AbstractEntity<DetailsType> {
  readonly #migration?: boolean;
  readonly #domainName?: string;
  readonly #oracleOnlineKey?: string;
  readonly #iBMCeId?: string;
  readonly #maas360ResellerId?: string;
  readonly #tenantId?: string;

  public constructor(getCustomersDetailsDataInput: DetailsType) {
    super(getCustomersDetailsDataInput);

    this.#migration =
      getCustomersDetailsDataInput[DetailsFields.COLUMN_MIGRATION];
    this.#domainName =
      getCustomersDetailsDataInput[DetailsFields.COLUMN_DOMAIN_NAME];
    this.#oracleOnlineKey =
      getCustomersDetailsDataInput[DetailsFields.COLUMN_ORACLE_ONLINE_KEY];
    this.#iBMCeId =
      getCustomersDetailsDataInput[DetailsFields.COLUMN_IBM_CE_ID];
    this.#maas360ResellerId =
      getCustomersDetailsDataInput[DetailsFields.COLUMN_MASS_360_RESELLER_ID];
    this.#tenantId =
      getCustomersDetailsDataInput[DetailsFields.COLUMN_TENANT_ID];
  }

  get Migration(): boolean | undefined {
    return this.#migration;
  }

  get DomainName(): string | undefined {
    return this.#domainName;
  }

  get OracleOnlineKey(): string | undefined {
    return this.#oracleOnlineKey;
  }

  get IBMCeId(): string | undefined {
    return this.#iBMCeId;
  }

  get Maas360ResellerId(): string | undefined {
    return this.#maas360ResellerId;
  }

  get TenantId(): string | undefined {
    return this.#tenantId;
  }

  public toJSON(): DetailsType {
    return {
      [DetailsFields.COLUMN_MIGRATION]: this.Migration,
      [DetailsFields.COLUMN_DOMAIN_NAME]: this.DomainName,
      [DetailsFields.COLUMN_ORACLE_ONLINE_KEY]: this.OracleOnlineKey,
      [DetailsFields.COLUMN_IBM_CE_ID]: this.IBMCeId,
      [DetailsFields.COLUMN_MASS_360_RESELLER_ID]: this.Maas360ResellerId,
      [DetailsFields.COLUMN_TENANT_ID]: this.TenantId,
    };
  }
}
