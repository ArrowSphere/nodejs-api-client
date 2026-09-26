import { AbstractEntity } from '../../../abstractEntity';

export enum CommentFields {
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_CREATED_BY = 'createdBy',
  COLUMN_VALUE = 'value',
}

export type CommentType = {
  [CommentFields.COLUMN_CREATED_AT]: string;
  [CommentFields.COLUMN_CREATED_BY]: string;
  [CommentFields.COLUMN_VALUE]: string;
};

export class CommentOrder extends AbstractEntity<CommentType> {
  readonly #createdAt: string;
  readonly #createdBy: string;
  readonly #value: string;

  public constructor(getCommentDataInput: CommentType) {
    super(getCommentDataInput);

    this.#createdAt = getCommentDataInput[CommentFields.COLUMN_CREATED_AT];
    this.#createdBy = getCommentDataInput[CommentFields.COLUMN_CREATED_BY];
    this.#value = getCommentDataInput[CommentFields.COLUMN_VALUE];
  }

  get createdAt(): string {
    return this.#createdAt;
  }
  get createdBy(): string {
    return this.#createdBy;
  }
  get value(): string {
    return this.#value;
  }

  public toJSON(): CommentType {
    return {
      [CommentFields.COLUMN_CREATED_AT]: this.createdAt,
      [CommentFields.COLUMN_CREATED_BY]: this.createdBy,
      [CommentFields.COLUMN_VALUE]: this.value,
    };
  }
}
