import { AbstractEntity } from '../../../abstractEntity';
import { Relation, RelationType } from './relation';

export enum UnknownLicenseFields {
  COLUMN_VENDOR_REFERENCE_ID = 'vendorReferenceId',
  COLUMN_OFFER_NAME = 'offerName',
  COLUMN_OFFER_SKU = 'offerSku',
  COLUMN_PRICEBAND_ARROWSPHERE_SKU = 'pricebandArrowsphereSku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_SUBSCRIPTION_START_DATE = 'subscriptionStartDate',
  COLUMN_FRIENDLY_NAME = 'friendlyName',
  COLUMN_IS_RECONCILABLE = 'isReconcilable',
  COLUMN_RECONCILABLE_MESSAGE = 'reconcilableMessage',
  COLUMN_IS_ADDON = 'isAddon',
  COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID = 'parentSubscriptionVendorReferenceId',
  COLUMN_PARENT_PARTNER_REF = 'parentPartnerRef',
  COLUMN_STATUS = 'status',
  COLUMN_GROUP = 'group',
  COLUMN_RELATIONS = 'relations',
}

export type UnknownLicenseType = {
  [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]: string;
  [UnknownLicenseFields.COLUMN_OFFER_NAME]: string | null;
  [UnknownLicenseFields.COLUMN_OFFER_SKU]: string | null;
  [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]: string | null;
  [UnknownLicenseFields.COLUMN_QUANTITY]: number | null;
  [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]: string | null;
  [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]: string;
  [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: boolean;
  [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]: string;
  [UnknownLicenseFields.COLUMN_IS_ADDON]: boolean;
  [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]:
    | string
    | undefined;
  [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: string | undefined;
  [UnknownLicenseFields.COLUMN_STATUS]: string | null;
  [UnknownLicenseFields.COLUMN_GROUP]: string | null;
  [UnknownLicenseFields.COLUMN_RELATIONS]: RelationType[];
};

export class UnknownLicense extends AbstractEntity<UnknownLicenseType> {
  readonly #vendorReferenceId: string;
  readonly #offerName: string | null;
  readonly #offerSku: string | null;
  readonly #pricebandArrowsphereSku: string | null;
  readonly #quantity: number | null;
  readonly #subscriptionStartDate: string | null;
  readonly #friendlyName: string;
  readonly #isReconcilable: boolean;
  readonly #reconcilableMessage: string;
  readonly #isAddon: boolean;
  readonly #parentSubscriptionVendorReferenceId: string | undefined;
  readonly #parentPartnerRef: string | undefined;
  readonly #status: string | null;
  readonly #group: string | null;
  readonly #relations: Relation[];

  public constructor(UnknownLicenseDataInput: UnknownLicenseType) {
    super(UnknownLicenseDataInput);

    this.#vendorReferenceId =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID];
    this.#offerName =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_OFFER_NAME];
    this.#offerSku =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_OFFER_SKU];
    this.#pricebandArrowsphereSku =
      UnknownLicenseDataInput[
        UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU
      ];
    this.#quantity =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_QUANTITY];
    this.#subscriptionStartDate =
      UnknownLicenseDataInput[
        UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE
      ];
    this.#friendlyName =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_FRIENDLY_NAME];
    this.#isReconcilable =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_IS_RECONCILABLE];
    this.#reconcilableMessage =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE];
    this.#isAddon =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_IS_ADDON];
    this.#parentSubscriptionVendorReferenceId =
      UnknownLicenseDataInput[
        UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID
      ];
    this.#parentPartnerRef =
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF];
    this.#status = UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_STATUS];
    this.#group = UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_GROUP];
    this.#relations = (
      UnknownLicenseDataInput[UnknownLicenseFields.COLUMN_RELATIONS] ?? []
    ).map((result) => new Relation(result));
  }

  get vendorReferenceId(): string {
    return this.#vendorReferenceId;
  }

  get offerName(): string | null {
    return this.#offerName;
  }

  get offerSku(): string | null {
    return this.#offerSku;
  }

  get pricebandArrowsphereSku(): string | null {
    return this.#pricebandArrowsphereSku;
  }

  get quantity(): number | null {
    return this.#quantity;
  }

  get subscriptionStartDate(): string | null {
    return this.#subscriptionStartDate;
  }

  get friendlyName(): string {
    return this.#friendlyName;
  }

  get isReconcilable(): boolean {
    return this.#isReconcilable;
  }

  get reconcilableMessage(): string {
    return this.#reconcilableMessage;
  }

  get isAddon(): boolean {
    return this.#isAddon;
  }

  get parentSubscriptionVendorReferenceId(): string | undefined {
    return this.#parentSubscriptionVendorReferenceId;
  }

  get parentPartnerRef(): string | undefined {
    return this.#parentPartnerRef;
  }

  get status(): string | null {
    return this.#status;
  }

  get group(): string | null {
    return this.#group;
  }

  get relations(): Relation[] {
    return this.#relations;
  }

  public toJSON(): UnknownLicenseType {
    return {
      [UnknownLicenseFields.COLUMN_VENDOR_REFERENCE_ID]: this.vendorReferenceId,
      [UnknownLicenseFields.COLUMN_OFFER_NAME]: this.offerName,
      [UnknownLicenseFields.COLUMN_OFFER_SKU]: this.offerSku,
      [UnknownLicenseFields.COLUMN_PRICEBAND_ARROWSPHERE_SKU]: this
        .pricebandArrowsphereSku,
      [UnknownLicenseFields.COLUMN_QUANTITY]: this.quantity,
      [UnknownLicenseFields.COLUMN_SUBSCRIPTION_START_DATE]: this
        .subscriptionStartDate,
      [UnknownLicenseFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [UnknownLicenseFields.COLUMN_IS_RECONCILABLE]: this.isReconcilable,
      [UnknownLicenseFields.COLUMN_RECONCILABLE_MESSAGE]: this
        .reconcilableMessage,
      [UnknownLicenseFields.COLUMN_IS_ADDON]: this.isAddon,
      [UnknownLicenseFields.COLUMN_PARENT_SUBSCRIPTION_VENDOR_REFERENCE_ID]: this
        .parentSubscriptionVendorReferenceId,
      [UnknownLicenseFields.COLUMN_PARENT_PARTNER_REF]: this.parentPartnerRef,
      [UnknownLicenseFields.COLUMN_STATUS]: this.status,
      [UnknownLicenseFields.COLUMN_GROUP]: this.group,
      [UnknownLicenseFields.COLUMN_RELATIONS]: this.relations.map((result) =>
        result.toJSON(),
      ),
    };
  }
}
