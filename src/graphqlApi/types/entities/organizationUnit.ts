import { EndCustomerType } from './company';
import { ContactsType } from './contact';

export type OrganizationUnitsType = {
  id?: number;
  contacts?: ContactsType[];
  endCustomer?: EndCustomerType;
  endCustomersCount?: number;
  name?: string;
  usersCounts?: number;
};
