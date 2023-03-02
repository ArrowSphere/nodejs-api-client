import { AbstractEntity } from '../../../abstractEntity';
import { IssueCreatedBy, IssueCreatedByType } from './issue';

export enum IssueCommentFields {
  COLUMN_ID = 'id',
  COLUMN_BODY = 'body',
  COLUMN_DATE = 'date',
  COLUMN_CREATED_BY = 'createdBy',
}

export type IssueCommentType = {
  [IssueCommentFields.COLUMN_ID]: string;
  [IssueCommentFields.COLUMN_BODY]: string;
  [IssueCommentFields.COLUMN_DATE]: string;
  [IssueCommentFields.COLUMN_CREATED_BY]: IssueCreatedByType;
};

export class IssueComment extends AbstractEntity<IssueCommentType> {
  readonly #id: string;
  readonly #body: string;
  readonly #date: Date;
  readonly #createdBy: IssueCreatedBy;

  constructor(input: IssueCommentType) {
    super(input);

    this.#id = input[IssueCommentFields.COLUMN_ID];
    this.#body = input[IssueCommentFields.COLUMN_BODY];
    this.#date = new Date(input[IssueCommentFields.COLUMN_DATE]);
    this.#createdBy = new IssueCreatedBy(
      input[IssueCommentFields.COLUMN_CREATED_BY],
    );
  }

  get id(): string {
    return this.#id;
  }

  get body(): string {
    return this.#body;
  }

  get date(): Date {
    return this.#date;
  }

  get createdBy(): IssueCreatedBy {
    return this.#createdBy;
  }

  public toJSON(): IssueCommentType {
    return {
      [IssueCommentFields.COLUMN_ID]: this.id,
      [IssueCommentFields.COLUMN_BODY]: this.body,
      [IssueCommentFields.COLUMN_DATE]: this.date.toISOString(),
      [IssueCommentFields.COLUMN_CREATED_BY]: this.createdBy.toJSON(),
    };
  }
}

export type IssueCommentsType = Array<IssueCommentType>;

export class IssueComments extends AbstractEntity<IssueCommentsType> {
  readonly #list: IssueComment[];

  constructor(input: IssueCommentsType) {
    super(input);

    this.#list = input.map((item) => new IssueComment(item));
  }

  get list(): IssueComment[] {
    return this.#list;
  }

  public toJSON(): IssueCommentsType {
    return this.list.map((item) => item.toJSON());
  }
}
