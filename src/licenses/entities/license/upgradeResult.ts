import { AbstractEntity } from '../../../abstractEntity';

export enum UpgradeResultOrderFields {
  COLUMN_LINK = 'link',
  COLUMN_REFERENCE = 'reference',
}

type UpgradeResultOrderType = {
  [UpgradeResultOrderFields.COLUMN_LINK]?: string;
  [UpgradeResultOrderFields.COLUMN_REFERENCE]?: string;
};

export class UpgradeResultOrder extends AbstractEntity<UpgradeResultOrderType> {
  readonly #link?: string;
  readonly #reference?: string;

  constructor(input: UpgradeResultOrderType) {
    super(input);

    this.#link = input[UpgradeResultOrderFields.COLUMN_LINK];
    this.#reference = input[UpgradeResultOrderFields.COLUMN_REFERENCE];
  }

  get link(): string | undefined {
    return this.#link;
  }

  get reference(): string | undefined {
    return this.#reference;
  }

  public toJSON(): UpgradeResultOrderType {
    return {
      [UpgradeResultOrderFields.COLUMN_LINK]: this.link,
      [UpgradeResultOrderFields.COLUMN_REFERENCE]: this.reference,
    };
  }
}

export enum UpgradeResultFields {
  COLUMN_QUANTITY = 'quantity',
  COLUMN_NAME = 'name',
  COLUMN_ORDER = 'order',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_SKU = 'sku',
  COLUMN_TERM = 'term',
}

export type UpgradeResultType = {
  [UpgradeResultFields.COLUMN_QUANTITY]?: number;
  [UpgradeResultFields.COLUMN_NAME]?: string;
  [UpgradeResultFields.COLUMN_ORDER]?: UpgradeResultOrderType;
  [UpgradeResultFields.COLUMN_PERIODICITY]?: string;
  [UpgradeResultFields.COLUMN_SKU]?: string;
  [UpgradeResultFields.COLUMN_TERM]?: string;
};

export class UpgradeResult extends AbstractEntity<UpgradeResultType> {
  readonly #quantity?: number;
  readonly #name?: string;
  readonly #order?: UpgradeResultOrder;
  readonly #periodicity?: string;
  readonly #sku?: string;
  readonly #term?: string;

  constructor(input: UpgradeResultType) {
    super(input);

    this.#quantity = input[UpgradeResultFields.COLUMN_QUANTITY];
    this.#name = input[UpgradeResultFields.COLUMN_NAME];
    this.#order = input[UpgradeResultFields.COLUMN_ORDER]
      ? new UpgradeResultOrder(
          input[UpgradeResultFields.COLUMN_ORDER] as UpgradeResultOrderType,
        )
      : undefined;
    this.#periodicity = input[UpgradeResultFields.COLUMN_PERIODICITY];
    this.#sku = input[UpgradeResultFields.COLUMN_SKU];
    this.#term = input[UpgradeResultFields.COLUMN_TERM];
  }

  get quantity(): number | undefined {
    return this.#quantity;
  }

  get name(): string | undefined {
    return this.#name;
  }

  get order(): UpgradeResultOrder | undefined {
    return this.#order;
  }

  get periodicity(): string | undefined {
    return this.#periodicity;
  }

  get sku(): string | undefined {
    return this.#sku;
  }

  get term(): string | undefined {
    return this.#term;
  }

  public toJSON(): UpgradeResultType {
    return {
      [UpgradeResultFields.COLUMN_QUANTITY]: this.quantity,
      [UpgradeResultFields.COLUMN_NAME]: this.name,
      [UpgradeResultFields.COLUMN_ORDER]: this.order?.toJSON(),
      [UpgradeResultFields.COLUMN_PERIODICITY]: this.periodicity,
      [UpgradeResultFields.COLUMN_SKU]: this.sku,
      [UpgradeResultFields.COLUMN_TERM]: this.term,
    };
  }
}
