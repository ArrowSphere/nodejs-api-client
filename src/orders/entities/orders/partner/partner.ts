import { AbstractEntity } from '../../../../abstractEntity';
import { SharedContactInterface } from '../../../../shared/contact/contact';

export enum OrderPartnerFields {
  COLUMN_COMPANYNAME = 'companyName',
  COLUMN_CONTACT = 'contact',
}

export type OrderPartnerType = {
  [OrderPartnerFields.COLUMN_COMPANYNAME]: string;
  [OrderPartnerFields.COLUMN_CONTACT]: SharedContactInterface;
};

export class OrderPartner extends AbstractEntity<OrderPartnerType> {
  readonly #companyName: string;
  readonly #contact: SharedContactInterface;

  public constructor(getOrderPartnerDataInput: OrderPartnerType) {
    super(getOrderPartnerDataInput);

    this.#companyName =
      getOrderPartnerDataInput[OrderPartnerFields.COLUMN_COMPANYNAME];
    this.#contact = getOrderPartnerDataInput[OrderPartnerFields.COLUMN_CONTACT];
  }

  get companyName(): string {
    return this.#companyName;
  }

  get contact(): SharedContactInterface {
    return this.#contact;
  }

  public toJSON(): OrderPartnerType {
    return {
      [OrderPartnerFields.COLUMN_COMPANYNAME]: this.companyName,
      [OrderPartnerFields.COLUMN_CONTACT]: this.contact,
    };
  }
}
