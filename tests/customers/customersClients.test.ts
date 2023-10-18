import nock from 'nock';

import {
  GetResult,
  GetResultFields,
  Parameters,
  PublicApiClient,
  DataInvitationFields,
  PostCustomerPayload,
  APIResponseResourceCreated,
  APIResponseError,
  APIResponseCustomerUpdated,
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
  PAYLOAD_POST_CUSTOMER_INVITATION,
} from './mocks/customers.mocks';
import { Axios } from 'axios';
import sinon from 'sinon';

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

  describe('createCustomer', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    let axiosClient: sinon.SinonStubbedInstance<Axios>;

    const customerPayload: PostCustomerPayload = {
      CompanyName: 'Company test 1',
      AddressLine1: 'Address 1',
      City: 'Paris',
      CountryCode: 'FR',
      Zip: '75012',
      ReceptionPhone: '1234567890',
    };

    beforeEach(() => {
      axiosClient = sinon.stub(Axios.prototype);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('call create customer should succeed', async () => {
      const publicAPIResult = {
        status: 201,
        data: {
          data: {
            reference: 'XSP123',
          },
          status: 201,
        },
      };

      const expectedResult: APIResponseResourceCreated = publicAPIResult.data;

      axiosClient.request.resolves(publicAPIResult);

      const result = await client.createCustomer(customerPayload, {}, true);

      expect(result).to.be.deep.equals(expectedResult);
    });

    it('call create customer should fail', async () => {
      customerPayload.CompanyName = '';

      const expectedResult: APIResponseError = {
        status: 400,
        error: 'Bad value for CompanyName',
      };

      axiosClient.request.resolves({
        status: 400,
        data: {
          error: 'Bad value for CompanyName',
          status: 400,
        },
      });

      const result = await client.createCustomer(customerPayload, {}, true);

      expect(result).to.be.deep.equals(expectedResult);
    });
  });

  describe('updateCustomer', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    let axiosClient: sinon.SinonStubbedInstance<Axios>;

    const customerPayload: Partial<PostCustomerPayload> = {
      CompanyName: 'Company test 1',
      AddressLine1: 'Address 1',
      AddressLine2: 'Address 2',
    };

    beforeEach(() => {
      axiosClient = sinon.stub(Axios.prototype);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('call update customer should succeed', async () => {
      const publicAPIResult = {
        status: 200,
        data: {
          data: {
            customers: [
              {
                Reference: 'XSP123',
                CompanyName: 'Company Test 1',
                PartnerCompanyId: '',
                AddressLine1: 'Address 1',
                AddressLine2: 'Address 2',
                Zip: '75012',
                City: 'Paris',
                CountryCode: 'FR',
                State: '',
                ReceptionPhone: '1234567890',
                WebsiteUrl: 'www.mycompany.com',
                EmailContact: 'contact@mycompany.com',
                Headcount: 0,
                TaxNumber: '',
                Ref: '',
                BillingId: '',
                InternalReference: '',
                Contact: {
                  FirstName: 'Me',
                  LastName: 'Name',
                  Email: 'contact@mycompany.com',
                  Phone: '1234567890',
                  ContactPersonID: '',
                  SyncPartnerContactRefId: 2455703,
                },
                Details: {},
              },
            ],
          },
          status: 200,
        },
      };

      const expectedResult: APIResponseCustomerUpdated = publicAPIResult.data;

      axiosClient.request.resolves(publicAPIResult);

      const result = await client.updateCustomer(
        'XSP123',
        customerPayload,
        {},
        true,
      );

      expect(result).to.be.deep.equals(expectedResult);
    });

    it('call update customer should fail', async () => {
      customerPayload.CompanyName = '';

      const expectedResult: APIResponseError = {
        status: 400,
        error: 'Bad value for CompanyName',
      };

      axiosClient.request.resolves({
        status: 400,
        data: {
          error: 'Bad value for CompanyName',
          status: 400,
        },
      });

      const result = await client.updateCustomer(
        'XSP123',
        customerPayload,
        {},
        true,
      );

      expect(result).to.be.deep.equals(expectedResult);
    });
  });

  describe('postCustomerInvitation', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call post customer invitation method to create an invitation', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .post(CUSTOMERS_GET_CUSTOMER_INVITATION_URL)
        .reply(200, PAYLOAD_GET_CUSTOMER_INVITATION);

      const result = await client.postCustomerInvitation(
        PAYLOAD_POST_CUSTOMER_INVITATION,
      );

      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMER_INVITATION);
    });
  });
});
