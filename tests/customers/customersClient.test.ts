// Test tools
import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import nock from 'nock';

// Sources
import { PublicApiClient } from '../../src';
import {
  CompanyFields,
  ContactFields,
  Invitation,
  InvitationData,
  InvitationFields,
} from '../../src/customers';

chai.use(sinonChai);

export const CUSTOMERS_MOCK_URL = 'https://customers.localhost';
export const INVITATIONS_ENDPOINT = '/customers/invitations/ABCD12345';

/**
 * Mock customer data to be used in tests and returned by mocks
 */
export const MOCK_INVITATION_GET_DATA: InvitationData = {
  [InvitationFields.COLUMN_KEYCODE]: 'ABCD12345',
  [InvitationFields.COLUMN_CREATED_AT]: '2021-12-25 23:45:12',
  [InvitationFields.COLUMN_UPDATED_AT]: '2022-01-01 12:23:34',
  [InvitationFields.COLUMN_CONTACT]: {
    [ContactFields.COLUMN_EMAIL]: 'nobody@example.com',
    [ContactFields.COLUMN_FIRST_NAME]: 'Bruce',
    [ContactFields.COLUMN_LAST_NAME]: 'Wayne',
  },
  [InvitationFields.COLUMN_COMPANY]: {
    [CompanyFields.COLUMN_REFERENCE]: 'ABC123',
  },
};

describe('CustomersClient', () => {
  describe('getInvitationRaw', () => {
    const expectedData = { myData: true };

    it('calls the get invitation method', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(INVITATIONS_ENDPOINT)
        .reply(200, expectedData);

      const publicClient = new PublicApiClient().setUrl(CUSTOMERS_MOCK_URL);
      const client = publicClient.getCustomersClient();
      await client.getInvitationRaw('ABCD12345');
      expect(nock.isDone());
    });

    it('returns the raw response', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(INVITATIONS_ENDPOINT)
        .reply(200, expectedData);

      const publicClient = new PublicApiClient().setUrl(CUSTOMERS_MOCK_URL);
      const client = publicClient.getCustomersClient();
      const result = await client.getInvitationRaw('ABCD12345');
      expect(result).to.eqls(expectedData);
    });
  });

  describe('getLicense', () => {
    const expectedData = MOCK_INVITATION_GET_DATA;

    it('calls getInvitationRaw', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(INVITATIONS_ENDPOINT)
        .reply(200, { data: expectedData });
      const publicApiClient = new PublicApiClient().setUrl(CUSTOMERS_MOCK_URL);
      const client = publicApiClient.getCustomersClient();
      const spy = sinon.spy(client, 'getInvitationRaw');
      await client.getInvitation('ABCD12345');
      expect(spy).to.have.been.called;
      spy.restore();
    });

    it('returns the entity', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(INVITATIONS_ENDPOINT)
        .reply(200, { data: expectedData });
      const publicApiClient = new PublicApiClient().setUrl(CUSTOMERS_MOCK_URL);
      const client = publicApiClient.getCustomersClient();
      const result = await client.getInvitation('ABCD12345');
      expect(result).to.eql(new Invitation(expectedData));
    });
  });
});
