import { AbstractEntity } from '../../../abstractEntity';
import { CampaignV2Type, CampaignV2 } from './campaign/campaign';

export type CampaignListType = Array<CampaignV2Type>;
export class CampaignList extends AbstractEntity<CampaignListType> {
  readonly #campaignList: Array<CampaignV2>;

  public constructor(campaignListDataInput: Array<CampaignV2Type>) {
    super(campaignListDataInput);

    this.#campaignList = campaignListDataInput.map(
      (campaign: CampaignV2Type) => new CampaignV2(campaign),
    );
  }

  get campaignList(): Array<CampaignV2> {
    return this.#campaignList;
  }

  public toJSON(): CampaignListType {
    return this.campaignList.map((campaign: CampaignV2) => campaign.toJSON());
  }
}
