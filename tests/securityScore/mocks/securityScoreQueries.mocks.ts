import {
  GetCustomerAccountDataQuery,
  GetCustomerDataQuery,
  GetPartnerDataQuery,
  SearchBodyFields,
  SearchFilterFields,
  SearchFilterValues,
  SecurityScoreQueries,
} from '../../../src/securityScore';

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
          avgCurrentScore: true,
          failed: true,
          passed: true,
          subscriptionReferences: true,
          total: true,
        },
        last: {
          date: true,
          accounts: true,
          avgCurrentScore: true,
          failed: true,
          passed: true,
          subscriptionReferences: true,
          total: true,
        },
        name: true,
        progression: true,
        reference: true,
      },
    },
    marketplacesAgg: {
      marketplaces: {
        data: {
          avgCurrentScore: true,
          date: true,
        },
        last: {
          avgCurrentScore: true,
          date: true,
        },
        name: true,
        partners: {
          data: {
            accounts: true,
            avgCurrentScore: true,
            date: true,
            subscriptionReferencesAgg: true,
          },
          last: {
            accounts: true,
            avgCurrentScore: true,
            date: true,
            subscriptionReferencesAgg: true,
          },
          name: true,
          progression: true,
          reference: true,
        },
        progression: true,
      },
    },
    monthlyTrendAgg: {
      avgCurrentScore: true,
      period: {
        from: true,
        to: true,
      },
      scores: {
        avgCurrentScore: true,
        date: true,
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
        avgCurrentScore: true,
        date: true,
        failed: true,
        passed: true,
        total: true,
      },
      scores: {
        avgCurrentScore: true,
        date: true,
        failed: true,
        passed: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
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
      },
    },
  },
};

export const GET_PARTNER_DATA_GQL =
  '{getPartnerData (searchBody: {marketplace: [["FR"]]}) { checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } endCustomersAgg { customers { data { date accounts avgCurrentScore failed passed subscriptionReferences total } last { date accounts avgCurrentScore failed passed subscriptionReferences total } name progression reference } } marketplacesAgg { marketplaces { data { avgCurrentScore date } last { avgCurrentScore date } name partners { data { accounts avgCurrentScore date subscriptionReferencesAgg } last { accounts avgCurrentScore date subscriptionReferencesAgg } name progression reference } progression } } monthlyTrendAgg { avgCurrentScore period { from to } scores { avgCurrentScore date } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { avgCurrentScore date failed passed total } scores { avgCurrentScore date failed passed total } } severitiesAgg { severities { data { count date } last { count date } name progression } } }}';

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
          avgCurrentScore: true,
          failed: true,
          passed: true,
          total: true,
        },
        last: {
          date: true,
          avgCurrentScore: true,
          failed: true,
          passed: true,
          total: true,
        },
        name: true,
        progression: true,
        reference: true,
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
      avgCurrentScore: true,
      period: {
        from: true,
        to: true,
      },
      scores: {
        avgCurrentScore: true,
        date: true,
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
        avgCurrentScore: true,
        date: true,
        failed: true,
        passed: true,
        total: true,
      },
      scores: {
        avgCurrentScore: true,
        date: true,
        failed: true,
        passed: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
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
  '{getCustomerData (searchBody: {marketplace: [["FR"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}]}) { accountsAgg { accounts { data { date avgCurrentScore failed passed total } last { date avgCurrentScore failed passed total } name progression reference } } checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } monthlyTrendAgg { avgCurrentScore period { from to } scores { avgCurrentScore date } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { avgCurrentScore date failed passed total } scores { avgCurrentScore date failed passed total } } severitiesAgg { severities { data { count date } last { count date } name progression } } standards { checks { data { date flagged isFailed processed score } description last { date flagged isFailed processed score } name progression reference severity } name reference } subscriptionReferences }}';

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
      avgCurrentScore: true,
      period: {
        from: true,
        to: true,
      },
      scores: {
        avgCurrentScore: true,
        date: true,
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
        avgCurrentScore: true,
        date: true,
        failed: true,
        passed: true,
        total: true,
      },
      scores: {
        avgCurrentScore: true,
        date: true,
        failed: true,
        passed: true,
        total: true,
      },
    },
    severitiesAgg: {
      severities: {
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
      },
    },
    standardsAgg: {
      standards: {
        data: {
          date: true,
          score: true,
          failed: true,
          passed: true,
          total: true,
        },
        last: {
          date: true,
          score: true,
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
  },
};

export const GET_CUSTOMER_ACCOUNT_DATA_GQL =
  '{getCustomerAccountData (searchBody: {marketplace: [["FR"], ["UK"]], filters: [{names: ["registration.customer.reference"], values: [["XSP0"]]}, {names: ["account.reference"], values: [["arrowsphere-1"]]}]}) { checksAgg { checks { data { count date } last { count date } name progression reference vendorCode } } monthlyTrendAgg { avgCurrentScore period { from to } scores { avgCurrentScore date } } pagination { currentPage perPage previous next total totalPage } period { from to } results { account { failed name passed reference score standards { currentScore checks { description flagged group isFailed name processed reference score severity } failed maxScore passed reference score total } total } registration { accountReference customer { name reference } marketplace reseller { name reference } subscription { reference } vendorCode } } scoresAgg { last { avgCurrentScore date failed passed total } scores { avgCurrentScore date failed passed total } } severitiesAgg { severities { data { count date } last { count date } name progression } } standardsAgg { standards { data { date score failed passed total } last { date score failed passed total } name progression reference } } standards { checks { data { date flagged isFailed processed score } description last { date flagged isFailed processed score } name progression reference severity } name reference } }}';
