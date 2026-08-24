import { AbstractEntity } from '../../../../abstractEntity';
import { LandingPageV2, LandingPageV2Type } from './landingPage/landingPage';
import { Rules, RulesType } from '../../campaign/rules/rules';
import { DownloadUrls } from './banner/downloadUrls';
import { CampaignPopup, CampaignPopupType } from './popup/popup';
import { CampaignBanner, CampaignBannerType } from './banner/bannerV3';

export enum CampaignV2Fields {
  COLUMN_DOWNLOAD_URLS = 'downloadUrls',
  COLUMN_REFERENCE = 'reference',
  COLUMN_NAME = 'name',
  COLUMN_CATEGORY = 'category',
  COLUMN_STATUS = 'status',
  COLUMN_IS_ACTIVATED = 'isActivated',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_DELETED_AT = 'deletedAt',
  COLUMN_RULES = 'rules',
  COLUMN_START_DATE = 'startDate',
  COLUMN_END_DATE = 'endDate',
  COLUMN_BANNER = 'campaignBanner',
  COLUMN_POPUP = 'campaignPopup',
  COLUMN_LANDING_PAGE = 'landingPage',
}

export enum BootstrapVariants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark',
}

export type CampaignBackground = {
  type: CampaignBackgroundType;
  color1?: string;
  color2?: string;
  uuidImage?: string;
};

export type CampaignButton = {
  buttonClass: BootstrapVariants;
  buttonIcon?: string;
  linkUrl: string;
  text: string;
};

export type CampaignMedia = {
  height?: number;
  imageUuid?: string;
  linkUrl?: string;
  type: CampaignMediaType;
  width?: number;
};

export enum CampaignBackgroundType {
  IMAGE = 'IMAGE',
  COLOR = 'COLOR',
}

export enum CampaignMediaType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export enum CampaignTextColor {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export type CampaignV2Type = {
  [CampaignV2Fields.COLUMN_DOWNLOAD_URLS]?: DownloadUrls;
  [CampaignV2Fields.COLUMN_REFERENCE]: string;
  [CampaignV2Fields.COLUMN_NAME]: string;
  [CampaignV2Fields.COLUMN_STATUS]?: string;
  [CampaignV2Fields.COLUMN_CATEGORY]?: string;
  [CampaignV2Fields.COLUMN_IS_ACTIVATED]?: boolean;
  [CampaignV2Fields.COLUMN_CREATED_AT]: string;
  [CampaignV2Fields.COLUMN_UPDATED_AT]: string;
  [CampaignV2Fields.COLUMN_DELETED_AT]?: string;
  [CampaignV2Fields.COLUMN_RULES]?: RulesType;
  [CampaignV2Fields.COLUMN_START_DATE]?: string;
  [CampaignV2Fields.COLUMN_END_DATE]?: string;
  [CampaignV2Fields.COLUMN_BANNER]?: CampaignBannerType;
  [CampaignV2Fields.COLUMN_POPUP]?: CampaignPopupType;
  [CampaignV2Fields.COLUMN_LANDING_PAGE]?: LandingPageV2Type;
};

export class CampaignV2 extends AbstractEntity<CampaignV2Type> {
  readonly #downloadUrls?: DownloadUrls;
  readonly #reference: string;
  readonly #name: string;
  readonly #category?: string;
  readonly #status?: string;
  readonly #isActivated?: boolean;
  readonly #createdAt: string;
  readonly #updatedAt: string;
  readonly #deletedAt?: string;
  readonly #rules?: Rules;
  readonly #startDate?: string;
  readonly #endDate?: string;
  readonly #campaignBanner?: CampaignBanner;
  readonly #campaignPopup?: CampaignPopup;
  readonly #landingPage?: LandingPageV2;

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
    this.#campaignBanner = campaignInput[CampaignV2Fields.COLUMN_BANNER]
      ? new CampaignBanner(
          campaignInput[CampaignV2Fields.COLUMN_BANNER] as CampaignBannerType,
        )
      : undefined;

    this.#campaignPopup = campaignInput[CampaignV2Fields.COLUMN_POPUP]
      ? new CampaignPopup(
          campaignInput[CampaignV2Fields.COLUMN_POPUP] as CampaignPopupType,
        )
      : undefined;

    this.#landingPage = campaignInput[CampaignV2Fields.COLUMN_LANDING_PAGE]
      ? new LandingPageV2(
          campaignInput[
            CampaignV2Fields.COLUMN_LANDING_PAGE
          ] as LandingPageV2Type,
        )
      : undefined;
    this.#status = campaignInput[CampaignV2Fields.COLUMN_STATUS];
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

  get campaignBanner(): CampaignBanner | undefined {
    return this.#campaignBanner;
  }

  get campaignPopup(): CampaignPopup | undefined {
    return this.#campaignPopup;
  }

  get landingPage(): LandingPageV2 | undefined {
    return this.#landingPage;
  }

  get status(): string | undefined {
    return this.#status;
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
      [CampaignV2Fields.COLUMN_BANNER]: this.campaignBanner?.toJSON(),
      [CampaignV2Fields.COLUMN_LANDING_PAGE]: this.landingPage?.toJSON(),
      [CampaignV2Fields.COLUMN_POPUP]: this.campaignPopup?.toJSON(),
      [CampaignV2Fields.COLUMN_STATUS]: this.status,
    };
  }
}
