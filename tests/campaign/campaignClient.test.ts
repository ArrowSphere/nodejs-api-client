import nock from 'nock';
import { expect } from 'chai';

import {
  GetResult,
  PublicApiClient,
  Campaign,
  CampaignAssets,
  CampaignV2,
  CampaignAssetsUpload,
} from '../../src';
import {
  GET_ACTIVE_CAMPAIGN_OUTPUT,
  GET_ACTIVE_CAMPAIGN_OUTPUT_MINIMAL,
  GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_FOOTER_FEATURES,
  GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING,
  GET_ACTIVE_CAMPAIGN_PARAMETERS,
  GET_ACTIVE_CAMPAIGNS_V2_OUTPUT,
  GET_ACTIVE_CAMPAIGNS_V2_MINIMAL_OUTPUT,
  GET_DETAILS_CAMPAIGN_V2_OUTPUT,
  GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_OUTPUT,
  GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_ITEMS_OUTPUT,
  PAYLOAD_POST_CAMPAIGN_EMAIL,
  GET_DETAILS_CAMPAIGN_V2_MINIMAL_OUTPUT,
  GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_BANNER,
  GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING_PAGE,
  GET_CAMPAIGN_AGGREGATIONS_OUTPUT,
} from './mocks/campaign.mocks';
import {
  GET_CAMPAIGN_ASSETS_FORM_OUTPUT,
  GET_CAMPAIGN_ASSETS_OUTPUT,
  GET_CAMPAIGN_ASSETS_PARAMETERS,
} from './mocks/campaignAssets.mock';
import { CampaignList } from '../../src/campaign/entities/v2/campaignList';
import { CampaignAggragations } from '../../src/campaign/entities/campaign/campaignAggregation';

export const CAMPAIGN_MOCK_URL = 'https://campaign.localhost';
export const GET_ACTIVE_CAMPAIGN = new RegExp('/active.*');
export const GET_CAMPAIGN_DETAILS = new RegExp('/campaigns.*');
export const POST_DUPLICATE_CAMPAIGN = new RegExp('/campaigns/.*/duplicate');
export const POST_CREATE_CAMPAIGN = new RegExp('/campaigns');
export const DELETE_CAMPAIGN = new RegExp('/campaigns.*');
export const PUT_CAMPAIGN = new RegExp('/campaigns.*');
export const GET_LIST_CAMPAIGN = new RegExp('/campaigns');
export const GET_CAMPAIGN_AGGREGATIONS = new RegExp(
  '/campaigns/aggregations/category',
);
export const GET_CAMPAIGN_ASSETS = new RegExp('/.*./assets');
export const GET_CAMPAIGN_ASSETS_FORM = new RegExp('/.*./assets/upload');
export const DELETE_CAMPAIGN_ASSETS = new RegExp('/.*./assets/.*');
export const POST_CAMPAIGN_EMAIL = new RegExp('/.*./notify');

