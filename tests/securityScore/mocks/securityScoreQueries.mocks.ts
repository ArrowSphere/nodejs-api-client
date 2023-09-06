import {
  GetAdminDataQuery,
  GetCustomerAccountDataQuery,
  GetCustomerDataQuery,
  GetPartnerDataQuery,
  SearchBodyFields,
  SearchFilterFields,
  SearchFilterValues,
  SecurityScoreQueries,
} from '../../../src/securityScore';

export const SECURITY_MOCK_URL = 'http://security.localhost';
export const GET_PARTNER_DATA_QUERY: GetPartnerDataQuery = {
  [SecurityScoreQueries.GET_PARTNER_DATA]: {
    __args: {
      searchBody: {
        [SearchBodyFields.MARKETPLACE]: [['FR']],
      },
    },
    checksAgg: {
      checks: {
        data: {
          count: true,
          date: true,
        },
        last: {
          count: true,
          date: true,
        },
        name: true,
        progression: true,
        reference: true,
        vendorCode: true,
      },
    },
    endCustomersAgg: {
      customers: {
        data: {
          date: true,
          accounts: true,
          failed: true,
          passed: true,
          subscriptionReferences: true,
          score: true,
          scoreUnit: true,
          total: true,
        },
        last: {
          date: true,
          accounts: true,
          failed: true,
          passed: true,
          subscriptionReferences: true,
          score: true,
          scoreUnit: true,
          total: true,
        },
        name: true,
        progression: true,
        reference: true,
      },
      unregisteredCustomers: {
        name: true,
        reference: true,
        offers: {
          iaas: {
            name: true,
            sku: true,
            subscriptions: {
              friendlyName: true,
              partnerRef: true,
              vendorSubscriptionId: true,
            },
          },
          saas: {
            name: true,
            subscription: true,
          },
        },
      },
    },
    marketplacesAgg: {
      marketplaces: {
        data: {
          date: true,
          score: true,
          scoreUnit: true,
        },
        last: {
          date: true,
          score: true,
          scoreUnit: true,
        },
        name: true,
        partners: {
          data: {
            date: true,
            failed: true,
            passed: true,
            score: true,
            scoreUnit: true,
            total: true,
          },
          last: {
            date: true,
            failed: true,
            passed: true,
            score: true,
            scoreUnit: true,
            total: true,
          },
          name: true,
          progression: true,
          reference: true,
        },
        progression: true,
      },
    },
    monthlyTrendAgg: {
      period: {
        from: true,
        to: true,
      },
      scores: {
        date: true,
        score: true,
        scoreUnit: true,
        severities: {
          name: true,
          value: true,
        },
      },
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
    },
    period: {
      from: true,
      to: true,
    },
    results: {
      account: {
        failed: true,
        name: true,
        passed: true,
        reference: true,
        score: true,
        standards: {
          currentScore: true,
          checks: {
            description: true,
            flagged: true,
            group: true,
            isFailed: true,
            name: true,
            processed: true,
            reference: true,
            score: true,
            severity: true,
          },
          failed: true,
          maxScore: true,
          passed: true,
          reference: true,
          score: true,
          total: true,
        },
        total: true,
      },
      registration: {
        accountReference: true,
        customer: {
          name: true,
          reference: true,
        },
        marketplace: true,
        reseller: {
          name: true,
          reference: true,
        },
        subscription: {
          reference: true,
        },
        vendorCode: true,
      },
    },
    scoresAgg: {
      last: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
      scores: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
        data: {
          date: true,
          value: true,
        },
        last: {
          date: true,
          value: true,
        },
        name: true,
        progression: true,
      },
    },
  },
};

