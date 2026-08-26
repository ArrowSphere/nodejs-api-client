import { AbstractEntity } from '../../../abstractEntity';

export enum CommentOrderFields {
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_CREATED_BY = 'createdBy',
  COLUMN_VALUE = 'value',
}

export type CommentOrderType = {
  [CommentOrderFields.COLUMN_CREATED_AT]: string;
  [CommentOrderFields.COLUMN_CREATED_BY]: string;
  [CommentOrderFields.COLUMN_VALUE]: string;
};

export class CommentOrder extends AbstractEntity<CommentOrderType> {
  readonly #createdAt: string;
  readonly #createdBy: string;
  readonly #value: string;

  public constructor(getCommentDataInput: CommentOrderType) {
    super(getCommentDataInput);

    this.#createdAt = getCommentDataInput[CommentOrderFields.COLUMN_CREATED_AT];
    this.#createdBy = getCommentDataInput[CommentOrderFields.COLUMN_CREATED_BY];
    this.#value = getCommentDataInput[CommentOrderFields.COLUMN_VALUE];
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

  public toJSON(): CommentOrderType {
    return {
      [CommentOrderFields.COLUMN_CREATED_AT]: this.createdAt,
      [CommentOrderFields.COLUMN_CREATED_BY]: this.createdBy,
      [CommentOrderFields.COLUMN_VALUE]: this.value,
    };
  }
}
