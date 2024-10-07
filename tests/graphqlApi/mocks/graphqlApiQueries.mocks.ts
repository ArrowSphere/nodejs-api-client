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
                operator: ComparisonOperator.DIFFERENT,
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
        contacts: {
          id: true,
          active: true,
          communicationEmail: true,
          effectiveDate: true,
          email: true,
          erpId: true,
          firstname: true,
          lastname: true,
          locked: true,
          phone: true,
          status: true,
          tseAccountStatus: true,
          username: true,
          type: {
            id: true,
            name: true,
          },
          role: {
            id: true,
            name: true,
          },
        },
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
          partnerTags: {
            id: true,
            label: true,
            description: true,
            createdAt: true,
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
        extraInformations: {
          id: true,
          companyId: true,
          code: true,
          label: true,
          name: true,
          type: true,
          value: true,
          programName: true,
        },
        orders: {
          id: true,
          items: {
            id: true,
            priceRates: {
              id: true,
              createdAt: true,
              endedAt: true,
              rate: true,
              startedAt: true,
              companyType: {
                id: true,
                type: true,
              },
              type: {
                id: true,
                name: true,
              },
            },
          },
        },
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
  '{selectAll (filters: {groups: [{items: [{name: "deletedAt", operator: "IS_NULL"}]}, {items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "DIFFERENT"}], logicalOperator: "OR"}]}, exclusionFilters: {groups: [{items: [{name: "partnertags.label", value: ["TIER2"], operator: "EQUALS"}]}]}, aggregatorFilter: ["id"], pagination: {page: 1, perPage: 20}, queryModifier: "DISTINCT", sort: [{name: "name", direction: "ASC"}, {name: "createdAt", direction: "DESC"}]) { data { endCustomer { acronym address1 address2 billingId city contacts { id active communicationEmail effectiveDate email erpId firstname lastname locked phone status tseAccountStatus username type { id name } role { id name } } createdAt deletedAt enabled erpId id internalReference locked name partner { acronym country { code2 code3 id lat lng name phoneCode } id partnerRef workgroup { code id name } partnerTags { id label description createdAt } } partnerRef partnerTags { createdAt description id label } phone state vatNumber zip extraInformations { id companyId code label name type value programName } orders { id items { id priceRates { id createdAt endedAt rate startedAt companyType { id type } type { id name } } } } } } errors { code message } pagination { currentPage perPage previous next total totalPage totalPages } }}';

export const SELECT_ALL_PARTNERS_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'locked',
                operator: ComparisonOperator.IS_NULL,
              },
              {
                name: 'locked',
                value: ['1'],
                operator: ComparisonOperator.DIFFERENT,
              },
            ],
            logicalOperator: LogicalOperator.OR,
          },
          {
            items: [
              {
                name: 'id',
                value: [
                  'SELECT DISTINCT compcustomer_companyid_customer FROM COMPANY_CUSTOMER',
                ],
                exclusion: true,
              },
            ],
          },
        ],
      },
      aggregatorFilter: ['id'],
      pagination: {
        page: 1,
        perPage: 4,
      },
      sort: [
        {
          name: 'id',
          direction: Direction.ASC,
        },
      ],
    },
    data: {
      partner: {
        id: true,
        partnerTags: {
          id: true,
          label: true,
          description: true,
          createdAt: true,
        },
        workgroup: {
          code: true,
        },
        enabled: true,
        subscriptionsPendingCount: {
          total: true,
        },
        subscriptionsCount: {
          total: true,
        },
        ordersCount: {
          total: true,
        },
        ordersNeedCount: {
          total: true,
        },
        contactsCount: {
          total: true,
        },
        customersCount: {
          total: true,
        },
        reportsCount: {
          total: true,
        },
        createdAt: true,
        name: true,
        contacts: {
          id: true,
          active: true,
          communicationEmail: true,
          effectiveDate: true,
          email: true,
          erpId: true,
          firstname: true,
          lastname: true,
          locked: true,
          phone: true,
          status: true,
          tseAccountStatus: true,
          username: true,
          type: {
            id: true,
            name: true,
          },
          role: {
            id: true,
            name: true,
          },
        },
        subscriptions: {
          id: true,
          localContact: {
            id: true,
            firstname: true,
            lastname: true,
            phone: true,
            email: true,
          },
          partnerContact: {
            id: true,
            firstname: true,
            lastname: true,
            phone: true,
            email: true,
          },
          program: {
            id: true,
            internalName: true,
            name: true,
          },
        },
        extraInformations: {
          id: true,
          companyId: true,
          code: true,
          label: true,
          name: true,
          type: true,
          value: true,
          programName: true,
        },
        orders: {
          id: true,
          items: {
            id: true,
            priceRates: {
              id: true,
              createdAt: true,
              endedAt: true,
              rate: true,
              startedAt: true,
              companyType: {
                id: true,
                type: true,
              },
              type: {
                id: true,
                name: true,
              },
            },
          },
        },
        subscribedPrograms: {
          availabilityEndedAt: true,
          availabilityStartedAt: true,
          companyId: true,
          internalName: true,
          subscriptionEndedAt: true,
          id: true,
          vendorCode: true,
          vendorName: true,
          workgroupCode: true,
        },
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

export const SELECT_ALL_PARTNERS_GQL =
  '{selectAll (filters: {groups: [{items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "DIFFERENT"}], logicalOperator: "OR"}, {items: [{name: "id", value: ["SELECT DISTINCT compcustomer_companyid_customer FROM COMPANY_CUSTOMER"], exclusion: true}]}]}, aggregatorFilter: ["id"], pagination: {page: 1, perPage: 4}, sort: [{name: "id", direction: "ASC"}]) { data { partner { id partnerTags { id label description createdAt } workgroup { code } enabled subscriptionsPendingCount { total } subscriptionsCount { total } ordersCount { total } ordersNeedCount { total } contactsCount { total } customersCount { total } reportsCount { total } createdAt name contacts { id active communicationEmail effectiveDate email erpId firstname lastname locked phone status tseAccountStatus username type { id name } role { id name } } subscriptions { id localContact { id firstname lastname phone email } partnerContact { id firstname lastname phone email } program { id internalName name } } extraInformations { id companyId code label name type value programName } orders { id items { id priceRates { id createdAt endedAt rate startedAt companyType { id type } type { id name } } } } subscribedPrograms { availabilityEndedAt availabilityStartedAt companyId internalName subscriptionEndedAt id vendorCode vendorName workgroupCode } } } errors { code message } pagination { currentPage perPage previous next total totalPage totalPages } }}';

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
      options: {
        skipPartition: true,
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
        extraInformations: {
          id: true,
          companyId: true,
          code: true,
          label: true,
          name: true,
          type: true,
          value: true,
          programName: true,
        },
        orders: {
          id: true,
          items: {
            id: true,
            priceRates: {
              id: true,
              createdAt: true,
              endedAt: true,
              rate: true,
              startedAt: true,
              companyType: {
                id: true,
                type: true,
              },
              type: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    },
    errors: {
      code: true,
      message: true,
    },
  },
};

export const SELECT_ONE_END_CUSTOMER_GQL =
  '{selectOne (filters: {groups: [{items: [{name: "id", value: ["123"], operator: "EQUALS"}]}, {items: [{name: "locked", operator: "IS_NULL"}, {name: "locked", value: ["1"], operator: "IS_NULL"}], logicalOperator: "OR"}]}, options: {skipPartition: true}) { data { endCustomer { acronym address1 address2 billingId city createdAt deletedAt enabled erpId id internalReference locked name partner { acronym country { code2 code3 id lat lng name phoneCode } id partnerRef workgroup { code id name } } partnerRef partnerTags { createdAt description id label } phone state vatNumber zip extraInformations { id companyId code label name type value programName } orders { id items { id priceRates { id createdAt endedAt rate startedAt companyType { id type } type { id name } } } } } } errors { code message } }}';

export const SELECT_ALL_SUBSCRIBED_PROGRAM_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      aggregatorFilter: ['companyId', 'internalName'],
      pagination: {
        page: 1,
        perPage: 1000,
      },
      sort: [
        {
          name: 'vendorName',
          direction: Direction.ASC,
        },
      ],
    },
    data: {
      subscribedProgram: {
        id: true,
        availabilityEndedAt: true,
        availabilityStartedAt: true,
        companyId: true,
        internalName: true,
        subscriptionEndedAt: true,
        partner: {
          id: true,
          name: true,
          address1: true,
          city: true,
          zip: true,
          phone: true,
        },
        program: {
          id: true,
          internalName: true,
          name: true,
        },
        subscription: {
          id: true,
        },
        vendor: {
          id: true,
          name: true,
          identifier: true,
          licenseUrl: true,
          logoLarge: true,
          logoSmall: true,
          logoStandard: true,
          url: true,
        },
        vendorCode: true,
        vendorName: true,
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

export const SELECT_ALL_SUBSCRIBED_PROGRAM_GQL =
  '{selectAll (aggregatorFilter: ["companyId", "internalName"], pagination: {page: 1, perPage: 1000}, sort: [{name: "vendorName", direction: "ASC"}]) { data { subscribedProgram { id availabilityEndedAt availabilityStartedAt companyId internalName subscriptionEndedAt partner { id name address1 city zip phone } program { id internalName name } subscription { id } vendor { id name identifier licenseUrl logoLarge logoSmall logoStandard url } vendorCode vendorName } } errors { code message } pagination { currentPage perPage previous next total totalPage totalPages } }}';

export const SELECT_ONE_LICENSE_BUDGET_QUERY: SelectOneQueryType = {
  [Queries.SELECT_ONE]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'licenseId',
                value: ['123'],
                operator: ComparisonOperator.EQUALS,
              },
            ],
          },
        ],
      },
      pagination: {
        page: 1,
        perPage: 1000,
      },
    },
    data: {
      licenseBudget: {
        id: true,
        threshold: true,
        type: true,
        notifications: {
          id: true,
          name: true,
        },
      },
    },
    errors: {
      code: true,
      message: true,
    },
  },
};