export const GET_PARTNER_DATA_GQL =
  '{getPartnerData (searchBody: {marketplace: [["FR"]]}) { checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } endCustomersAgg { customers { data { date accounts failed passed subscriptionReferences score scoreUnit total } last { date accounts failed passed subscriptionReferences score scoreUnit total } name progression reference } unregisteredCustomers { name reference offers { iaas { name sku subscriptions { friendlyName partnerRef vendorSubscriptionId } } saas { name subscription } } } } marketplacesAgg { marketplaces { data { date score scoreUnit } last { date score scoreUnit } name partners { data { date failed passed score scoreUnit total } last { date failed passed score scoreUnit total } name progression reference } progression } } monthlyTrendAgg { period { from to } scores { date score scoreUnit severities { name value } } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { date failed passed score scoreUnit total } scores { date failed passed score scoreUnit total } } severitiesAgg { severities { data { date value } last { date value } name progression } } }}';

export const GET_ADMIN_DATA_QUERY: GetAdminDataQuery = {
  [SecurityScoreQueries.GET_ADMIN_DATA]: {
    __args: {
      searchBody: {
        [SearchBodyFields.MARKETPLACE]: [['FR']],
      },
    },
    checksAgg: {
      checks: {
        data: {
          count: true,
          date: true,
        },
        last: {
          count: true,
          date: true,
        },
        name: true,
        progression: true,
        reference: true,
        vendorCode: true,
      },
    },
    marketplacesAgg: {
      marketplaces: {
        data: {
          date: true,
          score: true,
          scoreUnit: true,
        },
        last: {
          date: true,
          score: true,
          scoreUnit: true,
        },
        name: true,
        partners: {
          data: {
            date: true,
            failed: true,
            passed: true,
            score: true,
            scoreUnit: true,
            total: true,
          },
          last: {
            date: true,
            failed: true,
            passed: true,
            score: true,
            scoreUnit: true,
            total: true,
          },
          name: true,
          progression: true,
          reference: true,
        },
        progression: true,
      },
    },
    monthlyTrendAgg: {
      period: {
        from: true,
        to: true,
      },
      scores: {
        date: true,
        score: true,
        scoreUnit: true,
        severities: {
          name: true,
          value: true,
        },
      },
    },
    partnersAgg: {
      partners: {
        data: {
          date: true,
          failed: true,
          passed: true,
          score: true,
          scoreUnit: true,
          total: true,
        },
        last: {
          date: true,
          failed: true,
          passed: true,
          score: true,
          scoreUnit: true,
          total: true,
        },
        name: true,
        progression: true,
        reference: true,
      },
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
    },
    period: {
      from: true,
      to: true,
    },
    results: {
      account: {
        failed: true,
        name: true,
        passed: true,
        reference: true,
        score: true,
        standards: {
          currentScore: true,
          checks: {
            description: true,
            flagged: true,
            group: true,
            isFailed: true,
            name: true,
            processed: true,
            reference: true,
            score: true,
            severity: true,
          },
          failed: true,
          maxScore: true,
          passed: true,
          reference: true,
          score: true,
          total: true,
        },
        total: true,
      },
      registration: {
        accountReference: true,
        customer: {
          name: true,
          reference: true,
        },
        marketplace: true,
        reseller: {
          name: true,
          reference: true,
        },
        subscription: {
          reference: true,
        },
        vendorCode: true,
      },
    },
    scoresAgg: {
      last: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
      scores: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
        data: {
          date: true,
          value: true,
        },
        last: {
          date: true,
          value: true,
        },
        name: true,
        progression: true,
      },
    },
  },
};

export const GET_ADMIN_DATA_GQL =
  '{getAdminData (searchBody: {marketplace: [["FR"]]}) { checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } marketplacesAgg { marketplaces { data { date score scoreUnit } last { date score scoreUnit } name partners { data { date failed passed score scoreUnit total } last { date failed passed score scoreUnit total } name progression reference } progression } } monthlyTrendAgg { period { from to } scores { date score scoreUnit severities { name value } } } partnersAgg { partners { data { date failed passed score scoreUnit total } last { date failed passed score scoreUnit total } name progression reference } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { date failed passed score scoreUnit total } scores { date failed passed score scoreUnit total } } severitiesAgg { severities { data { date value } last { date value } name progression } } }}';

