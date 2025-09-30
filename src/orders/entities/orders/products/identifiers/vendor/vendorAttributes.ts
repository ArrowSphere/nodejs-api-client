import { AbstractEntity } from '../../../../../../abstractEntity';

export enum VendorAttributesFields {
  COLUMN_CAN_SWITCH_AUTO_RENEW = 'canSwitchAutoRenew',
}

export type VendorAttributesType = {
  [VendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW]?: boolean;
};

export class VendorAttributes extends AbstractEntity<VendorAttributesType> {
  readonly #canSwitchAutoRenew?: boolean;

  public constructor(attributes: VendorAttributesType) {
    super(attributes);

    this.#canSwitchAutoRenew =
      attributes[VendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW];
  }

  get canSwitchAutoRenew(): boolean | undefined {
    return this.#canSwitchAutoRenew;
  }

  public toJSON(): VendorAttributesType {
    return {
      [VendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW]: this
        .canSwitchAutoRenew,
    };
  }
}
