import { AbstractEntity } from '../../../../abstractEntity';
import { PriceBandData, PriceBandGetResult } from '../../../../licenses';
import { ReferenceLink, ReferenceLinkType } from '../../referenceLink';
import { ProductPrices, ProductPricesType } from './prices/productPrices';
import { ProductProgram, ProductProgramType } from './program/productProgram';
import {
  ProductIdentifiers,
  ProductIdentifiersType,
} from './identifiers/productIdentifiers';
import {
  OrganizationUnit,
  OrganizationUnitType,
} from './organizationUnit/organizationUnit';
import { Family, FamilyType } from './family/family';
import { BusinessRuleEffectType, PricingRules } from './pricingRules/pricingRules';

export enum OrderProductsFields {
  COLUMN_SKU = 'sku',
  COLUMN_QUANTITY = 'quantity',
  COLUMN_STATUS = 'status',
  COLUMN_CREATION_DATE = 'creationDate',
  COLUMN_DATESTATUS = 'dateStatus',
  COLUMN_DETAILEDSTATUS = 'detailedStatus',
  COLUMN_FAMILY = 'family',
  COLUMN_IS_ADDON = 'isAddon',
  COLUMN_ARROWSUBCATEGORIES = 'arrowSubCategories',
  COLUMN_IS_TRIAL = 'isTrial',
  COLUMN_PRICES = 'prices',
  COLUMN_SUBSCRIPTION = 'subscription',
  COLUMN_LICENSE = 'license',
  COLUMN_NAME = 'name',
  COLUMN_CLASSIFICATION = 'classification',
  COLUMN_PROGRAM = 'program',
  COLUMN_IDENTIFIERS = 'identifiers',
  COLUMN_ORGANIZATION_UNIT_REF = 'organizationUnitRef',
  COLUMN_ORGANIZATION_UNIT = 'organizationUnit',
  COLUMN_PRICE_BAND = 'priceBand',
  COLUMN_PRICING_RULES = 'pricingRules',
  COLUMN_PROGRAM_NAME = 'programName',
  COLUMN_SOURCE = 'source',
  COLUMN_VENDOR_NAME = 'vendorName',
}

export type OrderProductsType = {
  [OrderProductsFields.COLUMN_SKU]: string;
  [OrderProductsFields.COLUMN_QUANTITY]: number;
  [OrderProductsFields.COLUMN_STATUS]: string;
  [OrderProductsFields.COLUMN_CREATION_DATE]?: string;
  [OrderProductsFields.COLUMN_DATESTATUS]: string;
  [OrderProductsFields.COLUMN_DETAILEDSTATUS]: string;
  [OrderProductsFields.COLUMN_FAMILY]: FamilyType;
  [OrderProductsFields.COLUMN_IS_ADDON]: boolean;
  [OrderProductsFields.COLUMN_ARROWSUBCATEGORIES]?: Array<string>;
  [OrderProductsFields.COLUMN_IS_TRIAL]: boolean;
  [OrderProductsFields.COLUMN_PRICES]: ProductPricesType;
  [OrderProductsFields.COLUMN_SUBSCRIPTION]?: ReferenceLinkType;
  [OrderProductsFields.COLUMN_LICENSE]: ReferenceLinkType;
  [OrderProductsFields.COLUMN_NAME]: string;
  [OrderProductsFields.COLUMN_CLASSIFICATION]: string;
  [OrderProductsFields.COLUMN_PROGRAM]: ProductProgramType;
  [OrderProductsFields.COLUMN_IDENTIFIERS]: ProductIdentifiersType;
  [OrderProductsFields.COLUMN_ORGANIZATION_UNIT_REF]?: string;
  [OrderProductsFields.COLUMN_ORGANIZATION_UNIT]?: OrganizationUnitType;
  [OrderProductsFields.COLUMN_PRICE_BAND]?: PriceBandData;
  [OrderProductsFields.COLUMN_PRICING_RULES]: Array<BusinessRuleEffectType>;
  [OrderProductsFields.COLUMN_PROGRAM_NAME]?: string;
  [OrderProductsFields.COLUMN_SOURCE]?: string;
  [OrderProductsFields.COLUMN_VENDOR_NAME]?: string;
};

