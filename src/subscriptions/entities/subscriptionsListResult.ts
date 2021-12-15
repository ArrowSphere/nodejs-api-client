import { AbstractEntity } from '../../abstractEntity';
import {
  SubscriptionsClient,
  SubscriptionsListData,
  SubscriptionsListPayload,
} from '../subscriptionsClient';
import { Subscription, SubscriptionData } from './subscription';

/**
 * Subscriptions list result plain data
 */
export type SubscriptionsListResultData = {
  subscriptions: AsyncGenerator<SubscriptionData, void, undefined>;
  totalPage: number;
  nbResults: number;
};

export class SubscriptionsListResult extends AbstractEntity<SubscriptionsListData> {
  readonly #subscriptions: Array<SubscriptionData>;
  readonly #client: SubscriptionsClient;
  readonly #payload: SubscriptionsListPayload;
  readonly #currentPage: number;
  readonly #totalPage: number;
  readonly #nbResults: number;
  readonly #nextPageURL: string;
  readonly #previousPageURL: string;

  /**
   * FindResult constructor. Uses the client and request data to go through the pages.
   * @param response - First call response data
   * @param client - Subscriptions client the call was made with
   * @param payload - Payload parameter sent to the first call
   */
  constructor(
    response: SubscriptionsListData,
    client: SubscriptionsClient,
    payload: SubscriptionsListPayload = {},
  ) {
    super(response);

    this.#client = client;
    this.#payload = payload;

    this.#currentPage = response.pagination.currentPage;
    this.#totalPage = response.pagination.totalPage;
    this.#nbResults = response.pagination.total;
    this.#nextPageURL = response.pagination.next;
    this.#previousPageURL = response.pagination.previous;
    this.#subscriptions = response.data.map((subscriptionData) =>
      new Subscription(subscriptionData).toJSON(),
    );
  }

  public get subscriptions(): AsyncGenerator<
    SubscriptionData,
    void,
    undefined
  > {
    return this.getSubscriptions();
  }

  public get client(): SubscriptionsClient {
    return this.#client;
  }

  public get payload(): SubscriptionsListPayload {
    return this.#payload;
  }

  public get currentPage(): number {
    return this.#currentPage;
  }

  public get totalPage(): number {
    return this.#totalPage;
  }

  public get nbResults(): number {
    return this.#nbResults;
  }

  public get nextPageURL(): string {
    return this.#nextPageURL;
  }

  public get previousPageURL(): string {
    return this.#previousPageURL;
  }

  /**
   * Gets all the subscriptions for the current page
   * @returns Generator|{@link SubscriptionData}[]
   */
  public *getSubscriptionsForCurrentPage(): Generator<
    SubscriptionData,
    void,
    undefined
  > {
    yield* this.#subscriptions;
  }

  /**
   * Gets all the subscriptions from the result, page per page.
   * Follows the asybc interator implementation through the generator pattern.
   * @returns Generator|{@link SubscriptionData}[]
   */
  public async *getSubscriptions(): AsyncGenerator<
    SubscriptionData,
    void,
    undefined
  > {
    // Yields the first page
    yield* this.getSubscriptionsForCurrentPage();

    // Then parse the other pages
    let currentPage = this.#currentPage + 1;
    let lastPage = this.#totalPage < currentPage;

    while (!lastPage) {
      this.#client.setPage(currentPage);

      const result = await this.#client.listRaw(this.#payload);

      if (result.pagination.totalPage <= currentPage) {
        lastPage = true;
      }

      currentPage++;

      for (const subscription of result.data) {
        yield new Subscription(subscription).toJSON();
      }
    }
  }

  /**
   * Plain JSON object representation of the result entity.
   * @returns {@link SubscriptionsListResultData}
   */
  public toJSON(): SubscriptionsListResultData {
    return {
      subscriptions: this.subscriptions,
      totalPage: this.totalPage,
      nbResults: this.nbResults,
    };
  }
}
