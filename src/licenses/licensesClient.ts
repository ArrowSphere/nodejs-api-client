/**
 * Class LicensesClient
 */
import {
  AbstractRestfulClient,
  ExtraInformationType,
  Parameters,
} from '../abstractRestfulClient';
import { FindConfig, FindData, FindResult } from './entities/findResult';
import {
  ConfigFindResult,
  ConfigFindResultData,
  ConfigFindResultDataKeywords,
  ConfigFindResultDataSortParameters,
  ConfigFindResultFields,
} from './entities/license/configFindResult';
import {
  LicenceFindDataFiltersParameters,
  LicenceFindDataKeywords,
  LicenceFindDataSortParameters,
} from './entities/license/licenseFindResult';
import {
  ActiveSeatsFindResultDataKeywords,
  ActiveSeatsFindResultDataSortParameters,
} from './entities/license/activeSeatsFindResult';
import {
  WarningFindResultDataKeywords,
  WarningFindResultDataSortParameters,
} from './entities/license/warningFindResult';
import {
  PriceFindResultDataKeywords,
  PriceFindResutDataSortParameters,
} from './entities/license/priceFindResult';
import {
  OfferFindResultDataFiltersParameters,
  OfferFindResultDataKeywords,
  OfferFindResultDataSortParameters,
} from './entities/offer/offerFindResult';
import {
  ActionFlagsFindResultDataKeywords,
  ActionFlagsFindResultDataSortParameters,
} from './entities/offer/actionFlagsFindResult';
import {
  PriceBandFindResultDataKeywords,
  PriceBandFindResultDataSortParameters,
} from './entities/offer/priceBandFindResult';
import {
  SecurityFindResultDataKeywords,
  SecurityFindResultDataSortParameters,
} from './entities/license/securityFindResult';
import { GetResult, GetResultFields } from '../getResult';
import { LicenseGetFields } from './entities/getLicense/licenseGetResult';
import { GetLicenseResult } from './entities/getResult/getLicenseResult';
import { LicenceHistoryResult } from './entities/history/licenceHistoryResult';
import { UpgradeResult } from './entities/license/upgradeResult';
import {
  LicenseConversionSkuFields,
  LicenseConversionSkuResult,
} from './entities/license/licenseConversionSkuResult';
import { CredentialsResult } from './entities/license/credentialsResult';
import { ScheduleTasksResult } from './entities/schedule/scheduleTasksResult';
import {
  GetPricingRateResult,
  RateTypeEnum,
} from './entities/pricingRate/getPricingRateResult';
import {
  ActionTypes,
  BulkBodyArgument,
  BulkSetRateBody,
  BulkAutoRenewBody,
  BulkBodyFields,
} from './types/bulkArguments';

/**
 * Parameters passable to the request for refining search.
 */
export enum LicenseFindParameters {
  /**
   * The key for keyword search query parameter (to search one string in all available search fields)
   */
  DATA_KEYWORD = 'keyword',

  /**
   * The key for keywords search query parameter (to search with a complex object)
   */
  DATA_KEYWORDS = 'keywords',

  /**
   * The key for filers search query parameter
   */
  DATA_FILTERS = 'filters',

  /**
   * The key for exclusion filers search query parameter
   */
  DATA_EXCLUSION_FILTERS = 'exclusionFilters',

  /**
   * The key for sort search query parameter
   */
  DATA_SORT = 'sort',

  /**
   * The key for highlight search query parameter
   */
  DATA_HIGHLIGHT = 'highlight',

  /**
   * Use this constant to sort in ascending direction
   */
  SORT_ASCENDING = 'asc',

  /**
   * Use this constant to sort in descending direction
   */
  SORT_DESCENDING = 'desc',

  /**
   * The key to search for keywords values
   */
  KEYWORDS_VALUES = 'values',

  /**
   * The key to specify the operator to use with the keywords values
   */
  KEYWORDS_OPERATOR = 'operator',

  /**
   * Use this operator to search for all keywords values specified
   */
  OPERATOR_AND = 'AND',

  /**
   * Use this operator to search for any keywords values specified
   */
  OPERATOR_OR = 'OR',

  /**
   * Use this operator to search for all keywords with values in the range specified (for date ranges)
   */
  OPERATOR_BETWEEN = 'BETWEEN',

  /**
   * Use this operator to search with a compare field Equal
   */
  OPERATOR_EQ = 'EQ',

