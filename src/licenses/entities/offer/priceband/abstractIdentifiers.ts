import { AbstractEntity } from '../../../../abstractEntity';
import { ArrowsphereFindResult } from './identifiers/arrowsphereFindResult';
import { Rules } from 'validatorjs';
import {
  ArrowsphereData,
  ArrowsphereDataFiltersParameters,
  ArrowsphereDataKeywords,
  ArrowsphereDataSortParameters,
  ArrowsphereFields,
} from './identifiers/abstractArrowsphere';

export enum IdentifiersFields {
  COLUMN_ARROWSPHERE = 'arrowsphere',
}

export type IdentifiersData = {
  [IdentifiersFields.COLUMN_ARROWSPHERE]: ArrowsphereData;
};

export type IdentifiersDataKeywords = {
  [IdentifiersFields.COLUMN_ARROWSPHERE]: ArrowsphereDataKeywords;
};

export type IdentifiersDataSortParameters = {
  [IdentifiersFields.COLUMN_ARROWSPHERE]: ArrowsphereDataSortParameters;
};

export type IdentifiersDataFiltersParameters = {
  [IdentifiersFields.COLUMN_ARROWSPHERE]: ArrowsphereDataFiltersParameters;
};

export abstract class AbstractIdentifiers extends AbstractEntity<IdentifiersData> {
  protected VALIDATION_RULES: Rules = {
    [IdentifiersFields.COLUMN_ARROWSPHERE]: 'present|array',
  };

  readonly #arrowsphere: ArrowsphereFindResult;

  protected constructor(data: IdentifiersData) {
    super(data);

    const arrowsphere: ArrowsphereData = {
      [ArrowsphereFields.COLUMN_SKU]:
        data[IdentifiersFields.COLUMN_ARROWSPHERE][
          ArrowsphereFields.COLUMN_SKU
        ],
    };
    this.#arrowsphere = new ArrowsphereFindResult(arrowsphere);
  }

  public get arrowsphere(): ArrowsphereFindResult {
    return this.#arrowsphere;
  }

  public toJSON(): IdentifiersData {
    return {
      [IdentifiersFields.COLUMN_ARROWSPHERE]: this.arrowsphere.toJSON(),
    };
  }
}
