import { AbstractEntity } from '../../../abstractEntity';
import { Banners, BannersType } from './banners/banners';
import { LandingPage, LandingPageType } from './landingPage/landingPage';
import { Rules, RulesType } from './rules/rules';

export enum CampaignFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_NAME = 'name',
  COLUMN_CATEGORY = 'category',
  COLUMN_IS_ACTIVATED = 'isActivated',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_UPDATED_AT = 'updatedAt',
  COLUMN_DELETED_AT = 'deletedAt',
  COLUMN_RULES = 'rules',
  COLUMN_WEIGHT = 'weight',
  COLUMN_START_DATE = 'startDate',
  COLUMN_END_DATE = 'endDate',
  COLUMN_BANNERS = 'banners',
  COLUMN_LANDING_PAGE = 'landingPage',
}

export type CampaignType = {
  [CampaignFields.COLUMN_REFERENCE]: string;
  [CampaignFields.COLUMN_NAME]: string;
  [CampaignFields.COLUMN_CATEGORY]?: string;
  [CampaignFields.COLUMN_IS_ACTIVATED]?: boolean;
  [CampaignFields.COLUMN_CREATED_AT]: string;
  [CampaignFields.COLUMN_UPDATED_AT]: string;
  [CampaignFields.COLUMN_DELETED_AT]?: string;
  [CampaignFields.COLUMN_RULES]?: RulesType;
  [CampaignFields.COLUMN_WEIGHT]?: number;
  [CampaignFields.COLUMN_START_DATE]?: string;
  [CampaignFields.COLUMN_END_DATE]?: string;
  [CampaignFields.COLUMN_BANNERS]: BannersType[];
  [CampaignFields.COLUMN_LANDING_PAGE]: LandingPageType;
};

export class Campaign extends AbstractEntity<CampaignType> {
  readonly #reference: string;
  readonly #name: string;
  readonly #category?: string;
  readonly #isActivated?: boolean;
  readonly #createdAt: string;
  readonly #updatedAt: string;
  readonly #deletedAt?: string;
  readonly #rules?: Rules;
  readonly #weight?: number;
  readonly #startDate?: string;
  readonly #endDate?: string;
  readonly #banners: Banners[];
  readonly #landingPage: LandingPage;

  constructor(campaignInput: CampaignType) {
    super(campaignInput);
    this.#reference = campaignInput[CampaignFields.COLUMN_REFERENCE];
    this.#name = campaignInput[CampaignFields.COLUMN_NAME];
    this.#category = campaignInput[CampaignFields.COLUMN_CATEGORY];
    this.#isActivated = campaignInput[CampaignFields.COLUMN_IS_ACTIVATED];
    this.#createdAt = campaignInput[CampaignFields.COLUMN_CREATED_AT];
    this.#updatedAt = campaignInput[CampaignFields.COLUMN_UPDATED_AT];
    this.#deletedAt = campaignInput[CampaignFields.COLUMN_DELETED_AT];
    this.#rules = campaignInput[CampaignFields.COLUMN_RULES]
      ? new Rules(campaignInput[CampaignFields.COLUMN_RULES] as RulesType)
      : undefined;
    this.#weight = campaignInput[CampaignFields.COLUMN_WEIGHT];
    this.#startDate = campaignInput[CampaignFields.COLUMN_START_DATE];
    this.#endDate = campaignInput[CampaignFields.COLUMN_END_DATE];
    this.#banners = campaignInput[CampaignFields.COLUMN_BANNERS].map(
      (banner: BannersType) => new Banners(banner),
    );
    this.#landingPage = new LandingPage(
      campaignInput[CampaignFields.COLUMN_LANDING_PAGE],
    );
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

  get weight(): number | undefined {
    return this.#weight;
  }

  get startDate(): string | undefined {
    return this.#startDate;
  }

  get endDate(): string | undefined {
    return this.#endDate;
  }

  get banners(): Banners[] {
    return this.#banners;
  }

  get landingPage(): LandingPage {
    return this.#landingPage;
  }

  public toJSON(): CampaignType {
    return {
      [CampaignFields.COLUMN_REFERENCE]: this.reference,
      [CampaignFields.COLUMN_NAME]: this.name,
      [CampaignFields.COLUMN_CATEGORY]: this.category,
      [CampaignFields.COLUMN_IS_ACTIVATED]: this.isActivated,
      [CampaignFields.COLUMN_CREATED_AT]: this.createdAt,
      [CampaignFields.COLUMN_UPDATED_AT]: this.updatedAt,
      [CampaignFields.COLUMN_DELETED_AT]: this.deletedAt,
      [CampaignFields.COLUMN_RULES]: this.rules?.toJSON(),
      [CampaignFields.COLUMN_WEIGHT]: this.weight,
      [CampaignFields.COLUMN_START_DATE]: this.startDate,
      [CampaignFields.COLUMN_END_DATE]: this.endDate,
      [CampaignFields.COLUMN_BANNERS]: this.banners.map((banner: Banners) =>
        banner.toJSON(),
      ),
      [CampaignFields.COLUMN_LANDING_PAGE]: this.landingPage.toJSON(),
    };
  }
}
