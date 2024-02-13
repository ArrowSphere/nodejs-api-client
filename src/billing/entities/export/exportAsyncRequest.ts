import { AbstractEntity } from '../../../abstractEntity';

export enum BillingExportAsyncRequestFields {
  COLUMN_REQUEST_REF = 'requestRef',
}

export type BillingExportAsyncRequestType = {
  [BillingExportAsyncRequestFields.COLUMN_REQUEST_REF]: string;
};

export class BillingExportAsyncRequest extends AbstractEntity<BillingExportAsyncRequestType> {
  readonly #requestRef: string;

  public constructor(
    billingExportAsyncRequestResponse: BillingExportAsyncRequestType,
  ) {
    super(billingExportAsyncRequestResponse);

    this.#requestRef =
      billingExportAsyncRequestResponse[
        BillingExportAsyncRequestFields.COLUMN_REQUEST_REF
      ];
  }

  get requestRef(): string {
    return this.#requestRef;
  }

  public toJSON(): BillingExportAsyncRequestType {
    return {
      [BillingExportAsyncRequestFields.COLUMN_REQUEST_REF]: this.requestRef,
    };
  }
}
