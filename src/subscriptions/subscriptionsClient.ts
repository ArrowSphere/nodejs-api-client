/**
 * Class SubscriptionsClient
 */
import { AbstractRestfulClient } from '../abstractRestfulClient';
import { SubscriptionData } from './entities/subscription';
import { SubscriptionsListResult } from './entities/subscriptionsListResult';

export type SubscriptionsListPayload = {
  subscription?: string[];
  status?: string[];
  partnerTag?: string[];
  marketplace?: string[];
  company?: string[];
  startDate?: string;
  endingDate?: string;
  lastUpdate?: string;
  perPage?: string;
  page?: string;
  sortBy?: string;
  sortDirection?: 'ASC' | 'DESC';
};

export type SubscriptionsListData = {
  data: Array<SubscriptionData>;
  pagination: {
    perPage: number;
    currentPage: number;
    totalPage: number;
    total: number;
    next: string;
    previous: string;
  };
};

export class SubscriptionsClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/subscriptions';

  /**
   * The path of the List endpoint
   */
  private LIST_PATH = '';

  /**
   * Pagination for these endpoints are camel cased (`&perPage=x` instead of `&per_page=x`)
   */
  protected isCamelPagination = true;

  /**
   * Calls the subscriptions API list endpoint
   *
   * @param data - List payload
   *
   * @returns Promise\<AxiosResponse\<{@link SubscriptionsListData}\>\>   */
  public async listRaw(
    data: SubscriptionsListPayload = {},
  ): Promise<SubscriptionsListData> {
    this.path = this.LIST_PATH;
    return this.get<SubscriptionsListData>(data, {}, { isAdmin: true });
  }

  /**
   * Lists subscriptions and returns a SubscriptionsListResult to manipulate the results.
   *
   * Note: This endpoint requires an admin token to be called
   *
   * @param postData - List payload
   * @param perPage - Number of results per page
   * @param page - Page number to fetch
   *
   * @returns Promise\<{@link SubscriptionsListResult}\>
   *
   */
  public async list(
    postData: SubscriptionsListPayload = {},
    perPage = 100,
    page = 1,
  ): Promise<SubscriptionsListResult> {
    this.setPerPage(perPage);
    this.setPage(page);

    const response = await this.listRaw(postData);

    return new SubscriptionsListResult(response, this, postData);
  }
}
