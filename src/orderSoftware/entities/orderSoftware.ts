import {
  OrderSoftwareProduct,
  OrderSoftwareProductType,
} from './orderSoftwareProduct';
import {
  OrderSoftwareReference,
  OrderSoftwareReferenceType,
} from './orderSoftwareReference';
import { AbstractEntity } from '../../abstractEntity';

export enum OrderSoftwareFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_STATUS = 'status',
  COLUMN_PROGRAM = 'program',
  COLUMN_PRODUCTS = 'products',
  COLUMN_SUBSCRIPTION = 'subscription',
  COLUMN_REPORT = 'report',
}

export type OrderSoftwareType = {
  [OrderSoftwareFields.COLUMN_REFERENCE]: string;
  [OrderSoftwareFields.COLUMN_STATUS]: string;
  [OrderSoftwareFields.COLUMN_PROGRAM]: string;
  [OrderSoftwareFields.COLUMN_PRODUCTS]: Array<OrderSoftwareProductType>;
  [OrderSoftwareFields.COLUMN_SUBSCRIPTION]: OrderSoftwareReferenceType;
  [OrderSoftwareFields.COLUMN_REPORT]: OrderSoftwareReferenceType;
};

export class OrderSoftware extends AbstractEntity<OrderSoftwareType> {
  readonly #reference: string;
  readonly #status: string;
  readonly #program: string;
  readonly #products: Array<OrderSoftwareProduct>;
  readonly #subscription: OrderSoftwareReference;
  readonly #report: OrderSoftwareReference;

  public constructor(orderSoftwareDataInput: OrderSoftwareType) {
    super(orderSoftwareDataInput);

    this.#reference =
      orderSoftwareDataInput[OrderSoftwareFields.COLUMN_REFERENCE];
    this.#status = orderSoftwareDataInput[OrderSoftwareFields.COLUMN_STATUS];
    this.#program = orderSoftwareDataInput[OrderSoftwareFields.COLUMN_PROGRAM];
    this.#products = orderSoftwareDataInput[
      OrderSoftwareFields.COLUMN_PRODUCTS
    ].map(
      (product: OrderSoftwareProductType) => new OrderSoftwareProduct(product),
    );
    this.#subscription = new OrderSoftwareReference(
      orderSoftwareDataInput[OrderSoftwareFields.COLUMN_SUBSCRIPTION],
    );
    this.#report = new OrderSoftwareReference(
      orderSoftwareDataInput[OrderSoftwareFields.COLUMN_REPORT],
    );
  }
  get reference(): string {
    return this.#reference;
  }

  get status(): string {
    return this.#status;
  }

  get program(): string {
    return this.#program;
  }

  get products(): Array<OrderSoftwareProduct> {
    return this.#products;
  }

  get subscription(): OrderSoftwareReference {
    return this.#subscription;
  }

  get report(): OrderSoftwareReference {
    return this.#report;
  }

  public toJSON(): OrderSoftwareType {
    return {
      [OrderSoftwareFields.COLUMN_REFERENCE]: this.reference,
      [OrderSoftwareFields.COLUMN_STATUS]: this.status,
      [OrderSoftwareFields.COLUMN_PROGRAM]: this.program,
      [OrderSoftwareFields.COLUMN_PRODUCTS]: this.products.map(
        (product: OrderSoftwareProduct) => product.toJSON(),
      ),
      [OrderSoftwareFields.COLUMN_SUBSCRIPTION]: this.subscription.toJSON(),
      [OrderSoftwareFields.COLUMN_REPORT]: this.report.toJSON(),
    };
  }
}
