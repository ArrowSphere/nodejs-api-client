import {
  DataPartner,
  GetResult,
  PublicApiClient,
  UpdateScopeUserPayload,
  UpdateScopeUserPayloadFields,
} from '../../src';
import { expect } from 'chai';
import { Axios, AxiosResponse } from 'axios';
import { constants } from 'http2';
import sinon from 'sinon';
import nock from 'nock';
import { GetUserImpersonationsResult } from '../../src/partner/types/getUserImpersonationsResult';
import {
  PARTNER_CREATE_RESPONSE,
  PARTNER_CREATE_REQUEST,
} from './mocks/create.mocks';

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
        config: {},
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
});
