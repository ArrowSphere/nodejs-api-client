import { AbstractOrder, OrderData } from './abstractOrder';

export class OrderFindResult extends AbstractOrder {
  public constructor(data: OrderData) {
    super(data);
  }

  public toJSON(): OrderData {
    return super.toJSON();
  }
}
