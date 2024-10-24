import { AbstractEntity } from '../../abstractEntity';
import { ReportValidation, ReportValidationType } from './reportValidation';

export enum ReportValidationReferenceFields {
  COLUMN_ORDERS = 'orders',
}

export type ReportValidationReferenceType = {
  [ReportValidationReferenceFields.COLUMN_ORDERS]: Array<ReportValidationType>;
};

export class ReportValidationReference extends AbstractEntity<ReportValidationReferenceType> {
  readonly #orders;

  public constructor(reportReferenceLinkData: ReportValidationReferenceType) {
    super(reportReferenceLinkData);
    this.#orders = reportReferenceLinkData[
      ReportValidationReferenceFields.COLUMN_ORDERS
    ].map((order: ReportValidationType) => new ReportValidation(order));
  }

  get orders() {
    return this.#orders;
  }

  public toJSON(): ReportValidationReferenceType {
    return {
      [ReportValidationReferenceFields.COLUMN_ORDERS]: this.orders.map((it) =>
        it.toJSON(),
      ),
    };
  }
}