  /**
   * Use this operator to search with a compare field Not Equal
   */
  OPERATOR_NEQ = 'NEQ',

  /**
   * Use this operator to search with a compare field Greater Than
   */
  OPERATOR_GT = 'GT',

  /**
   * Use this operator to search with a compare field Greater Than or Equal
   */
  OPERATOR_GTE = 'GTE',

  /**
   * Use this operator to search with a compare field Lower Than
   */
  OPERATOR_LT = 'LT',

  /**
   * Use this operator to search with a compare field Lower Than or Equal
   */
  OPERATOR_LTE = 'LTE',

  /**
   * Use this filter to compare 2 value with other filter like FILTERS_GTE / FILTERS_LT / FILTERS_LTE
   */
  FILTERS_GT = 'gt',

  /**
   * Use this filter to compare 2 value with other filter like FILTERS_GT / FILTERS_LT / FILTERS_LTE
   */
  FILTERS_GTE = 'gte',

  /**
   * Use this filter to compare 2 value with other filter like FILTERS_GT / FILTERS_GTE / FILTERS_LTE
   */
  FILTERS_LT = 'lt',

  /**
   * Use this filter to compare 2 value with other filter like FILTERS_GT / FILTERS_GTE / FILTERS_LT
   */
  FILTERS_LTE = 'lte',
}

export type BaseParameters<LicenseType, OfferType> = {
  license?: LicenseType;
  offer?: OfferType;
};

type KeyParent = 'license' | 'offer';

export type LicenseSortParameters = BaseParameters<
  LicenceFindDataSortParameters,
  OfferFindResultDataSortParameters
>;

export type LicenseFiltersParameters = BaseParameters<
  LicenceFindDataFiltersParameters,
  OfferFindResultDataFiltersParameters
>;

/**
 * List of keywords to search with.
 */
export type DataKeywords = {
  [LicenseFindParameters.KEYWORDS_OPERATOR]:
    | LicenseFindParameters.OPERATOR_AND
    | LicenseFindParameters.OPERATOR_OR
    | LicenseFindParameters.OPERATOR_BETWEEN;
  [LicenseFindParameters.KEYWORDS_VALUES]: string[];
};

/**
 * Keywords parameters to pass to the request
 */
export type LicenseKeywordsParameters = {
  license?: LicenceFindDataKeywords;
  offer?: OfferFindResultDataKeywords;
};

export type LicenseRawKeywordsParametersLicence = {
  [field: string]:
    | DataKeywords
    | ActiveSeatsFindResultDataKeywords
    | ConfigFindResultDataKeywords
    | WarningFindResultDataKeywords
    | PriceFindResultDataKeywords
    | SecurityFindResultDataKeywords
    | undefined;
};

export type LicenseRawKeywordsParametersOffer = {
  [field: string]:
    | DataKeywords
    | ActionFlagsFindResultDataKeywords
    | PriceBandFindResultDataKeywords
    | undefined;
};

export type SortParameters =
  | LicenseFindParameters.SORT_ASCENDING
  | LicenseFindParameters.SORT_DESCENDING;

export type LicenseRawSortParametersLicense = {
  [field: string]:
    | SortParameters
    | ActiveSeatsFindResultDataSortParameters
    | ConfigFindResultDataSortParameters
    | WarningFindResultDataSortParameters
    | PriceFindResutDataSortParameters
    | SecurityFindResultDataSortParameters
    | undefined;
};

export type LicenseRawSortParametersOffer = {
  [field: string]:
    | SortParameters
    | ActionFlagsFindResultDataSortParameters
    | PriceBandFindResultDataSortParameters
    | undefined;
};

export type FiltersCompareValue = {
  [LicenseFindParameters.FILTERS_GT]?: string | number;
  [LicenseFindParameters.FILTERS_GTE]?: string | number;
  [LicenseFindParameters.FILTERS_LT]?: string | number;
  [LicenseFindParameters.FILTERS_LTE]?: string | number;
};

export type FiltersParameters =
  | string
  | string[]
  | number
  | number[]
  | boolean
  | FiltersCompareValue;

export type LicenseRawFiltersParameters = {
  [field: string]: unknown;
};

/**
 * Payload to pass the find request. Contains keyword(s), sort options, column filters and highlight option.
 */
