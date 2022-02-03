import { AbstractEntity } from '../../abstractEntity';
import { Customer, CustomerType } from './customers/customer';

export enum DataCustomersFields {
  COLUMN_CUSTOMERS = 'customers',
}

export type DataCustomersType = {
  [DataCustomersFields.COLUMN_CUSTOMERS]: Array<CustomerType>;
};

export class DataCustomers extends AbstractEntity<DataCustomersType> {
  readonly #customers: Array<Customer>;

  public constructor(customersDataInput: DataCustomersType) {
    super(customersDataInput);

    this.#customers = customersDataInput[
      DataCustomersFields.COLUMN_CUSTOMERS
    ].map((result) => new Customer(result));
  }

  get customers(): Array<Customer> {
    return this.#customers;
  }

  public toJSON(): DataCustomersType {
    return {
      [DataCustomersFields.COLUMN_CUSTOMERS]: this.customers.map((result) =>
        result.toJSON(),
      ),
    };
  }
}
