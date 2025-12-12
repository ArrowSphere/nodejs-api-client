import { AbstractEntity } from '../../../../../../../abstractEntity';

export enum IdentifiersVendorAttributesFields {
  COLUMN_CAN_SWITCH_AUTO_RENEW = 'canSwitchAutoRenew',
}

export type IdentifiersVendorAttributesType = {
  [IdentifiersVendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW]?: boolean;
};

export class IdentifiersVendorAttributes extends AbstractEntity<IdentifiersVendorAttributesType> {
  readonly #canSwitchAutoRenew?: boolean;

  public constructor(attributes: IdentifiersVendorAttributesType) {
    super(attributes);

    this.#canSwitchAutoRenew = attributes[IdentifiersVendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW];
  }

  get canSwitchAutoRenew(): boolean | undefined {
    return this.#canSwitchAutoRenew;
  }

  public toJSON(): IdentifiersVendorAttributesType {
    return {
      [IdentifiersVendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW]: this.canSwitchAutoRenew,
    };
  }
}