export type LicenseFindPayload = {
  [LicenseFindParameters.DATA_KEYWORD]?: string;
  [LicenseFindParameters.DATA_KEYWORDS]?: LicenseKeywordsParameters;
  [LicenseFindParameters.DATA_FILTERS]?: LicenseFiltersParameters;
  [LicenseFindParameters.DATA_EXCLUSION_FILTERS]?: LicenseFiltersParameters;
  [LicenseFindParameters.DATA_SORT]?: LicenseSortParameters;
  [LicenseFindParameters.DATA_HIGHLIGHT]?: boolean;
};

export type LicenseFindRawPayload = {
  [LicenseFindParameters.DATA_KEYWORD]?: string;
  [LicenseFindParameters.DATA_KEYWORDS]?: {
    license?: LicenseRawKeywordsParametersLicence;
    offer?: LicenseRawKeywordsParametersOffer;
  };
  [LicenseFindParameters.DATA_FILTERS]?: LicenseRawFiltersParameters;
  [LicenseFindParameters.DATA_EXCLUSION_FILTERS]?: LicenseRawFiltersParameters;
  [LicenseFindParameters.DATA_SORT]?: {
    license?: LicenseRawSortParametersLicense;
    offer?: LicenseRawSortParametersOffer;
  };
  [LicenseFindParameters.DATA_HIGHLIGHT]?: boolean;
};

export type UpdateSeatsData = {
  [LicenseGetFields.COLUMN_SEATS]: number;
} & ExtraInformationType;

export type PutFriendlyName = {
  [LicenseGetFields.COLUMN_FRIENDLY_NAME]: string;
} & ExtraInformationType;

export type PutReactivate = ExtraInformationType;

export type PutSuspend = ExtraInformationType;

export type PutCancel = ExtraInformationType;

export type PutCancelAutoRenew = ExtraInformationType;

export type PutReactivateAutoRenew = ExtraInformationType;

export type PostUpgrade = {
  sku: string;
  billingCycle: number;
  term: number;
  quantity: number;
};

export enum SaveBillingCommentsInputFields {
  COLUMN_COMMENT_ONE = 'comment1',
  COLUMN_COMMENT_TWO = 'comment2',
}

export type SaveBillingCommentsInputType = {
  [SaveBillingCommentsInputFields.COLUMN_COMMENT_ONE]?: string | null;
  [SaveBillingCommentsInputFields.COLUMN_COMMENT_TWO]?: string | null;
};

export type ScheduleTasks = {
  periodicity: number;
  term: number;
  seats: number;
  executionDate: string;
};

export type LicensePricingRate = {
  rateType: RateTypeEnum;
  rateValue: number;
  applyOnNextBillingPeriod: boolean;
};

//export type BulkArguments = BulkBodyArgument;

