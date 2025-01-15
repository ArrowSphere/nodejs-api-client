import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Campaign } from './entities/campaign/campaign';
import { CampaignV2 } from './entities/v2/campaign/campaign';
import { CampaignAssets } from './entities/campaignAssets/campaignAssets';
import { CampaignList } from './entities/v2/campaignList';
import { RulesType } from './entities/campaign/rules/rules';
import { BannersType } from './entities/campaign/banners/banners';
import { LandingPageType } from './entities/campaign/landingPage/landingPage';

export enum PostEmailCampaignFields {
  COLUMN_APPLICATION = 'application',
  COLUMN_METADATA = 'metadata',
}

export type PostEmailCampaignType = {
  [PostEmailCampaignFields.COLUMN_APPLICATION]: string;
  [PostEmailCampaignFields.COLUMN_METADATA]: PostEmailCampaignMetadataType;
};

export enum CampaignInputFields {
  COLUMN_NAME = 'name',
  COLUMN_CATEGORY = 'category',
  COLUMN_IS_ACTIVATED = 'isActivated',
  COLUMN_STATUS = 'status',
  COLUMN_RULES = 'rules',
  COLUMN_START_DATE = 'startDate',
  COLUMN_END_DATE = 'endDate',
  COLUMN_BANNERS = 'banners',
  COLUMN_LANDING_PAGE = 'landingPage',
}
export type CampaignInputType = {
  [CampaignInputFields.COLUMN_NAME]: string;
  [CampaignInputFields.COLUMN_CATEGORY]?: string;
  [CampaignInputFields.COLUMN_IS_ACTIVATED]?: boolean;
  [CampaignInputFields.COLUMN_STATUS]?: string;
  [CampaignInputFields.COLUMN_RULES]?: RulesType;
  [CampaignInputFields.COLUMN_START_DATE]?: string;
  [CampaignInputFields.COLUMN_END_DATE]?: string;
  [CampaignInputFields.COLUMN_BANNERS]?: BannersType[];
  [CampaignInputFields.COLUMN_LANDING_PAGE]?: LandingPageType;
};

export type PostEmailCampaignMetadataType = {
  [keys in string]: string;
};

export class CampaignClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/campaigns';

  /**
   * @deprecated Use getActiveCampaignV2() instead
   */
  public async getActiveCampaign(
    parameters: Parameters = {},
  ): Promise<GetResult<Campaign>> {
    this.path = '/active';

    return new GetResult(Campaign, await this.get(parameters));
  }

  public async getActiveCampaignV2(
    parameters: Parameters = {},
  ): Promise<GetResult<CampaignList>> {
    this.path = '/v2/active';

    return new GetResult(CampaignList, await this.get(parameters));
  }

  public async getCampaignAssets(
    campaignReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CampaignAssets>> {
    this.path = `/${campaignReference}/assets`;

    return new GetResult(CampaignAssets, await this.get(parameters));
  }

  /**
   * @deprecated Use getCampaignDetailsV2() instead
   */
  public async getCampaignDetails(
    campaignReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Campaign>> {
    this.path = `/${campaignReference}`;

    return new GetResult(Campaign, await this.get(parameters));
  }

  public async getCampaignDetailsV2(
    campaignReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CampaignV2>> {
    this.path = `/v2/${campaignReference}`;

    return new GetResult(CampaignV2, await this.get(parameters));
  }

  public async postCampaignEmail(
    campaignReference: string,
    postData: PostEmailCampaignType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${campaignReference}/notify`;

    return await this.post(postData, parameters);
  }

  public async getCampaignList(
    parameters: Parameters = {},
  ): Promise<GetResult<CampaignList>> {
    this.path = '/';

    return new GetResult(CampaignList, await this.get(parameters));
  }

  public async createCampaign(postData: CampaignInputType): Promise<void> {
    this.path = '/';

    await this.post(postData);
  }

  public async updateCampaign(
    campaignReference: string,
    postData: CampaignInputType,
  ): Promise<void> {
    this.path = `/${campaignReference}`;

    await this.put(postData);
  }

  public async deleteCampaign(campaignReference: string): Promise<void> {
    this.path = `/${campaignReference}`;

    await this.delete();
  }

  public async duplicateCampaign(
    campaignReference: string,
  ): Promise<GetResult<CampaignV2>> {
    this.path = `/${campaignReference}/duplicate`;

    return new GetResult(CampaignV2, await this.post());
  }

  public async getCampaignUploadAssetsForm(
    campaignReference: string,
  ): Promise<GetResult<CampaignAssets>> {
    this.path = `/${campaignReference}/assets/upload`;

    return new GetResult(CampaignAssets, await this.get());
  }

  public async deleteAssets(
    campaignReference: string,
    assetReference: string,
  ): Promise<void> {
    this.path = `/${campaignReference}/assets/${assetReference}`;

    await this.delete();
  }
}
