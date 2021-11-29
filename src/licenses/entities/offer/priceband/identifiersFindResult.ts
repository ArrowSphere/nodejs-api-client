import { AbstractEntity } from '../../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  ArrowsphereFindResult,
  ArrowsphereFindResultData,
  ArrowsphereFindResultDataFiltersParameters,
  ArrowsphereFindResultDataKeywords,
  ArrowsphereFindResultDataSortParameters,
  ArrowsphereFindResultFields,
} from './identifiers/arrowsphereFindResult';

export enum IdentifiersFindResultFields {
  COLUMN_ARROWSPHERE = 'arrowsphere',
}

export type IdentifiersFindResultData = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultData;
};

export type IdentifiersFindResultDataKeywords = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultDataKeywords;
};

export type IdentifiersFindResultDataSortParameters = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultDataSortParameters;
};

export type IdentifiersFindResultDataFiltersParameters = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultDataFiltersParameters;
};

export class IdentifiersFindResult extends AbstractEntity<IdentifiersFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: 'present|array',
  };

  readonly #arrowsphere: ArrowsphereFindResult;

  public constructor(data: IdentifiersFindResultData) {
    super(data);

    const arrowsphere: ArrowsphereFindResultData = {
      [ArrowsphereFindResultFields.COLUMN_SKU]:
        data[IdentifiersFindResultFields.COLUMN_ARROWSPHERE][
          ArrowsphereFindResultFields.COLUMN_SKU
        ],
    };
    this.#arrowsphere = new ArrowsphereFindResult(arrowsphere);
  }

  public get arrowsphere(): ArrowsphereFindResult {
    return this.#arrowsphere;
  }

  public toJSON(): IdentifiersFindResultData {
    return {
      [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: this.arrowsphere.toJSON(),
    };
  }
}
