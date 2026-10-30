import { AbstractEntity } from '../../abstractEntity';
import {
  CheckEligibilityItem,
  CheckEligibilityItemType,
} from './checkEligibilityItem';

export type CheckEligibilityItemsType = Array<CheckEligibilityItemType>;

export class CheckEligibilityItems extends AbstractEntity<CheckEligibilityItemsType> {
  readonly #list: CheckEligibilityItem[];

  constructor(input: CheckEligibilityItemsType) {
    super(input);

    this.#list = input.map((item) => new CheckEligibilityItem(item));
  }

  get list(): CheckEligibilityItem[] {
    return this.#list;
  }

  public toJSON(): CheckEligibilityItemsType {
    return this.list.map((item) => item.toJSON());
  }
}