export class OrderProduct extends AbstractEntity<OrderProductsType> {
  readonly #sku: string;
  readonly #quantity: number;
  readonly #status: string;
  readonly #creationDate?: string;
  readonly #dateStatus: string;
  readonly #detailedStatus: string;
  readonly #family: Family;
  readonly #isAddon: boolean;
  readonly #arrowSubCategories?: Array<string>;
  readonly #isTrial: boolean;
  readonly #prices: ProductPrices;
  readonly #subscription?: ReferenceLink;
  readonly #license: ReferenceLink;
  readonly #name: string;
  readonly #classification: string;
  readonly #program: ProductProgram;
  readonly #identifier: ProductIdentifiers;
  readonly #organizationUnitRef?: string;
  readonly #organizationUnit?: OrganizationUnit;
  readonly #priceBand?: PriceBandGetResult;
  readonly #pricingRules: Array<PricingRules>;
  readonly #programName?: string;
  readonly #source?: string;
  readonly #vendorName?: string;

  public constructor(getOrderProducts: OrderProductsType) {
    super(getOrderProducts);

    this.#sku = getOrderProducts[OrderProductsFields.COLUMN_SKU];
    this.#creationDate = getOrderProducts[OrderProductsFields.COLUMN_CREATION_DATE];
    this.#quantity = getOrderProducts[OrderProductsFields.COLUMN_QUANTITY];
    this.#status = getOrderProducts[OrderProductsFields.COLUMN_STATUS];
    this.#dateStatus = getOrderProducts[OrderProductsFields.COLUMN_DATESTATUS];
    this.#detailedStatus =
      getOrderProducts[OrderProductsFields.COLUMN_DETAILEDSTATUS];
    this.#family =
      new Family(getOrderProducts[OrderProductsFields.COLUMN_FAMILY]);
    this.#isAddon = getOrderProducts[OrderProductsFields.COLUMN_IS_ADDON];
    this.#arrowSubCategories =
      getOrderProducts[OrderProductsFields.COLUMN_ARROWSUBCATEGORIES] ??
      undefined;
    this.#isTrial = getOrderProducts[OrderProductsFields.COLUMN_IS_TRIAL];
    this.#prices = new ProductPrices(
      getOrderProducts[OrderProductsFields.COLUMN_PRICES],
    );
    this.#subscription = getOrderProducts[
      OrderProductsFields.COLUMN_SUBSCRIPTION
    ]
      ? new ReferenceLink(
          getOrderProducts[
            OrderProductsFields.COLUMN_SUBSCRIPTION
          ] as ReferenceLinkType,
        )
      : undefined;
    this.#license = new ReferenceLink(
      getOrderProducts[OrderProductsFields.COLUMN_LICENSE] as ReferenceLinkType,
    );
    this.#name = getOrderProducts[OrderProductsFields.COLUMN_NAME];
    this.#classification =
      getOrderProducts[OrderProductsFields.COLUMN_CLASSIFICATION];
    this.#program = new ProductProgram(
      getOrderProducts[OrderProductsFields.COLUMN_PROGRAM],
    );
    this.#identifier = new ProductIdentifiers(
      getOrderProducts[OrderProductsFields.COLUMN_IDENTIFIERS],
    );
    this.#organizationUnitRef =
      getOrderProducts[OrderProductsFields.COLUMN_ORGANIZATION_UNIT_REF];
    this.#organizationUnit = getOrderProducts[
      OrderProductsFields.COLUMN_ORGANIZATION_UNIT
    ]
      ? new OrganizationUnit(
          getOrderProducts[
            OrderProductsFields.COLUMN_ORGANIZATION_UNIT
          ] as OrganizationUnit,
        )
      : undefined;
    this.#priceBand = getOrderProducts[OrderProductsFields.COLUMN_PRICE_BAND]
      ? new PriceBandGetResult(
          getOrderProducts[OrderProductsFields.COLUMN_PRICE_BAND],
        )
      : undefined;
    this.#pricingRules = getOrderProducts[
        OrderProductsFields.COLUMN_PRICING_RULES
      ].map(
      (businessRuleEffect: BusinessRuleEffectType): PricingRules =>
        new PricingRules(businessRuleEffect),
    );
    this.#programName =
      getOrderProducts[OrderProductsFields.COLUMN_PROGRAM_NAME];
    this.#source =
      getOrderProducts[OrderProductsFields.COLUMN_SOURCE];
    this.#vendorName =
      getOrderProducts[OrderProductsFields.COLUMN_VENDOR_NAME];
  }

  get sku(): string {
    return this.#sku;
  }
  get quantity(): number {
    return this.#quantity;
  }
  get status(): string {
    return this.#status;
  }
  get creationDate(): string | undefined {
    return this.#creationDate;
  }
  get dateStatus(): string {
    return this.#dateStatus;
  }
  get detailedStatus(): string {
    return this.#detailedStatus;
  }
  get family(): Family {
    return this.#family;
  }
  get isAddon(): boolean {
    return this.#isAddon;
  }
  get arrowSubCategories(): Array<string> | undefined {
    return this.#arrowSubCategories;
  }
  get isTrial(): boolean {
    return this.#isTrial;
  }
  get prices(): ProductPrices {
    return this.#prices;
  }
  get subscription(): ReferenceLink | undefined {
    return this.#subscription;
  }
  get license(): ReferenceLink {
    return this.#license;
  }
  get name(): string {
    return this.#name;
  }
  get classification(): string {
    return this.#classification;
  }
  get program(): ProductProgram {
    return this.#program;
  }
  get identifier(): ProductIdentifiers {
    return this.#identifier;
  }
  get organizationUnitRef(): string | undefined {
    return this.#organizationUnitRef;
  }
  get priceBand(): PriceBandGetResult | undefined {
    return this.#priceBand;
  }
  get organizationUnit(): OrganizationUnit | undefined {
    return this.#organizationUnit;
  }
  get pricingRules(): Array<PricingRules> {
    return this.#pricingRules;
  }
  get programName(): string | undefined {
    return this.#programName;
  }
  get source(): string | undefined {
    return this.#source;
  }
  get vendorName(): string | undefined {
    return this.#vendorName;
  }

  public toJSON(): OrderProductsType {
    return {
      [OrderProductsFields.COLUMN_SKU]: this.sku,
      [OrderProductsFields.COLUMN_QUANTITY]: this.quantity,
      [OrderProductsFields.COLUMN_STATUS]: this.status,
      [OrderProductsFields.COLUMN_CREATION_DATE]: this.creationDate,
      [OrderProductsFields.COLUMN_DATESTATUS]: this.dateStatus,
      [OrderProductsFields.COLUMN_DETAILEDSTATUS]: this.detailedStatus,
      [OrderProductsFields.COLUMN_FAMILY]: this.family.toJSON(),
      [OrderProductsFields.COLUMN_IS_ADDON]: this.isAddon,
      [OrderProductsFields.COLUMN_ARROWSUBCATEGORIES]: this.arrowSubCategories,
      [OrderProductsFields.COLUMN_IS_TRIAL]: this.isTrial,
      [OrderProductsFields.COLUMN_PRICES]: this.prices.toJSON(),
      [OrderProductsFields.COLUMN_SUBSCRIPTION]: this.subscription?.toJSON(),
      [OrderProductsFields.COLUMN_LICENSE]: this.license.toJSON(),
      [OrderProductsFields.COLUMN_NAME]: this.name,
      [OrderProductsFields.COLUMN_CLASSIFICATION]: this.classification,
      [OrderProductsFields.COLUMN_PROGRAM]: this.program.toJSON(),
      [OrderProductsFields.COLUMN_IDENTIFIERS]: this.identifier.toJSON(),
      [OrderProductsFields.COLUMN_ORGANIZATION_UNIT_REF]: this
        .organizationUnitRef,
      [OrderProductsFields.COLUMN_ORGANIZATION_UNIT]: this.organizationUnit?.toJSON(),
      [OrderProductsFields.COLUMN_PRICE_BAND]: this.priceBand?.toJSON(),
      [OrderProductsFields.COLUMN_PRICING_RULES]: this.pricingRules.map(
        (pricingRules: PricingRules): BusinessRuleEffectType =>
          pricingRules.toJSON(),
      ),
      [OrderProductsFields.COLUMN_PROGRAM_NAME]: this.programName,
      [OrderProductsFields.COLUMN_SOURCE]: this.source,
      [OrderProductsFields.COLUMN_VENDOR_NAME]: this.vendorName,
    };
  }
}