export const GET_CUSTOMER_DATA_QUERY: GetCustomerDataQuery = {
  [SecurityScoreQueries.GET_CUSTOMER_DATA]: {
    __args: {
      searchBody: {
        [SearchBodyFields.MARKETPLACE]: [['FR']],
        [SearchBodyFields.FILTERS]: [
          {
            [SearchFilterFields.NAMES]: [
              SearchFilterValues.REGISTRATION_CUSTOMER_REFERENCE,
            ],
            [SearchFilterFields.VALUES]: [['XSP0']],
          },
        ],
      },
    },
    accountsAgg: {
      accounts: {
        data: {
          date: true,
          failed: true,
          passed: true,
          score: true,
          scoreUnit: true,
          total: true,
        },
        last: {
          date: true,
          failed: true,
          passed: true,
          score: true,
          scoreUnit: true,
          total: true,
        },
        name: true,
        progression: true,
        reference: true,
      },
      unregisteredAccounts: {
        iaas: {
          name: true,
          sku: true,
          subscriptions: {
            friendlyName: true,
            partnerRef: true,
            vendorSubscriptionId: true,
          },
        },
        saas: {
          name: true,
          subscription: true,
        },
      },
    },
    checksAgg: {
      checks: {
        data: {
          count: true,
          date: true,
        },
        last: {
          count: true,
          date: true,
        },
        name: true,
        progression: true,
        reference: true,
        vendorCode: true,
      },
    },
    monthlyTrendAgg: {
      period: {
        from: true,
        to: true,
      },
      scores: {
        date: true,
        score: true,
        scoreUnit: true,
        severities: {
          name: true,
          value: true,
        },
      },
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
    },
    period: {
      from: true,
      to: true,
    },
    results: {
      account: {
        failed: true,
        name: true,
        passed: true,
        reference: true,
        score: true,
        standards: {
          currentScore: true,
          checks: {
            description: true,
            flagged: true,
            group: true,
            isFailed: true,
            name: true,
            processed: true,
            reference: true,
            score: true,
            severity: true,
          },
          failed: true,
          maxScore: true,
          passed: true,
          reference: true,
          score: true,
          total: true,
        },
        total: true,
      },
      registration: {
        accountReference: true,
        customer: {
          name: true,
          reference: true,
        },
        marketplace: true,
        reseller: {
          name: true,
          reference: true,
        },
        subscription: {
          reference: true,
        },
        vendorCode: true,
      },
    },
    scoresAgg: {
      last: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
      scores: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
        data: {
          date: true,
          value: true,
        },
        last: {
          date: true,
          value: true,
        },
        name: true,
        progression: true,
      },
    },
    standards: {
      checks: {
        data: {
          date: true,
          flagged: true,
          isFailed: true,
          processed: true,
          score: true,
        },
        description: true,
        last: {
          date: true,
          flagged: true,
          isFailed: true,
          processed: true,
          score: true,
        },
        name: true,
        progression: true,
        reference: true,
        severity: true,
      },
      name: true,
      reference: true,
    },
    subscriptionReferences: true,
  },
};

export const GET_CUSTOMER_DATA_GQL =
  '{getCustomerData (searchBody: {marketplace: [["FR"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}]}) { accountsAgg { accounts { data { date failed passed score scoreUnit total } last { date failed passed score scoreUnit total } name progression reference } unregisteredAccounts { iaas { name sku subscriptions { friendlyName partnerRef vendorSubscriptionId } } saas { name subscription } } } checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } monthlyTrendAgg { period { from to } scores { date score scoreUnit severities { name value } } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { date failed passed score scoreUnit total } scores { date failed passed score scoreUnit total } } severitiesAgg { severities { data { date value } last { date value } name progression } } standards { checks { data { date flagged isFailed processed score } description last { date flagged isFailed processed score } name progression reference severity } name reference } subscriptionReferences }}';

