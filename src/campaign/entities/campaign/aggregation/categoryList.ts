import { AbstractEntity } from '../../../../abstractEntity';
import { Category, CategoryType } from './category';

export enum CategoryListEnumFields {
  COLUMN_CATEGORIES = 'categories',
}

export type CategoryListType = {
  [CategoryListEnumFields.COLUMN_CATEGORIES]: CategoryType[];
};

export class CategoryList extends AbstractEntity<CategoryListType> {
  readonly #categories: Category[];

  constructor(data: CategoryListType) {
    super(data);
    this.#categories = data.categories.map(
      (category: CategoryType) => new Category(category),
    );
  }

  get categories(): Category[] {
    return this.#categories;
  }

  public toJSON(): CategoryListType {
    return {
      [CategoryListEnumFields.COLUMN_CATEGORIES]: this.categories.map(
        (category: Category) => category.toJSON(),
      ),
    };
  }
}
