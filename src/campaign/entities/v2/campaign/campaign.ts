import { AbstractEntity } from '../../../../abstractEntity';
import { BannerV2, BannerV2Type } from './banner/banner';
import { LandingPageV2, LandingPageV2Type } from './landingPage/landingPage';
import { Rules, RulesType } from '../../campaign/rules/rules';
import { DownloadUrls } from './banner/downloadUrls';

export enum CampaignV2Fields {
  COLUMN_DOWNLOAD_URLS = 'downloadUrls',
  COLUMN_REFERENCE = 'reference',
  COLUMN_NAME = 'name',
  COLUMN_CATEGORY = 'category',
  COLUMN_IS_ACTIVATED = 'isActivated',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_DELETED_AT = 'deletedAt',
  COLUMN_RULES = 'rules',
  COLUMN_START_DATE = 'startDate',
  COLUMN_END_DATE = 'endDate',
  COLUMN_BANNER = 'banner',
  COLUMN_LANDING_PAGE = 'landingPage',
}

export type CampaignV2Type = {
  [CampaignV2Fields.COLUMN_DOWNLOAD_URLS]?: DownloadUrls;
  [CampaignV2Fields.COLUMN_REFERENCE]: string;
  [CampaignV2Fields.COLUMN_NAME]: string;
  [CampaignV2Fields.COLUMN_CATEGORY]?: string;
  [CampaignV2Fields.COLUMN_IS_ACTIVATED]?: boolean;
  [CampaignV2Fields.COLUMN_CREATED_AT]: string;
  [CampaignV2Fields.COLUMN_UPDATED_AT]: string;
  [CampaignV2Fields.COLUMN_DELETED_AT]?: string;
  [CampaignV2Fields.COLUMN_RULES]?: RulesType;
  [CampaignV2Fields.COLUMN_START_DATE]?: string;
  [CampaignV2Fields.COLUMN_END_DATE]?: string;
  [CampaignV2Fields.COLUMN_BANNER]: BannerV2Type;
  [CampaignV2Fields.COLUMN_LANDING_PAGE]: LandingPageV2Type;
};

export class CampaignV2 extends AbstractEntity<CampaignV2Type> {
  readonly #downloadUrls?: DownloadUrls;
  readonly #reference: string;
  readonly #name: string;
  readonly #category?: string;
  readonly #isActivated?: boolean;
  readonly #createdAt: string;
  readonly #updatedAt: string;
  readonly #deletedAt?: string;
  readonly #rules?: Rules;
  readonly #startDate?: string;
  readonly #endDate?: string;
  readonly #banner: BannerV2;
  readonly #landingPage: LandingPageV2;

  constructor(campaignInput: CampaignV2Type) {
    super(campaignInput);
    this.#downloadUrls = campaignInput[CampaignV2Fields.COLUMN_DOWNLOAD_URLS];
    this.#reference = campaignInput[CampaignV2Fields.COLUMN_REFERENCE];
    this.#name = campaignInput[CampaignV2Fields.COLUMN_NAME];
    this.#category = campaignInput[CampaignV2Fields.COLUMN_CATEGORY];
    this.#isActivated = campaignInput[CampaignV2Fields.COLUMN_IS_ACTIVATED];
    this.#createdAt = campaignInput[CampaignV2Fields.COLUMN_CREATED_AT];
    this.#updatedAt = campaignInput[CampaignV2Fields.COLUMN_UPDATED_AT];
    this.#deletedAt = campaignInput[CampaignV2Fields.COLUMN_DELETED_AT];
    this.#rules = campaignInput[CampaignV2Fields.COLUMN_RULES]
      ? new Rules(campaignInput[CampaignV2Fields.COLUMN_RULES] as RulesType)
      : undefined;
    this.#startDate = campaignInput[CampaignV2Fields.COLUMN_START_DATE];
    this.#endDate = campaignInput[CampaignV2Fields.COLUMN_END_DATE];
    this.#banner = new BannerV2(campaignInput[CampaignV2Fields.COLUMN_BANNER]);

    this.#landingPage = new LandingPageV2(
      campaignInput[CampaignV2Fields.COLUMN_LANDING_PAGE],
    );
  }

  get downloadUrls(): DownloadUrls | undefined {
    return this.#downloadUrls;
  }

  get reference(): string {
    return this.#reference;
  }

  get name(): string {
    return this.#name;
  }

  get category(): string | undefined {
    return this.#category;
  }

  get isActivated(): boolean | undefined {
    return this.#isActivated;
  }

  get createdAt(): string {
    return this.#createdAt;
  }

  get updatedAt(): string {
    return this.#updatedAt;
  }

  get deletedAt(): string | undefined {
    return this.#deletedAt;
  }

  get rules(): Rules | undefined {
    return this.#rules;
  }

  get startDate(): string | undefined {
    return this.#startDate;
  }

  get endDate(): string | undefined {
    return this.#endDate;
  }

  get banner(): BannerV2 {
    return this.#banner;
  }

  get landingPage(): LandingPageV2 {
    return this.#landingPage;
  }

  public toJSON(): CampaignV2Type {
    return {
      [CampaignV2Fields.COLUMN_DOWNLOAD_URLS]: this.downloadUrls,
      [CampaignV2Fields.COLUMN_REFERENCE]: this.reference,
      [CampaignV2Fields.COLUMN_NAME]: this.name,
      [CampaignV2Fields.COLUMN_CATEGORY]: this.category,
      [CampaignV2Fields.COLUMN_IS_ACTIVATED]: this.isActivated,
      [CampaignV2Fields.COLUMN_CREATED_AT]: this.createdAt,
      [CampaignV2Fields.COLUMN_UPDATED_AT]: this.updatedAt,
      [CampaignV2Fields.COLUMN_DELETED_AT]: this.deletedAt,
      [CampaignV2Fields.COLUMN_RULES]: this.rules?.toJSON(),
      [CampaignV2Fields.COLUMN_START_DATE]: this.startDate,
      [CampaignV2Fields.COLUMN_END_DATE]: this.endDate,
      [CampaignV2Fields.COLUMN_BANNER]: this.banner.toJSON(),
      [CampaignV2Fields.COLUMN_LANDING_PAGE]: this.landingPage.toJSON(),
    };
  }
}
