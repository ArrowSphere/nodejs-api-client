import { AbstractEntity } from '../../../../../abstractEntity';

export enum FamilyFields {
  COLUMN_NAME = 'name',
}

export type FamilyType = {
  [FamilyFields.COLUMN_NAME]: string;
};

export class Family extends AbstractEntity<FamilyType> {
  readonly #name: string;

  public constructor(family: FamilyType) {
    super(family);

    this.#name = family[FamilyFields.COLUMN_NAME];
  }

  get name(): string {
    return this.#name;
  }

  public toJSON(): FamilyType {
    return {
      [FamilyFields.COLUMN_NAME]: this.name,
    };
  }
}
