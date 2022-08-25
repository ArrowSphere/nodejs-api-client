import {
  GetData,
  BannersFields,
  CampaignFields,
  CampaignType,
  LandingPageFields,
  RulesFields,
  LandingPageBodyFields,
  LandingPageFooterFields,
  LandingPageFooterFeatureFields,
  LandingPageHeaderFields,
} from '../../../src';

export const GET_ACTIVE_CAMPAIGN_PARAMETERS = {
  customer: 'XSP12345',
  location: 'MCP',
};

export const GET_ACTIVE_CAMPAIGN_OUTPUT: GetData<CampaignType> = {
  status: 200,
  data: {
    [CampaignFields.COLUMN_REFERENCE]: 'c925ec6e-e029-4146-8400-2867c7761743',
    [CampaignFields.COLUMN_NAME]: 'Campaign Microsoft',
    [CampaignFields.COLUMN_CATEGORY]: 'BANNER',
    [CampaignFields.COLUMN_IS_ACTIVATED]: true,
    [CampaignFields.COLUMN_CREATED_AT]: '2021-06-25T16:00:00Z',
    [CampaignFields.COLUMN_UPDATED_AT]: '2021-06-25T18:00:00Z',
    [CampaignFields.COLUMN_DELETED_AT]: '2021-08-25T16:00:00Z',
    [CampaignFields.COLUMN_RULES]: {
      [RulesFields.COLUMN_LOCATIONS]: ['MCP'],
      [RulesFields.COLUMN_ROLES]: ['EXT_MSP', 'EXT_MSP_P'],
      [RulesFields.COLUMN_MARKETPLACES]: ['FR', 'US'],
      [RulesFields.COLUMN_SUBSCRIPTIONS]: ['MSCSP', 'DDPCaaS'],
      [RulesFields.COLUMN_RESELLERS]: ['XSP12354', 'XSP256'],
      [RulesFields.COLUMN_END_CUSTOMERS]: ['XSP45678', 'XSP789'],
    },
    [CampaignFields.COLUMN_WEIGHT]: 1,
    [CampaignFields.COLUMN_START_DATE]: '2021-08-01',
    [CampaignFields.COLUMN_END_DATE]: '2021-09-31',
    [CampaignFields.COLUMN_BANNERS]: [
      {
        [BannersFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          'd8553daa-1d39-489e-89c0-3731c0d3ad0b',
        [BannersFields.COLUMN_TYPE]: 'PICTURE',
        [BannersFields.COLUMN_BUTTON_PLACEMENT]: 'RIGHT',
        [BannersFields.COLUMN_BUTTON_TEXT]: 'Click here',
        [BannersFields.COLUMN_TEXT]: 'Banner Title',
        [BannersFields.COLUMN_TEXT_COLOR]: '#119EOF',
      },
    ],
    [CampaignFields.COLUMN_LANDING_PAGE]: {
      [LandingPageFields.COLUMN_URL]: 'https://XXXXXXXXXX.com/landingpage.html',
      [LandingPageFields.COLUMN_HEADER]: {
        [LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '0fed6621-fe0c-4290-813a-58217e37b3ae',
        [LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID]:
          'e174e2a2-7545-4ef1-8f0c-122d0140cdea',
        [LandingPageHeaderFields.COLUMN_TITLE]: 'Microsoft Big campaign',
        [LandingPageHeaderFields.COLUMN_BACKGROUND_COLOR]: '#FF00FF',
        [LandingPageHeaderFields.COLUMN_BASELINE]: 'This page will explain ...',
        [LandingPageHeaderFields.COLUMN_TEXT_COLOR]: '#FF00FF',
      },
      [LandingPageFields.COLUMN_BODY]: {
        [LandingPageBodyFields.COLUMN_BACKGROUND_COLOR]: '#FFF',
        [LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '6e3a0d7a-8651-4e47-89db-c5b2fbaff8f0',
        [LandingPageBodyFields.COLUMN_TYPE]: 'PICTURE',
        [LandingPageBodyFields.COLUMN_TITLE]: 'This is a body title',
        [LandingPageBodyFields.COLUMN_DESCRIPTION]:
          '<p>This is a great description</p>',
        [LandingPageBodyFields.COLUMN_VIDEO_URL]: 'https://.../',
        [LandingPageBodyFields.COLUMN_BUTTON_TEXT]: 'Send form',
        [LandingPageBodyFields.COLUMN_CONTACT_EMAIL]:
          'firstname.name@mailprovider.com',
      },
      [LandingPageFields.COLUMN_FOOTER]: {
        [LandingPageFooterFields.COLUMN_TITLE]: 'Microsoft Big campaign',
        [LandingPageFooterFields.COLUMN_BACKGROUND_COLOR]: '#FF00FF',
        [LandingPageFooterFields.COLUMN_BUTTON_TEXT]: 'Click here!',
        [LandingPageFooterFields.COLUMN_BUTTON_URL]: 'https://.../',
        [LandingPageFooterFields.COLUMN_TEXT_COLOR]: '#FF00FF',
        [LandingPageFooterFields.COLUMN_FEATURES]: [
          {
            [LandingPageFooterFeatureFields.COLUMN_TITLE]:
              'This is a great feature',
            [LandingPageFooterFeatureFields.COLUMN_DESCRIPTION]:
              '<p>This is a great description</p>',
            [LandingPageFooterFeatureFields.COLUMN_ICON]: 'fa-icon',
            [LandingPageFooterFeatureFields.COLUMN_SIZE]: 4,
          },
          {
            [LandingPageFooterFeatureFields.COLUMN_TITLE]:
              'This is a great feature',
            [LandingPageFooterFeatureFields.COLUMN_DESCRIPTION]:
              '<p>This is a great description</p>',
            [LandingPageFooterFeatureFields.COLUMN_ICON]: 'fa-icon',
            [LandingPageFooterFeatureFields.COLUMN_SIZE]: 4,
          },
        ],
      },
    },
  },
};

export const GET_ACTIVE_CAMPAIGN_OUTPUT_MINIMAL: GetData<CampaignType> = {
  status: 200,
  data: {
    [CampaignFields.COLUMN_REFERENCE]: 'c925ec6e-e029-4146-8400-2867c7761743',
    [CampaignFields.COLUMN_NAME]: 'Campaign Microsoft',
    [CampaignFields.COLUMN_CREATED_AT]: '2021-06-25T16:00:00Z',
    [CampaignFields.COLUMN_UPDATED_AT]: '2021-06-25T18:00:00Z',
    [CampaignFields.COLUMN_BANNERS]: [
      {
        [BannersFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          'd8553daa-1d39-489e-89c0-3731c0d3ad0b',
        [BannersFields.COLUMN_BACKGROUND_COLOR]: '#FFFF',
        [BannersFields.COLUMN_TYPE]: 'PICTURE',
        [BannersFields.COLUMN_BUTTON_PLACEMENT]: 'RIGHT',
        [BannersFields.COLUMN_BUTTON_TEXT]: 'Click here',
        [BannersFields.COLUMN_TEXT]: 'Banner Title',
        [BannersFields.COLUMN_TEXT_COLOR]: '#119EOF',
      },
    ],
    [CampaignFields.COLUMN_LANDING_PAGE]: {
      [LandingPageFields.COLUMN_URL]: 'https://XXXXXXXXXX.com/landingpage.html',
      [LandingPageFields.COLUMN_HEADER]: {
        [LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '0fed6621-fe0c-4290-813a-58217e37b3ae',
        [LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID]:
          'e174e2a2-7545-4ef1-8f0c-122d0140cdea',
        [LandingPageHeaderFields.COLUMN_TITLE]: 'Microsoft Big campaign',
        [LandingPageHeaderFields.COLUMN_BACKGROUND_COLOR]: '#FF00FF',
        [LandingPageHeaderFields.COLUMN_BASELINE]: 'This page will explain ...',
        [LandingPageHeaderFields.COLUMN_TEXT_COLOR]: '#FF00FF',
      },
      [LandingPageFields.COLUMN_BODY]: {
        [LandingPageBodyFields.COLUMN_BACKGROUND_COLOR]: '#FFF',
        [LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '6e3a0d7a-8651-4e47-89db-c5b2fbaff8f0',
        [LandingPageBodyFields.COLUMN_TYPE]: 'PICTURE',
        [LandingPageBodyFields.COLUMN_TITLE]: 'This is a body title',
        [LandingPageBodyFields.COLUMN_DESCRIPTION]:
          '<p>This is a great description</p>',
        [LandingPageBodyFields.COLUMN_VIDEO_URL]: 'https://.../',
        [LandingPageBodyFields.COLUMN_BUTTON_TEXT]: 'Send form',
        [LandingPageBodyFields.COLUMN_CONTACT_EMAIL]:
          'firstname.name@mailprovider.com',
      },
      [LandingPageFields.COLUMN_FOOTER]: {
        [LandingPageFooterFields.COLUMN_TITLE]: 'Microsoft Big campaign',
        [LandingPageFooterFields.COLUMN_BACKGROUND_COLOR]: '#FF00FF',
        [LandingPageFooterFields.COLUMN_BUTTON_TEXT]: 'Click here!',
        [LandingPageFooterFields.COLUMN_BUTTON_URL]: 'https://.../',
        [LandingPageFooterFields.COLUMN_TEXT_COLOR]: '#FF00FF',
        [LandingPageFooterFields.COLUMN_FEATURES]: [
          {
            [LandingPageFooterFeatureFields.COLUMN_TITLE]:
              'This is a great feature',
            [LandingPageFooterFeatureFields.COLUMN_DESCRIPTION]:
              '<p>This is a great description</p>',
            [LandingPageFooterFeatureFields.COLUMN_ICON]: 'fa-icon',
            [LandingPageFooterFeatureFields.COLUMN_SIZE]: 4,
          },
          {
            [LandingPageFooterFeatureFields.COLUMN_TITLE]:
              'This is a great feature',
            [LandingPageFooterFeatureFields.COLUMN_DESCRIPTION]:
              '<p>This is a great description</p>',
            [LandingPageFooterFeatureFields.COLUMN_ICON]: 'fa-icon',
            [LandingPageFooterFeatureFields.COLUMN_SIZE]: 4,
          },
        ],
      },
    },
  },
};

export const GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_FOOTER_FEATURES: GetData<CampaignType> = {
  status: 200,
  data: {
    [CampaignFields.COLUMN_REFERENCE]: 'c925ec6e-e029-4146-8400-2867c7761743',
    [CampaignFields.COLUMN_NAME]: 'Campaign Microsoft',
    [CampaignFields.COLUMN_CATEGORY]: 'BANNER',
    [CampaignFields.COLUMN_IS_ACTIVATED]: true,
    [CampaignFields.COLUMN_CREATED_AT]: '2021-06-25T16:00:00Z',
    [CampaignFields.COLUMN_UPDATED_AT]: '2021-06-25T18:00:00Z',
    [CampaignFields.COLUMN_DELETED_AT]: '2021-08-25T16:00:00Z',
    [CampaignFields.COLUMN_RULES]: {
      [RulesFields.COLUMN_LOCATIONS]: ['MCP'],
      [RulesFields.COLUMN_ROLES]: ['EXT_MSP', 'EXT_MSP_P'],
      [RulesFields.COLUMN_MARKETPLACES]: ['FR', 'US'],
      [RulesFields.COLUMN_SUBSCRIPTIONS]: ['MSCSP', 'DDPCaaS'],
      [RulesFields.COLUMN_RESELLERS]: ['XSP12354', 'XSP256'],
      [RulesFields.COLUMN_END_CUSTOMERS]: ['XSP45678', 'XSP789'],
    },
    [CampaignFields.COLUMN_WEIGHT]: 1,
    [CampaignFields.COLUMN_START_DATE]: '2021-08-01',
    [CampaignFields.COLUMN_END_DATE]: '2021-09-31',
    [CampaignFields.COLUMN_BANNERS]: [
      {
        [BannersFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          'd8553daa-1d39-489e-89c0-3731c0d3ad0b',
        [BannersFields.COLUMN_TYPE]: 'PICTURE',
        [BannersFields.COLUMN_BUTTON_PLACEMENT]: 'RIGHT',
        [BannersFields.COLUMN_BUTTON_TEXT]: 'Click here',
        [BannersFields.COLUMN_TEXT]: 'Banner Title',
        [BannersFields.COLUMN_TEXT_COLOR]: '#119EOF',
      },
    ],
    [CampaignFields.COLUMN_LANDING_PAGE]: {
      [LandingPageFields.COLUMN_URL]: 'https://XXXXXXXXXX.com/landingpage.html',
      [LandingPageFields.COLUMN_HEADER]: {
        [LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '0fed6621-fe0c-4290-813a-58217e37b3ae',
        [LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID]:
          'e174e2a2-7545-4ef1-8f0c-122d0140cdea',
        [LandingPageHeaderFields.COLUMN_TITLE]: 'Microsoft Big campaign',
        [LandingPageHeaderFields.COLUMN_BACKGROUND_COLOR]: '#FF00FF',
        [LandingPageHeaderFields.COLUMN_BASELINE]: 'This page will explain ...',
        [LandingPageHeaderFields.COLUMN_TEXT_COLOR]: '#FF00FF',
      },
      [LandingPageFields.COLUMN_BODY]: {
        [LandingPageBodyFields.COLUMN_BACKGROUND_COLOR]: '#FFF',
        [LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '6e3a0d7a-8651-4e47-89db-c5b2fbaff8f0',
        [LandingPageBodyFields.COLUMN_TYPE]: 'PICTURE',
        [LandingPageBodyFields.COLUMN_TITLE]: 'This is a body title',
        [LandingPageBodyFields.COLUMN_DESCRIPTION]:
          '<p>This is a great description</p>',
        [LandingPageBodyFields.COLUMN_VIDEO_URL]: 'https://.../',
        [LandingPageBodyFields.COLUMN_BUTTON_TEXT]: 'Send form',
        [LandingPageBodyFields.COLUMN_CONTACT_EMAIL]:
          'firstname.name@mailprovider.com',
      },
      [LandingPageFields.COLUMN_FOOTER]: {
        [LandingPageFooterFields.COLUMN_TITLE]: 'Microsoft Big campaign',
        [LandingPageFooterFields.COLUMN_BACKGROUND_COLOR]: '#FF00FF',
        [LandingPageFooterFields.COLUMN_BUTTON_TEXT]: 'Click here!',
        [LandingPageFooterFields.COLUMN_BUTTON_URL]: 'https://.../',
        [LandingPageFooterFields.COLUMN_TEXT_COLOR]: '#FF00FF',
      },
    },
  },
};

export const GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING: GetData<CampaignType> = {
  status: 200,
  data: {
    [CampaignFields.COLUMN_REFERENCE]: 'c925ec6e-e029-4146-8400-2867c7761743',
    [CampaignFields.COLUMN_NAME]: 'Campaign Microsoft',
    [CampaignFields.COLUMN_CATEGORY]: 'BANNER',
    [CampaignFields.COLUMN_IS_ACTIVATED]: true,
    [CampaignFields.COLUMN_CREATED_AT]: '2021-06-25T16:00:00Z',
    [CampaignFields.COLUMN_UPDATED_AT]: '2021-06-25T18:00:00Z',
    [CampaignFields.COLUMN_DELETED_AT]: '2021-08-25T16:00:00Z',
    [CampaignFields.COLUMN_RULES]: {
      [RulesFields.COLUMN_LOCATIONS]: ['MCP'],
      [RulesFields.COLUMN_ROLES]: ['EXT_MSP', 'EXT_MSP_P'],
      [RulesFields.COLUMN_MARKETPLACES]: ['FR', 'US'],
      [RulesFields.COLUMN_SUBSCRIPTIONS]: ['MSCSP', 'DDPCaaS'],
      [RulesFields.COLUMN_RESELLERS]: ['XSP12354', 'XSP256'],
      [RulesFields.COLUMN_END_CUSTOMERS]: ['XSP45678', 'XSP789'],
    },
    [CampaignFields.COLUMN_WEIGHT]: 1,
    [CampaignFields.COLUMN_START_DATE]: '2021-08-01',
    [CampaignFields.COLUMN_END_DATE]: '2021-09-31',
    [CampaignFields.COLUMN_BANNERS]: [
      {
        [BannersFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          'd8553daa-1d39-489e-89c0-3731c0d3ad0b',
        [BannersFields.COLUMN_TYPE]: 'PICTURE',
        [BannersFields.COLUMN_BUTTON_PLACEMENT]: 'RIGHT',
        [BannersFields.COLUMN_BUTTON_TEXT]: 'Click here',
        [BannersFields.COLUMN_TEXT]: 'Banner Title',
        [BannersFields.COLUMN_TEXT_COLOR]: '#119EOF',
      },
    ],
    [CampaignFields.COLUMN_LANDING_PAGE]: {
      [LandingPageFields.COLUMN_HEADER]: {
        [LandingPageHeaderFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '0fed6621-fe0c-4290-813a-58217e37b3ae',
        [LandingPageHeaderFields.COLUMN_VENDOR_LOGO_UUID]:
          'e174e2a2-7545-4ef1-8f0c-122d0140cdea',
      },
      [LandingPageFields.COLUMN_BODY]: {
        [LandingPageBodyFields.COLUMN_BACKGROUND_IMAGE_UUID]:
          '6e3a0d7a-8651-4e47-89db-c5b2fbaff8f0',
      },
    },
  },
};

export const PAYLOAD_POST_CAMPAIGN_EMAIL = {
  application: 'xcp',
  metadata: {
    domain: 'myportals.cloud',
  },
};
