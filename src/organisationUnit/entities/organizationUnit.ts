import { AbstractEntity } from '../../abstractEntity';

export enum OrganizationUnitFields {
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_COMPANY_REF = 'companyRef',
  COLUMN_NAME = 'name',
  COLUMN_COUNT_USERS = 'countUsers',
  COLUMN_COUNT_CUSTOMERS = 'countCustomers',
}

export type OrganizationUnitType = {
  [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: string;
  [OrganizationUnitFields.COLUMN_COMPANY_REF]: string;
  [OrganizationUnitFields.COLUMN_NAME]: string;
  [OrganizationUnitFields.COLUMN_COUNT_USERS]?: number;
  [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]?: number;
};

export class OrganizationUnit extends AbstractEntity<OrganizationUnitType> {
  readonly #organizationUnitRef: string;
  readonly #companyRef: string;
  readonly #name: string;
  readonly #countUsers?: number;
  readonly #countCustomers?: number;

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

  public toJSON(): OrganizationUnitType {
    return {
      [OrganizationUnitFields.COLUMN_ORGANIZATION_UNIT_REF]: this
        .organizationUnitRef,
      [OrganizationUnitFields.COLUMN_COMPANY_REF]: this.companyRef,
      [OrganizationUnitFields.COLUMN_NAME]: this.name,
      [OrganizationUnitFields.COLUMN_COUNT_USERS]: this.countUsers,
      [OrganizationUnitFields.COLUMN_COUNT_CUSTOMERS]: this.countCustomers,
    };
  }
}
