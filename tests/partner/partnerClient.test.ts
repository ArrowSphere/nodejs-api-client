import { DataPartner, GetResult, PublicApiClient } from '../../src';
import { expect } from 'chai';
import { Axios, AxiosResponse } from 'axios';
import { constants } from 'http2';
import sinon from 'sinon';
import nock from 'nock';
import {
  PARTNER_CREATE_RESPONSE,
  PARTNER_CREATE_REQUEST,
} from './mocks/create.mocks';

export const PARTNERS_MOCK_URL = 'https://partners.localhost';
export const PARTNER = '/partners/v1/register';

describe('PartnerClient', () => {
  describe('deletePartner', () => {
    const client = new PublicApiClient()
      .getPartnerClient()
      .setUrl(PARTNERS_MOCK_URL);

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
