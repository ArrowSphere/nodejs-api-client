import {
  DataPartner,
  GetResult,
  PublicApiClient,
  UpdateScopeUserPayload,
  UpdateScopeUserPayloadFields,
} from '../../src';
import { expect } from 'chai';
import { Axios, AxiosHeaders, AxiosResponse } from 'axios';
import { constants } from 'http2';
import sinon from 'sinon';
import nock from 'nock';
import { GetUserImpersonationsResult } from '../../src/partner/types/getUserImpersonationsResult';
import {
  PARTNER_CREATE_RESPONSE,
  PARTNER_CREATE_REQUEST,
} from './mocks/create.mocks';

import { CreateUserApiKeyResult } from '../../src/partner/types/createUserApiKeyResult';
import { CreateUserApiKeyPayload } from '../../src/partner/types/userApiKey';
import { GetUserApiKeysResult } from '../../src/partner/types/getUserApiKeysResult';
import { CustomFieldListResponse } from '../../src/partner/entities/CustomField/CustomFieldListResponse';
import { CustomFieldResponse } from '../../src/partner/entities/CustomField/CustomFieldResponse';
const PARTNERS_MOCK_URL = 'https://partners.localhost';
const PARTNER_REFERENCE = 'XSP123456';
const USER_REFERENCE = 'XSP999';
const BASE_PATH = `/partners/${PARTNER_REFERENCE}/users/${USER_REFERENCE}`;
const PARTNER = '/partners/v1/register';

