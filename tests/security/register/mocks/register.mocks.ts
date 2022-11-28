import {
  GetData,
  GetResultFields,
  RegistrationLinkFields,
  RegistrationLinkType,
} from '../../../../src';

export const PAYLOAD_REGISTER_RESPONSE: GetData<RegistrationLinkType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [RegistrationLinkFields.COLUMN_REGISTRATION_LINK]:
      'https://eu-west-1.console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/create/review?templateURL=test',
  },
};
