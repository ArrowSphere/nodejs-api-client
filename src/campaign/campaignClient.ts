import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Campaign } from './entities/campaign/campaign';
import { CampaignV2 } from './entities/v2/campaign/campaign';
import { CampaignAssets } from './entities/campaignAssets/campaignAssets';
import { CampaignList } from './entities/v2/campaignList';

export enum PostEmailCampaignFields {
  COLUMN_APPLICATION = 'application',
  COLUMN_METADATA = 'metadata',
}

export type PostEmailCampaignType = {
  [PostEmailCampaignFields.COLUMN_APPLICATION]: string;
  [PostEmailCampaignFields.COLUMN_METADATA]: PostEmailCampaignMetadataType;
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
}
