import { AbstractEntity } from '../../abstractEntity';

export enum ContactCreateFields {
  COLUMN_ID = 'id',
}

export type ContactCreateType = {
  [ContactCreateFields.COLUMN_ID]: number;
};

export class ContactCreate extends AbstractEntity<ContactCreateType> {
  readonly #id: number;

  public constructor(createContactResponse: ContactCreateType) {
    super(createContactResponse);

    this.#id = createContactResponse[ContactCreateFields.COLUMN_ID];
  }

  get id(): number {
    return this.#id;
  }

  public toJSON(): ContactCreateType {
    return {
      [ContactCreateFields.COLUMN_ID]: this.id,
    };
  }
}
