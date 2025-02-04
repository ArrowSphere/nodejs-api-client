import {
  GetData,
  CampaignAssetsFields,
  CampaignAssetsType,
  CampaignAssetsUploadType,
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

export const GET_CAMPAIGN_ASSETS_FORM_OUTPUT: GetData<CampaignAssetsUploadType> = {
  status: 200,
  data: {
    [CampaignAssetsFields.COLUMN_ASSETS]: [
      {
        uuid: 'af3ac6a6-12ab-4880-9dfe-52e734325444',
        image: {
          url:
            'https://XXXXXXXXX.s3.eu-west-1.amazonaws.com/assets/6def2e63-ca33-49de-9939-329f7f67c3ca/banner0.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAXR4KPOTARYJRAY7M',
          fields: {
            Key: 'assets/6def2e63-ca33-49de-9939-329f7f67c3ca/banner0.png',
            bucket: 'bucketName',
            'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
            'X-Amz-Credential':
              'ASIAXR4KPOTAUXHLNGWB/20210713/eu-west-1/s3/aws4_request',
            'X-Amz-Date': '20210713T083654Z',
            'X-Amz-Security-Token':
              'IQoJb3JpZ2luX2VjEAEaCWV1LXdlc3QtMSJGMEQCICI6b9jz6qXUFwPNGhFhkWBOjjKJJEIm7bQWDdC+Cn5fAiBZCyV8NcCEI4R1oqiNqwcgTauQJp7xtZL1QSH+u+RHKCrBAgjq//////////8BEAIaDDUxOTQ0NDU5MTgwOSIMyN43Y19p9/52SJfCKpUCbdSpJF99DpbQOM0+fcPPecjoPM/ELiX7G+gPN+26uc/dgqiE6CKBiCLEh05fvYgsU/kWtmbhHTvr58txZpdVN/JN2gzTbNtKJfVmagAp7Yz+8oQ7bm8SnLTxKT2alR3fWuW0Gwm1bGtInDaOCjdtWyJqFuw5vReqB2/GIWZKjIw2s1Dj8paoIkgE+znh27oQwIxlaVFVxHbGXVhPm5jcsRnHusHwd2tBvnqV2EYDv2w7kBGuM8+VTfAF+ghVfIB5gd4D/vYFjjK5PZl5aix/ftjIMdhKP7h/nJMLLGHFfeGE3f+PacVmWPlqxJ0lZRwx5Eilk3An/7bHnSyafFOoygwf1gWe0o6rBDcCfreeQY3eiJI8KjCeobWHBjqbAW/LLwfQHFIdNOUuRawgqoftlVz3J2sNiPiG0Zz0SBVYEaA6vxsUUMiaW5GYwp5NqJafJxxgOFCwXz7M56eJRC7Gnuz4vlf6g+qNy4hhKfY1zI/nuwPi953lrUS5PdftuWVnXuONcm8hQoUxwYBWgIiim+B6QPpnp8BDyEwaroJhBWbO+5ySkZlGoOnOJbdZ3iI1ltF5AiWsF23m',
            Policy:
              'eyJleHBpcmF0aW9uIjoiMjAyMS0wNy0xM1QxNDozNjo1NFoiLCJjb25kaXRpb25zIjpbWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMCwyMDk3MTUyMF0seyJLZXkiOiJhc3NldHMvNmRlZjJlNjMtY2EzMy00OWRlLTk5MzktMzI5ZjdmNjdjM2NhL2Jhbm5lcjAucG5nIn0seyJidWNrZXQiOiJwdWJsaWMtYXBpLWNhbXBhaWduLXJkZSJ9LHsiWC1BbXotQWxnb3JpdGhtIjoiQVdTNC1ITUFDLVNIQTI1NiJ9LHsiWC1BbXotQ3JlZGVudGlhbCI6IkFTSUFYUjRLUE9UQVVYSExOR1dCLzIwMjEwNzEzL2V1LXdlc3QtMS9zMy9hd3M0X3JlcXVlc3QifSx7IlgtQW16LURhdGUiOiIyMDIxMDcxM1QwODM2NTRaIn0seyJYLUFtei1TZWN1cml0eS1Ub2tlbiI6IklRb0piM0pwWjJsdVgyVmpFQUVhQ1dWMUxYZGxjM1F0TVNKR01FUUNJQ0k2YjlqejZxWFVGd1BOR2hGaGtXQk9qaktKSkVJbTdiUVdEZEMrQ241ZkFpQlpDeVY4TmNDRUk0UjFvcWlOcXdjZ1RhdVFKcDd4dFpMMVFTSCt1K1JIS0NyQkFnanEvLy8vLy8vLy8vOEJFQUlhRERVeE9UUTBORFU1TVRnd09TSU15TjQzWTE5cDkvNTJTSmZDS3BVQ2JkU3BKRjk5RHBiUU9NMCtmY1BQZWNqb1BNL0VMaVg3RytnUE4rMjZ1Yy9kZ3FpRTZDS0JpQ0xFaDA1ZnZZZ3NVL2tXdG1iaEhUdnI1OHR4WnBkVk4vSk4yZ3pUYk50S0pmVm1hZ0FwN1l6KzhvUTdibThTbkxUeEtUMmFsUjNmV3VXMEd3bTFiR3RJbkRhT0NqZHRXeUpxRnV3NXZSZXFCMi9HSVdaS2pJdzJzMURqOHBhb0lrZ0Urem5oMjdvUXdJeGxhVkZWeEhiR1hWaFBtNWpjc1JuSHVzSHdkMnRCdm5xVjJFWUR2Mnc3a0JHdU04K1ZUZkFGK2doVmZJQjVnZDREL3ZZRmpqSzVQWmw1YWl4L2Z0aklNZGhLUDdoL25KTUxMR0hGZmVHRTNmK1BhY1ZtV1BscXhKMGxaUnd4NUVpbGszQW4vN2JIblN5YWZGT295Z3dmMWdXZTBvNnJCRGNDZnJlZVFZM2VpSkk4S2pDZW9iV0hCanFiQVcvTEx3ZlFIRklkTk9VdVJhd2dxb2Z0bFZ6M0oyc05pUGlHMFp6MFNCVllFYUE2dnhzVVVNaWFXNUdZd3A1TnFKYWZKeHhnT0ZDd1h6N001NmVKUkM3R251ejR2bGY2ZytxTnk0aGhLZlkxekkvbnV3UGk5NTNsclVTNVBkZnR1V1ZuWHVPTmNtOGhRb1V4d1lCV2dJaWltK0I2UVBwbnA4QkR5RXdhcm9KaEJXYk8rNXlTa1psR29Pbk9KYmRaM2lJMWx0RjVBaVdzRjIzbSJ9XX0=',
            'X-Amz-Signature':
              '27362210636d0040239df0e91d5501425e331a8f6867dbd351bafdef8743b646',
          },
        },
      },
    ],
  },
};
