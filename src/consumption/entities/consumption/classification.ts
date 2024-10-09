import { AbstractEntity } from '../../../abstractEntity';

export enum ClassificationFields {
  COLUMN_CLASSIFICATIONS = 'classifications',
}

export type ClassificationType = {
  [ClassificationFields.COLUMN_CLASSIFICATIONS]: Array<string>;
};

export class Classification extends AbstractEntity<ClassificationType> {
  readonly #classifications: Array<string>;

  public constructor(classificationResponse: ClassificationType) {
    super(classificationResponse);

    this.#classifications =
      classificationResponse[ClassificationFields.COLUMN_CLASSIFICATIONS];
  }

  get classifications(): Array<string> {
    return this.#classifications;
  }

  public toJSON(): ClassificationType {
    return {
      [ClassificationFields.COLUMN_CLASSIFICATIONS]: this.classifications,
    };
  }
}
