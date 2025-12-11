import { AbstractEntity } from '../../abstractEntity';

export enum OrganizationUnitsFields {
  COLUMN_ID = 'id',
  COLUMN_NAME = 'name',
}

export type OrganizationUnitsType = {
  [OrganizationUnitsFields.COLUMN_ID]: number;
  [OrganizationUnitsFields.COLUMN_NAME]: string;
};

export class OrganizationUnits extends AbstractEntity<OrganizationUnitsType> {
  readonly #id: number;
  readonly #name: string;

  public constructor(organizationUnitsDataInput: OrganizationUnitsType) {
    super(organizationUnitsDataInput);

    this.#id = organizationUnitsDataInput[OrganizationUnitsFields.COLUMN_ID];
    this.#name =
      organizationUnitsDataInput[OrganizationUnitsFields.COLUMN_NAME];
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  public toJSON(): OrganizationUnitsType {
    return {
      [OrganizationUnitsFields.COLUMN_ID]: this.id,
      [OrganizationUnitsFields.COLUMN_NAME]: this.name,
    };
  }
}
