import {
  GetData,
  CampaignAssetsFields,
  CampaignAssetsType,
} from '../../../src';

export const GET_CAMPAIGN_ASSETS_PARAMETERS = {
  campaignReference: '0ce70536-a59d-4c21-b39d-272b034367fa',
};

export const GET_CAMPAIGN_ASSETS_OUTPUT: GetData<CampaignAssetsType> = {
  status: 200,
  data: {
    [CampaignAssetsFields.COLUMN_ASSETS]: [
      {
        uuid: 'af3ac6a6-12ab-4880-9dfe-52e734325444',
        url:
          'https://XXXXXXXXX.s3.eu-west-1.amazonaws.com/assets/6def2e63-ca33-49de-9939-329f7f67c3ca/banner0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXR4KPOTARYJRAY7M',
      },
    ],
  },
};