export const SELECT_ONE_LICENSE_BUDGET_GQL =
  '{selectOne (filters: {groups: [{items: [{name: "licenseId", value: ["123"], operator: "EQUALS"}]}]}, pagination: {page: 1, perPage: 1000}) { data { licenseBudget { id threshold type notifications { id name } } } errors { code message } }}';

export const SELECT_USER_HISTORY_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      filters: {
        groups: [
          {
            items: [
              {
                name: 'impactedUser.contact.username',
                value: ['099d9076a611ee24f83b0dc89c076a4f'],
                operator: ComparisonOperator.EQUALS,
              },
            ],
          },
        ],
      },
      pagination: {
        page: 1,
        perPage: 5,
      },
    },
    data: {
      userHistory: {
        action: true,
        createdAt: true,
        description: true,
        impactedUser: {
          contact: {
            firstname: true,
            lastname: true,
          },
        },
        originatorUser: {
          contact: {
            firstname: true,
            lastname: true,
          },
        },
      },
    },
    errors: {
      code: true,
      message: true,
    },
    pagination: {
      currentPage: true,
      perPage: true,
      total: true,
    },
  },
};

export const SELECT_USER_HISTORY_GQL =
  '{selectAll (filters: {groups: [{items: [{name: "impactedUser.contact.username", value: ["099d9076a611ee24f83b0dc89c076a4f"], operator: "EQUALS"}]}]}, pagination: {page: 1, perPage: 5}) { data { userHistory { action createdAt description impactedUser { contact { firstname lastname } } originatorUser { contact { firstname lastname } } } } errors { code message } pagination { currentPage perPage total } }}';

