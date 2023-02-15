import nock from 'nock';

import {
  GetResult,
  GetResultFields,
  Parameters,
  PublicApiClient,
  DataInvitationFields,
} from '../../src/';
import { expect } from 'chai';
import { PAYLOAD_ORDERS } from '../orders/mocks/orders.mocks';
import {
  PAYLOAD_GET_CUSTOMER_CONTACT,
  PAYLOAD_GET_CUSTOMER_CONTACT_LIST,
  PAYLOAD_GET_CUSTOMER_INVITATION,
  PAYLOAD_GET_CUSTOMERS,
  PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS,
  PAYLOAD_POST_CUSTOMER_CONTACT,
} from './mocks/customers.mocks';

export const CUSTOMERS_MOCK_URL = 'https://customers.localhost';
export const CUSTOMERS_GET_CUSTOMERS_URL = new RegExp('/customers.*');
export const CUSTOMERS_GET_CUSTOMERS_ORDERS_URL = new RegExp(
  '/customers/REF/orders.*',
);
export const CUSTOMERS_GET_CUSTOMER_INVITATION_URL = new RegExp(
  '/customers/invitations.*',
);

export const CUSTOMERS_GET_CUSTOMER_CONTACT_URL = new RegExp(
  '/customers/REF/contacts.*',
);

describe('CustomersClients', () => {
  describe('getCustomers', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call get method without parameters', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS);

      const result = await client.getCustomers();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMERS);
    });

    it('call get method with parameters', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS);

      const parameters: Parameters = {
        email: 'test.test@test.test',
      };
      const result = await client.getCustomers(parameters);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMERS);
    });

    it('call get method without parameters and without optional fields', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS);

      const result = await client.getCustomers();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(
        PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS,
      );
    });

    it('call get method with parameters and without optional fields', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS);

      const parameters: Parameters = {
        email: 'test.test@test.test',
      };
      const result = await client.getCustomers(parameters);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(
        PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS,
      );
    });
  });

  describe('getCustomerOrders', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call get customer orders method with parameters', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_ORDERS_URL)
        .reply(200, PAYLOAD_ORDERS);

      const parameters: Parameters = {
        from: '2021-10-29',
        order_by: 'ASC',
        sort_by: 'status',
      };
      const page = 2;
      const per_page = 5;
      const customerRef = 'REF';
      const result = await client.getCustomerOrders(
        customerRef,
        per_page,
        page,
        parameters,
      );

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS);
    });

    it('Should get customer list orders without parameters', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_ORDERS_URL)
        .reply(200, PAYLOAD_ORDERS);

      const customerRef = 'REF';

      const result = await client.getCustomerOrders(customerRef);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS);
    });
  });

  describe('getCustomerInvitation', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call get customer invitation method with invitation code', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMER_INVITATION_URL)
        .reply(200, PAYLOAD_GET_CUSTOMER_INVITATION);

      const result = await client.getCustomerInvitation(
        PAYLOAD_GET_CUSTOMER_INVITATION[GetResultFields.COLUMN_DATA][
          DataInvitationFields.COLUMN_CODE
        ],
      );

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMER_INVITATION);
    });
  });

  describe('getCustomerContactList', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call get customer contact list', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMER_CONTACT_URL)
        .reply(200, PAYLOAD_GET_CUSTOMER_CONTACT_LIST);

      const result = await client.getCustomerContactList('REF');

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMER_CONTACT_LIST);
    });
  });

  describe('postCustomerContact', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call post to create new customer contact', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .post(CUSTOMERS_GET_CUSTOMER_CONTACT_URL)
        .reply(200, PAYLOAD_POST_CUSTOMER_CONTACT);

      const result = await client.postCustomerContact(
        'REF',
        PAYLOAD_POST_CUSTOMER_CONTACT[GetResultFields.COLUMN_DATA],
      );

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_POST_CUSTOMER_CONTACT);
    });
  });

  describe('getCustomerContact', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call get customer contact details', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMER_CONTACT_URL)
        .reply(200, PAYLOAD_GET_CUSTOMER_CONTACT);

      const result = await client.getCustomerContact('REF', 'REF');

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMER_CONTACT);
    });
  });

  describe('patchCustomerContact', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call patch to update customer contact', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .patch(CUSTOMERS_GET_CUSTOMER_CONTACT_URL)
        .reply(200, PAYLOAD_POST_CUSTOMER_CONTACT);

      const result = await client.patchCustomerContact(
        'REF',
        'REF',
        PAYLOAD_POST_CUSTOMER_CONTACT[GetResultFields.COLUMN_DATA],
      );

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_POST_CUSTOMER_CONTACT);
    });
  });

  describe('deleteCustomerContact', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call patch to update customer contact', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .delete(CUSTOMERS_GET_CUSTOMER_CONTACT_URL)
        .reply(200);

      await client.deleteCustomerContact('REF', 'REF');
    });
  });
});
