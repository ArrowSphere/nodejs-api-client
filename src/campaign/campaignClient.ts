import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Campaign } from './entities/campaign/campaign';
import { CampaignV2 } from './entities/v2/campaign/campaign';
import { CampaignAssets } from './entities/campaignAssets/campaignAssets';
import { CampaignList } from './entities/v2/campaignList';
import { CampaignAggragations } from './entities/campaign/campaignAggregation';
import { CampaignAssetsUpload } from './entities/campaignAssets/campaignAssetsUpload';

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
  COLUMN_BANNER = 'banner',
  COLUMN_LANDING_PAGE = 'landingPage',
}

export enum RulesInputFields {
  COLUMN_LOCATIONS = 'locations',
  COLUMN_ROLES = 'roles',
  COLUMN_MARKETPLACES = 'marketplaces',
  COLUMN_SUBSCRIPTIONS = 'subscriptions',
  COLUMN_RESELLERS = 'resellers',
  COLUMN_END_CUSTOMERS = 'endCustomers',
}

export type RulesInputType = {
  [RulesInputFields.COLUMN_LOCATIONS]?: string[];
  [RulesInputFields.COLUMN_ROLES]?: string[];
  [RulesInputFields.COLUMN_MARKETPLACES]?: string[];
  [RulesInputFields.COLUMN_SUBSCRIPTIONS]?: string[];
  [RulesInputFields.COLUMN_RESELLERS]?: string[];
  [RulesInputFields.COLUMN_END_CUSTOMERS]?: string[];
};

export enum BannerInputFields {
  COLUMN_TYPE = 'type',
  COLUMN_BUTTON_PLACEMENT = 'buttonPlacement',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_TEXT = 'text',
  COLUMN_TEXT_COLOR = 'textColor',
}

export type BannerInputType = {
  [BannerInputFields.COLUMN_TYPE]?: string;
  [BannerInputFields.COLUMN_BUTTON_PLACEMENT]?: string;
  [BannerInputFields.COLUMN_BUTTON_TEXT]?: string;
  [BannerInputFields.COLUMN_TEXT]?: string;
  [BannerInputFields.COLUMN_TEXT_COLOR]?: string;
};

export enum LandingPageHeaderInputFields {
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_BASELINE = 'baseline',
  COLUMN_CIRCLE_COLOR = 'circleColor',
  COLUMN_TEXT_COLOR = 'textColor',
  COLUMN_TITLE = 'title',
}

export type LandingPageHeaderInputType = {
  [LandingPageHeaderInputFields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageHeaderInputFields.COLUMN_BASELINE]?: string;
  [LandingPageHeaderInputFields.COLUMN_TEXT_COLOR]?: string;
  [LandingPageHeaderInputFields.COLUMN_CIRCLE_COLOR]?: string;
  [LandingPageHeaderInputFields.COLUMN_TITLE]?: string;
};

export enum LandingPageBodyInputFields {
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_CONTACT_EMAIL = 'contactEmail',
  COLUMN_DESCRIPTION = 'description',
  COLUMN_TITLE = 'title',
  COLUMN_TYPE = 'type',
  COLUMN_VIDEO_URL = 'videoUrl',
}

export type LandingPageBodyInputType = {
  [LandingPageBodyInputFields.COLUMN_BUTTON_TEXT]?: string;
  [LandingPageBodyInputFields.COLUMN_CONTACT_EMAIL]?: string;
  [LandingPageBodyInputFields.COLUMN_DESCRIPTION]?: string;
  [LandingPageBodyInputFields.COLUMN_TITLE]?: string;
  [LandingPageBodyInputFields.COLUMN_TYPE]?: string;
  [LandingPageBodyInputFields.COLUMN_VIDEO_URL]?: string;
};

export enum LandingPageFooterInputFields {
  COLUMN_TITLE = 'title',
  COLUMN_BACKGROUND_COLOR = 'backgroundColor',
  COLUMN_BUTTON_TEXT = 'buttonText',
  COLUMN_BUTTON_URL = 'buttonUrl',
  COLUMN_TEXT_COLOR = 'textColor',
}

export type LandingPageFooterInputType = {
  [LandingPageFooterInputFields.COLUMN_TITLE]?: string;
  [LandingPageFooterInputFields.COLUMN_BACKGROUND_COLOR]?: string;
  [LandingPageFooterInputFields.COLUMN_BUTTON_TEXT]?: string;
  [LandingPageFooterInputFields.COLUMN_BUTTON_URL]?: string;
  [LandingPageFooterInputFields.COLUMN_TEXT_COLOR]?: string;
};

export enum LandingPageInputFields {
  COLUMN_URL = 'url',
  COLUMN_HEADER = 'header',
  COLUMN_BODY = 'body',
  COLUMN_FOOTER = 'footer',
}

export type LandingPageInputType = {
  [LandingPageInputFields.COLUMN_URL]?: string;
  [LandingPageInputFields.COLUMN_HEADER]: LandingPageHeaderInputType;
  [LandingPageInputFields.COLUMN_BODY]: LandingPageBodyInputType;
  [LandingPageInputFields.COLUMN_FOOTER]?: LandingPageFooterInputType;
};

export type CampaignInputType = {
  [CampaignInputFields.COLUMN_NAME]: string;
  [CampaignInputFields.COLUMN_CATEGORY]?: string;
  [CampaignInputFields.COLUMN_IS_ACTIVATED]?: boolean;
  [CampaignInputFields.COLUMN_STATUS]?: string;
  [CampaignInputFields.COLUMN_RULES]?: RulesInputType;
  [CampaignInputFields.COLUMN_START_DATE]?: string;
  [CampaignInputFields.COLUMN_END_DATE]?: string;
  [CampaignInputFields.COLUMN_BANNER]?: BannerInputType;
  [CampaignInputFields.COLUMN_LANDING_PAGE]?: LandingPageInputType;
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

  public async createCampaign(
    postData: CampaignInputType,
  ): Promise<GetResult<CampaignV2>> {
    this.path = '/';

    return new GetResult(CampaignV2, await this.post(postData));
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
  ): Promise<GetResult<CampaignAssetsUpload>> {
    this.path = `/${campaignReference}/assets/upload`;

    return new GetResult(CampaignAssetsUpload, await this.get());
  }

  public async deleteAssets(
    campaignReference: string,
    assetReference: string,
  ): Promise<void> {
    this.path = `/${campaignReference}/assets/${assetReference}`;

    await this.delete();
  }

  public async aggregationsCampaignsCategory(
    categories: string[],
  ): Promise<GetResult<CampaignAggragations>> {
    this.path = '/aggregations/category';

    return new GetResult(CampaignAggragations, await this.get({ categories }));
  }
}
