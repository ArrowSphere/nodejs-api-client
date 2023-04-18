import { AbstractEntity } from '../../../abstractEntity';

export enum IssueFields {
  COLUMN_ID = 'id',
  COLUMN_TITLE = 'title',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_TOPIC_ID = 'topicId',
  COLUMN_END_CUSTOMER_REF = 'endCustomerRef',
  COLUMN_LANGUAGE = 'language',
  COLUMN_OFFER = 'offer',
  COLUMN_PRIORITY = 'priority',
  COLUMN_STATUS = 'status',
  COLUMN_CREATED_BY = 'createdBy',
  COLUMN_SUPPORT_PLAN = 'supportPlan',
  COLUMN_PROGRAM = 'program',
  COLUMN_ADDITIONAL_DATA = 'additionalData',
  COLUMN_CREATED = 'created',
  COLUMN_UPDATED = 'updated',
}

export enum IssueOfferFields {
  COLUMN_SKU = 'sku',
  COLUMN_NAME = 'name',
  COLUMN_VENDOR = 'vendor',
}

export enum IssueCreatedByFields {
  COLUMN_EMAIL = 'email',
  COLUMN_FIRST_NAME = 'firstName',
  COLUMN_LAST_NAME = 'lastName',
  COLUMN_PHONE = 'phone',
}

export enum IssueSupportPlanFields {
  COLUMN_LABEL = 'label',
  COLUMN_SKU = 'sku',
  COLUMN_SOURCE_PORTAL = 'sourcePortal',
}

export enum IssueAdditionalDataFields {
  COLUMN_NAME = 'name',
  COLUMN_VALUE = 'value',
}

export type IssueOfferType = {
  [IssueOfferFields.COLUMN_SKU]: string;
  [IssueOfferFields.COLUMN_NAME]?: string;
  [IssueOfferFields.COLUMN_VENDOR]?: string;
};

export enum IssueStatusesType {
  PENDING_CUSTOMER = 'PENDING_CUSTOMER',
  PENDING_VENDOR = 'PENDING_VENDOR',
  PENDING_ARROW = 'PENDING_ARROW',
  ON_HOLD = 'ON_HOLD',
  CLOSED = 'CLOSED',
  PENDING_CLOSE = 'PENDING_CLOSE',
}

export type IssueCreatedByType = {
  [IssueCreatedByFields.COLUMN_EMAIL]: string;
  [IssueCreatedByFields.COLUMN_FIRST_NAME]: string;
  [IssueCreatedByFields.COLUMN_LAST_NAME]: string;
  [IssueCreatedByFields.COLUMN_PHONE]?: string;
};

export type IssueSupportPlanType = {
  [IssueSupportPlanFields.COLUMN_SKU]?: string;
  [IssueSupportPlanFields.COLUMN_LABEL]?: string;
  [IssueSupportPlanFields.COLUMN_SOURCE_PORTAL]?: string;
};

export type IssueAdditionalDataType = {
  [IssueAdditionalDataFields.COLUMN_NAME]: string;
  [IssueAdditionalDataFields.COLUMN_VALUE]: string;
};

export type IssueType = {
  [IssueFields.COLUMN_ID]?: string;
  [IssueFields.COLUMN_TITLE]: string;
  [IssueFields.COLUMN_DESCRIPTION]: string;
  [IssueFields.COLUMN_TOPIC_ID]: string;
  [IssueFields.COLUMN_END_CUSTOMER_REF]?: string;
  [IssueFields.COLUMN_LANGUAGE]?: string;
  [IssueFields.COLUMN_OFFER]?: IssueOfferType;
  [IssueFields.COLUMN_PRIORITY]?: number;
  [IssueFields.COLUMN_STATUS]?: string;
  [IssueFields.COLUMN_CREATED_BY]?: IssueCreatedByType;
  [IssueFields.COLUMN_SUPPORT_PLAN]?: IssueSupportPlanType;
  [IssueFields.COLUMN_PROGRAM]: string;
  [IssueFields.COLUMN_ADDITIONAL_DATA]?: Array<IssueAdditionalDataType>;
  [IssueFields.COLUMN_CREATED]?: string;
  [IssueFields.COLUMN_UPDATED]?: string;
};

export class IssueOffer extends AbstractEntity<IssueOfferType> {
  readonly #sku: string;
  readonly #name?: string;
  readonly #vendor?: string;

