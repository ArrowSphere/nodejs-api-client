// Test tools
import Joi from 'joi';
import { URL } from 'url';
import { expect } from 'chai';
import nock from 'nock';

// Sources
import { PublicApiClient } from '../../src';
import {
  SubscriptionData,
  SubscriptionFields,
} from '../../src/subscriptions/entities/subscription';
import {
  AdminSubscriptionsListData,
  PartnerSubscriptionsListData,
  SubscriptionsListPayload,
} from '../../src/subscriptions/subscriptionsClient';
import { SubscriptionsListResult } from '../../src/subscriptions/entities/subscriptionsListResult';
import querystring from 'querystring';

export const SUBSCRIPTIONS_MOCK_URL = 'http://subscriptions.localhost';
export const SUBSCRIPTIONS_PARTNER_LIST_ENDPOINT = /^\/subscriptions/;
export const SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT = /^\/admin\/subscriptions/;

/**
 * Mock subscription data to be used in tests and returned by mocks
 */
export const MOCK_SUBSCRIPTION_DATA: SubscriptionData = {
  [SubscriptionFields.COLUMN_SUBSCRIPTION_ID]: 420,
  [SubscriptionFields.COLUMN_PARTNER_TAG_LABELS]: 'partnerTagLabels',
  [SubscriptionFields.COLUMN_WORKGROUP_CODE]: 'workgroupCode',
  [SubscriptionFields.COLUMN_COMPANY_NAME]: 'companyName',
  [SubscriptionFields.COLUMN_SUBSCRIPTION]: 'subscription', // Program legacy name
  [SubscriptionFields.COLUMN_START_DATE]: 'startDate',
  [SubscriptionFields.COLUMN_END_DATE]: 'endDate',
  [SubscriptionFields.COLUMN_LAST_UPDATE]: 'lastUpdate',
  [SubscriptionFields.COLUMN_STATUS]: 'status',
  [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEVALIDATION]:
    'subscriptionDateValidation',
  [SubscriptionFields.COLUMN_SUBSCRIPTION_DATEDEMAND]:
    'subscriptionDateDedemand',
  [SubscriptionFields.COLUMN_CLICK_TO_ACCEPT]: true,
  [SubscriptionFields.COLUMN_UNVALIDATED]: false,
  [SubscriptionFields.COLUMN_VERSION]: 1,
  [SubscriptionFields.COLUMN_NUMBER]: 2,
};

/**
 * Mocks a potential admin list call response data
 */
export const MOCK_ADMIN_LIST_RESPONSE: AdminSubscriptionsListData = {
  pagination: {
    currentPage: 1,
    total: 2,
    totalPage: 2,
    perPage: 25,
    next: '/admin/subscriptions?perPage=25&page=2',
    previous: '/admin/subscriptions?perPage=25&page=1',
  },
  data: [MOCK_SUBSCRIPTION_DATA],
};

export const MOCK_PARTNER_LIST_RESPONSE: PartnerSubscriptionsListData = {
  status: 200,
  data: [
    {
      reference: 'XSPS162859',
      name: 'BD-CSG-CSP',
      status: "Pending user's acceptance of CTA",
      dateDemand: '2025-05-12T08:19:49.000Z',
      dateValidation: null,
      dateEnd: null,
      level: null,
      error_msg: null,
      details: {
        partnerId: '52623088',
      },
      extraInformation: {
        programs: {
          'BD-CSG-CSP': {
            partnerId: '52623088',
          },
        },
      },
    },
  ],
};

/**
 * Joi representation of the payload schema to be sent to the list payload
 * This allows us to insure the payload integrity throughout the updates.
 */
const PAYLOAD_SCHEMA = Joi.object({
  company: Joi.alternatives(Joi.string(), Joi.array().items(Joi.string())),
  endingDate: Joi.string(),
  lastUpdate: Joi.string(),
  marketplace: Joi.alternatives(Joi.string(), Joi.array().items(Joi.string())),
  page: Joi.string(),
  partnerTag: Joi.alternatives(Joi.string(), Joi.array().items(Joi.string())),
  perPage: Joi.string(),
  startDate: Joi.string(),
  status: Joi.alternatives(Joi.string(), Joi.array().items(Joi.string())),
  subscription: Joi.alternatives(Joi.string(), Joi.array().items(Joi.string())),
});

// Standard payload as per described by types
export const SUBSCRIPTIONS_LIST_PAYLOAD: SubscriptionsListPayload = {
  company: ['My Company', 'My Other Company'],
  endingDate: '2021-03-01',
  lastUpdate: '2021-02-12',
  marketplace: ['FR', 'DE'],
  page: '1',
  partnerTag: ['SDK - Tier 2'],
  perPage: '25',
  startDate: '2021-01-01',
  status: ['Active', 'Disabled'],
  subscription: ['9852', '9853'],
};

describe('SubscriptionsClient', () => {
  const client = new PublicApiClient()
    .getSubscriptionsClient()
    .setUrl(SUBSCRIPTIONS_MOCK_URL);

  describe('listRaw', () => {
    it('fetch subscriptions from admin endpoint', (done) => {
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT)
        .reply((uri) => {
          try {
            const query = querystring.decode(
              new URL(uri, SUBSCRIPTIONS_MOCK_URL).search.replace('?', ''),
            );
            expect(() => Joi.assert(query, PAYLOAD_SCHEMA)).not.to.throw();
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.listRaw(SUBSCRIPTIONS_LIST_PAYLOAD);
    });

    it('calls the get method and returns its result', async () => {
      const expectedData = { expected: true };
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT)
        .reply(200, expectedData);

      const result = await client.listRaw();
      expect(result).to.eqls(expectedData);
    });
  });

  describe('list', () => {
    it('should fetch data and return it', async () => {
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_PARTNER_LIST_ENDPOINT)
        .reply(
          200,
          (): PartnerSubscriptionsListData => MOCK_PARTNER_LIST_RESPONSE,
        );
      const result = await client.list();
      expect(result).to.deep.equal(MOCK_PARTNER_LIST_RESPONSE);
    });
  });

  describe('listAdmin', () => {
    it('sets the specified page number', (done) => {
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, SUBSCRIPTIONS_MOCK_URL);
          try {
            expect(urlParams.searchParams.get('page')).to.equal('10');
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.listAdmin(undefined, undefined, 10);
    });

    it('sets the specified per page number', (done) => {
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, SUBSCRIPTIONS_MOCK_URL);
          try {
            expect(urlParams.searchParams.get('perPage')).to.equal('10');
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.listAdmin(undefined, 10);
    });

    it('sets the default per page number if required', (done) => {
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT)
        .reply((uri) => {
          const urlParams = new URL(uri, SUBSCRIPTIONS_MOCK_URL);
          try {
            expect(urlParams.searchParams.get('perPage')).to.exist;
          } catch (error) {
            done(error);
            return [500];
          }
          done();
          return [204];
        });
      client.listAdmin();
    });

    it('calls listRaw and feeds the response returns the SubscriptionsListResult entity', async () => {
      nock(SUBSCRIPTIONS_MOCK_URL)
        .get(SUBSCRIPTIONS_ADMIN_LIST_ENDPOINT)
        .reply(200, (): AdminSubscriptionsListData => MOCK_ADMIN_LIST_RESPONSE);
      const result = await client.listAdmin();
      expect(result).to.be.instanceOf(SubscriptionsListResult);
    });
  });
});
