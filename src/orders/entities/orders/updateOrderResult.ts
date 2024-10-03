import { AbstractEntity } from '../../../abstractEntity';

export type UpdateOrderResultData = {
  message: string;
};

export class UpdateOrderResult extends AbstractEntity<UpdateOrderResultData> {
  readonly #message: string;

  public constructor(data: UpdateOrderResultData) {
    super(data);

    this.#message = data.message;
  }

  public toJSON(): UpdateOrderResultData {
    return {
      message: this.#message,
    };
  }
}
