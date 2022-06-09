import { AbstractEntity } from '../../../abstractEntity';
import { AssetsType, Assets } from './assets/assets';

export enum CampaignAssetsFields {
  COLUMN_ASSETS = 'assets',
}

export type CampaignAssetsType = {
  [CampaignAssetsFields.COLUMN_ASSETS]: Array<AssetsType>;
};

export class CampaignAssets extends AbstractEntity<CampaignAssetsType> {
  readonly #assets: Array<Assets>;

  constructor(CampaignAssetsInput: CampaignAssetsType) {
    super(CampaignAssetsInput);
    this.#assets = CampaignAssetsInput[CampaignAssetsFields.COLUMN_ASSETS].map(
      (asset: AssetsType) => new Assets(asset),
    );
  }

  get assets(): Array<Assets> {
    return this.#assets;
  }

  public toJSON(): CampaignAssetsType {
    return {
      [CampaignAssetsFields.COLUMN_ASSETS]: this.assets.map((asset: Assets) =>
        asset.toJSON(),
      ),
    };
  }
}
