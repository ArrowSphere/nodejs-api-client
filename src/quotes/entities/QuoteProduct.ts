import { AbstractEntity } from '../../abstractEntity';
import {
  ReferenceLink,
  ReferenceLinkType,
} from '../../orders/entities/referenceLink';
import {
  QuoteProductAssets,
  QuoteProductAssetsData,
} from './QuoteProductAssets';
import {
  QuoteProductPriceBand,
  QuoteProductPriceBandData,
} from './QuoteProductPriceBand';
import {
  QuoteProductPrices,
  QuoteProductPricesData,
} from './QuoteProductPrices';
import {
  QuoteProductProgram,
  QuoteProductProgramData,
} from './QuoteProductProgram';
import {
  QuoteProductVendor,
  QuoteProductVendorData,
} from './QuoteProductVendor';

export enum QuoteProductFields {
  ARROW_SUB_CATEGORIES = 'arrowSubCategories',
  ASSETS = 'assets',
  CLASSIFICATION = 'classification',
  IS_ADDON = 'isAddon',
  IS_TRIAL = 'isTrial',
  LICENSE = 'license',
  NAME = 'name',
  PRICE_BAND = 'priceBand',
  PRICES = 'prices',
  PROGRAM = 'program',
  PROMOTION_ID = 'promotionId',
  QUANTITY = 'quantity',
  SKU = 'sku',
  VENDOR = 'vendor',
}

export type QuoteProductData = {
  [QuoteProductFields.ARROW_SUB_CATEGORIES]: string[];
  [QuoteProductFields.ASSETS]: QuoteProductAssetsData;
  [QuoteProductFields.CLASSIFICATION]: string;
  [QuoteProductFields.IS_ADDON]: boolean;
  [QuoteProductFields.IS_TRIAL]: boolean;
  [QuoteProductFields.LICENSE]: ReferenceLinkType;
  [QuoteProductFields.NAME]: string;
  [QuoteProductFields.PRICE_BAND]: QuoteProductPriceBandData;
  [QuoteProductFields.PRICES]: QuoteProductPricesData;
  [QuoteProductFields.PROGRAM]: QuoteProductProgramData;
  [QuoteProductFields.PROMOTION_ID]?: string;
  [QuoteProductFields.QUANTITY]: number;
  [QuoteProductFields.SKU]: string;
  [QuoteProductFields.VENDOR]: QuoteProductVendorData;
};

export class QuoteProduct extends AbstractEntity<QuoteProductData> {
  readonly #arrowSubCategories: string[];
  readonly #assets: QuoteProductAssets;
  readonly #classification: string;
  readonly #isAddon: boolean;
  readonly #isTrial: boolean;
  readonly #license: ReferenceLink;
  readonly #name: string;
  readonly #priceBand: QuoteProductPriceBand;
  readonly #prices: QuoteProductPrices;
  readonly #program: QuoteProductProgram;
  readonly #promotionId?: string;
  readonly #quantity: number;
  readonly #sku: string;
  readonly #vendor: QuoteProductVendor;

  public constructor(data: QuoteProductData) {
    super(data);

    this.#arrowSubCategories = data[QuoteProductFields.ARROW_SUB_CATEGORIES];
    this.#assets = new QuoteProductAssets(data[QuoteProductFields.ASSETS]);
    this.#classification = data[QuoteProductFields.CLASSIFICATION];
    this.#isAddon = data[QuoteProductFields.IS_ADDON];
    this.#isTrial = data[QuoteProductFields.IS_TRIAL];
    this.#license = new ReferenceLink(data[QuoteProductFields.LICENSE]);
    this.#name = data[QuoteProductFields.NAME];
    this.#priceBand = new QuoteProductPriceBand(
      data[QuoteProductFields.PRICE_BAND],
    );
    this.#prices = new QuoteProductPrices(data[QuoteProductFields.PRICES]);
    this.#program = new QuoteProductProgram(data[QuoteProductFields.PROGRAM]);
    this.#promotionId = data[QuoteProductFields.PROMOTION_ID];
    this.#quantity = data[QuoteProductFields.QUANTITY];
    this.#sku = data[QuoteProductFields.SKU];
    this.#vendor = new QuoteProductVendor(data[QuoteProductFields.VENDOR]);
  }

  get arrowSubCategories(): string[] {
    return this.#arrowSubCategories;
  }

  get assets(): QuoteProductAssets {
    return this.#assets;
  }

  get classification(): string {
    return this.#classification;
  }

  get isAddon(): boolean {
    return this.#isAddon;
  }

  get isTrial(): boolean {
    return this.#isTrial;
  }

  get license(): ReferenceLink {
    return this.#license;
  }

  get name(): string {
    return this.#name;
  }

  get priceBand(): QuoteProductPriceBand {
    return this.#priceBand;
  }

  get prices(): QuoteProductPrices {
    return this.#prices;
  }

  get program(): QuoteProductProgram {
    return this.#program;
  }

  get promotionId(): string | undefined {
    return this.#promotionId;
  }

  get quantity(): number {
    return this.#quantity;
  }

  get sku(): string {
    return this.#sku;
  }

  get vendor(): QuoteProductVendor {
    return this.#vendor;
  }

  public toJSON(): QuoteProductData {
    return {
      [QuoteProductFields.ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
      [QuoteProductFields.ASSETS]: this.assets.toJSON(),
      [QuoteProductFields.CLASSIFICATION]: this.classification,
      [QuoteProductFields.IS_ADDON]: this.isAddon,
      [QuoteProductFields.IS_TRIAL]: this.isTrial,
      [QuoteProductFields.LICENSE]: this.license.toJSON(),
      [QuoteProductFields.NAME]: this.name,
      [QuoteProductFields.PRICE_BAND]: this.priceBand.toJSON(),
      [QuoteProductFields.PRICES]: this.prices.toJSON(),
      [QuoteProductFields.PROGRAM]: this.program.toJSON(),
      [QuoteProductFields.PROMOTION_ID]: this.promotionId,
      [QuoteProductFields.QUANTITY]: this.quantity,
      [QuoteProductFields.SKU]: this.sku,
      [QuoteProductFields.VENDOR]: this.vendor.toJSON(),
    };
  }
}
