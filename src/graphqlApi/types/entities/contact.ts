import { BaseCompanyType, EndCustomerType } from './company';
import { OrganizationUnitsType } from './organizationUnit';
import { UserType } from './user';

export type ContactsType = {
  id?: number;
  active?: boolean;
  communicationEmail?: string;
  //@deprecated This field no longer exists in graphql schema and must be removed.
  companies?: EndCustomerType[];
  company?: BaseCompanyType;
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
  user?: UserType;
};

type ContactRole = {
  id?: number;
  name?: string;
};

type ContactTypeType = {
  id?: number;
  name?: string;
};
