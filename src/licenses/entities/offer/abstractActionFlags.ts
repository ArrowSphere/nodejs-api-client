import { AbstractEntity } from '../../../abstractEntity';
import { Rules } from 'validatorjs';
import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';

export enum ActionFlagsFields {
  COLUMN_IS_AUTO_RENEW = 'isAutoRenew',
  COLUMN_MANUAL_PROVISIONING = 'isManualProvisioning',
  COLUMN_RENEWAL_SKU = 'renewalSku',
}

export type ActionFlagsData = {
  [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]: boolean;
  [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]: boolean;
  [ActionFlagsFields.COLUMN_RENEWAL_SKU]: boolean;
};

export type ActionFlagsDataKeywords = {
  [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]?: DataKeywords;
  [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]?: DataKeywords;
  [ActionFlagsFields.COLUMN_RENEWAL_SKU]?: DataKeywords;
};

export type ActionFlagsDataSortParameters = {
  [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]?: SortParameters;
  [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]?: SortParameters;
  [ActionFlagsFields.COLUMN_RENEWAL_SKU]?: SortParameters;
};

export type ActionFlagsDataFiltersParameters = {
  [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]?: FiltersParameters;
  [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]?: FiltersParameters;
  [ActionFlagsFields.COLUMN_RENEWAL_SKU]?: FiltersParameters;
};

export abstract class AbstractActionFlags extends AbstractEntity<ActionFlagsData> {
  protected VALIDATION_RULES: Rules = {
    [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]: 'required|boolean',
    [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]: 'required|boolean',
    [ActionFlagsFields.COLUMN_RENEWAL_SKU]: 'boolean',
  };

  readonly #isAutoRenew: boolean;
  readonly #isManualProvisioning: boolean;
  readonly #renewalSku: boolean;

  protected constructor(data: ActionFlagsData) {
    super(data);

    this.#isAutoRenew = data[ActionFlagsFields.COLUMN_IS_AUTO_RENEW];
    this.#isManualProvisioning =
      data[ActionFlagsFields.COLUMN_MANUAL_PROVISIONING];
    this.#renewalSku = data[ActionFlagsFields.COLUMN_RENEWAL_SKU];
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

  public toJSON(): ActionFlagsData {
    return {
      [ActionFlagsFields.COLUMN_IS_AUTO_RENEW]: this.isAutoRenew(),
      [ActionFlagsFields.COLUMN_MANUAL_PROVISIONING]: this.isManualProvisioning(),
      [ActionFlagsFields.COLUMN_RENEWAL_SKU]: this.renewalSku(),
    };
  }
}
