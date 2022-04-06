import { AbstractEntity } from '../../../abstractEntity';
import { OrderProduct, OrderProductsType } from './products/products';
import { OrderPartner, OrderPartnerType } from './partner/partner';
import { ReferenceLink, ReferenceLinkType } from '../referenceLink';

export enum OrderFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_STATUS = 'status',
  COLUMN_DATESTATUS = 'dateStatus',
  COLUMN_DATECREATION = 'dateCreation',
  COLUMN_ORDER_REFERENCE = 'order_reference',
  COLUMN_PARTNER = 'partner',
  COLUMN_CUSTOMER = 'customer',
  COLUMN_PONUMBER = 'ponumber',
  COLUMN_PRODUCTS = 'products',
}

export type OrderType = {
  [OrderFields.COLUMN_REFERENCE]: string;
  [OrderFields.COLUMN_STATUS]: string;
  [OrderFields.COLUMN_DATESTATUS]: string;
  [OrderFields.COLUMN_DATECREATION]: string;
  [OrderFields.COLUMN_ORDER_REFERENCE]: string;
  [OrderFields.COLUMN_PARTNER]?: OrderPartnerType;
  [OrderFields.COLUMN_CUSTOMER]: ReferenceLinkType;
  [OrderFields.COLUMN_PONUMBER]: string;
  [OrderFields.COLUMN_PRODUCTS]: Array<OrderProductsType>;
};

export class Order extends AbstractEntity<OrderType> {
  readonly #reference: string;
  readonly #status: string;
  readonly #dateStatus: string;
  readonly #dateCreation: string;
  readonly #order_reference: string;
  readonly #partner?: OrderPartner;
  readonly #customer: ReferenceLink;
  readonly #ponumber: string;
  readonly #products: Array<OrderProduct>;

  public constructor(getOrderDataInput: OrderType) {
    super(getOrderDataInput);

    this.#reference = getOrderDataInput[OrderFields.COLUMN_REFERENCE];
    this.#status = getOrderDataInput[OrderFields.COLUMN_STATUS];
    this.#dateStatus = getOrderDataInput[OrderFields.COLUMN_DATESTATUS];
    this.#dateCreation = getOrderDataInput[OrderFields.COLUMN_DATECREATION];
    this.#order_reference =
      getOrderDataInput[OrderFields.COLUMN_ORDER_REFERENCE];
    this.#partner = getOrderDataInput[OrderFields.COLUMN_PARTNER]
      ? new OrderPartner(
          getOrderDataInput[OrderFields.COLUMN_PARTNER] as OrderPartnerType,
        )
      : undefined;
    this.#customer = new ReferenceLink(
      getOrderDataInput[OrderFields.COLUMN_CUSTOMER],
    );
    this.#ponumber = getOrderDataInput[OrderFields.COLUMN_PONUMBER];
    this.#products = getOrderDataInput[OrderFields.COLUMN_PRODUCTS].map(
      (order: OrderProductsType) => new OrderProduct(order),
    );
  }

  get reference(): string {
    return this.#reference;
  }
  get status(): string {
    return this.#status;
  }
  get dateStatus(): string {
    return this.#dateStatus;
  }
  get dateCreation(): string {
    return this.#dateCreation;
  }
  get order_reference(): string {
    return this.#order_reference;
  }
  get partner(): OrderPartner | undefined {
    return this.#partner;
  }
  get customer(): ReferenceLink {
    return this.#customer;
  }
  get ponumber(): string {
    return this.#ponumber;
  }
  get products(): Array<OrderProduct> {
    return this.#products;
  }

  public toJSON(): OrderType {
    return {
      [OrderFields.COLUMN_REFERENCE]: this.reference,
      [OrderFields.COLUMN_STATUS]: this.status,
      [OrderFields.COLUMN_DATESTATUS]: this.dateStatus,
      [OrderFields.COLUMN_DATECREATION]: this.dateCreation,
      [OrderFields.COLUMN_ORDER_REFERENCE]: this.order_reference,
      [OrderFields.COLUMN_PARTNER]: this.partner?.toJSON(),
      [OrderFields.COLUMN_CUSTOMER]: this.customer.toJSON(),
      [OrderFields.COLUMN_PONUMBER]: this.ponumber,
      [OrderFields.COLUMN_PRODUCTS]: this.products.map((order: OrderProduct) =>
        order.toJSON(),
      ),
    };
  }
}
