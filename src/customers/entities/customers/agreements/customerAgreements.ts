import { AbstractEntity } from '../../../../abstractEntity';

export enum CustomerAgreementsFields {
  COLUMN_IS_MCA_VALIDATED = 'isMcaValidated',
}

export type CustomerAgreementsType = {
  [CustomerAgreementsFields.COLUMN_IS_MCA_VALIDATED]: boolean;
};

export class CustomerAgreements extends AbstractEntity<CustomerAgreementsType> {
  readonly #isMcaValidated: boolean;

  public constructor(customerAgreementsDataInput: CustomerAgreementsType) {
    super(customerAgreementsDataInput);

    this.#isMcaValidated =
      customerAgreementsDataInput[
        CustomerAgreementsFields.COLUMN_IS_MCA_VALIDATED
      ];
  }

  get IsMcaValidated(): boolean {
    return this.#isMcaValidated;
  }

  public toJSON(): CustomerAgreementsType {
    return {
      [CustomerAgreementsFields.COLUMN_IS_MCA_VALIDATED]: this.#isMcaValidated,
    };
  }
}
