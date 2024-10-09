import { AbstractEntity } from '../../abstractEntity';
import { OrderSoftware, OrderSoftwareType } from './orderSoftware';

export enum DataListOrdersSoftwareFields {
  COLUMN_ORDERS = 'orders',
}

export type DataListOrdersSoftwareType = {
  [DataListOrdersSoftwareFields.COLUMN_ORDERS]: Array<OrderSoftwareType>;
};

export class DataListOrdersSoftware extends AbstractEntity<DataListOrdersSoftwareType> {
  readonly #orders: Array<OrderSoftware>;

  public constructor(orderList: DataListOrdersSoftwareType) {
    super(orderList);

    this.#orders = orderList[DataListOrdersSoftwareFields.COLUMN_ORDERS].map(
      (orderSoftware: OrderSoftwareType) => new OrderSoftware(orderSoftware),
    );
  }

  get orders(): Array<OrderSoftware> {
    return this.#orders;
  }

  public toJSON(): DataListOrdersSoftwareType {
    return {
      [DataListOrdersSoftwareFields.COLUMN_ORDERS]: this.orders.map(
        (orderSoftware: OrderSoftware) => orderSoftware.toJSON(),
      ),
    };
  }
}