export const SELECT_USER_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
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
        ],
      },
      pagination: {
        page: 1,
        perPage: 3,
      },
    },
    data: {
      user: {
        allowDirectLogin: true,
        validatedAt: true,
        contact: {
          firstname: true,
          lastname: true,
          organizationUnits: {
            id: true,
            name: true,
          },
        },
        userTags: {
          id: true,
          label: true,
          createdAt: true,
          description: true,
          labelsSerialized: true,
        },
      },
    },
    errors: {
      code: true,
      message: true,
    },
    pagination: {
      currentPage: true,
      perPage: true,
      total: true,
    },
  },
};

export const SELECT_USER_GQL =
  '{selectAll (filters: {groups: [{items: [{name: "id", value: ["123"], operator: "EQUALS"}]}]}, pagination: {page: 1, perPage: 3}) { data { user { allowDirectLogin validatedAt contact { firstname lastname organizationUnits { id name } } userTags { id label createdAt description labelsSerialized } } } errors { code message } pagination { currentPage perPage total } }}';

export const SELECT_QUOTES_QUERY: SelectAllQueryType = {
  [Queries.SELECT_ALL]: {
    __args: {
      aggregatorFilter: ['id'],
      filters: {
        groups: [
          {
            items: [
              {
                name: 'updatedAt',
                value: ['2024-01-01 00:00:00', '2024-06-11 23:59:59'],
                operator: ComparisonOperator.BETWEEN,
              },
            ],
          },
        ],
      },
      pagination: {
        page: 1,
        perPage: 15,
      },
      sort: [
        {
          name: 'createdAt',
          direction: Direction.DESC,
        },
      ],
    },
    data: {
      quote: {
        id: true,
        arrowCompany: {
          id: true,
          name: true,
          workgroup: {
            code: true,
          },
        },
        commitmentAmountTotal: true,
        createdAt: true,
        dateBegin: true,
        dateEnd: true,
        endCustomer: {
          id: true,
          name: true,
          country: {
            code2: true,
            code3: true,
            id: true,
            lat: true,
            lng: true,
            name: true,
            phoneCode: true,
          },
          partner: {
            country: {
              code2: true,
              code3: true,
              id: true,
              lat: true,
              lng: true,
              name: true,
              phoneCode: true,
            },
          },
        },
        endCustomerContact: {
          id: true,
          firstname: true,
          lastname: true,
          phone: true,
          email: true,
        },
        versions: {
          id: true,
          version: true,
          updatedAt: true,
          createdAt: true,
        },
        lastVersion: {
          id: true,
          version: true,
          updatedAt: true,
          createdAt: true,
        },
        comments: {
          id: true,
          body: true,
          createdAt: true,
          user: {
            id: true,
            contact: {
              firstname: true,
              lastname: true,
            },
          },
        },
        items: {
          id: true,
          name: true,
          program: {
            id: true,
            name: true,
            internalName: true,
            vendor: {
              id: true,
              name: true,
              identifier: true,
              licenseUrl: true,
              logoLarge: true,
              logoSmall: true,
              logoStandard: true,
              url: true,
            },
          },
          reference: true,
          vendorName: true,
          vendorNamesSerialized: true,
          itemData: {
            id: true,
            offerName: true,
            customTermEndDate: true,
            publicPrice: true,
            buyPrice: true,
            sellPrice: true,
            currency: true,
            arrowRateType: true,
            partnerRateType: true,
            billingTerm: true,
            billingCycle: true,
            arrowRateValue: true,
            partnerRateValue: true,
            arrowSpherePriceBandSku: true,
            licenseAgreementType: true,
            classification: true,
            mainLogoUrl: true,
            squareLogoUrl: true,
            marketplace: true,
            creationDate: true,
            quantity: true,
            orderingType: true,
            partnerBuyPrice: true,
            partnerCotermBuyPrice: true,
          },
          version: {
            id: true,
            version: true,
            updatedAt: true,
            createdAt: true,
          },
        },
        name: true,
        partner: {
          id: true,
          name: true,
          currency: {
            id: true,
            name: true,
            symbol: true,
          },
        },
        promotionCode: true,
        reference: true,
        status: true,
        totalRecurringPrice: true,
        updatedAt: true,
      },
    },
    errors: {
      code: true,
      message: true,
    },
    pagination: {
      currentPage: true,
      perPage: true,
      total: true,
    },
  },
};

