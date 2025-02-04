import { AbstractEntity } from '../../../../abstractEntity';

export enum ImageFields {
  COLUMN_FIELDS = 'fields',
  COLUMN_URL = 'url',
}

export type ImageType = {
  [ImageFields.COLUMN_URL]: string;
  [ImageFields.COLUMN_FIELDS]?: { [key: string]: string };
};

export class Image extends AbstractEntity<ImageType> {
  readonly #url: string;
  readonly #fields: { [key: string]: string } | undefined;

  constructor(imageInput: ImageType) {
    super(imageInput);
    this.#url = imageInput[ImageFields.COLUMN_URL];
    this.#fields = imageInput[ImageFields.COLUMN_FIELDS];
  }

  get url(): string {
    return this.#url;
  }

  get fields(): { [key: string]: string } | undefined {
    return this.#fields;
  }

  public toJSON(): ImageType {
    return {
      [ImageFields.COLUMN_URL]: this.url,
      [ImageFields.COLUMN_FIELDS]: this.fields,
    };
  }
}
