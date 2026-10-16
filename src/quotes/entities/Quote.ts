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
  CUSTOMER = 'customer',
  DATE_CREATION = 'dateCreation',
  DATE_END = 'dateEnd',
  DATE_UPDATE = 'dateUpdate',
  END_CUSTOMER_PO_NUMBER = 'endCustomerPONumber',
  LAST_VERSION = 'lastVersion',
  PARTNER = 'partner',
  PO_NUMBER = 'ponumber',
  PRODUCTS = 'products',
  QUOTE_REFERENCE = 'quoteReference',
  REFERENCE = 'reference',
  STATUS = 'status',
}

export type QuoteData = {
  [QuoteFields.CUSTOMER]?: ReferenceLinkType;
  [QuoteFields.DATE_CREATION]: string;
  [QuoteFields.DATE_END]?: string;
  [QuoteFields.DATE_UPDATE]: string;
  [QuoteFields.END_CUSTOMER_PO_NUMBER]?: string;
  [QuoteFields.LAST_VERSION]?: QuoteLastVersionData;
  [QuoteFields.PARTNER]?: OrderPartnerType;
  [QuoteFields.PO_NUMBER]?: string;
  [QuoteFields.PRODUCTS]: QuoteProductData[];
  [QuoteFields.QUOTE_REFERENCE]: string;
  [QuoteFields.REFERENCE]: string;
  [QuoteFields.STATUS]: string;
};

export class Quote extends AbstractEntity<QuoteData> {
  readonly #customer?: ReferenceLink;
  readonly #dateCreation: string;
  readonly #dateEnd?: string;
  readonly #dateUpdate: string;
  readonly #endCustomerPONumber?: string;
  readonly #lastVersion?: QuoteLastVersion;
  readonly #partner?: OrderPartner;
  readonly #ponumber?: string;
  readonly #products: QuoteProduct[];
  readonly #quoteReference: string;
  readonly #reference: string;
  readonly #status: string;

  public constructor(data: QuoteData) {
    super(data);

    const customer = data[QuoteFields.CUSTOMER];
    this.#customer = customer ? new ReferenceLink(customer) : undefined;
    this.#dateCreation = data[QuoteFields.DATE_CREATION];
    this.#dateEnd = data[QuoteFields.DATE_END];
    this.#dateUpdate = data[QuoteFields.DATE_UPDATE];
    this.#endCustomerPONumber = data[QuoteFields.END_CUSTOMER_PO_NUMBER];
    const lastVersion = data[QuoteFields.LAST_VERSION];
    this.#lastVersion = lastVersion
      ? new QuoteLastVersion(lastVersion)
      : undefined;
    const partner = data[QuoteFields.PARTNER];
    this.#partner = partner ? new OrderPartner(partner) : undefined;
    this.#ponumber = data[QuoteFields.PO_NUMBER];
    this.#products = data[QuoteFields.PRODUCTS].map(
      (product: QuoteProductData) => new QuoteProduct(product),
    );
    this.#quoteReference = data[QuoteFields.QUOTE_REFERENCE];
    this.#reference = data[QuoteFields.REFERENCE];
    this.#status = data[QuoteFields.STATUS];
  }

  get customer(): ReferenceLink | undefined {
    return this.#customer;
  }

  get dateCreation(): string {
    return this.#dateCreation;
  }

  get dateEnd(): string | undefined {
    return this.#dateEnd;
  }

  get dateUpdate(): string {
    return this.#dateUpdate;
  }

  get endCustomerPONumber(): string | undefined {
    return this.#endCustomerPONumber;
  }

  get lastVersion(): QuoteLastVersion | undefined {
    return this.#lastVersion;
  }

  get partner(): OrderPartner | undefined {
    return this.#partner;
  }

  get ponumber(): string | undefined {
    return this.#ponumber;
  }

  get products(): QuoteProduct[] {
    return this.#products;
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

  public toJSON(): QuoteData {
    return {
      [QuoteFields.CUSTOMER]: this.customer?.toJSON(),
      [QuoteFields.DATE_CREATION]: this.dateCreation,
      [QuoteFields.DATE_END]: this.dateEnd,
      [QuoteFields.DATE_UPDATE]: this.dateUpdate,
      [QuoteFields.END_CUSTOMER_PO_NUMBER]: this.endCustomerPONumber,
      [QuoteFields.LAST_VERSION]: this.lastVersion?.toJSON(),
      [QuoteFields.PARTNER]: this.partner?.toJSON(),
      [QuoteFields.PO_NUMBER]: this.ponumber,
      [QuoteFields.PRODUCTS]: this.products.map((product: QuoteProduct) =>
        product.toJSON(),
      ),
      [QuoteFields.QUOTE_REFERENCE]: this.quoteReference,
      [QuoteFields.REFERENCE]: this.reference,
      [QuoteFields.STATUS]: this.status,
    };
  }
}
