import { AbstractEntity } from '../../../../abstractEntity';

export enum AssetsFields {
  COLUMN_UUID = 'uuid',
  COLUMN_URL = 'url',
  COLUMN_FIELDS = 'fields',
}

export type AssetsType = {
  [AssetsFields.COLUMN_UUID]: string;
  [AssetsFields.COLUMN_URL]: string;
  [AssetsFields.COLUMN_FIELDS]?: Record<string, string>;
};

export class Assets extends AbstractEntity<AssetsType> {
  readonly #uuid: string;
  readonly #url: string;
  readonly #fields: Record<string, string> | undefined;

  constructor(assetsInput: AssetsType) {
    super(assetsInput);
    this.#uuid = assetsInput[AssetsFields.COLUMN_UUID];
    this.#url = assetsInput[AssetsFields.COLUMN_URL];
    this.#fields = assetsInput[AssetsFields.COLUMN_FIELDS];
  }

  get uuid(): string {
    return this.#uuid;
  }

  get url(): string {
    return this.#url;
  }

  get fields(): Record<string, string> | undefined {
    return this.#fields;
  }

  public toJSON(): AssetsType {
    return {
      [AssetsFields.COLUMN_UUID]: this.uuid,
      [AssetsFields.COLUMN_URL]: this.url,
      [AssetsFields.COLUMN_FIELDS]: this.fields,
    };
  }
}
