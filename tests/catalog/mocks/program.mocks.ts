import {
  GetData,
  GetResultFields,
  ProgramsType,
  ProgramFields,
  ProgramType,
  ProgramLinksFields,
  ProgramExtraInfoFields,
  ProgramExtraInfoItemFields,
} from '../../../src';

export const LIST_PROGRAMS_RESPONSE: GetData<ProgramsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [ProgramFields.REFERENCE]: 'reference',
      [ProgramFields.NAME]: 'name',
      [ProgramFields.ASSOCIATED_SUBSCRIPTION_PROGRAM]:
        'associatedSubscriptionProgram',
      [ProgramFields.LOGO]: 'logo',
      [ProgramFields.CATEGORY]: 'category',
      [ProgramFields.LINKS]: {
        [ProgramLinksFields.PROGRAM]: 'program',
        [ProgramLinksFields.PRODUCTS]: 'products',
      },
      [ProgramFields.EXTRA_INFORMATION]: {
        [ProgramExtraInfoFields.RESELLER]: [
          {
            [ProgramExtraInfoItemFields.NAME]: 'name',
            [ProgramExtraInfoItemFields.LABEL]: 'label',
            [ProgramExtraInfoItemFields.TYPE]: 'type',
            [ProgramExtraInfoItemFields.REGEX]: 'regex',
            [ProgramExtraInfoItemFields.MANDATORY]: true,
          },
        ],
        [ProgramExtraInfoFields.END_CUSTOMER]: [
          {
            [ProgramExtraInfoItemFields.NAME]: 'name',
            [ProgramExtraInfoItemFields.LABEL]: 'label',
            [ProgramExtraInfoItemFields.TYPE]: 'type',
            [ProgramExtraInfoItemFields.REGEX]: 'regex',
            [ProgramExtraInfoItemFields.MANDATORY]: true,
          },
        ],
        [ProgramExtraInfoFields.ORDER]: [
          {
            [ProgramExtraInfoItemFields.NAME]: 'name',
            [ProgramExtraInfoItemFields.LABEL]: 'label',
            [ProgramExtraInfoItemFields.TYPE]: 'type',
            [ProgramExtraInfoItemFields.REGEX]: 'regex',
            [ProgramExtraInfoItemFields.MANDATORY]: true,
          },
        ],
      },
    },
  ],
};

export const GET_PROGRAM_RESPONSE: GetData<ProgramType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [ProgramFields.REFERENCE]: 'reference',
    [ProgramFields.NAME]: 'name',
    [ProgramFields.ASSOCIATED_SUBSCRIPTION_PROGRAM]:
      'associatedSubscriptionProgram',
    [ProgramFields.LOGO]: 'logo',
    [ProgramFields.CATEGORY]: 'category',
    [ProgramFields.LINKS]: {
      [ProgramLinksFields.PROGRAM]: 'program',
      [ProgramLinksFields.PRODUCTS]: 'products',
    },
    [ProgramFields.EXTRA_INFORMATION]: {
      [ProgramExtraInfoFields.RESELLER]: [
        {
          [ProgramExtraInfoItemFields.NAME]: 'name',
          [ProgramExtraInfoItemFields.LABEL]: 'label',
          [ProgramExtraInfoItemFields.TYPE]: 'type',
          [ProgramExtraInfoItemFields.REGEX]: 'regex',
          [ProgramExtraInfoItemFields.MANDATORY]: true,
        },
      ],
      [ProgramExtraInfoFields.END_CUSTOMER]: [
        {
          [ProgramExtraInfoItemFields.NAME]: 'name',
          [ProgramExtraInfoItemFields.LABEL]: 'label',
          [ProgramExtraInfoItemFields.TYPE]: 'type',
          [ProgramExtraInfoItemFields.REGEX]: 'regex',
          [ProgramExtraInfoItemFields.MANDATORY]: true,
        },
      ],
      [ProgramExtraInfoFields.ORDER]: [
        {
          [ProgramExtraInfoItemFields.NAME]: 'name',
          [ProgramExtraInfoItemFields.LABEL]: 'label',
          [ProgramExtraInfoItemFields.TYPE]: 'type',
          [ProgramExtraInfoItemFields.REGEX]: 'regex',
          [ProgramExtraInfoItemFields.MANDATORY]: true,
        },
      ],
    },
  },
};
