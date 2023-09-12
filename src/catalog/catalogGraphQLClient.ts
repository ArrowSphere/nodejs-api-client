import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import {
  GetExchangeRatesType,
  GetExchangeRateValueType,
  GetPriceBandType,
  GetProductsType,
  GetProductType,
} from './types/catalogGraphQLTypes';
import { CatalogQueries, CatalogQuery } from './types/catalogGraphQLQueries';
import {
  FindExchangeRatesQueryOutput,
  FindExchangeRateValueQueryOutput,
  FindOnePriceBandQueryOutput,
  FindOneProductQueryOutput,
} from './types/FindOneProductQueryOutput';

export class CatalogGraphQLClient extends AbstractGraphQLClient {
  /**
   * The base path of the API
   */
  protected basePath = '/catalog';

  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = '/graphql';

  public async find(request: string): Promise<GetProductsType> {
    this.path = this.GRAPHQL;

    return await this.post(request);
  }

  /**
   * @deprecated
   * Prefer using findProductsByQuery instead.
   */
  public async findByQuery(
    query: CatalogQuery,
  ): Promise<GetProductsType | null> {
    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.find(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }

  public async findProductsByQuery(
    query: Pick<CatalogQueries, 'getProducts'>,
  ): Promise<GetProductsType | null> {
    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.find(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }

  public async findOneProductByQuery(
    query: Pick<CatalogQueries, 'product'>,
  ): Promise<GetProductType | null> {
    this.path = this.GRAPHQL;

    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.post<FindOneProductQueryOutput>(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }

  public async findOnePriceBandByQuery(
    query: Pick<CatalogQueries, 'priceBand'>,
  ): Promise<GetPriceBandType | null> {
    this.path = this.GRAPHQL;

    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.post<FindOnePriceBandQueryOutput>(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }

  public async getExchangeRates(
    query: Pick<CatalogQueries, 'getExchangeRates'>,
  ): Promise<GetExchangeRatesType | null> {
    this.path = this.GRAPHQL;

    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.post<FindExchangeRatesQueryOutput>(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }

  public async findExchangeRateValue(
    query: Pick<CatalogQueries, 'exchangeRate'>,
  ): Promise<GetExchangeRateValueType | null> {
    this.path = this.GRAPHQL;

    const queryStr: string = this.stringifyQuery(query);

    try {
      return await this.post<FindExchangeRateValueQueryOutput>(queryStr);
    } catch (error: unknown) {
      return null;
    }
  }
}
