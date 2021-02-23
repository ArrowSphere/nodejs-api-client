import { AbstractEntity } from '../../abstractEntity'
import { LicenseFindPayload, LicensesClient } from '../licensesClient'
import { Parameters } from '../../abstractClient'
import { LicenseFindResultData, LicenseFindResult } from './licenseFindResult'
import { FilterFindResult, FilterFindResultData } from './filterFindResult'

export type FindData = {
  pagination: {
    currentPage: number
    totalPage: number
    total: number
  }
  licenses: Array<LicenseFindResultData>
  filters: Array<FilterFindResultData>
}

export type FindResultData = {
  licenses: AsyncGenerator<LicenseFindResultData, void, undefined>
  filters: FilterFindResultData[]
  totalPage: number
  nbResults: number
}

export class FindResult extends AbstractEntity<FindData> {
  private readonly licenses: Array<LicenseFindResultData>
  private readonly filters: Array<FilterFindResultData>
  private readonly client: LicensesClient
  private readonly postData: LicenseFindPayload
  private readonly parameters: Parameters
  private readonly currentPage: number
  private readonly totalPage: number
  private readonly nbResults: number

  /**
   * FindResult constructor.
   *
   * @param data -
   * @param client -
   * @param postData -
   * @param parameters -
   */
  constructor(
    data: FindData,
    client: LicensesClient,
    postData: LicenseFindPayload = {},
    parameters: Parameters = {},
  ) {
    super(data)

    this.client = client
    this.postData = postData
    this.parameters = parameters

    this.currentPage = data.pagination.currentPage
    this.totalPage = data.pagination.totalPage
    this.nbResults = data.pagination.total

    this.licenses = data.licenses.map((license) => {
      return new LicenseFindResult(license).toJSON()
    })

    this.filters = data.filters.map((filter) => {
      return new FilterFindResult(filter).toJSON()
    })
  }

  /**
   * @returns Generator|LicenseFindResult[]
   */
  public *getLicensesForCurrentPage(): Generator<
    LicenseFindResultData,
    void,
    undefined
  > {
    yield* this.licenses
  }

  /**
   * @returns Generator|LicenseFindResult[]
   *
   * @throws EntityValidationException
   * @throws PublicApiClientException
   */
  public async *getLicenses(): AsyncGenerator<
    LicenseFindResultData,
    void,
    undefined
  > {
    // First yield the offers we already got in the response from the first page
    yield* this.getLicensesForCurrentPage()

    // Then parse the other pages... if there are more
    let currentPage = this.currentPage + 1
    let lastPage = this.totalPage < currentPage

    while (!lastPage) {
      this.client.setPage(currentPage)

      const data = await this.client.findRaw(this.postData, this.parameters)

      if (data.pagination.totalPage <= currentPage) {
        lastPage = true
      }

      currentPage++

      for (const license of data.licenses) {
        yield new LicenseFindResult(license).toJSON()
      }
    }
  }

  public getFilters(): Array<FilterFindResultData> {
    return this.filters
  }

  public getNbResults(): number {
    return this.nbResults
  }

  public getTotalPages(): number {
    return this.totalPage
  }

  public toJSON(): FindResultData {
    return {
      licenses: this.getLicenses(),
      filters: this.getFilters(),
      totalPage: this.getTotalPages(),
      nbResults: this.getNbResults(),
    }
  }
}