  constructor(input: IssueOfferType) {
    super(input);

    this.#sku = input[IssueOfferFields.COLUMN_SKU];
    this.#name = input[IssueOfferFields.COLUMN_NAME];
    this.#vendor = input[IssueOfferFields.COLUMN_VENDOR];
  }

  get sku(): string {
    return this.#sku;
  }

  get name(): string | undefined {
    return this.#name;
  }

  get vendor(): string | undefined {
    return this.#vendor;
  }

  public toJSON(): IssueOfferType {
    return {
      [IssueOfferFields.COLUMN_SKU]: this.sku,
      [IssueOfferFields.COLUMN_NAME]: this.name,
      [IssueOfferFields.COLUMN_VENDOR]: this.vendor,
    };
  }
}

export class IssueCreatedBy extends AbstractEntity<IssueCreatedByType> {
  readonly #email: string;
  readonly #firstName: string;
  readonly #lastName: string;
  readonly #phone?: string;

  constructor(input: IssueCreatedByType) {
    super(input);

    this.#email = input[IssueCreatedByFields.COLUMN_EMAIL];
    this.#firstName = input[IssueCreatedByFields.COLUMN_FIRST_NAME];
    this.#lastName = input[IssueCreatedByFields.COLUMN_LAST_NAME];
    this.#phone = input[IssueCreatedByFields.COLUMN_PHONE];
  }

  get email(): string {
    return this.#email;
  }

  get firstName(): string {
    return this.#firstName;
  }

  get lastName(): string {
    return this.#lastName;
  }

  get phone(): string | undefined {
    return this.#phone;
  }

  public toJSON(): IssueCreatedByType {
    return {
      [IssueCreatedByFields.COLUMN_EMAIL]: this.email,
      [IssueCreatedByFields.COLUMN_FIRST_NAME]: this.firstName,
      [IssueCreatedByFields.COLUMN_LAST_NAME]: this.lastName,
      [IssueCreatedByFields.COLUMN_PHONE]: this.phone,
    };
  }
}

export class IssueSupportPlan extends AbstractEntity<IssueSupportPlanType> {
  readonly #sku?: string;
  readonly #label?: string;
  readonly #sourcePortal?: string;

  constructor(input: IssueSupportPlanType) {
    super(input);

    this.#sku = input[IssueSupportPlanFields.COLUMN_SKU];
    this.#label = input[IssueSupportPlanFields.COLUMN_LABEL];
    this.#sourcePortal = input[IssueSupportPlanFields.COLUMN_SOURCE_PORTAL];
  }

  get sku(): string | undefined {
    return this.#sku;
  }

  get label(): string | undefined {
    return this.#label;
  }

  get sourcePortal(): string | undefined {
    return this.#sourcePortal;
  }

  public toJSON(): IssueSupportPlanType {
    return {
      [IssueSupportPlanFields.COLUMN_SKU]: this.sku,
      [IssueSupportPlanFields.COLUMN_LABEL]: this.label,
      [IssueSupportPlanFields.COLUMN_SOURCE_PORTAL]: this.sourcePortal,
    };
  }
}

export class IssueAdditionalData extends AbstractEntity<IssueAdditionalDataType> {
  readonly #name: string;
  readonly #value: string;

  constructor(input: IssueAdditionalDataType) {
    super(input);

    this.#name = input[IssueAdditionalDataFields.COLUMN_NAME];
    this.#value = input[IssueAdditionalDataFields.COLUMN_VALUE];
  }

  get name(): string {
    return this.#name;
  }

  get value(): string {
    return this.#value;
  }

  public toJSON(): IssueAdditionalDataType {
    return {
      [IssueAdditionalDataFields.COLUMN_NAME]: this.name,
      [IssueAdditionalDataFields.COLUMN_VALUE]: this.value,
    };
  }
}

export class Issue extends AbstractEntity<IssueType> {
  readonly #id?: string;
  readonly #title: string;
  readonly #description: string;
  readonly #topicId: string;
  readonly #endCustomerRef?: string;
  readonly #language?: string;
  readonly #offer?: IssueOffer;
  readonly #priority?: number;
  readonly #status?: string;
  readonly #createdBy?: IssueCreatedBy;
  readonly #supportPlan?: IssueSupportPlan;
  readonly #program: string;
  readonly #additionalData?: Array<IssueAdditionalData>;
  readonly #created?: Date;
  readonly #updated?: Date;

