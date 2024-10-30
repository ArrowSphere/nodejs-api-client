import { AbstractEntity } from '../../../../../abstractEntity';

export enum OrganizationUnitTypeFields {
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_NAME = 'name',
}

export type OrganizationUnitType = {
  [OrganizationUnitTypeFields.COLUMN_ORGANIZATION_UNIT_REF]?: string;
  [OrganizationUnitTypeFields.COLUMN_NAME]?: string;
};

export class OrganizationUnit extends AbstractEntity<OrganizationUnitType> {
  readonly #organizationUnitRef?: string;
  readonly #name?: string;

  public constructor(data: OrganizationUnit) {
    super(data);

    this.#organizationUnitRef =
      data[OrganizationUnitTypeFields.COLUMN_ORGANIZATION_UNIT_REF];
    this.#name = data[OrganizationUnitTypeFields.COLUMN_NAME];
  }

  get organizationUnitRef(): string | undefined {
    return this.#organizationUnitRef;
  }
  get name(): string | undefined {
    return this.#name;
  }

  public toJSON(): OrganizationUnitType {
    return {
      [OrganizationUnitTypeFields.COLUMN_ORGANIZATION_UNIT_REF]: this
        .organizationUnitRef,
      [OrganizationUnitTypeFields.COLUMN_NAME]: this.name,
    };
  }
}
