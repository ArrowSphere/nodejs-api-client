import { AbstractEntity } from '../../../abstractEntity';

export enum ConsumptionDownloadRequestFields {
  COLUMN_REF = 'ref',
  COLUMN_LINK = 'link',
  COLUMN_LINK_EXPIRATION_DATE = 'linkExpirationDate',
}

export type ConsumptionDownloadRequestType = {
  [ConsumptionDownloadRequestFields.COLUMN_REF]: string;
  [ConsumptionDownloadRequestFields.COLUMN_LINK]: Array<string>;
  [ConsumptionDownloadRequestFields.COLUMN_LINK_EXPIRATION_DATE]: string;
};

export class ConsumptionDownloadRequest extends AbstractEntity<ConsumptionDownloadRequestType> {
  readonly #ref: string;
  readonly #link: Array<string>;
  readonly #linkExpirationDate: string;

  public constructor(consumptionResponse: ConsumptionDownloadRequestType) {
    super(consumptionResponse);

    this.#ref =
      consumptionResponse[ConsumptionDownloadRequestFields.COLUMN_REF];
    this.#link =
      consumptionResponse[ConsumptionDownloadRequestFields.COLUMN_LINK];
    this.#linkExpirationDate =
      consumptionResponse[
        ConsumptionDownloadRequestFields.COLUMN_LINK_EXPIRATION_DATE
      ];
  }

  get ref(): string {
    return this.#ref;
  }

  get link(): Array<string> {
    return this.#link;
  }

  get linkExpirationDate(): string {
    return this.#linkExpirationDate;
  }

  public toJSON(): ConsumptionDownloadRequestType {
    return {
      [ConsumptionDownloadRequestFields.COLUMN_REF]: this.ref,
      [ConsumptionDownloadRequestFields.COLUMN_LINK]: this.link,
      [ConsumptionDownloadRequestFields.COLUMN_LINK_EXPIRATION_DATE]: this
        .linkExpirationDate,
    };
  }
}