export class LicensesClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/licenses';

  /**
   * The path of the Find endpoint
   */
  private FIND_PATH = '/v2/find';

  /**
   * The path of the Configs endpoint
   */
  private CONFIGS_PATH = '/configs';

  /**
   * The path of the Seats endpoint
   */
  private SEATS_PATH = '/seats';

  /**
   * The path of suspend endpoint
   */
  private SUSPEND_PATH = '/suspend';

  /**
   * The path of reactivate endpoint
   */
  private REACTIVATE_PATH = '/reactivate';

  /**
   * The path of cancel endpoint
   */
  private CANCEL_PATH = '/cancel';

  /**
   * The path of update friendlyName endpoint
   */
  private UPDATE_FRIENDLYNAME_PATH = '/friendlyName';

  /**
   * The path of license history
   */
  private GET_LICENSE_HISTORY_PATH = '/history';

  /**
   * The path of cancel license auto-renew
   */
  private CANCEL_AUTO_RENEW_PATH = '/autorenew/cancel';

  /**
   * The path of reactivate license auto-renew
   */
  private REACTIVATE_AUTO_RENEW_PATH = '/autorenew/reactivate';

  /**
   * The path of reactivate license auto-renew
   */
  private UPGRADE_PATH = '/conversion';

  /**
   * The path to save the license order eavs
   */
  private SAVE_BILLING_COMMENTS_PATH = '/billingComments';

  /**
   * The path of license all available skus
   */
  private GET_LICENSE_CONVERSION_SKU = '/conversion/sku';

  /**
   * The path of license all existing skus
   */
  private GET_LICENSE_EXISTING_CONVERSION_SKU = '/conversion/existing';

  /**
   * The path to retrieve license credentials
   */
  private GET_LICENSE_CREDENTIALS = '/credentials';

  /**
   * The path of schedule tasks on a license
   */
  private SCHEDULE_TASKS_PATH = '/scheduledTasks';

  /**
   * The path to get/set pricing rate on a license
   */
  private PRICING_RATE_PATH = '/pricing-rate';

  /**
   * The path to apply bulk action on license(s)
   */
  private BULK_PATH = '/bulk';

  /**
   * Returns the raw result from the find endpoint call
   *
   * @param postData - Find payload
   * @param parameters - Extra parameters to pass
   *
   * @returns Promise\<{@link FindData}\>
   */
  public findRaw(
    postData: LicenseFindRawPayload = {},
    parameters: Parameters = {},
  ): Promise<FindData> {
    this.path = this.FIND_PATH;

    return this.post(postData, parameters);
  }

  /**
   * Searches for licenses and returns a FindResult to manipulate the results.
   *
   * @param postData - Find payload
   * @param perPage - Number of results per page
   * @param page - Page number to fetch
   * @param parameters - Extra parameters to pass
   *
   * @returns Promise\<{@link FindResult}\>
   *
   */
  public async find(
    postData: LicenseFindPayload = {},
    perPage = 100,
    page = 1,
    parameters: Parameters = {},
  ): Promise<FindResult> {
    this.setPerPage(perPage);
    this.setPage(page);

    const rawLicensePayload: LicenseFindRawPayload = {
      keyword: postData.keyword,
      highlight: postData.highlight,
    };

    if (postData.keywords) {
      // Flatten with prefix for each type of keyword (license and offer)
      rawLicensePayload.keywords = {
        ...this.createKeywords(postData.keywords, 'license'),
        ...this.createKeywords(postData.keywords, 'offer'),
      };
    }

    if (postData.filters) {
      // Flatten with prefix for each type of filter (license and offer)
      rawLicensePayload.filters = {
        ...this.createFilters(postData.filters, 'license'),
        ...this.createFilters(postData.filters, 'offer'),
      };
    }

    if (postData.exclusionFilters) {
      // Flatten with prefix for each type of filter (license and offer)
      rawLicensePayload.exclusionFilters = {
        ...this.createFilters(postData.exclusionFilters, 'license'),
        ...this.createFilters(postData.exclusionFilters, 'offer'),
      };
    }

    if (postData.sort) {
      // Flatten with prefix for each type of sort keys (license and offer)
      rawLicensePayload.sort = {
        ...this.createFilters(postData.sort, 'license'),
        ...this.createFilters(postData.sort, 'offer'),
      } as {
        license?: LicenseRawSortParametersLicense;
        offer?: LicenseRawSortParametersOffer;
      };
    }

    const response = await this.findRaw(rawLicensePayload, parameters);

    return new FindResult(response, this, rawLicensePayload, parameters);
  }

  public getConfigsRaw(reference: string): Promise<FindConfig> {
    this.path = `/${reference}${this.CONFIGS_PATH}`;

    return this.get();
  }

  public async *getConfigs(
    reference: string,
  ): AsyncGenerator<ConfigFindResultData> {
    const rawResponse = await this.getConfigsRaw(reference);

    for (const response of rawResponse.data) {
      yield new ConfigFindResult(response).toJSON();
    }
  }

  public async updateConfigRaw(
    reference: string,
    config: ConfigFindResult,
  ): Promise<ConfigFindResultData> {
    this.path = `/${reference}${this.CONFIGS_PATH}`;
    const postData: ConfigFindResultData = {
      [ConfigFindResultFields.COLUMN_NAME]: config.name,
      [ConfigFindResultFields.COLUMN_SCOPE]: config.scope,
      [ConfigFindResultFields.COLUMN_STATE]: config.state,
    };

    return await this.post(postData);
  }

  public async bulkAction(
    bulkData: BulkBodyArgument,
  ): Promise<BulkSetRateBody | BulkAutoRenewBody> {
    this.path = this.BULK_PATH;

    let postData = {
      [BulkBodyFields.ACTION_TYPE]: bulkData.actionType,
      [BulkBodyFields.LICENSES]: bulkData.licenses,
    };

    if (bulkData.actionType == ActionTypes.AUTO_RENEW) {
      const postAutoRenewData: BulkAutoRenewBody = {
        ...postData,
        [BulkBodyFields.AUTO_RENEW_STATUS]: bulkData.autoRenewStatus,
      };
      postData = postAutoRenewData;
    } else if (bulkData.actionType == ActionTypes.SET_RATE) {
      const postSetRateData: BulkSetRateBody = {
        ...postData,
        [BulkBodyFields.SPECIAL_PRICE_RATE_TYPE]: bulkData.specialPriceRateType,
        [BulkBodyFields.SPECIAL_PRICE_RATE_VALUE]:
          bulkData.specialPriceRateValue,
        [BulkBodyFields.SPECIAL_RATE_EFFECTIVE_APPLICATION_DATE]:
          bulkData.specialRateEffectiveApplicationDate,
      };
      postData = postSetRateData;
    }

    return await this.post(postData);
  }

  public async updateConfig(
    reference: string,
    config: ConfigFindResult,
  ): Promise<ConfigFindResult> {
    const rawResponse = await this.updateConfigRaw(reference, config);

    return new ConfigFindResult(rawResponse);
  }

  public async getLicense(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<GetLicenseResult>> {
    this.path = `/${licenseReference}`;

    return new GetResult(GetLicenseResult, await this.get(parameters));
  }

  public updateSeats(
    licenseReference: string,
    putData: UpdateSeatsData,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.SEATS_PATH}`;

    return this.put(putData, parameters);
  }

  public suspendLicense(
    licenseReference: string,
    payload?: PutSuspend,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.SUSPEND_PATH}`;

    return this.put(payload, parameters);
  }

  public reactivateLicense(
    licenseReference: string,
    payload?: PutReactivate,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.REACTIVATE_PATH}`;

    return this.put(payload, parameters);
  }

  public cancelLicense(
    licenseReference: string,
    payload?: PutCancel,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.CANCEL_PATH}`;

    return this.put(payload, parameters);
  }

  public async updateFriendlyName(
    licenseReference: string,
    putData: PutFriendlyName,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.UPDATE_FRIENDLYNAME_PATH}`;

    return await this.put(putData, parameters);
  }

  public async getHistory(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<LicenceHistoryResult>> {
    this.path = `/${licenseReference}${this.GET_LICENSE_HISTORY_PATH}`;

    return new GetResult(LicenceHistoryResult, await this.get(parameters));
  }

  public async cancelAutoRenew(
    licenseReference: string,
    payload?: PutCancelAutoRenew,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.CANCEL_AUTO_RENEW_PATH}`;

    return await this.put(payload, parameters);
  }

  public async reactivateAutoRenew(
    licenseReference: string,
    payload?: PutReactivateAutoRenew,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.REACTIVATE_AUTO_RENEW_PATH}`;

    return await this.put(payload, parameters);
  }

  public async upgrade(
    licenseReference: string,
    payload: PostUpgrade,
    parameters: Parameters = {},
  ): Promise<GetResult<UpgradeResult>> {
    this.path = `/${licenseReference}${this.UPGRADE_PATH}`;

    return new GetResult(UpgradeResult, await this.post(payload, parameters));
  }

  public async upgradeToExisting(
    licenseReference: string,
    targetLicenseReference: string,
    quantity: number,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.UPGRADE_PATH}/${targetLicenseReference}`;

    await this.post({ quantity }, parameters);
  }

  public async saveBillingComments(
    licenseReference: string,
    payload: SaveBillingCommentsInputType,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.SAVE_BILLING_COMMENTS_PATH}`;

    await this.post(payload, parameters);
  }

  public async getConversionSku(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<LicenseConversionSkuResult>> {
    this.path = `/${licenseReference}${this.GET_LICENSE_CONVERSION_SKU}`;

    const response = await this.get(parameters);

    //A workaround, the public api endpoint is not returning "data" in the payload
    response[GetResultFields.COLUMN_DATA] = {
      [LicenseConversionSkuFields.COLUMN_OFFERS]:
        LicenseConversionSkuFields.COLUMN_OFFERS in response
          ? response[LicenseConversionSkuFields.COLUMN_OFFERS]
          : [],
    };

    return new GetResult(LicenseConversionSkuResult, response);
  }

  public async getExistingConversionSku(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<LicenseConversionSkuResult>> {
    this.path = `/${licenseReference}${this.GET_LICENSE_EXISTING_CONVERSION_SKU}`;

    const response = await this.get(parameters);

    //A workaround, the public api endpoint is not returning "data" in the payload
    response[GetResultFields.COLUMN_DATA] = {
      [LicenseConversionSkuFields.COLUMN_OFFERS]:
        LicenseConversionSkuFields.COLUMN_OFFERS in response
          ? response[LicenseConversionSkuFields.COLUMN_OFFERS]
          : [],
    };

    return new GetResult(LicenseConversionSkuResult, response);
  }

  public async getCredentials(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<CredentialsResult>> {
    this.path = `/${licenseReference}${this.GET_LICENSE_CREDENTIALS}`;

    return new GetResult(CredentialsResult, await this.get(parameters));
  }

  public async getPricingRate(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<GetPricingRateResult>> {
    this.path = `/${licenseReference}${this.PRICING_RATE_PATH}`;

    return new GetResult(GetPricingRateResult, await this.get(parameters));
  }

  public async setPricingRate(
    licenseReference: string,
    payload: LicensePricingRate,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${licenseReference}${this.PRICING_RATE_PATH}`;

    return await this.post(payload, parameters);
  }

  public async scheduleTasks(
    licenseReference: string,
    payload: ScheduleTasks,
    parameters: Parameters = {},
  ): Promise<GetResult<ScheduleTasksResult>> {
    this.path = `/${licenseReference}${this.SCHEDULE_TASKS_PATH}`;

    return new GetResult(
      ScheduleTasksResult,
      await this.post(payload, parameters),
    );
  }

  private createFilters(
    parameters: string | BaseParameters<unknown, unknown>,
    keyParent: KeyParent,
  ): BaseParameters<unknown, unknown> {
    let appropriateParameters: unknown;

    if (typeof parameters === 'object') {
      appropriateParameters = parameters[keyParent];
    } else {
      appropriateParameters = parameters;
    }

    return Object.entries(
      typeof appropriateParameters === 'object'
        ? (appropriateParameters as Record<string, unknown>)
        : {},
    ).reduce((acc: Record<string, unknown>, [key, value]) => {
      if (typeof value === 'object' && !Array.isArray(value)) {
        const subAcc: Record<string, unknown> = Object.entries(
          value as LicenseFiltersParameters,
        ).reduce((generatedArr: Record<string, unknown>, [i, val]) => {
          let recursiveArr: BaseParameters<unknown, unknown>;
          const newKey = keyParent + '.' + key + '.' + i;
          if (typeof val !== 'object') {
            generatedArr[`${newKey}`] = val;
            return generatedArr;
          } else {
            recursiveArr = this.createFilters(
              val as string | BaseParameters<unknown, unknown>,
              newKey as KeyParent,
            );
          }

          return Object.assign(generatedArr, recursiveArr);
        }, {});
        Object.assign(acc, subAcc);
      } else {
        acc[`${keyParent}.${key}`] = value;
      }
      return acc;
    }, {});
  }

  private createKeywords(
    parameters: string | LicenseKeywordsParameters,
    keyParent: string,
  ): LicenseKeywordsParameters {
    let appropriateParameters;

    if (typeof parameters === 'object') {
      appropriateParameters =
        keyParent === 'license' ? parameters.license : parameters.offer;
    } else {
      appropriateParameters = parameters;
    }

    return Object.entries(
      appropriateParameters !== null && appropriateParameters !== undefined
        ? appropriateParameters
        : {},
    ).reduce((acc: Record<string, unknown>, [key, value]) => {
      if (
        typeof value === 'object' &&
        !Array.isArray(value) &&
        !Object.prototype.hasOwnProperty.call(value, 'operator')
      ) {
        const subAcc: Record<string, unknown> = Object.entries(
          value as LicenseFiltersParameters,
        ).reduce((generatedArr: Record<string, unknown>, [i, val]) => {
          let recursiveArr: LicenseKeywordsParameters;
          const newKey = keyParent + '.' + key + '.' + i;

          if (
            typeof val !== 'object' ||
            Object.prototype.hasOwnProperty.call(val, 'operator')
          ) {
            generatedArr[`${newKey}`] = val;
            return generatedArr;
          } else {
            recursiveArr = this.createKeywords(
              val as string | LicenseKeywordsParameters,
              newKey,
            );
          }

          return Object.assign(generatedArr, recursiveArr);
        }, {});
        Object.assign(acc, subAcc);
      } else {
        acc[`${keyParent}.${key}`] = value;
      }
      return acc;
    }, {});
  }
}
