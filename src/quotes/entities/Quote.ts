import { AbstractEntity } from '../../abstractEntity';
import {
  OrderPartner,
  OrderPartnerType,
} from '../../orders/entities/orders/partner/partner';
import {
  ReferenceLink,
  ReferenceLinkType,
} from '../../orders/entities/referenceLink';
import { QuoteLastVersion, QuoteLastVersionData } from './QuoteLastVersion';
import { QuoteProduct, QuoteProductData } from './QuoteProduct';

export enum QuoteFields {
  QUOTE_REFERENCE = 'quoteReference',
  REFERENCE = 'reference',
  STATUS = 'status',
  DATE_CREATION = 'dateCreation',
  DATE_UPDATE = 'dateUpdate',
  DATE_END = 'dateEnd',
  PARTNER = 'partner',
  CUSTOMER = 'customer',
  PO_NUMBER = 'ponumber',
  END_CUSTOMER_PO_NUMBER = 'endCustomerPONumber',
  LAST_VERSION = 'lastVersion',
  PRODUCTS = 'products',
}

export type QuoteData = {
  [QuoteFields.QUOTE_REFERENCE]: string;
  [QuoteFields.REFERENCE]: string;
  [QuoteFields.STATUS]: string;
  [QuoteFields.DATE_CREATION]: string;
  [QuoteFields.DATE_UPDATE]: string;
  [QuoteFields.DATE_END]?: string;
  [QuoteFields.PARTNER]?: OrderPartnerType;
  [QuoteFields.CUSTOMER]?: ReferenceLinkType;
  [QuoteFields.PO_NUMBER]?: string;
  [QuoteFields.END_CUSTOMER_PO_NUMBER]?: string;
  [QuoteFields.LAST_VERSION]?: QuoteLastVersionData;
  [QuoteFields.PRODUCTS]: QuoteProductData[];
};

export class Quote extends AbstractEntity<QuoteData> {
  readonly #quoteReference: string;
  readonly #reference: string;
  readonly #status: string;
  readonly #dateCreation: string;
  readonly #dateUpdate: string;
  readonly #dateEnd?: string;
  readonly #partner?: OrderPartner;
  readonly #customer?: ReferenceLink;
  readonly #ponumber?: string;
  readonly #endCustomerPONumber?: string;
  readonly #lastVersion?: QuoteLastVersion;
  readonly #products: QuoteProduct[];

  public constructor(data: QuoteData) {
    super(data);

    this.#quoteReference = data[QuoteFields.QUOTE_REFERENCE];
    this.#reference = data[QuoteFields.REFERENCE];
    this.#status = data[QuoteFields.STATUS];
    this.#dateCreation = data[QuoteFields.DATE_CREATION];
    this.#dateUpdate = data[QuoteFields.DATE_UPDATE];
    this.#dateEnd = data[QuoteFields.DATE_END];
    const partner = data[QuoteFields.PARTNER];
    this.#partner = partner ? new OrderPartner(partner) : undefined;
    const customer = data[QuoteFields.CUSTOMER];
    this.#customer = customer ? new ReferenceLink(customer) : undefined;
    this.#ponumber = data[QuoteFields.PO_NUMBER];
    this.#endCustomerPONumber = data[QuoteFields.END_CUSTOMER_PO_NUMBER];
    const lastVersion = data[QuoteFields.LAST_VERSION];
    this.#lastVersion = lastVersion
      ? new QuoteLastVersion(lastVersion)
      : undefined;
    this.#products = data[QuoteFields.PRODUCTS].map(
      (product: QuoteProductData) => new QuoteProduct(product),
    );
  }

  get quoteReference(): string {
    return this.#quoteReference;
  }

  get reference(): string {
    return this.#reference;
  }

  get status(): string {
    return this.#status;
  }

  get dateCreation(): string {
    return this.#dateCreation;
  }

  get dateUpdate(): string {
    return this.#dateUpdate;
  }

  get dateEnd(): string | undefined {
    return this.#dateEnd;
  }

  get partner(): OrderPartner | undefined {
    return this.#partner;
  }

  get customer(): ReferenceLink | undefined {
    return this.#customer;
  }

  get ponumber(): string | undefined {
    return this.#ponumber;
  }

  get endCustomerPONumber(): string | undefined {
    return this.#endCustomerPONumber;
  }

  get lastVersion(): QuoteLastVersion | undefined {
    return this.#lastVersion;
  }

  get products(): QuoteProduct[] {
    return this.#products;
  }

  public toJSON(): QuoteData {
    return {
      [QuoteFields.QUOTE_REFERENCE]: this.quoteReference,
      [QuoteFields.REFERENCE]: this.reference,
      [QuoteFields.STATUS]: this.status,
      [QuoteFields.DATE_CREATION]: this.dateCreation,
      [QuoteFields.DATE_UPDATE]: this.dateUpdate,
      [QuoteFields.DATE_END]: this.dateEnd,
      [QuoteFields.PARTNER]: this.partner?.toJSON(),
      [QuoteFields.CUSTOMER]: this.customer?.toJSON(),
      [QuoteFields.PO_NUMBER]: this.ponumber,
      [QuoteFields.END_CUSTOMER_PO_NUMBER]: this.endCustomerPONumber,
      [QuoteFields.LAST_VERSION]: this.lastVersion?.toJSON(),
      [QuoteFields.PRODUCTS]: this.products.map((product: QuoteProduct) =>
        product.toJSON(),
      ),
    };
  }
}
