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
import { GetResult } from '../getResult';
import { LicenseGetFields } from './entities/getLicense/licenseGetResult';
import { GetLicenseResult } from './entities/getResult/getLicenseResult';
import { LicenceHistoryResult } from './entities/history/licenceHistoryResult';

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

/**
 * Sort parameters to pass to the request
 */
export type LicenseSortParameters = {
  license?: LicenceFindDataSortParameters;
  offer?: OfferFindResultDataSortParameters;
};

export type LicenseRawSortParametersLicense = {
  [field: string]:
    | SortParameters
    | ActiveSeatsFindResultDataSortParameters
    | ConfigFindResultDataSortParameters
    | WarningFindResultDataSortParameters
    | PriceFindResutDataSortParameters
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

/**
 * Filter parameters to pass to the request.
 */
export type LicenseFiltersParameters = {
  license?: LicenceFindDataFiltersParameters;
  offer?: OfferFindResultDataFiltersParameters;
};

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

export class LicensesClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/licenses/';

  /**
   * The path of the Find endpoint
   */
  private FIND_PATH = 'v2/find';

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

    console.log({ parameters });

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
        ...Object.entries(postData.keywords.license ?? {}).reduce(
          (acc: LicenseRawKeywordsParametersLicence, [keyword, value]) => {
            acc[`license.${keyword}`] = value;
            return acc;
          },
          {},
        ),
        ...Object.entries(postData.keywords.offer ?? {}).reduce(
          (acc: LicenseRawKeywordsParametersOffer, [keyword, value]) => {
            acc[`offer.${keyword}`] = value;
            return acc;
          },
          {},
        ),
      };
    }

    if (postData.filters) {
      // Flatten with prefix for each type of filter (license and offer)
      rawLicensePayload.filters = {
        ...Object.entries(postData.filters.license ?? {}).reduce(
          (acc: LicenseRawFiltersParameters, [filter, value]) => {
            acc[`license.${filter}`] = value;
            return acc;
          },
          {},
        ),
        ...Object.entries(postData.filters.offer ?? {}).reduce(
          (acc: LicenseRawFiltersParameters, [filter, value]) => {
            acc[`offer.${filter}`] = value;
            return acc;
          },
          {},
        ),
      };
    }

    if (postData.exclusionFilters) {
      // Flatten with prefix for each type of filter (license and offer)
      rawLicensePayload.exclusionFilters = {
        ...Object.entries(postData.exclusionFilters.license ?? {}).reduce(
          (acc: LicenseRawFiltersParameters, [filter, value]) => {
            acc[`license.${filter}`] = value;
            return acc;
          },
          {},
        ),
        ...Object.entries(postData.exclusionFilters.offer ?? {}).reduce(
          (acc: LicenseRawFiltersParameters, [filter, value]) => {
            acc[`offer.${filter}`] = value;
            return acc;
          },
          {},
        ),
      };
    }

    if (postData.sort) {
      // Flatten with prefix for each type of sort keys (license and offer)
      rawLicensePayload.sort = {
        ...Object.entries(postData.sort.license ?? {}).reduce(
          (acc: LicenseRawSortParametersLicense, [sort, value]) => {
            acc[`license.${sort}`] = value;
            return acc;
          },
          {},
        ),
        ...Object.entries(postData.sort.offer ?? {}).reduce(
          (acc: LicenseRawSortParametersOffer, [sort, value]) => {
            acc[`offer.${sort}`] = value;
            return acc;
          },
          {},
        ),
      };
    }

    const response = await this.findRaw(rawLicensePayload, parameters);

    return new FindResult(response, this, rawLicensePayload, parameters);
  }

  public getConfigsRaw(reference: string): Promise<FindConfig> {
    this.path = reference + this.CONFIGS_PATH;

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
    this.path = reference + this.CONFIGS_PATH;
    const postData: ConfigFindResultData = {
      [ConfigFindResultFields.COLUMN_NAME]: config.name,
      [ConfigFindResultFields.COLUMN_SCOPE]: config.scope,
      [ConfigFindResultFields.COLUMN_STATE]: config.state,
    };

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
    this.path = licenseReference;

    return new GetResult(GetLicenseResult, await this.get(parameters));
  }

  public updateSeats(
    licenseReference: string,
    putData: UpdateSeatsData,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.SEATS_PATH;

    return this.put(putData, parameters);
  }

  public suspendLicense(
    licenseReference: string,
    payload?: PutSuspend,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.SUSPEND_PATH;

    return this.put(payload, parameters);
  }

  public reactivateLicense(
    licenseReference: string,
    payload?: PutReactivate,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.REACTIVATE_PATH;

    return this.put(payload, parameters);
  }

  public cancelLicense(
    licenseReference: string,
    payload?: PutCancel,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.CANCEL_PATH;

    return this.put(payload, parameters);
  }

  public async updateFriendlyName(
    licenseReference: string,
    putData: PutFriendlyName,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.UPDATE_FRIENDLYNAME_PATH;

    return await this.put(putData, parameters);
  }

  public async getHistory(
    licenseReference: string,
    parameters: Parameters = {},
  ): Promise<GetResult<LicenceHistoryResult>> {
    this.path = licenseReference + this.GET_LICENSE_HISTORY_PATH;

    return new GetResult(LicenceHistoryResult, await this.get(parameters));
  }

  public async cancelAutoRenew(
    licenseReference: string,
    payload?: PutCancelAutoRenew,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.CANCEL_AUTO_RENEW_PATH;

    return await this.put(payload, parameters);
  }

  public async reactivateAutoRenew(
    licenseReference: string,
    payload?: PutReactivateAutoRenew,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = licenseReference + this.REACTIVATE_AUTO_RENEW_PATH;

    return await this.put(payload, parameters);
  }
}
