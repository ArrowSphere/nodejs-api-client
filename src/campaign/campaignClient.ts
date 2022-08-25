import { AbstractClient, Parameters } from '../abstractClient';
import { GetResult } from '../getResult';
import { Campaign } from './entities/campaign/campaign';
import { CampaignAssets } from './entities/campaignAssets/campaignAssets';

export type POST_EMAIL_CAMPAIGN = {
  application: string;
  metadata: {
    [keys in string]: string;
  };
};

export class CampaignClient extends AbstractClient {
  /**
   * The base path of the API
   */
  protected basePath = '/campaigns';

  public async getActiveCampaign(
    parameters: Parameters = {},
  ): Promise<GetResult<Campaign>> {
    this.path = '/active';

    return new GetResult(Campaign, await this.get(parameters));
  }

  public async getCampaignAssets(
    campaignReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CampaignAssets>> {
    this.path = `/${campaignReference}/assets`;

    return new GetResult(CampaignAssets, await this.get(parameters));
  }

  public async getCampaignDetails(
    campaignReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Campaign>> {
    this.path = `/${campaignReference}`;

    return new GetResult(Campaign, await this.get(parameters));
  }

  public async postCampaignEmail(
    campaignReference: string,
    postData: POST_EMAIL_CAMPAIGN,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${campaignReference}/notify`;

    return await this.post(postData, parameters);
  }
}
