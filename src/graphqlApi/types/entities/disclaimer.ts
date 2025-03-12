import { GraphqlApiProgramType } from './program';
import { WorkgroupType } from './workgroup';

export type GraphqlApiDisclaimerType = {
  id?: number;
  content?: string;
  program?: GraphqlApiProgramType;
  workgroup?: WorkgroupType;
};
