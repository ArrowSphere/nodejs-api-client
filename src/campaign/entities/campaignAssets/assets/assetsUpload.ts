import { AbstractEntity } from '../../../../abstractEntity';
import { Image, ImageType } from './image';

export enum AssetsUploadFields {
  COLUMN_UUID = 'uuid',
  COLUMN_IMAGE = 'image',
}

export type AssetsUploadType = {
  [AssetsUploadFields.COLUMN_UUID]: string;
  [AssetsUploadFields.COLUMN_IMAGE]: ImageType;
};

export class AssetsUpload extends AbstractEntity<AssetsUploadType> {
  readonly #uuid: string;
  readonly #image: Image;

  constructor(assetsInput: AssetsUploadType) {
    super(assetsInput);
    this.#uuid = assetsInput[AssetsUploadFields.COLUMN_UUID];
    this.#image = new Image(assetsInput[AssetsUploadFields.COLUMN_IMAGE]);
  }

  get uuid(): string {
    return this.#uuid;
  }

  get image(): Image {
    return this.#image;
  }

  public toJSON(): AssetsUploadType {
    return {
      [AssetsUploadFields.COLUMN_UUID]: this.uuid,
      [AssetsUploadFields.COLUMN_IMAGE]: this.image.toJSON(),
    };
  }
}
