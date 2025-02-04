import { AbstractEntity } from '../../../abstractEntity';
import { CategoryList, CategoryListType } from './aggregation/categoryList';

export enum CampaignAggragationsFields {
  COLUMN_CATEGORY_AGG = 'categoryAgg',
}

export type CampaignAggragationsType = {
  [CampaignAggragationsFields.COLUMN_CATEGORY_AGG]: CategoryListType;
};

export class CampaignAggragations extends AbstractEntity<CampaignAggragationsType> {
  readonly #categoryAgg: CategoryList;

  constructor(data: CampaignAggragationsType) {
    super(data);
    this.#categoryAgg = new CategoryList(data.categoryAgg);
  }

  get categoryAgg(): CategoryList {
    return this.#categoryAgg;
  }

  public toJSON(): CampaignAggragationsType {
    return {
      [CampaignAggragationsFields.COLUMN_CATEGORY_AGG]: this.categoryAgg.toJSON(),
    };
  }
}
