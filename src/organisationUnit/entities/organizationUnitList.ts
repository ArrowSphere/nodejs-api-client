import { OrganizationUnit, OrganizationUnitType } from './organizationUnit';
import { AbstractEntity } from '../../abstractEntity';

export type OrganizationUnitListType = Array<OrganizationUnitType>;

export class OrganizationUnitList extends AbstractEntity<OrganizationUnitListType> {
  readonly #organizationUnitList: Array<OrganizationUnit>;

  public constructor(organizationUnitsDataInput: OrganizationUnitListType) {
    super(organizationUnitsDataInput);

    this.#organizationUnitList = organizationUnitsDataInput.map(
      (organizationUnit: OrganizationUnitType) =>
        new OrganizationUnit(organizationUnit),
    );
  }

  get organizationUnitList(): Array<OrganizationUnit> {
    return this.#organizationUnitList;
  }

  public toJSON(): OrganizationUnitListType {
    return this.organizationUnitList.map((organizationUnit) =>
      organizationUnit.toJSON(),
    );
  }
}
