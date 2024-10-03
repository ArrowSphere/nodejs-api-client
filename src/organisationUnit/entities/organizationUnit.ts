import { AbstractEntity } from '../../abstractEntity';

export enum OrganizationUnitFields {
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_COMPANY_REF = 'companyRef',
  COLUMN_NAME = 'name',
  COLUMN_COUNT_USERS = 'countUsers',
  COLUMN_COUNT_CUSTOMERS = 'countCustomers',
  COLUMN_COUNT_LICENSES = 'countLicenses',
  COLUMN_COUNT_ORDERS = 'countOrders',
}

export type OrganizationUnitType = {
  [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: string;
  [OrganizationUnitFields.COLUMN_COMPANY_REF]: string;
  [OrganizationUnitFields.COLUMN_NAME]: string;
  [OrganizationUnitFields.COLUMN_COUNT_USERS]?: number;
  [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]?: number;
  [OrganizationUnitFields.COLUMN_COUNT_LICENSES]?: number;
  [OrganizationUnitFields.COLUMN_COUNT_ORDERS]?: number;
};

export class OrganizationUnit extends AbstractEntity<OrganizationUnitType> {
  readonly #organizationUnitRef: string;
  readonly #companyRef: string;
  readonly #name: string;
  readonly #countUsers?: number;
  readonly #countCustomers?: number;
  readonly #countLicenses?: number;
  readonly #countOrders?: number;

  public constructor(organizationUnitInput: OrganizationUnitType) {
    super(organizationUnitInput);

    this.#organizationUnitRef =
      organizationUnitInput[
        OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF
      ];
    this.#companyRef =
      organizationUnitInput[OrganizationUnitFields.COLUMN_COMPANY_REF];
    this.#name = organizationUnitInput[OrganizationUnitFields.COLUMN_NAME];
    this.#countUsers =
      organizationUnitInput[OrganizationUnitFields.COLUMN_COUNT_USERS];
    this.#countCustomers =
      organizationUnitInput[OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS];
    this.#countLicenses =
      organizationUnitInput[OrganizationUnitFields.COLUMN_COUNT_LICENSES];
    this.#countOrders =
      organizationUnitInput[OrganizationUnitFields.COLUMN_COUNT_ORDERS];
  }

  get organizationUnitRef(): string {
    return this.#organizationUnitRef;
  }

  get companyRef(): string {
    return this.#companyRef;
  }

  get name(): string {
    return this.#name;
  }

  get countUsers(): number | undefined {
    return this.#countUsers;
  }

  get countCustomers(): number | undefined {
    return this.#countCustomers;
  }

  get countLicenses(): number | undefined {
    return this.#countLicenses;
  }

  get countOrders(): number | undefined {
    return this.#countOrders;
  }

  public toJSON(): OrganizationUnitType {
    return {
      [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: this
        .organizationUnitRef,
      [OrganizationUnitFields.COLUMN_COMPANY_REF]: this.companyRef,
      [OrganizationUnitFields.COLUMN_NAME]: this.name,
      [OrganizationUnitFields.COLUMN_COUNT_USERS]: this.countUsers,
      [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]: this.countCustomers,
      [OrganizationUnitFields.COLUMN_COUNT_LICENSES]: this.countLicenses,
      [OrganizationUnitFields.COLUMN_COUNT_ORDERS]: this.countOrders,
    };
  }
}
