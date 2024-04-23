import { AbstractEntity } from '../../../abstractEntity';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum EndCustomerOrganizationUnitFindResultFields {
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_NAME = 'name',
  COLUMN_LAST_UPDATE = 'lastUpdate',
}

export type EndCustomerOrganizationUnitFindResultType = {
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF]: string;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]: string;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE]: string;
};

export type EndCustomerOrganisationUnitDataKeywords = {
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF]?: DataKeywords;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]?: DataKeywords;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE]?: DataKeywords;
};

export type EndCustomerOrganizationUnitSortParameters = {
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF]?: SortParameters;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]?: SortParameters;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE]?: SortParameters;
};

export type EndCustomerOrganizationUnitFiltersParameters = {
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF]?: FiltersParameters;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]?: FiltersParameters;
  [EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
};

export class EndCustomerOrganizationUnitFindResult extends AbstractEntity<EndCustomerOrganizationUnitFindResultType> {
  readonly #organizationUnitRef: string;
  readonly #name: string;
  readonly #lastUpdate: string;

  public constructor(
    endCustomerOrganizationUnit: EndCustomerOrganizationUnitFindResultType,
  ) {
    super(endCustomerOrganizationUnit);

    this.#organizationUnitRef =
      endCustomerOrganizationUnit[
        EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF
      ];
    this.#name =
      endCustomerOrganizationUnit[
        EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME
      ];
    this.#lastUpdate =
      endCustomerOrganizationUnit[
        EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE
      ];
  }

  public get organizationUnitRef(): string {
    return this.#organizationUnitRef;
  }

  public get name(): string {
    return this.#name;
  }

  public get lastUpdate(): string {
    return this.#lastUpdate;
  }

  public toJSON(): EndCustomerOrganizationUnitFindResultType {
    return {
      [EndCustomerOrganizationUnitFindResultFields.COLUMN_ORGANIZATION_UNIT_REF]: this
        .organizationUnitRef,
      [EndCustomerOrganizationUnitFindResultFields.COLUMN_NAME]: this.name,
      [EndCustomerOrganizationUnitFindResultFields.COLUMN_LAST_UPDATE]: this
        .lastUpdate,
    };
  }
}
