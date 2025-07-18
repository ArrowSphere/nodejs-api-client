import { GraphqlApiProgramType } from './program';

export type GraphqlApiSupportLevel = {
  id?: number;
  isPremium?: boolean;
  isEndCustomer?: boolean;
  label?: string;
  skus?: string;
  program?: GraphqlApiProgramType;
};
