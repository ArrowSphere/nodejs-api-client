import { EndCustomerType, PartnerType } from './company';
import { ContactsType } from './contact';

export type OrganizationUnitsType = {
  id?: number;
  contacts?: ContactsType[];
  endCustomers?: EndCustomerType[];
  endCustomersCount?: number;
  name?: string;
  partner?: PartnerType;
  usersCounts?: number;
};
