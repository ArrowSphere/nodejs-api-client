import { AbstractEntity } from '../../abstractEntity';

// Map subscription data fields to an enum value
export enum SubscriptionFields {
  COLUMN_SUBSCRIPTION_ID = 'subscriptionId',
  COLUMN_PARTNER_TAG_LABELS = 'partnerTagLabels',
  COLUMN_WORKGROUP_CODE = 'workgroupCode',
  COLUMN_COMPANY_NAME = 'companyName',
  COLUMN_SUBSCRIPTION = 'subscription', // Program legacy name
  COLUMN_START_DATE = 'startDate',
  COLUMN_END_DATE = 'endDate',
  COLUMN_LAST_UPDATE = 'lastUpdate',
  COLUMN_STATUS = 'status',
  COLUMN_SUBSCRIPTION_DATEVALIDATION = 'subscriptionDateValidation',
  COLUMN_SUBSCRIPTION_DATEDEMAND = 'subscriptionDateDemand',
  COLUMN_CLICK_TO_ACCEPT = 'clickToAccept',
  COLUMN_UNVALIDATED = 'unvalidated',
  COLUMN_VERSION = 'version',
  COLUMN_NUMBER = 'number',
}

// Subscription data returned by the endpoint
export type SubscriptionData = {
  [SubscriptionFields.COLUMN_SUBSCRIPTION_ID]: number;
  [SubscriptionFields.COLUMN_PARTNER_TAG_LABELS]: string;
  [SubscriptionFields.COLUMN_WORKGROUP_CODE]: string;
  [SubscriptionFields.COLUMN_COMPANY_NAME]: string;
  [SubscriptionFields.COLUMN_SUBSCRIPTION]: string;
  [SubscriptionFields.COLUMN_START_DATE]: string;
  [SubscriptionFields.COLUMN_END_DATE]: string;
  [SubscriptionFields.COLUMN_LAST_UPDATE]: string;
  [SubscriptionFields.COLUMN_STATUS]: string;
  [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEVALIDATION]: string;
  [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEDEMAND]: string;
  [SubscriptionFields.COLUMN_CLICK_TO_ACCEPT]: boolean;
  [SubscriptionFields.COLUMN_UNVALIDATED]: boolean;
  [SubscriptionFields.COLUMN_VERSION]: number;
  [SubscriptionFields.COLUMN_NUMBER]: number;
};

/**
 * Subscription entity
 */
export class Subscription extends AbstractEntity<SubscriptionData> {
  protected VALIDATION_RULES = {
    [SubscriptionFields.COLUMN_SUBSCRIPTION_ID]: 'required|number',
    [SubscriptionFields.COLUMN_PARTNER_TAG_LABELS]: 'required|string',
    [SubscriptionFields.COLUMN_WORKGROUP_CODE]: 'required|string',
    [SubscriptionFields.COLUMN_COMPANY_NAME]: 'required|string',
    [SubscriptionFields.COLUMN_SUBSCRIPTION]: 'required|string',
    [SubscriptionFields.COLUMN_START_DATE]: 'required|string',
    [SubscriptionFields.COLUMN_END_DATE]: 'required|string',
    [SubscriptionFields.COLUMN_LAST_UPDATE]: 'required|string',
    [SubscriptionFields.COLUMN_STATUS]: 'required|string',
    [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEVALIDATION]: 'required|string',
    [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEDEMAND]: 'required|string',
    [SubscriptionFields.COLUMN_CLICK_TO_ACCEPT]: 'required|boolean',
    [SubscriptionFields.COLUMN_UNVALIDATED]: 'required|boolean',
    [SubscriptionFields.COLUMN_VERSION]: 'required|number',
    [SubscriptionFields.COLUMN_NUMBER]: 'required|number',
  };

  readonly #subscriptionId: number;
  readonly #partnerTagLabels: string;
  readonly #workgroupCode: string;
  readonly #companyName: string;
  readonly #subscription: string;
  readonly #startDate: string;
  readonly #endDate: string;
  readonly #lastUpdate: string;
  readonly #status: string;
  readonly #subscriptionDateValidation: string;
  readonly #subscriptionDateDemand: string;
  readonly #clickToAccept: boolean;
  readonly #unvalidated: boolean;
  readonly #version: number;
  readonly #number: number;

