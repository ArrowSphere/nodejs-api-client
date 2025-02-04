import { AbstractEntity } from '../../../abstractEntity';
import { AssetsUploadType, AssetsUpload } from './assets/assetsUpload';

export enum CampaignAssetsUploadFields {
  COLUMN_ASSETS = 'assets',
}

export type CampaignAssetsUploadType = {
  [CampaignAssetsUploadFields.COLUMN_ASSETS]: Array<AssetsUploadType>;
};

export class CampaignAssetsUpload extends AbstractEntity<CampaignAssetsUploadType> {
  readonly #assets: Array<AssetsUpload>;

  constructor(CampaignAssetsInput: CampaignAssetsUploadType) {
    super(CampaignAssetsInput);
    this.#assets = CampaignAssetsInput[
      CampaignAssetsUploadFields.COLUMN_ASSETS
    ].map((asset: AssetsUploadType) => new AssetsUpload(asset));
  }

  get assets(): Array<AssetsUpload> {
    return this.#assets;
  }

  public toJSON(): CampaignAssetsUploadType {
    return {
      [CampaignAssetsUploadFields.COLUMN_ASSETS]: this.assets.map(
        (asset: AssetsUpload) => asset.toJSON(),
      ),
    };
  }
}
