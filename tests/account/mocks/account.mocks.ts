import { GetAccountQuery, GetAccountType } from '../../../src';

export const ACCOUNT_QUERY: GetAccountQuery = {
  __args: {
    paginate: {
      page: 1,
      perPage: 15,
    },
    searchBody: {
      keywords: 'keywords',
      keywordsByField: [
        { name: 'name', values: ['value'], operator: 'string', type: 'type' },
      ],
      filters: [
        {
          name: 'name',
          value: 'value',
        },
      ],
      exclusionFilters: [
        {
          name: 'name',
          value: 'value',
        },
      ],
      sort: [
        {
          name: 'name',
          order: 'value',
        },
      ],
      highlight: true,
      aggregatorFilter: ['aggregate'],
      scopes: 'scopes',
      rights: ['rights'],
    },
  },
  users: {
    updatedBy: true,
    updatedAt: true,
    version: true,
    isEnabled: true,
    cognitoUsername: true,
    authMethods: true,
    canSecureAccountUntil: true,
    extraData: {
      name: true,
      value: true,
    },
    applications: {
      updatedBy: true,
      updatedAt: true,
      version: true,
      isEnabled: true,
      extraData: {
        name: true,
        value: true,
      },
      applicationName: true,
      rights: true,
      scopes: true,
      policies: {
        policyName: true,
        description: true,
        updatedBy: true,
        updatedAt: true,
        version: true,
        isEnabled: true,
        scopes: true,
        rights: true,
      },
    },
    aliases: {
      username: true,
      providerName: true,
      email: true,
    },
  },
  pagination: {
    perPage: true,
    currentPage: true,
    totalPage: true,
    total: true,
    next: true,
    previous: true,
  },
  filters: {
    name: true,
    value: {
      value: true,
      count: true,
    },
  },
};

export const ACCOUNT_RESULT_ONE_USER: GetAccountType = {
  getUsers: {
    users: [
      {
        updatedAt: '1990-09-30',
        updatedBy: 'Admin',
        version: 2,
        isEnabled: true,
        cognitoUsername: 'XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
        authMethods: ['Microsoft'],
        canSecureAccountUntil: 'yes/no',
        extraData: [
          {
            name: 'firstName',
            value: 'John',
          },
          {
            name: 'lastName',
            value: 'Doe',
          },
        ],
        applications: [
          {
            updatedAt: '1990-09-30',
            updatedBy: 'Admin',
            version: 2,
            isEnabled: true,
            applicationName: 'application',
            extraData: [
              {
                name: 'reference',
                value: '123456789',
              },
            ],
            rights: ['You Have The Right'],
            scopes: ['Scope is HERE'],
            policies: [{ policyName: 'Your POLICIES' }],
          },
        ],
        aliases: [
          {
            username: 'username',
            providerName: 'provider',
            email: 'email',
          },
        ],
      },
    ],
  },
};
