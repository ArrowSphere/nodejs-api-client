import { AbstractEntity } from '../../abstractEntity';

export enum PrerequisiteResultField {
  FRIENDLY_NAME = 'friendlyName',
  PARENT_PARTNER_REF = 'parentPartnerRef',
  PARENT_SKU = 'parentSku',
  SEATS = 'seats',
  TERM = 'term',
  TYPE = 'type',
}

export type PrerequisiteResultData = {
  [PrerequisiteResultField.FRIENDLY_NAME]: string;
  [PrerequisiteResultField.PARENT_PARTNER_REF]: string;
  [PrerequisiteResultField.PARENT_SKU]: string;
  [PrerequisiteResultField.SEATS]: number;
  [PrerequisiteResultField.TERM]: number;
  [PrerequisiteResultField.TYPE]: string;
};

export class PrerequisiteResult extends AbstractEntity<PrerequisiteResultData> {
  readonly #friendlyName: string;
  readonly #parentPartnerRef: string;
  readonly #parentSku: string;
  readonly #seats: number;
  readonly #term: number;
  readonly #type: string;

  public constructor(prerequisiteResponse: PrerequisiteResultData) {
    super(prerequisiteResponse);

    this.#friendlyName =
      prerequisiteResponse[PrerequisiteResultField.FRIENDLY_NAME];
    this.#parentPartnerRef =
      prerequisiteResponse[PrerequisiteResultField.PARENT_PARTNER_REF];
    this.#parentSku = prerequisiteResponse[PrerequisiteResultField.PARENT_SKU];
    this.#seats = prerequisiteResponse[PrerequisiteResultField.SEATS];
    this.#term = prerequisiteResponse[PrerequisiteResultField.TERM];
    this.#type = prerequisiteResponse[PrerequisiteResultField.TYPE];
  }

  get friendlyName(): string {
    return this.#friendlyName;
  }

  get parentPartnerRef(): string {
    return this.#parentPartnerRef;
  }

  get parentSku(): string {
    return this.#parentSku;
  }

  get seats(): number {
    return this.#seats;
  }

  get term(): number {
    return this.#term;
  }

  get type(): string {
    return this.#type;
  }

  public toJSON(): PrerequisiteResultData {
    return {
      [PrerequisiteResultField.FRIENDLY_NAME]: this.#friendlyName,
      [PrerequisiteResultField.PARENT_PARTNER_REF]: this.#parentPartnerRef,
      [PrerequisiteResultField.PARENT_SKU]: this.#parentSku,
      [PrerequisiteResultField.SEATS]: this.#seats,
      [PrerequisiteResultField.TERM]: this.#term,
      [PrerequisiteResultField.TYPE]: this.#type,
    };
  }
}
