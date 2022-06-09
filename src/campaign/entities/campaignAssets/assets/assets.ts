import { AbstractEntity } from '../../../../abstractEntity';

export enum AssetsFields {
  COLUMN_UUID = 'uuid',
  COLUMN_URL = 'url',
}

export type AssetsType = {
  [AssetsFields.COLUMN_UUID]: string;
  [AssetsFields.COLUMN_URL]: string;
};

export class Assets extends AbstractEntity<AssetsType> {
  readonly #uuid: string;
  readonly #url: string;

  constructor(assetsInput: AssetsType) {
    super(assetsInput);
    this.#uuid = assetsInput[AssetsFields.COLUMN_UUID];
    this.#url = assetsInput[AssetsFields.COLUMN_URL];
  }

  get uuid(): string {
    return this.#uuid;
  }

  get url(): string {
    return this.#url;
  }

  public toJSON(): AssetsType {
    return {
      [AssetsFields.COLUMN_UUID]: this.uuid,
      [AssetsFields.COLUMN_URL]: this.url,
    };
  }
}
