import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';

export enum ActionFlagsFindResultFields {
  COLUMN_IS_AUTO_RENEW = 'isAutoRenew',
  COLUMN_MANUAL_PROVISIONING = 'isManualProvisioning',
  COLUMN_RENEWAL_SKU = 'renewalSku',
}

export type ActionFlagsFindResultData = {
  [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]: boolean;
  [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]: boolean;
  [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]: boolean;
};

export type ActionFlagsFindResultDataKeywords = {
  [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]?: DataKeywords;
  [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]?: DataKeywords;
  [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]?: DataKeywords;
};

export type ActionFlagsFindResultDataSortParameters = {
  [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]?: SortParameters;
  [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]?: SortParameters;
  [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]?: SortParameters;
};

export type ActionFlagsFindResultDataFiltersParameters = {
  [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]?: FiltersParameters;
  [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]?: FiltersParameters;
  [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]?: FiltersParameters;
};

export class ActionFlagsFindResult extends AbstractEntity<ActionFlagsFindResultData> {
  protected VALIDATION_RULES: Rules = {
    [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]: 'required|boolean',
    [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]:
      'required|boolean',
    [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]: 'boolean',
  };

  readonly #isAutoRenew: boolean;
  readonly #isManualProvisioning: boolean;
  readonly #renewalSku: boolean;

  public constructor(data: ActionFlagsFindResultData) {
    super(data);

    this.#isAutoRenew = data[ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW];
    this.#isManualProvisioning =
      data[ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING];
    this.#renewalSku = data[ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU];
  }

  public isAutoRenew(): boolean {
    return this.#isAutoRenew;
  }

  public isManualProvisioning(): boolean {
    return this.#isManualProvisioning;
  }

  public renewalSku(): boolean {
    return this.#renewalSku;
  }

  public toJSON(): ActionFlagsFindResultData {
    return {
      [ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW]: this.isAutoRenew(),
      [ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING]: this.isManualProvisioning(),
      [ActionFlagsFindResultFields.COLUMN_RENEWAL_SKU]: this.renewalSku(),
    };
  }
}
