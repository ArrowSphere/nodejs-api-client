import {
  LicenseFindResult,
  LicenseFindResultData,
} from './license/licenseFindResult';
import { FilterFindResult, FilterFindResultData } from './filterFindResult';
import { AbstractEntity } from '../../abstractEntity';
import { LicensesClient, LicenseFindRawPayload } from '../licensesClient';
import { OfferFindResult, OfferFindResultData } from './offer/offerFindResult';
import { Parameters } from '../../abstractRestfulClient';

export type FindData = {
  pagination: {
    currentPage: number;
    totalPage: number;
    total: number;
  };
  results: Array<{
    license: LicenseFindResultData;
    offer?: OfferFindResultData;
  }>;
  filters: Array<FilterFindResultData>;
};

export type FindResultData = {
  results: AsyncGenerator<
    { license: LicenseFindResultData; offer?: OfferFindResultData },
    void,
    undefined
  >;
  filters: FilterFindResultData[];
  totalPage: number;
  nbResults: number;
};

export type FindConfig = {
  status: number;
  data: Array<{
    name: string;
    scope: string;
    state: string;
  }>;
};

export class FindResult extends AbstractEntity<FindData> {
  readonly #results: Array<{
    license: LicenseFindResultData;
    offer?: OfferFindResultData;
  }>;
  readonly #filters: Array<FilterFindResultData>;
  readonly #client: LicensesClient;
  readonly #postData: LicenseFindRawPayload;
  readonly #parameters: Parameters;
  readonly #currentPage: number;
  readonly #totalPage: number;
  readonly #nbResults: number;

  /**
   * FindResult constructor. Uses the client and request data to go through the pages.
   *
   * @param data - Find call result data
   * @param client - Client used to make the request
   * @param postData - Post data passed to the request
   * @param parameters - Extra parameters passed to the request
   */
  constructor(
    data: FindData,
    client: LicensesClient,
    postData: LicenseFindRawPayload = {},
    parameters: Parameters = {},
  ) {
    super(data);

    this.#client = client;
    this.#postData = postData;
    this.#parameters = parameters;

    this.#currentPage = data.pagination.currentPage;
    this.#totalPage = data.pagination.totalPage;
    this.#nbResults = data.pagination.total;

    this.#results = data.results.map((result) => ({
      license: new LicenseFindResult(result.license).toJSON(),
      offer: result.offer
        ? new OfferFindResult(result.offer).toJSON()
        : undefined,
    }));

    this.#filters = data.filters.map((filter) =>
      new FilterFindResult(filter).toJSON(),
    );
  }

  /**
   * Gets all the licenses for the current page
   * @returns Generator|{@link LicenseFindResult}[]
   */
  public *getResultsForCurrentPage(): Generator<
    { license: LicenseFindResultData; offer?: OfferFindResultData },
    void,
    undefined
  > {
    yield* this.#results;
  }

  /**
   * Gets all the licenses from the result, page per page.
   * Follows the async interator implementation through the generator pattern.
   * @returns Generator|{@link LicenseFindResult}[]
   */
  public async *getResults(): AsyncGenerator<
    { license: LicenseFindResultData; offer?: OfferFindResultData },
    void,
    undefined
  > {
    // First yield the offers we already got in the response from the first page
    yield* this.getResultsForCurrentPage();

    // Then parse the other pages... if there are more
    let currentPage = this.#currentPage + 1;
    let lastPage = this.#totalPage < currentPage;

    while (!lastPage) {
      this.#client.setPage(currentPage);

      const data = await this.#client.findRaw(this.#postData, this.#parameters);

      if (data.pagination.totalPage <= currentPage) {
        lastPage = true;
      }

      currentPage++;

      for (const result of data.results) {
        yield {
          license: new LicenseFindResult(result.license).toJSON(),
          offer: result.offer
            ? new OfferFindResult(result.offer).toJSON()
            : undefined,
        };
      }
    }
  }

  public get results(): AsyncGenerator<
    { license: LicenseFindResultData; offer?: OfferFindResultData },
    void,
    undefined
  > {
    return this.getResults();
  }

  public get filters(): Array<FilterFindResultData> {
    return this.#filters;
  }

  public get nbResults(): number {
    return this.#nbResults;
  }

  public get totalPage(): number {
    return this.#totalPage;
  }

  /**
   * Plain JSON object representation of the result entity.
   * @returns {@link FindResultData}
   */
  public toJSON(): FindResultData {
    return {
      results: this.results,
      filters: this.filters,
      totalPage: this.totalPage,
      nbResults: this.nbResults,
    };
  }
}