export const SELECT_QUOTES_GQL =
  '{selectAll (aggregatorFilter: ["id"], filters: {groups: [{items: [{name: "updatedAt", value: ["2024-01-01 00:00:00", "2024-06-11 23:59:59"], operator: "BETWEEN"}]}]}, pagination: {page: 1, perPage: 15}, sort: [{name: "createdAt", direction: "DESC"}]) { data { quote { id arrowCompany { id name workgroup { code } } commitmentAmountTotal createdAt dateBegin dateEnd endCustomer { id name country { code2 code3 id lat lng name phoneCode } partner { country { code2 code3 id lat lng name phoneCode } } } endCustomerContact { id firstname lastname phone email } versions { id version updatedAt createdAt } lastVersion { id version updatedAt createdAt } comments { id body createdAt user { id contact { firstname lastname } } } items { id name program { id name internalName vendor { id name identifier licenseUrl logoLarge logoSmall logoStandard url } } reference vendorName vendorNamesSerialized itemData { id offerName customTermEndDate publicPrice buyPrice sellPrice currency arrowRateType partnerRateType billingTerm billingCycle arrowRateValue partnerRateValue arrowSpherePriceBandSku licenseAgreementType classification mainLogoUrl squareLogoUrl marketplace creationDate quantity orderingType partnerBuyPrice partnerCotermBuyPrice } version { id version updatedAt createdAt } } name partner { id name currency { id name symbol } } promotionCode reference status totalRecurringPrice updatedAt } } errors { code message } pagination { currentPage perPage total } }}';
