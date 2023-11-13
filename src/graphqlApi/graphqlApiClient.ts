import { AbstractGraphQLClient } from '../abstractGraphQLClient';
import {
  ArrowCompanyType,
  EndCustomerType,
  PartnerType,
} from './types/entities/company';

import {
  ComparisonOperator,
  ErrorsField,
  InputFilterValueField,
  InputFiltersField,
  InputSearchFilterField,
  Queries,
  QueryVariablesField,
  SelectAllQueryType,
  SelectAllResultType,
  SelectDataField,
  SelectOneQueryType,
  SelectOneResponseDataType,
  SelectOneResultType,
  SelectableField,
} from './types/graphqlApiQueries';
import {
  ArrowCompanySchema,
  EndCustomerSchema,
  PartnerSchema,
  SelectOneResponseDataSchema,
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
    const queryStr: string = this.stringifyQuery(query);

    const result: SelectAllResultType | null = await this.find<SelectAllResultType>(
      queryStr,
    );

    return result;
  }

  public async selectOne(
    query: SelectOneQueryType,
  ): Promise<SelectOneResultType | null> {
    const queryStr: string = this.stringifyQuery(query);

    const result: SelectOneResultType | null = await this.find<SelectOneResultType>(
      queryStr,
    );

    return result;
  }

  public async findOneById<T>(
    id: number,
    fieldSchema: SelectOneResponseDataSchema,
  ): Promise<T | null> {
    const keys: string[] = Object.keys(fieldSchema);
    if (keys.length === 0) {
      return null;
    }

    const type: keyof SelectOneResponseDataType = keys[0] as keyof SelectOneResponseDataType;

    const query: SelectOneQueryType = {
      [Queries.SELECT_ONE]: {
        __args: {
          [QueryVariablesField.FILTERS]: {
            [InputSearchFilterField.GROUPS]: [
              {
                [InputFiltersField.ITEMS]: [
                  {
                    [InputFilterValueField.NAME]: 'id',
                    [InputFilterValueField.OPERATOR]: ComparisonOperator.EQUALS,
                    [InputFilterValueField.VALUE]: [`${id}`],
                  },
                ],
              },
            ],
          },
        },
        [SelectableField.DATA]: fieldSchema,
        [SelectableField.ERRORS]: {
          [ErrorsField.MESSAGE]: true,
        },
      },
    };

    const queryStr: string = this.stringifyQuery(query);

    const result: SelectOneResultType | null = await this.find<SelectOneResultType>(
      queryStr,
    );

    return result?.[Queries.SELECT_ONE]?.[SelectableField.DATA]?.[type] as T;
  }

  public async findEndCustomerById(
    id: number,
    fields: EndCustomerSchema,
  ): Promise<EndCustomerType | null> {
    return await this.findOneById<EndCustomerType>(id, {
      [SelectDataField.END_CUSTOMER]: fields,
    });
  }

  public async findPartnerById(
    id: number,
    fields: PartnerSchema,
  ): Promise<PartnerType | null> {
    return await this.findOneById<PartnerType>(id, {
      [SelectDataField.PARTNER]: fields,
    });
  }

  public async findArrowCompanyById(
    id: number,
    fields: ArrowCompanySchema,
  ): Promise<ArrowCompanyType | null> {
    return await this.findOneById<ArrowCompanyType>(id, {
      [SelectDataField.ARROW_COMPANY]: fields,
    });
  }
}
