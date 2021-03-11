/**
 * Class LicensesClient
 */
import { AbstractClient, Parameters } from '../abstractClient'
import { FindData, FindResult } from './entities/findResult'
import { LicenseFields } from './entities/abstractLicense'

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
}

/**
 * List of keywords to search with.
 */
export type LicenseDataKeywords = {
  [LicenseFindParameters.KEYWORDS_OPERATOR]:
    | LicenseFindParameters.OPERATOR_AND
    | LicenseFindParameters.OPERATOR_OR
    | LicenseFindParameters.OPERATOR_BETWEEN
  [LicenseFindParameters.KEYWORDS_VALUES]: string[]
}

/**
 * Keywords parameters to pass to the request
 */
export type LicenseKeywordsParameters = {
  [field in LicenseFields]?: LicenseDataKeywords
}

/**
 * Sort parameters to pass to the request
 */
export type LicenseSortParameters = {
  [field in LicenseFields]?:
    | LicenseFindParameters.SORT_ASCENDING
    | LicenseFindParameters.SORT_DESCENDING
}

/**
 * Filter parameters to pass to the request.
 */
export type LicenseFiltersParameters = {
  [field in LicenseFields]?: unknown
}

/**
 * Payload to pass the find request. Contains keyword(s), sort options, column filters and highlight option.
 */
export type LicenseFindPayload = {
  [LicenseFindParameters.DATA_KEYWORD]?: string
  [LicenseFindParameters.DATA_KEYWORDS]?: LicenseKeywordsParameters
  [LicenseFindParameters.DATA_FILTERS]?: LicenseFiltersParameters
  [LicenseFindParameters.DATA_SORT]?: LicenseSortParameters
  [LicenseFindParameters.DATA_HIGHLIGHT]?: boolean
}

export class LicensesClient extends AbstractClient {
  /**
   * The base path of the Licenses API
   */
  private ROOT_PATH = '/licenses'

  /**
   * The base path of the API
   */
  protected basePath = this.ROOT_PATH

  /**
   * The path of the Find endpoint
   */
  private FIND_PATH = '/find'

  /**
   * Returns the raw result from the find endpoint call
   *
   * @param postData - Find payload
   * @param parameters - Extra parameters to pass
   *
   * @returns Promise\<{@link FindData}\>
   */
  public findRaw(
    postData: LicenseFindPayload = {},
    parameters: Parameters = {},
  ): Promise<FindData> {
    this.path = this.FIND_PATH

    return this.post(postData, parameters)
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
    this.setPerPage(perPage)
    this.setPage(page)

    const response = await this.findRaw(postData, parameters)

    return new FindResult(response, this, postData, parameters)
  }
}
