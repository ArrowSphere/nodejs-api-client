import { GetData, GetResult } from '../../getResult';
import { ItemList, ItemListType } from './itemList';

export enum CartActionsEnum {
  CHECKOUT = 'CHECKOUT',
  REQUEST_QUOTE = 'REQUEST_QUOTE',
}

export enum CartItemListResultFields {
  CART_ACTIONS = 'cartActions',
}

export type CartItemListResultData = GetData<ItemListType> & {
  [CartItemListResultFields.CART_ACTIONS]?: CartActionsEnum[];
};

export class CartItemListResult extends GetResult<ItemList> {
  readonly #cartActions?: CartActionsEnum[];

  public constructor(input: CartItemListResultData) {
    super(ItemList, input);

    this.#cartActions = input[CartItemListResultFields.CART_ACTIONS];
  }

  /**
   * Actions available on the cart (e.g. CartActionsEnum.CHECKOUT)
   */
  public get cartActions(): CartActionsEnum[] {
    return this.#cartActions ?? [];
  }

  public toJSON(): CartItemListResultData {
    return {
      ...super.toJSON(),
      ...(this.#cartActions && {
        [CartItemListResultFields.CART_ACTIONS]: this.#cartActions,
      }),
    };
  }
}
