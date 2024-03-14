import { AbstractEntity } from '../../../../abstractEntity';

export enum CustomerContactOrganizationUnitFields {
  COLUMN_ID = 'id',
  COLUMN_NAME = 'name',
}

export type CustomerContactOrganizationUnitType = {
  [CustomerContactOrganizationUnitFields.COLUMN_ID]: number;
  [CustomerContactOrganizationUnitFields.COLUMN_NAME]: string;
};

export class CustomerContactOrganizationUnit extends AbstractEntity<CustomerContactOrganizationUnitType> {
  readonly #id: number;
  readonly #name: string;

  public constructor(
    getCustomerContactOrganizationUnitDataInput: CustomerContactOrganizationUnitType,
  ) {
    super(getCustomerContactOrganizationUnitDataInput);

    this.#id =
      getCustomerContactOrganizationUnitDataInput[
        CustomerContactOrganizationUnitFields.COLUMN_ID
      ];
    this.#name =
      getCustomerContactOrganizationUnitDataInput[
        CustomerContactOrganizationUnitFields.COLUMN_NAME
      ];
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  public toJSON(): CustomerContactOrganizationUnitType {
    return {
      [CustomerContactOrganizationUnitFields.COLUMN_ID]: this.id,
      [CustomerContactOrganizationUnitFields.COLUMN_NAME]: this.name,
    };
  }
}