  constructor(input: IssueType) {
    super(input);

    this.#id = input[IssueFields.COLUMN_ID];
    this.#title = input[IssueFields.COLUMN_TITLE];
    this.#description = input[IssueFields.COLUMN_DESCRIPTION];
    this.#topicId = input[IssueFields.COLUMN_TOPIC_ID];
    this.#endCustomerRef = input[IssueFields.COLUMN_END_CUSTOMER_REF];
    this.#language = input[IssueFields.COLUMN_LANGUAGE];

    this.#offer = input[IssueFields.COLUMN_OFFER]
      ? new IssueOffer(input[IssueFields.COLUMN_OFFER] as IssueOfferType)
      : undefined;

    this.#priority = input[IssueFields.COLUMN_PRIORITY];
    this.#status = input[IssueFields.COLUMN_STATUS];

    this.#createdBy = input[IssueFields.COLUMN_CREATED_BY]
      ? new IssueCreatedBy(
          input[IssueFields.COLUMN_CREATED_BY] as IssueCreatedByType,
        )
      : undefined;

    this.#supportPlan = input[IssueFields.COLUMN_SUPPORT_PLAN]
      ? new IssueSupportPlan(
          input[IssueFields.COLUMN_SUPPORT_PLAN] as IssueSupportPlanType,
        )
      : undefined;

    this.#program = input[IssueFields.COLUMN_PROGRAM];

    this.#additionalData = input[IssueFields.COLUMN_ADDITIONAL_DATA]
      ? (input[
          IssueFields.COLUMN_ADDITIONAL_DATA
        ] as IssueAdditionalData[]).map((item) => new IssueAdditionalData(item))
      : undefined;

    this.#created = input[IssueFields.COLUMN_CREATED]
      ? new Date(input[IssueFields.COLUMN_CREATED] as string)
      : undefined;

    this.#updated = input[IssueFields.COLUMN_UPDATED]
      ? new Date(input[IssueFields.COLUMN_UPDATED] as string)
      : undefined;
  }

  get id(): string | undefined {
    return this.#id;
  }

  get title(): string {
    return this.#title;
  }

  get description(): string {
    return this.#description;
  }

  get topicId(): string {
    return this.#topicId;
  }

  get endCustomerRef(): string | undefined {
    return this.#endCustomerRef;
  }

  get language(): string | undefined {
    return this.#language;
  }

  get offer(): IssueOffer | undefined {
    return this.#offer;
  }

  get priority(): number | undefined {
    return this.#priority;
  }

  get status(): string | undefined {
    return this.#status;
  }

  get createdBy(): IssueCreatedBy | undefined {
    return this.#createdBy;
  }

  get supportPlan(): IssueSupportPlan | undefined {
    return this.#supportPlan;
  }

  get program(): string {
    return this.#program;
  }

  get additionalData(): Array<IssueAdditionalData> | undefined {
    return this.#additionalData;
  }

  get created(): Date | undefined {
    return this.#created;
  }

  get updated(): Date | undefined {
    return this.#updated;
  }

  public toJSON(): IssueType {
    return {
      [IssueFields.COLUMN_ID]: this.id,
      [IssueFields.COLUMN_TITLE]: this.title,
      [IssueFields.COLUMN_DESCRIPTION]: this.description,
      [IssueFields.COLUMN_TOPIC_ID]: this.topicId,
      [IssueFields.COLUMN_END_CUSTOMER_REF]: this.endCustomerRef,
      [IssueFields.COLUMN_LANGUAGE]: this.language,
      [IssueFields.COLUMN_OFFER]: this.offer?.toJSON(),
      [IssueFields.COLUMN_PRIORITY]: this.priority,
      [IssueFields.COLUMN_STATUS]: this.status,
      [IssueFields.COLUMN_CREATED_BY]: this.createdBy?.toJSON(),
      [IssueFields.COLUMN_SUPPORT_PLAN]: this.supportPlan?.toJSON(),
      [IssueFields.COLUMN_PROGRAM]: this.program,
      [IssueFields.COLUMN_ADDITIONAL_DATA]: this.additionalData?.map((item) =>
        item.toJSON(),
      ),
      [IssueFields.COLUMN_CREATED]: this.created?.toISOString(),
      [IssueFields.COLUMN_UPDATED]: this.updated?.toISOString(),
    };
  }
}

export type IssuesType = Array<IssueType>;

export class Issues extends AbstractEntity<IssuesType> {
  readonly #list: Issue[];
  constructor(input: IssuesType) {
    super(input);

    this.#list = input.map((item) => new Issue(item));
  }

  get list(): Issue[] {
    return this.#list;
  }

  public toJSON(): IssuesType {
    return this.list.map((item) => item.toJSON());
  }
}