  /**
   * Subscription entity constructor
   * @param data - Subscription data to validate and construct the entity from
   */
  constructor(data: SubscriptionData) {
    super(data);

    this.#subscriptionId = data[SubscriptionFields.COLUMN_SUBSCRIPTION_ID];
    this.#partnerTagLabels = data[SubscriptionFields.COLUMN_PARTNER_TAG_LABELS];
    this.#workgroupCode = data[SubscriptionFields.COLUMN_WORKGROUP_CODE];
    this.#companyName = data[SubscriptionFields.COLUMN_COMPANY_NAME];
    this.#subscription = data[SubscriptionFields.COLUMN_SUBSCRIPTION];
    this.#startDate = data[SubscriptionFields.COLUMN_START_DATE];
    this.#endDate = data[SubscriptionFields.COLUMN_END_DATE];
    this.#lastUpdate = data[SubscriptionFields.COLUMN_LAST_UPDATE];
    this.#status = data[SubscriptionFields.COLUMN_STATUS];
    this.#subscriptionDateValidation =
      data[SubscriptionFields.COLUMN_SUBSCRIPTION_DATEVALIDATION];
    this.#subscriptionDateDemand =
      data[SubscriptionFields.COLUMN_SUBSCRIPTION_DATEDEMAND];
    this.#clickToAccept = data[SubscriptionFields.COLUMN_CLICK_TO_ACCEPT];
    this.#unvalidated = data[SubscriptionFields.COLUMN_UNVALIDATED];
    this.#version = data[SubscriptionFields.COLUMN_VERSION];
    this.#number = data[SubscriptionFields.COLUMN_NUMBER];
  }

  public get subscriptionId(): number {
    return this.#subscriptionId;
  }

  public get partnerTagLabels(): string {
    return this.#partnerTagLabels;
  }

  public get workgroupCode(): string {
    return this.#workgroupCode;
  }

  public get companyName(): string {
    return this.#companyName;
  }

  public get subscription(): string {
    return this.#subscription;
  }

  public get startDate(): string {
    return this.#startDate;
  }

  public get endDate(): string {
    return this.#endDate;
  }

  public get lastUpdate(): string {
    return this.#lastUpdate;
  }

  public get status(): string {
    return this.#status;
  }

  public get subscriptionDateValidation(): string {
    return this.#subscriptionDateValidation;
  }

  public get subscriptionDateDemand(): string {
    return this.#subscriptionDateDemand;
  }

  public get clickToAccept(): boolean {
    return this.#clickToAccept;
  }

  public get unvalidated(): boolean {
    return this.#unvalidated;
  }

  public get version(): number {
    return this.#version;
  }

  public get number(): number {
    return this.#number;
  }

  /**
   * Plain JSON object representation of the subscription entity.
   */
  public toJSON(): SubscriptionData {
    return {
      [SubscriptionFields.COLUMN_SUBSCRIPTION_ID]: this.subscriptionId,
      [SubscriptionFields.COLUMN_PARTNER_TAG_LABELS]: this.partnerTagLabels,
      [SubscriptionFields.COLUMN_WORKGROUP_CODE]: this.workgroupCode,
      [SubscriptionFields.COLUMN_COMPANY_NAME]: this.companyName,
      [SubscriptionFields.COLUMN_SUBSCRIPTION]: this.subscription,
      [SubscriptionFields.COLUMN_START_DATE]: this.startDate,
      [SubscriptionFields.COLUMN_END_DATE]: this.endDate,
      [SubscriptionFields.COLUMN_LAST_UPDATE]: this.lastUpdate,
      [SubscriptionFields.COLUMN_STATUS]: this.status,
      [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEVALIDATION]: this
        .subscriptionDateValidation,
      [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEDEMAND]: this
        .subscriptionDateDemand,
      [SubscriptionFields.COLUMN_CLICK_TO_ACCEPT]: this.clickToAccept,
      [SubscriptionFields.COLUMN_UNVALIDATED]: this.unvalidated,
      [SubscriptionFields.COLUMN_VERSION]: this.version,
      [SubscriptionFields.COLUMN_NUMBER]: this.number,
    };
  }
}
