import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import {
  ArrowCompanyType,
  EndCustomerType,
  PartnerType,
} from './types/entities/company';

import {
  ErrorsField,
  ExportQueryType,
  ExportResultType,
  GetLocalContactQueryType,
  GetLocalContactResultType,
  GetSpecialPriceRatesHistoryQueryType,
  GetSpecialPriceRatesHistoryResultType,
  InputPaginationField,
  InputPaginationType,
  InputSearchFilterType,
  Queries,
  QueryVariablesField,
  QueryVariablesType,
  SelectableField,
  SelectAllQueryType,
  SelectAllResultType,
  SelectDataField,
  SelectOneByIdQueryType,
  SelectOneByIdQueryVariablesType,
  SelectOneByIdResultType,
  SelectOneQueryType,
  SelectOneResponseDataType,
  SelectOneResultType,
} from './types/graphqlApiQueries';
import {
  ArrowCompanySchema,
  ContactsSchema,
  EndCustomerSchema,
  PageSchema,
  PartnerSchema,
  SelectOneResponseDataSchema,
  SpecialPriceRateSchema,
} from './types/graphqlApiSchemas';

export class GraphqlApiClient extends AbstractGraphQLClient {
  /**
   * The Path of graphql catalog API
   */
  private GRAPHQL = '/graphql';

  public async find<GraphQLResponseTypes>(
    request: string,
  ): Promise<GraphQLResponseTypes | null> {
    this.path = this.GRAPHQL;

    try {
      return await this.post<GraphQLResponseTypes>(request);
    } catch (error: unknown) {
      return null;
    }
  }

  public async selectAll(
    query: SelectAllQueryType,
  ): Promise<SelectAllResultType | null> {
    return await this.find<SelectAllResultType>(this.stringifyQuery(query));
  }

  public async selectOne(
    query: SelectOneQueryType,
  ): Promise<SelectOneResultType | null> {
    return await this.find<SelectOneResultType>(this.stringifyQuery(query));
  }

  public async findOneById<T>(
    id: number,
    fieldSchema: SelectOneResponseDataSchema,
    pagination?: InputPaginationType,
    filters?: InputSearchFilterType,
    exclusionFilters?: InputSearchFilterType,
  ): Promise<T | null> {
    const keys: string[] = Object.keys(fieldSchema);
    if (keys.length === 0) {
      return null;
    }

    const type: keyof SelectOneResponseDataType = keys[0] as keyof SelectOneResponseDataType;

    const queryArguments: SelectOneByIdQueryVariablesType = {
      id,
      filters,
      exclusionFilters,
    };

    if (
      pagination?.[InputPaginationField.PER_PAGE] ||
      pagination?.[InputPaginationField.PAGE]
    ) {
      queryArguments[QueryVariablesField.PAGINATION] = {
        [InputPaginationField.PAGE]:
          pagination?.[InputPaginationField.PAGE] ?? 1,
      };
      if (pagination?.[InputPaginationField.PER_PAGE]) {
        queryArguments[QueryVariablesField.PAGINATION] = {
          ...queryArguments[QueryVariablesField.PAGINATION],
          [InputPaginationField.PER_PAGE]:
            pagination?.[InputPaginationField.PER_PAGE],
        };
      }
    }

    const query: SelectOneByIdQueryType = {
      [Queries.SELECT_ONE_BY_ID]: {
        __args: queryArguments,
        [SelectableField.DATA]: fieldSchema,
        [SelectableField.ERRORS]: {
          [ErrorsField.MESSAGE]: true,
        },
      },
    };

    const queryStr: string = this.stringifyQuery(query);

    const result: SelectOneByIdResultType | null = await this.find<SelectOneByIdResultType>(
      queryStr,
    );

    if (
      result?.[Queries.SELECT_ONE_BY_ID][SelectableField.ERRORS]?.[
        ErrorsField.MESSAGE
      ]?.length
    ) {
      throw new Error(
        result?.[Queries.SELECT_ONE_BY_ID][SelectableField.ERRORS]?.[
          ErrorsField.MESSAGE
        ],
      );
    }

    return result?.[Queries.SELECT_ONE_BY_ID][SelectableField.DATA]?.[
      type
    ] as T;
  }

  public async findEndCustomerById(
    id: number,
    fields: EndCustomerSchema,
    pagination?: InputPaginationType,
  ): Promise<EndCustomerType | null> {
    return await this.findOneById<EndCustomerType>(
      id,
      {
        [SelectDataField.END_CUSTOMER]: fields,
      },
      pagination,
    );
  }

  public async findPartnerById(
    id: number,
    fields: PartnerSchema,
    pagination?: InputPaginationType,
  ): Promise<PartnerType | null> {
    return await this.findOneById<PartnerType>(
      id,
      {
        [SelectDataField.PARTNER]: fields,
      },
      pagination,
    );
  }

  public async findArrowCompanyById(
    id: number,
    fields: ArrowCompanySchema,
    pagination?: InputPaginationType,
  ): Promise<ArrowCompanyType | null> {
    return await this.findOneById<ArrowCompanyType>(
      id,
      {
        [SelectDataField.ARROW_COMPANY]: fields,
      },
      pagination,
    );
  }

  public async getLocalContact(
    programInternalName: string,
    partnerId: number,
    fieldSchema: ContactsSchema,
  ): Promise<GetLocalContactResultType | null> {
    const query: GetLocalContactQueryType = {
      [Queries.GET_LOCAL_CONTACT]: {
        __args: {
          programInternalName,
          partnerId,
        },
        [SelectableField.DATA]: {
          contact: fieldSchema,
        },
        [SelectableField.ERRORS]: {
          [ErrorsField.MESSAGE]: true,
        },
      },
    };

    return await this.find<GetLocalContactResultType>(
      this.stringifyQuery(query),
    );
  }

  public async getSpecialPriceRatesHistory(
    licenseId: number,
    fieldSchema: SpecialPriceRateSchema,
    pagination?: PageSchema,
    additionalParams?: QueryVariablesType,
  ): Promise<GetSpecialPriceRatesHistoryResultType | null> {
    const query: GetSpecialPriceRatesHistoryQueryType = {
      [Queries.GET_SPECIAL_PRICE_RATES_HISTORY]: {
        __args: {
          licenseId,
          ...additionalParams,
        },
        [SelectableField.DATA]: {
          specialPriceRate: fieldSchema,
        },
        [SelectableField.ERRORS]: {
          [ErrorsField.MESSAGE]: true,
        },
        [SelectableField.PAGINATION]: pagination,
      },
    };

    return await this.find<GetSpecialPriceRatesHistoryResultType>(
      this.stringifyQuery(query),
    );
  }

  public async export(
    query: ExportQueryType,
  ): Promise<ExportResultType | null> {
    return await this.find<ExportResultType>(this.stringifyQuery(query));
  }
}
