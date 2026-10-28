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
  QuoteProductIdentifiers,
  QuoteProductIdentifiersData,
} from './QuoteProductIdentifiers';
import {
  QuoteProductPrices,
  QuoteProductPricesData,
} from './QuoteProductPrices';
import {
  QuoteProductProgram,
  QuoteProductProgramData,
} from './QuoteProductProgram';

export enum QuoteProductFields {
  SKU = 'sku',
  QUANTITY = 'quantity',
  PRICES = 'prices',
  LICENSE = 'license',
  NAME = 'name',
  IS_ADDON = 'isAddon',
  IS_TRIAL = 'isTrial',
  CLASSIFICATION = 'classification',
  ARROW_SUB_CATEGORIES = 'arrowSubCategories',
  IDENTIFIERS = 'identifiers',
  PROGRAM = 'program',
  ASSETS = 'assets',
  ARROW_SPHERE_PRICE_BAND_SKU = 'arrowSpherePriceBandSku',
}

export type QuoteProductData = {
  [QuoteProductFields.SKU]: string;
  [QuoteProductFields.QUANTITY]: number;
  [QuoteProductFields.PRICES]: QuoteProductPricesData;
  [QuoteProductFields.LICENSE]: ReferenceLinkType;
  [QuoteProductFields.NAME]: string;
  [QuoteProductFields.IS_ADDON]: boolean;
  [QuoteProductFields.IS_TRIAL]: boolean;
  [QuoteProductFields.CLASSIFICATION]: string;
  [QuoteProductFields.ARROW_SUB_CATEGORIES]: string[];
  [QuoteProductFields.IDENTIFIERS]: QuoteProductIdentifiersData;
  [QuoteProductFields.PROGRAM]: QuoteProductProgramData;
  [QuoteProductFields.ASSETS]: QuoteProductAssetsData;
  [QuoteProductFields.ARROW_SPHERE_PRICE_BAND_SKU]?: string;
};

export class QuoteProduct extends AbstractEntity<QuoteProductData> {
  readonly #sku: string;
  readonly #quantity: number;
  readonly #prices: QuoteProductPrices;
  readonly #license: ReferenceLink;
  readonly #name: string;
  readonly #isAddon: boolean;
  readonly #isTrial: boolean;
  readonly #classification: string;
  readonly #arrowSubCategories: string[];
  readonly #identifiers: QuoteProductIdentifiers;
  readonly #program: QuoteProductProgram;
  readonly #assets: QuoteProductAssets;
  readonly #arrowSpherePriceBandSku?: string;

  public constructor(data: QuoteProductData) {
    super(data);

    this.#sku = data[QuoteProductFields.SKU];
    this.#quantity = data[QuoteProductFields.QUANTITY];
    this.#prices = new QuoteProductPrices(data[QuoteProductFields.PRICES]);
    this.#license = new ReferenceLink(data[QuoteProductFields.LICENSE]);
    this.#name = data[QuoteProductFields.NAME];
    this.#isAddon = data[QuoteProductFields.IS_ADDON];
    this.#isTrial = data[QuoteProductFields.IS_TRIAL];
    this.#classification = data[QuoteProductFields.CLASSIFICATION];
    this.#arrowSubCategories = data[QuoteProductFields.ARROW_SUB_CATEGORIES];
    this.#identifiers = new QuoteProductIdentifiers(
      data[QuoteProductFields.IDENTIFIERS],
    );
    this.#program = new QuoteProductProgram(data[QuoteProductFields.PROGRAM]);
    this.#assets = new QuoteProductAssets(data[QuoteProductFields.ASSETS]);
    this.#arrowSpherePriceBandSku =
      data[QuoteProductFields.ARROW_SPHERE_PRICE_BAND_SKU];
  }

  get sku(): string {
    return this.#sku;
  }

  get quantity(): number {
    return this.#quantity;
  }

  get prices(): QuoteProductPrices {
    return this.#prices;
  }

  get license(): ReferenceLink {
    return this.#license;
  }

  get name(): string {
    return this.#name;
  }

  get isAddon(): boolean {
    return this.#isAddon;
  }

  get isTrial(): boolean {
    return this.#isTrial;
  }

  get classification(): string {
    return this.#classification;
  }

  get arrowSubCategories(): string[] {
    return this.#arrowSubCategories;
  }

  get identifiers(): QuoteProductIdentifiers {
    return this.#identifiers;
  }

  get program(): QuoteProductProgram {
    return this.#program;
  }

  get assets(): QuoteProductAssets {
    return this.#assets;
  }

  get arrowSpherePriceBandSku(): string | undefined {
    return this.#arrowSpherePriceBandSku;
  }

  public toJSON(): QuoteProductData {
    return {
      [QuoteProductFields.SKU]: this.sku,
      [QuoteProductFields.QUANTITY]: this.quantity,
      [QuoteProductFields.PRICES]: this.prices.toJSON(),
      [QuoteProductFields.LICENSE]: this.license.toJSON(),
      [QuoteProductFields.NAME]: this.name,
      [QuoteProductFields.IS_ADDON]: this.isAddon,
      [QuoteProductFields.IS_TRIAL]: this.isTrial,
      [QuoteProductFields.CLASSIFICATION]: this.classification,
      [QuoteProductFields.ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
      [QuoteProductFields.IDENTIFIERS]: this.identifiers.toJSON(),
      [QuoteProductFields.PROGRAM]: this.program.toJSON(),
      [QuoteProductFields.ASSETS]: this.assets.toJSON(),
      [QuoteProductFields.ARROW_SPHERE_PRICE_BAND_SKU]: this
        .arrowSpherePriceBandSku,
    };
  }
}