export const GET_CUSTOMER_ACCOUNT_DATA_QUERY: GetCustomerAccountDataQuery = {
  [SecurityScoreQueries.GET_CUSTOMER_ACCOUNT_DATA]: {
    __args: {
      searchBody: {
        [SearchBodyFields.MARKETPLACE]: [['FR'], ['UK']],
        [SearchBodyFields.FILTERS]: [
          {
            [SearchFilterFields.NAMES]: [
              SearchFilterValues.REGISTRATION_CUSTOMER_REFERENCE,
            ],
            [SearchFilterFields.VALUES]: [['XSP0']],
          },
          {
            [SearchFilterFields.NAMES]: [SearchFilterValues.ACCOUNT_REFERENCE],
            [SearchFilterFields.VALUES]: [['arrowsphere-1']],
          },
        ],
      },
    },
    checksAgg: {
      checks: {
        data: {
          count: true,
          date: true,
        },
        last: {
          count: true,
          date: true,
        },
        name: true,
        progression: true,
        reference: true,
        vendorCode: true,
      },
    },
    monthlyTrendAgg: {
      period: {
        from: true,
        to: true,
      },
      scores: {
        date: true,
        score: true,
        scoreUnit: true,
        severities: {
          name: true,
          value: true,
        },
      },
    },
    pagination: {
      currentPage: true,
      perPage: true,
      previous: true,
      next: true,
      total: true,
      totalPage: true,
    },
    period: {
      from: true,
      to: true,
    },
    results: {
      account: {
        failed: true,
        name: true,
        passed: true,
        reference: true,
        score: true,
        standards: {
          currentScore: true,
          checks: {
            description: true,
            flagged: true,
            group: true,
            isFailed: true,
            name: true,
            processed: true,
            reference: true,
            score: true,
            severity: true,
          },
          failed: true,
          maxScore: true,
          name: true,
          passed: true,
          reference: true,
          score: true,
          total: true,
        },
        total: true,
      },
      registration: {
        accountReference: true,
        customer: {
          name: true,
          reference: true,
        },
        marketplace: true,
        reseller: {
          name: true,
          reference: true,
        },
        subscription: {
          reference: true,
        },
        vendorCode: true,
      },
    },
    scoresAgg: {
      last: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
      scores: {
        date: true,
        failed: true,
        passed: true,
        score: true,
        scoreUnit: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
        data: {
          date: true,
          value: true,
        },
        last: {
          date: true,
          value: true,
        },
        name: true,
        progression: true,
      },
    },
    standardsAgg: {
      standards: {
        data: {
          date: true,
          score: true,
          scoreUnit: true,
          failed: true,
          passed: true,
          total: true,
        },
        last: {
          date: true,
          score: true,
          scoreUnit: true,
          failed: true,
          passed: true,
          total: true,
        },
        name: true,
        progression: true,
        reference: true,
      },
    },
    standards: {
      checks: {
        data: {
          date: true,
          flagged: true,
          isFailed: true,
          name: true,
          processed: true,
          score: true,
          scoreUnit: true,
        },
        description: true,
        last: {
          date: true,
          flagged: true,
          isFailed: true,
          name: true,
          processed: true,
          score: true,
          scoreUnit: true,
        },
        name: true,
        progression: true,
        reference: true,
        severity: true,
      },
      name: true,
      reference: true,
    },
  },
};

export const GET_CUSTOMER_ACCOUNT_DATA_GQL =
  '{getCustomerAccountData (searchBody: {marketplace: [["FR"], ["UK"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}, {names: ["account.reference"], values: [["arrowsphere-1"]]}]}) { checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } monthlyTrendAgg { period { from to } scores { date score scoreUnit severities { name value } } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore name passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { date failed passed score scoreUnit total } scores { date failed passed score scoreUnit total } } severitiesAgg { severities { data { date value } last { date value } name progression } } standardsAgg { standards { data { date score scoreUnit failed passed total } last { date score scoreUnit failed passed total } name progression reference } } standards { checks { data { date flagged isFailed name processed score scoreUnit } description last { date flagged isFailed name processed score scoreUnit } name progression reference severity } name reference } }}';
