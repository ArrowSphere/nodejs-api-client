/**
 * Class LicensesClient
 */
import { AbstractClient, Parameters } from '../abstractClient'
import { FindData, FindResult } from './entities/findResult'

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

export type LicenseFindPayload = {
  [LicenseFindParameters.DATA_KEYWORDS]: Array<
    Record<string, Record<string, string>>
  >
  [LicenseFindParameters.DATA_FILTERS]: Array<
    Record<string, unknown> | Array<unknown>
  >
}

export class LicensesClient extends AbstractClient {
  /**
   * The base path of the Catalog API
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
   * @param postData -
   * @param parameters -
   *
   * @returns string
   */
  public findRaw(
    postData: LicenseFindPayload,
    parameters: Parameters = {},
  ): Promise<FindData> {
    this.path = this.FIND_PATH

    if (postData[LicenseFindParameters.DATA_KEYWORDS]) {
      postData[LicenseFindParameters.DATA_KEYWORDS].forEach(
        (row: Record<string, unknown>) => {
          row[LicenseFindParameters.KEYWORDS_VALUES] = Object.values(row)
        },
      )
    }

    if (postData[LicenseFindParameters.DATA_FILTERS]) {
      postData[LicenseFindParameters.DATA_FILTERS] = postData[
        LicenseFindParameters.DATA_FILTERS
      ].map((row) => {
        return Array.isArray(row) ? row : Object.values(row)
      })
    }

    return this.post(postData, parameters)
  }

  /**
   * Test
   *
   * @param postData -
   * @param perPage -
   * @param page -
   * @param parameters -
   *
   * @returns FindResult
   *
   */
  public async find(
    postData: LicenseFindPayload,
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
