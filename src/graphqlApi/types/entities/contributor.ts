import { WorkgroupType } from './workgroup';

export type GraphqlApiContributorType = {
  id?: number;
  icst?: GraphqlApiStaffType;
  isr?: GraphqlApiStaffType;
  fcst?: GraphqlApiStaffType;
  fsr?: GraphqlApiStaffType;
  sor?: GraphqlApiStaffType;
};

export type GraphqlApiStaffType = {
  id?: number;
  firstname?: string;
  internalId?: string;
  lastname?: string;
  locked?: boolean;
  workgroup?: WorkgroupType;
};
