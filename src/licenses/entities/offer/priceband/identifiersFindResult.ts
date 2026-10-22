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
import {
  ErpFindResult,
  ErpFindResultData,
  ErpFindResultDataFiltersParameters,
  ErpFindResultDataKeywords,
  ErpFindResultDataSortParameters,
  ErpFindResultFields,
} from './identifiers/erpFindResult';

export enum IdentifiersFindResultFields {
  COLUMN_ARROWSPHERE = 'arrowsphere',
  COLUMN_ERP = 'erp',
}

export type IdentifiersFindResultData = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultData;
  [IdentifiersFindResultFields.COLUMN_ERP]?: ErpFindResultData;
};

export type IdentifiersFindResultDataKeywords = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultDataKeywords;
  [IdentifiersFindResultFields.COLUMN_ERP]?: ErpFindResultDataKeywords;
};

export type IdentifiersFindResultDataSortParameters = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultDataSortParameters;
  [IdentifiersFindResultFields.COLUMN_ERP]?: ErpFindResultDataSortParameters;
};

export type IdentifiersFindResultDataFiltersParameters = {
  [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: ArrowsphereFindResultDataFiltersParameters;
  [IdentifiersFindResultFields.COLUMN_ERP]?: ErpFindResultDataFiltersParameters;
};

export class IdentifiersFindResult extends AbstractEntity<IdentifiersFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: 'present|array',
  };

  readonly #arrowsphere: ArrowsphereFindResult;
  readonly #erp?: ErpFindResult;

  public constructor(data: IdentifiersFindResultData) {
    super(data);

    const arrowsphere: ArrowsphereFindResultData = {
      [ArrowsphereFindResultFields.COLUMN_SKU]:
        data[IdentifiersFindResultFields.COLUMN_ARROWSPHERE][
          ArrowsphereFindResultFields.COLUMN_SKU
        ],
    };
    this.#arrowsphere = new ArrowsphereFindResult(arrowsphere);

    const erpData = data[IdentifiersFindResultFields.COLUMN_ERP];
    if (erpData) {
      const erp: ErpFindResultData = {
        [ErpFindResultFields.COLUMN_SKU]:
          erpData[ErpFindResultFields.COLUMN_SKU],
      };
      this.#erp = new ErpFindResult(erp);
    }
  }

  public get arrowsphere(): ArrowsphereFindResult {
    return this.#arrowsphere;
  }

  public get erp(): ErpFindResult | undefined {
    return this.#erp;
  }

  public toJSON(): IdentifiersFindResultData {
    return {
      [IdentifiersFindResultFields.COLUMN_ARROWSPHERE]: this.arrowsphere.toJSON(),
      ...(this.erp
        ? { [IdentifiersFindResultFields.COLUMN_ERP]: this.erp.toJSON() }
        : {}),
    };
  }
}