describe('PartnerClient', () => {
  const client = new PublicApiClient()
    .getPartnerClient()
    .setUrl(PARTNERS_MOCK_URL);

  describe('deletePartner', () => {
    let axiosClient: sinon.SinonStubbedInstance<Axios>;

    beforeEach(() => {
      axiosClient = sinon.stub(Axios.prototype);
    });

    afterEach(() => {
      sinon.restore();
    });

    it('should succesfully delete a partner', async () => {
      const expectedResult: AxiosResponse = {
        status: 201,
        data: {
          status: 201,
        },
        statusText: 'success',
        headers: {},
        config: {
          headers: new AxiosHeaders(),
        },
      };

      axiosClient.request.resolves(expectedResult);

      const result = await client.deletePartner('XSP123');

      expect(result).to.be.deep.equals(expectedResult.data);
    });
  });

  describe('patchUser', () => {
    it('calls the patchUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.patchUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('lockUser', () => {
    it('calls the lockUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.lockUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('unlockUser', () => {
    it('calls the unlockUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.unlockUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('allowDirectLoginUser', () => {
    it('calls the allowDirectLoginUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.allowDirectLoginUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('blockDirectLoginUser', () => {
    it('calls the blockDirectLoginUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.blockDirectLoginUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('disableMfaUser', () => {
    it('calls the disableMfaUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.disableMfaUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('disableAliasUser', () => {
    it('calls the disableAliasUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.disableAliasUser(
        PARTNER_REFERENCE,
        USER_REFERENCE,
        'microsoftopenid_123xqdsrrezvsd',
      );
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('validateUser', () => {
    it('calls the validateUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.validateUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('unlockInsecureLoginUser', () => {
    it('calls the unlockInsecureLoginUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.unlockInsecureLoginUser(
        PARTNER_REFERENCE,
        USER_REFERENCE,
        {},
      );
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('disableMfaUser', () => {
    it('calls the disableMfaUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(BASE_PATH).reply(204);

      await client.disableMfaUser(PARTNER_REFERENCE, USER_REFERENCE, {});
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('updateScopeUser', () => {
    it('calls the updateScopeUser method', async () => {
      nock(PARTNERS_MOCK_URL).patch(`${BASE_PATH}/scope`).reply(204);

      const payload: UpdateScopeUserPayload = {
        [UpdateScopeUserPayloadFields.COLUMN_ENTITIES]: ['UK', 'IE'],
        [UpdateScopeUserPayloadFields.COLUMN_IMPERSONATIONS]: [
          'user1@the-company.com',
        ],
        [UpdateScopeUserPayloadFields.COLUMN_ORGANIZATIONUNIT]: 'XSPOU123456',
        [UpdateScopeUserPayloadFields.COLUMN_PROGRAMS]: ['MSCSP'],
        [UpdateScopeUserPayloadFields.COLUMN_ROLE]: 'ext_msp',
        [UpdateScopeUserPayloadFields.COLUMN_TAGS]: ['TIER1'],
      };

      await client.updateScopeUser(PARTNER_REFERENCE, USER_REFERENCE, payload);
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getUserImpersonations', () => {
    const PAYLOAD_GET_USER_IMPERSONATIONS = {
      impersonations: [
        {
          username: 'user1',
          firstname: 'John',
          lastname: 'Doe',
          company: 'The Company',
        },
      ],
    };

    it('should call getUserImpersonations method', async () => {
      nock(PARTNERS_MOCK_URL)
        .get(`${BASE_PATH}/impersonations`)
        .reply(constants.HTTP_STATUS_OK, {
          status: 200,
          data: PAYLOAD_GET_USER_IMPERSONATIONS,
        });

      const response: GetResult<GetUserImpersonationsResult> = await client.getUserImpersonations(
        PARTNER_REFERENCE,
        USER_REFERENCE,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        PAYLOAD_GET_USER_IMPERSONATIONS,
      );
    });
  });

  describe('postPartner', () => {
    const client = new PublicApiClient()
      .getPartnerClient()
      .setUrl(PARTNERS_MOCK_URL);

    it('should call the post method', async () => {
      nock(PARTNERS_MOCK_URL)
        .post(PARTNER)
        .reply(constants.HTTP_STATUS_OK, PARTNER_CREATE_RESPONSE);

      const response: GetResult<DataPartner> = await client.postPartner(
        PARTNER_CREATE_REQUEST,
      );

      console.log('response', response);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(PARTNER_CREATE_RESPONSE);
    });
  });

  describe('create API_KEYS', () => {
    const CREATE_API_KEY_RESPONSE = {
      status: 200,
      data: {
        contactName: 'User Lastname2754949',
        expiration_date: '2026-12-31',
        isActive: '1',
        key: 'sdRIwGgyVFwvEbgZhWEQeBphtoDgfVuy',
        lastCharacters: 'fVuy',
        name: '80ndjmrj',
        reference: 'XSPAK123',
        since: '2026-08-31',
        usedAt: null,
        userLogin: 'msp_1415100145',
      },
    };

    it('should call adminCreateUserApiKey method', async () => {
      nock(PARTNERS_MOCK_URL)
        .post(`${BASE_PATH}/apikeys`)
        .reply(constants.HTTP_STATUS_OK, CREATE_API_KEY_RESPONSE);

      const payload: CreateUserApiKeyPayload = {
        name: '80ndjmrj',
        expiration_date: '2026-08-31',
      };

      const response: GetResult<CreateUserApiKeyResult> = await client.adminCreateUserApiKey(
        PARTNER_REFERENCE,
        USER_REFERENCE,
        payload,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        CREATE_API_KEY_RESPONSE.data,
      );
    });

    it('should call createUserApiKey method', async () => {
      nock(PARTNERS_MOCK_URL)
        .post(`/partners/users/apikeys`)
        .reply(constants.HTTP_STATUS_OK, CREATE_API_KEY_RESPONSE);

      const payload: CreateUserApiKeyPayload = {
        name: '80ndjmrj',
        expiration_date: '2026-08-31',
      };

      const response: GetResult<CreateUserApiKeyResult> = await client.createUserApiKey(
        payload,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        CREATE_API_KEY_RESPONSE.data,
      );
    });
  });

  describe('delete API_KEYS', () => {
    const APIKEY_REFERENCE = '109955';

    it('should call deleteUserApiKey method', async () => {
      nock(PARTNERS_MOCK_URL)
        .delete(`/partners/users/apikeys/${APIKEY_REFERENCE}`)
        .reply(204);

      await client.deleteUserApiKey(APIKEY_REFERENCE);
      expect(nock.isDone()).to.be.true;
    });

    it('should call adminDeleteUserApiKey method', async () => {
      nock(PARTNERS_MOCK_URL)
        .delete(`${BASE_PATH}/apikeys/${APIKEY_REFERENCE}`)
        .reply(204);

      await client.adminDeleteUserApiKey(
        PARTNER_REFERENCE,
        USER_REFERENCE,
        APIKEY_REFERENCE,
      );
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getUserApiKeys', () => {
    const GET_API_KEYS_RESPONSE = {
      status: 200,
      data: [
        {
          contactName: 'AX API',
          expiration_date: '2026-12-31',
          isActive: '1',
          lastCharacters: 'nTYu',
          name: 'xBE',
          reference: 'XSP2ZEAK123',
          since: '2026-01-01',
          usedAt: null,
          userLogin: 'vds',
        },
        {
          contactName: 'US API',
          expiration_date: '2026-06-31',
          isActive: '0',
          lastCharacters: 'JJGG',
          name: 'US API DEV',
          reference: 'XSPAK452ZEAK6',
          since: '2024-02-01',
          usedAt: '2024-03-01',
          userLogin: 'us.api',
        },
      ],
    };

    it('should call getUserApiKeys method without parameters (exp admin)', async () => {
      nock(PARTNERS_MOCK_URL)
        .get('/partners/apikeys')
        .reply(constants.HTTP_STATUS_OK, GET_API_KEYS_RESPONSE);

      const response: GetResult<GetUserApiKeysResult> = await client.getUserApiKeys();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        GET_API_KEYS_RESPONSE.data,
      );
    });

    it('should call getUserApiKeys method with all filters', async () => {
      nock(PARTNERS_MOCK_URL)
        .get('/partners/apikeys')
        .query({
          partnerReference: PARTNER_REFERENCE,
          userReference: USER_REFERENCE,
          userLogin: 'keswi@eg.dk',
          name: 'APISDK',
          isActive: '1',
        })
        .reply(constants.HTTP_STATUS_OK, GET_API_KEYS_RESPONSE);

      const response: GetResult<GetUserApiKeysResult> = await client.getUserApiKeys(
        {
          partnerReference: PARTNER_REFERENCE,
          userReference: USER_REFERENCE,
          userLogin: 'keswi@eg.dk',
          name: 'APISDK',
          isActive: '1',
        },
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        GET_API_KEYS_RESPONSE.data,
      );
    });

    it('should call getUserApiKeys method with filters and pagination', async () => {
      nock(PARTNERS_MOCK_URL)
        .get('/partners/apikeys')
        .query({
          partnerReference: PARTNER_REFERENCE,
          isActive: '1',
          page: '2',
          per_page: '50',
        })
        .reply(constants.HTTP_STATUS_OK, GET_API_KEYS_RESPONSE);

      const response: GetResult<GetUserApiKeysResult> = await client.getUserApiKeys(
        {
          partnerReference: PARTNER_REFERENCE,
          isActive: '1',
        },
        {
          page: 2,
          per_page: 50,
        },
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(
        GET_API_KEYS_RESPONSE.data,
      );
    });
  });
  describe('customField', () => {
    const CUSTOM_FIELD_MOCK = {
      id: 1,
      label: 'test',
      isActive: true,
      entity: 'company',
      isUsed: false,
      createdAt: '2023-01-01T00:00:00.000Z',
      createdBy: 'test',
    };

    it('should call getCustomFieldList method ', async () => {
      nock(PARTNERS_MOCK_URL)
        .get('/partners/customField')
        .query({
          isActive: true,
          page: '2',
          per_page: '50',
        })
        .reply(constants.HTTP_STATUS_OK, {
          status: 200,
          data: [CUSTOM_FIELD_MOCK],
        });

      const response: GetResult<CustomFieldListResponse> = await client.getCustomFieldList(
        {
          isActive: true,
          page: 2,
          per_page: 50,
        },
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data[0]).to.be.deep.equals(CUSTOM_FIELD_MOCK);
    });

    it('should call postCustomField method ', async () => {
      nock(PARTNERS_MOCK_URL)
        .post('/partners/customField')
        .reply(constants.HTTP_STATUS_CREATED, {
          status: 201,
          data: CUSTOM_FIELD_MOCK,
        });

      const response: GetResult<CustomFieldResponse> = await client.postCustomField(
        {
          label: 'test',
          isActive: true,
          entity: 'company',
        },
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(CUSTOM_FIELD_MOCK);
    });

    it('should call patchCustomField method ', async () => {
      nock(PARTNERS_MOCK_URL)
        .patch('/partners/customField/1')
        .reply(constants.HTTP_STATUS_CREATED, {
          status: 200,
          data: CUSTOM_FIELD_MOCK,
        });

      const response: GetResult<CustomFieldResponse> = await client.patchCustomField(
        1,
        true,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON().data).to.be.deep.equals(CUSTOM_FIELD_MOCK);
    });

    it('should call deleteCustomField method ', async () => {
      nock(PARTNERS_MOCK_URL).delete('/partners/customField/1').reply(204);

      await client.deleteCustomField(1);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('generate GDAP links', () => {
    it('should call the post generateGdapLinksFromCustomerListFile', async () => {
      nock(PARTNERS_MOCK_URL).post('/partners/generateGdap').reply(204);

      await client.generateGdapLinksFromCustomerListFile({
        fileEncoded: 'file.csv',
      });

      expect(nock.isDone()).to.be.true;
    });
  });
});
