import { AbstractEntity } from '../../abstractEntity';
import { Item, ItemType } from './item';

export type ItemListType = Array<ItemType>;

export class ItemList extends AbstractEntity<ItemListType> {
  readonly #items: Item[];

  public constructor(itemListResponse: ItemListType) {
    super(itemListResponse);

    this.#items = itemListResponse.map((item) => new Item(item));
  }

  get items(): Item[] {
    return this.#items;
  }

  public toJSON(): ItemType[] {
    return this.items.map((item) => item.toJSON());
  }
}
