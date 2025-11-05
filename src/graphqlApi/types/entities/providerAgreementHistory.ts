import { UserType } from './user';
import { SubscriptionType } from './subscription';

export type GraphqlApiProviderAgreementHistoryType = {
  id?: number;
  version?: number;
  validateDate?: string;
  impersonateUser: UserType;
  user: UserType;
  subscription: SubscriptionType;
  subscriptionId: number;
};
