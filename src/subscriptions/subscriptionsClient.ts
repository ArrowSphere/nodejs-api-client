/**
 * Class SubscriptionsClient
 */
import { AbstractRestfulClient, Parameters } from '../abstractRestfulClient';
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

export type AdminSubscriptionsListData = {
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

export type PartnerSubscriptionsListData = {
  data: Array<PartnerSubscription>;
  status: number;
};

export type PartnerSubscription = {
  reference: string;
  name: string;
  status: string;
  dateDemand: string;
  dateValidation: string | null;
  dateEnd: string | null;
  level: string | null;
  error_msg: string | null;
  details: {
    partnerId: string;
  };
  extraInformation: {
    programs: Record<
      string,
      {
        partnerId: string;
      }
    >;
  };
};

export type SubscriptionCreationData = {
  name: string;
  level: string;
  sku: string;
  extraInformation?: {
    programs: {
      [programName: string]: Record<string, string | boolean>;
    };
  };
};

export type CreateSubscriptionData = {
  reference: string;
  subscription: SubscriptionData;
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
   * @deprecated use listAdmin instead
   * Calls the admin subscriptions API list endpoint
   *
   * @param data - List payload
   *
   * @returns Promise\<AxiosResponse\<{@link AdminSubscriptionsListData}\>\>   */
  public async listRaw(
    data: SubscriptionsListPayload = {},
  ): Promise<AdminSubscriptionsListData> {
    this.path = this.LIST_PATH;
    return this.get<AdminSubscriptionsListData>(data, {}, { isAdmin: true });
  }

  /**
   * Lists subscriptions and returns a SubscriptionsListResult to manipulate the results.
   *
   * Note: This endpoint requires an admin token to be called
   *
   * @param filters - List payload
   * @param perPage - Number of results per page
   * @param page - Page number to fetch
   *
   * @returns Promise\<{@link SubscriptionsListResult}\>
   *
   */
  public async list(
    filters: SubscriptionsListPayload = {},
  ): Promise<PartnerSubscriptionsListData> {
    return this.get<PartnerSubscriptionsListData>(
      filters,
      {},
      { isAdmin: false },
    );
  }

  public async listAdmin(
    filters: SubscriptionsListPayload = {},
    perPage = 100,
    page = 1,
  ) {
    this.setPerPage(perPage);
    this.setPage(page);

    const response = await this.listRaw(filters);

    return new SubscriptionsListResult(response, this, filters);
  }

  public async addSubscription(
    filters: SubscriptionCreationData,
  ): Promise<CreateSubscriptionData> {
    return this.post(filters);
  }

  public async validate(
    subscriptionReference: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${subscriptionReference}/validateCTA`;

    return this.post({}, parameters);
  }
}
