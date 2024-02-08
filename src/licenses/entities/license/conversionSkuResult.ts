import { AbstractEntity } from '../../../abstractEntity';

export enum ConversionSkuResultFields {
  COLUMN_BILLING_CYCLE = 'billingCycle',
  COLUMN_BUY_PRICE = 'buyPrice',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_CURRENCY = 'currency',
  COLUMN_END_DATE = 'endDate',
  COLUMN_FRIENDLY_NAME = 'friendlyName',
  COLUMN_MIN_QUANTITY = 'minQuantity',
  COLUMN_OFFER_NAME = 'offerName',
  COLUMN_PRICE_BAND_ARROWSPHERE_SKU = 'priceBandArrowsphereSku',
  COLUMN_PARTNER_REF = 'partnerRef',
  COLUMN_SEATS = 'seats',
  COLUMN_SELL_PRICE = 'sellPrice',
  COLUMN_SKU = 'sku',
  COLUMN_TERM = 'term',
  COLUMN_UOM = 'uom',
  COLUMN_VENDOR_CODE = 'vendorCode',
}

export type ConversionSkuResultData = {
  [ConversionSkuResultFields.COLUMN_BUY_PRICE]?: number;
  [ConversionSkuResultFields.COLUMN_BILLING_CYCLE]?: number;
  [ConversionSkuResultFields.COLUMN_CLASSIFICATION]: string;
  [ConversionSkuResultFields.COLUMN_CURRENCY]: string;
  [ConversionSkuResultFields.COLUMN_END_DATE]?: string;
  [ConversionSkuResultFields.COLUMN_FRIENDLY_NAME]?: string;
  [ConversionSkuResultFields.COLUMN_OFFER_NAME]: string;
  [ConversionSkuResultFields.COLUMN_PARTNER_REF]?: string;
  [ConversionSkuResultFields.COLUMN_MIN_QUANTITY]?: number;
  [ConversionSkuResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: string;
  [ConversionSkuResultFields.COLUMN_SEATS]?: number;
  [ConversionSkuResultFields.COLUMN_SELL_PRICE]?: number;
  [ConversionSkuResultFields.COLUMN_SKU]: string;
  [ConversionSkuResultFields.COLUMN_TERM]?: number;
  [ConversionSkuResultFields.COLUMN_UOM]: string;
  [ConversionSkuResultFields.COLUMN_VENDOR_CODE]: string;
};

export class ConversionSkuResult extends AbstractEntity<ConversionSkuResultData> {
  readonly #billingCycle?: number;
  readonly #buyPrice?: number;
  readonly #classification: string;
  readonly #currency: string;
  readonly #endDate?: string;
  readonly #friendlyName?: string;
  readonly #minQuantity?: number;
  readonly #offerName: string;
  readonly #priceBandArrowsphereSku: string;
  readonly #partnerRef?: string;
  readonly #seats?: number;
  readonly #sellPrice?: number;
  readonly #sku: string;
  readonly #term?: number;
  readonly #uom: string;
  readonly #vendorCode: string;

  public constructor(data: ConversionSkuResultData) {
    super(data);

    this.#billingCycle = data[ConversionSkuResultFields.COLUMN_BILLING_CYCLE];
    this.#buyPrice = data[ConversionSkuResultFields.COLUMN_BUY_PRICE];
    this.#classification =
      data[ConversionSkuResultFields.COLUMN_CLASSIFICATION];
    this.#currency = data[ConversionSkuResultFields.COLUMN_CURRENCY];
    this.#endDate = data[ConversionSkuResultFields.COLUMN_END_DATE];
    this.#friendlyName = data[ConversionSkuResultFields.COLUMN_FRIENDLY_NAME];
    this.#minQuantity = data[ConversionSkuResultFields.COLUMN_MIN_QUANTITY];
    this.#offerName = data[ConversionSkuResultFields.COLUMN_OFFER_NAME];
    this.#priceBandArrowsphereSku =
      data[ConversionSkuResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU];
    this.#partnerRef = data[ConversionSkuResultFields.COLUMN_PARTNER_REF];
    this.#seats = data[ConversionSkuResultFields.COLUMN_SEATS];
    this.#sellPrice = data[ConversionSkuResultFields.COLUMN_SELL_PRICE];
    this.#sku = data[ConversionSkuResultFields.COLUMN_SKU];
    this.#term = data[ConversionSkuResultFields.COLUMN_TERM];
    this.#uom = data[ConversionSkuResultFields.COLUMN_UOM];
    this.#vendorCode = data[ConversionSkuResultFields.COLUMN_VENDOR_CODE];
  }

  public get billingCycle(): number | undefined {
    return this.#billingCycle;
  }

  public get buyPrice(): number | undefined {
    return this.#buyPrice;
  }

  public get classification(): string {
    return this.#classification;
  }

  public get currency(): string {
    return this.#currency;
  }

  public get endDate(): string | undefined {
    return this.#endDate;
  }

  public get friendlyName(): string | undefined {
    return this.#friendlyName;
  }

  public get minQuantity(): number | undefined {
    return this.#minQuantity;
  }

  public get offerName(): string {
    return this.#offerName;
  }

  public get priceBandArrowsphereSku(): string {
    return this.#priceBandArrowsphereSku;
  }

  public get partnerRef(): string | undefined {
    return this.#partnerRef;
  }

  public get seats(): number | undefined {
    return this.#seats;
  }

  public get sellPrice(): number | undefined {
    return this.#sellPrice;
  }

  public get sku(): string {
    return this.#sku;
  }

  public get term(): number | undefined {
    return this.#term;
  }

  public get uom(): string {
    return this.#uom;
  }

  public get vendorCode(): string {
    return this.#vendorCode;
  }

  public toJSON(): ConversionSkuResultData {
    return {
      [ConversionSkuResultFields.COLUMN_BILLING_CYCLE]: this.billingCycle,
      [ConversionSkuResultFields.COLUMN_BUY_PRICE]: this.buyPrice,
      [ConversionSkuResultFields.COLUMN_CLASSIFICATION]: this.classification,
      [ConversionSkuResultFields.COLUMN_CURRENCY]: this.currency,
      [ConversionSkuResultFields.COLUMN_END_DATE]: this.endDate,
      [ConversionSkuResultFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [ConversionSkuResultFields.COLUMN_MIN_QUANTITY]: this.minQuantity,
      [ConversionSkuResultFields.COLUMN_OFFER_NAME]: this.offerName,
      [ConversionSkuResultFields.COLUMN_PRICE_BAND_ARROWSPHERE_SKU]: this
        .priceBandArrowsphereSku,
      [ConversionSkuResultFields.COLUMN_PARTNER_REF]: this.partnerRef,
      [ConversionSkuResultFields.COLUMN_SEATS]: this.seats,
      [ConversionSkuResultFields.COLUMN_SELL_PRICE]: this.sellPrice,
      [ConversionSkuResultFields.COLUMN_SKU]: this.sku,
      [ConversionSkuResultFields.COLUMN_TERM]: this.term,
      [ConversionSkuResultFields.COLUMN_UOM]: this.uom,
      [ConversionSkuResultFields.COLUMN_VENDOR_CODE]: this.vendorCode,
    };
  }
}
