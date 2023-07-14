import {
  ComparisonOperator,
  Direction,
  LogicalOperator,
  Queries,
  QueryModifier,
  SelectAllQueryType,
  SelectOneQueryType,
} from '../../../src/graphqlApi';

export const GRAPHQL_API_MOCK_URL = 'http://security.localhost';

export const SELECT_ALL_END_CUSTOMER_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'deletedAt',
                operator: ComparisonOperator.IS_NULL,
              },
            ],
          },
          {
            items: [
              {
                name: 'locked',
                operator: ComparisonOperator.IS_NULL,
              },
              {
                name: 'locked',
                value: ['1'],
                operator: ComparisonOperator.IS_NULL,
              },
            ],
            logicalOperator: LogicalOperator.OR,
          },
        ],
      },
      exclusionFilters: {
        groups: [
          {
            items: [
              {
                name: 'partnertags.label',
                value: ['TIER2'],
                operator: ComparisonOperator.EQUALS,
              },
            ],
          },
        ],
      },
      aggregatorFilter: ['id'],
      pagination: {
        page: 1,
        perPage: 20,
      },
      queryModifier: QueryModifier.DISTINCT,
      sort: [
        {
          name: 'name',
          direction: Direction.ASC,
        },
        {
          name: 'createdAt',
          direction: Direction.DESC,
        },
      ],
    },
    data: {
      endCustomer: {
        acronym: true,
        address1: true,
        address2: true,
        billingId: true,
        city: true,
        createdAt: true,
        deletedAt: true,
        enabled: true,
        erpId: true,
        id: true,
        internalReference: true,
        locked: true,
        name: true,
        partner: {
          acronym: true,
          country: {
            code2: true,
            code3: true,
            id: true,
            lat: true,
            lng: true,
            name: true,
            phoneCode: true,
          },
          id: true,
          partnerRef: true,
          workgroup: {
            code: true,
            id: true,
            name: true,
          },
        },
        partnerRef: true,
        partnerTags: {
          createdAt: true,
          description: true,
          id: true,
          label: true,
        },
        phone: true,
        state: true,
        vatNumber: true,
        zip: true,
      },
    },

    errors: {
      code: true,
      message: true,
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
      totalPages: true,
    },
  },
};

export const SELECT_ALL_END_CUSTOMER_GQL =
  '{selectAll (filters: {groups: [{items: [{name: "deletedAt", operator: "IS_NULL"}]}, {items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "IS_NULL"}], logicalOperator: "OR"}]}, exclusionFilters: {groups: [{items: [{name: "partnertags.label", value: ["TIER2"], operator: "EQUALS"}]}]}, aggregatorFilter: ["id"], pagination: {page: 1, perPage: 20}, queryModifier: "DISTINCT", sort: [{name: "name", direction: "ASC"}, {name: "createdAt", direction: "DESC"}]) { data { endCustomer { acronym address1 address2 billingId city createdAt deletedAt enabled erpId id internalReference locked name partner { acronym country { code2 code3 id lat lng name phoneCode } id partnerRef workgroup { code id name } } partnerRef partnerTags { createdAt description id label } phone state vatNumber zip } } errors { code message } pagination { currentPage perPage previous next total totalPage totalPages } }}';

export const SELECT_ONE_END_CUSTOMER_QUERY: SelectOneQueryType = {
  [Queries.SELECT_ONE]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'id',
                value: ['123'],
                operator: ComparisonOperator.EQUALS,
              },
            ],
          },
          {
            items: [
              {
                name: 'locked',
                operator: ComparisonOperator.IS_NULL,
              },
              {
                name: 'locked',
                value: ['1'],
                operator: ComparisonOperator.IS_NULL,
              },
            ],
            logicalOperator: LogicalOperator.OR,
          },
        ],
      },
    },
    data: {
      endCustomer: {
        acronym: true,
        address1: true,
        address2: true,
        billingId: true,
        city: true,
        createdAt: true,
        deletedAt: true,
        enabled: true,
        erpId: true,
        id: true,
        internalReference: true,
        locked: true,
        name: true,
        partner: {
          acronym: true,
          country: {
            code2: true,
            code3: true,
            id: true,
            lat: true,
            lng: true,
            name: true,
            phoneCode: true,
          },
          id: true,
          partnerRef: true,
          workgroup: {
            code: true,
            id: true,
            name: true,
          },
        },
        partnerRef: true,
        partnerTags: {
          createdAt: true,
          description: true,
          id: true,
          label: true,
        },
        phone: true,
        state: true,
        vatNumber: true,
        zip: true,
      },
    },

    errors: {
      code: true,
      message: true,
    },
  },
};

export const SELECT_ONE_END_CUSTOMER_GQL =
  '{selectOne (filters: {groups: [{items: [{name: "id", value: ["123"], operator: "EQUALS"}]}, {items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "IS_NULL"}], logicalOperator: "OR"}]}) { data { endCustomer { acronym address1 address2 billingId city createdAt deletedAt enabled erpId id internalReference locked name partner { acronym country { code2 code3 id lat lng name phoneCode } id partnerRef workgroup { code id name } } partnerRef partnerTags { createdAt description id label } phone state vatNumber zip } } errors { code message } }}';
