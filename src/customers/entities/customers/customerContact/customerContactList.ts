import { AbstractEntity } from '../../../../abstractEntity';
import { CustomerContact, CustomerContactType } from './customerContact';

export type CustomerContactsType = Array<CustomerContactType>;

export class CustomerContactList extends AbstractEntity<CustomerContactsType> {
  readonly #customerContactList: Array<CustomerContact>;

  public constructor(customerContactsDataInput: CustomerContactsType) {
    super(customerContactsDataInput);

    this.#customerContactList = customerContactsDataInput.map(
      (customerContact: CustomerContactType) =>
        new CustomerContact(customerContact),
    );
  }

  get customerContactList(): Array<CustomerContact> {
    return this.#customerContactList;
  }

  public toJSON(): CustomerContactsType {
    return this.customerContactList.map((customerContact) =>
      customerContact.toJSON(),
    );
  }
}
