import nock from 'nock';
import { expect } from 'chai';

import {
  GetResult,
  PublicApiClient,
  Campaign,
  CampaignAssets,
} from '../../src';
import {
  GET_ACTIVE_CAMPAIGN_OUTPUT,
  GET_ACTIVE_CAMPAIGN_OUTPUT_MINIMAL,
  GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_FOOTER_FEATURES,
  GET_ACTIVE_CAMPAIGN_OUTPUT_WITHOUT_LANDING,
  GET_ACTIVE_CAMPAIGN_PARAMETERS,
} from './mocks/campaign.mocks';
import {
  GET_CAMPAIGN_ASSETS_OUTPUT,
  GET_CAMPAIGN_ASSETS_PARAMETERS,
} from './mocks/campaignAssets.mock';

export const CAMPAIGN_MOCK_URL = 'https://campaign.localhost';
export const GET_ACTIVE_CAMPAIGN = new RegExp('/active.*');
export const GET_CAMPAIGN_ASSETS = new RegExp('/.*./assets');

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
  });
});
