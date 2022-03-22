import { AbstractEntity } from '../../abstractEntity';
import { Order, OrderType } from './orders/order';

export enum DataListOrdersFields {
  COLUMN_ORDERS = 'orders',
}

export type DataListOrdersType = {
  [DataListOrdersFields.COLUMN_ORDERS]: Array<OrderType>;
};

export class DataListOrders extends AbstractEntity<DataListOrdersType> {
  readonly #orders: Array<Order>;

  public constructor(listOrderDataInput: DataListOrdersType) {
    super(listOrderDataInput);

    this.#orders = listOrderDataInput[DataListOrdersFields.COLUMN_ORDERS].map(
      (order: OrderType) => new Order(order),
    );
  }

  get orders(): Array<Order> {
    return this.#orders;
  }

  public toJSON(): DataListOrdersType {
    return {
      [DataListOrdersFields.COLUMN_ORDERS]: this.orders.map((order: Order) =>
        order.toJSON(),
      ),
    };
  }
}
