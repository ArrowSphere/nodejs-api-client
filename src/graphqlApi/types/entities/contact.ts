import { EndCustomerType } from './company';
import { OrganizationUnitsType } from './organizationUnit';

export type ContactsType = {
  id?: number;
  active?: boolean;
  communicationEmail?: string;
  companies?: EndCustomerType[];
  effectiveDate?: string;
  email?: string;
  erpId?: string;
  firstname?: string;
  lastname?: string;
  locked?: boolean;
  organizationUnits?: OrganizationUnitsType[];
  phone?: string;
  status?: string;
  tseAccountStatus?: string;
  username?: string;
  type?: ContactTypeType;
  role?: ContactRole;
};

type ContactRole = {
  id?: number;
  name?: string;
};

type ContactTypeType = {
  id?: number;
  name?: string;
};