describe('CampaignClient', () => {
  const client = new PublicApiClient()
    .getCampaignClient()
    .setUrl(CAMPAIGN_MOCK_URL);

  describe('getActiveCampaign', () => {
    it('calls the get active campaign method with parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT);

      const response: GetResult<Campaign> = await client.getActiveCampaign(
        GET_ACTIVE_CAMPAIGN_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_ACTIVE_CAMPAIGN_OUTPUT);
    });

    it('calls the get active campaign method without parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT);

      const response: GetResult<Campaign> = await client.getActiveCampaign();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_ACTIVE_CAMPAIGN_OUTPUT);
    });

    it('Can handle a response without landingPageBody, landingPageHeader or landingPageUrl', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING);

      const response: GetResult<Campaign> = await client.getActiveCampaign();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING,
      );
    });

    it('Can handle a minimal response', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT_MINIMAL);

      const response: GetResult<Campaign> = await client.getActiveCampaign();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGN_OUTPUT_MINIMAL,
      );
    });

    it('Can handle a response without feature on landingPageFooterFeature', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_FOOTER_FEATURES);

      const response: GetResult<Campaign> = await client.getActiveCampaign();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_FOOTER_FEATURES,
      );
    });
    it('Can handle a response without Banner', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_BANNER);

      const response: GetResult<Campaign> = await client.getActiveCampaign();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_BANNER,
      );
    });
    it('Can handle a response without landing page', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING_PAGE);

      const response: GetResult<Campaign> = await client.getActiveCampaign();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING_PAGE,
      );
    });
  });

  describe('getCampaignAssets', () => {
    it('calls the get campaign assets method with parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_ASSETS)
        .reply(200, GET_CAMPAIGN_ASSETS_OUTPUT);

      const response: GetResult<CampaignAssets> = await client.getCampaignAssets(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
        GET_CAMPAIGN_ASSETS_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_CAMPAIGN_ASSETS_OUTPUT);
    });

    it('calls the get campaign assets method without parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_ASSETS)
        .reply(200, GET_CAMPAIGN_ASSETS_OUTPUT);

      const response: GetResult<CampaignAssets> = await client.getCampaignAssets(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_CAMPAIGN_ASSETS_OUTPUT);
    });
    it('calls the get campaign assets form ', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_ASSETS_FORM)
        .reply(200, GET_CAMPAIGN_ASSETS_FORM_OUTPUT);

      const response: GetResult<CampaignAssetsUpload> = await client.getCampaignUploadAssetsForm(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_CAMPAIGN_ASSETS_FORM_OUTPUT,
      );
    });
    it('calls the delete campaign assets form ', async () => {
      nock(CAMPAIGN_MOCK_URL).delete(DELETE_CAMPAIGN_ASSETS).reply(200);

      await client.deleteAssets(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
        'af3ac6a6-12ab-4880-9dfe-52e734325444',
      );
    });
  });

  describe('getCampaignDetails', () => {
    it('calls the get campaign details method with parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_DETAILS)
        .reply(200, GET_ACTIVE_CAMPAIGN_OUTPUT);

      const response: GetResult<Campaign> = await client.getCampaignDetails(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_ACTIVE_CAMPAIGN_OUTPUT);
    });
  });

  describe('getActiveCampaignV2', () => {
    it('calls the get active campaign method with parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGNS_V2_OUTPUT);

      const response: GetResult<CampaignList> = await client.getActiveCampaignV2(
        GET_ACTIVE_CAMPAIGN_PARAMETERS,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGNS_V2_OUTPUT,
      );
    });

    it('calls the get active campaign method without parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGNS_V2_OUTPUT);

      const response: GetResult<CampaignList> = await client.getActiveCampaignV2();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGNS_V2_OUTPUT,
      );
    });

    it('Can handle a minimal response', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_ACTIVE_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGNS_V2_MINIMAL_OUTPUT);

      const response: GetResult<CampaignList> = await client.getActiveCampaignV2();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGNS_V2_MINIMAL_OUTPUT,
      );
    });
  });

  describe('getCampaignDetailsV2', () => {
    it('calls the get campaign details method with parameters', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_DETAILS)
        .reply(200, GET_DETAILS_CAMPAIGN_V2_OUTPUT);

      const response: GetResult<CampaignV2> = await client.getCampaignDetailsV2(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_DETAILS_CAMPAIGN_V2_OUTPUT,
      );
    });

    it('Can handle a minimal response', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_DETAILS)
        .reply(200, GET_DETAILS_CAMPAIGN_V2_MINIMAL_OUTPUT);

      const response: GetResult<CampaignV2> = await client.getCampaignDetailsV2(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_DETAILS_CAMPAIGN_V2_MINIMAL_OUTPUT,
      );
    });

    it('calls the get campaign details without feature', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_DETAILS)
        .reply(200, GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_OUTPUT);

      const response: GetResult<CampaignV2> = await client.getCampaignDetailsV2(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_OUTPUT,
      );
    });

    it('calls the get campaign details without feature items', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_DETAILS)
        .reply(200, GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_ITEMS_OUTPUT);

      const response: GetResult<CampaignV2> = await client.getCampaignDetailsV2(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_ITEMS_OUTPUT,
      );
    });
  });

  describe('getCampaignAggregations', () => {
    it('calls campaign category aggregation', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_CAMPAIGN_AGGREGATIONS)
        .reply(200, GET_CAMPAIGN_AGGREGATIONS_OUTPUT);

      const response: GetResult<CampaignAggragations> = await client.aggregationsCampaignsCategory(
        ['banner'],
      );
      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_CAMPAIGN_AGGREGATIONS_OUTPUT,
      );
    });
  });

  describe('duplicateCampaign', () => {
    it('calls the duplicate campaign', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .post(POST_DUPLICATE_CAMPAIGN)
        .reply(200, GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_ITEMS_OUTPUT);

      const response: GetResult<CampaignV2> = await client.duplicateCampaign(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_ITEMS_OUTPUT,
      );
    });
  });

  describe('getCampaignList', () => {
    it('calls list campaigns', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .get(GET_LIST_CAMPAIGN)
        .reply(200, GET_ACTIVE_CAMPAIGNS_V2_OUTPUT);

      const response: GetResult<CampaignList> = await client.getCampaignList();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(
        GET_ACTIVE_CAMPAIGNS_V2_OUTPUT,
      );
    });
  });

  describe('createCampaign', () => {
    it('calls create campaign', async () => {
      nock(CAMPAIGN_MOCK_URL)
        .post(POST_CREATE_CAMPAIGN)
        .reply(200, GET_DETAILS_CAMPAIGN_V2_WITHOUT_FEATURE_ITEMS_OUTPUT);

      await client.createCampaign({
        name: 'Campaign name',
        startDate: '2021-07-13T08:36:54Z',
        endDate: '2021-07-13T08:36:54Z',
        status: 'active',
      });
    });
  });

  describe('updateCampaign', () => {
    it('calls update campaign', async () => {
      nock(CAMPAIGN_MOCK_URL).put(PUT_CAMPAIGN).reply(200);

      await client.updateCampaign('0ce70536-a59d-4c21-b39d-272b034367fa', {
        name: 'Campaign name',
        startDate: '2021-07-13T08:36:54Z',
        endDate: '2021-07-13T08:36:54Z',
        status: 'active',
      });
    });
  });

  describe('deleteCampaign', () => {
    it('calls delete campaign', async () => {
      nock(CAMPAIGN_MOCK_URL).delete(DELETE_CAMPAIGN).reply(200);

      await client.deleteCampaign('0ce70536-a59d-4c21-b39d-272b034367fa');
    });
  });

  describe('postCampaignEmail', () => {
    it('calls the post campaign email method with parameters', async () => {
      nock(CAMPAIGN_MOCK_URL).post(POST_CAMPAIGN_EMAIL).reply(204);

      await client.postCampaignEmail(
        '0ce70536-a59d-4c21-b39d-272b034367fa',
        PAYLOAD_POST_CAMPAIGN_EMAIL,
      );

      expect(nock.isDone()).to.be.true;
    });
  });
});
