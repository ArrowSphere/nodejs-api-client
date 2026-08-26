import { CommentOrder, CommentOrderType } from './orders/comment';
import { AbstractEntity } from '../../abstractEntity';

export type DataListOrderCommentsType = Array<CommentOrderType>;

export class DataListOrderComments extends AbstractEntity<DataListOrderCommentsType> {
  readonly #comments: Array<CommentOrder>;

  public constructor(listOrderCommentDataInput: DataListOrderCommentsType) {
    super(listOrderCommentDataInput);

    this.#comments = listOrderCommentDataInput.map(
      (comment: CommentOrderType) => new CommentOrder(comment),
    );
  }

  get comments(): Array<CommentOrder> {
    return this.#comments;
  }

  public toJSON(): DataListOrderCommentsType {
    return this.comments.map((comment: CommentOrder) => comment.toJSON());
  }
}
