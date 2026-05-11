import { GraphqlApiProgramType } from './program';

export type GraphqlApiSupportLevel = {
  id?: number;
  displayName?: boolean;
  isPremium?: boolean;
  isEndCustomer?: boolean;
  level?: string;
  label?: string;
  skus?: string;
  program?: GraphqlApiProgramType;
  priority?: number;
};
