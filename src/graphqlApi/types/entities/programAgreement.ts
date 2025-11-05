import { WorkgroupType } from './workgroup';
import { GraphqlApiProgramType } from './program';
import { SubscriptionType } from './subscription';
import { GraphqlApiProviderAgreementHistoryType } from './providerAgreementHistory';

export type GraphqlApiProgramAgreementType = {
  id?: number;
  createDate?: string;
  endDateValidity?: string;
  idFile?: string;
  startDateValidity?: string;
  url?: string;
  workgroup?: WorkgroupType;
  program?: GraphqlApiProgramType;
  providerAgreementHistory?: GraphqlApiProviderAgreementHistoryType[];
  subscription?: SubscriptionType;
};
