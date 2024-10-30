import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import { PAYLOAD_USER } from './mocks/getinfo.mocks';

export const USER_MOCK_URL = 'https://user.localhost/index.php/api';
export const GET_INFO_MOCK_URL = '/partners/users/rights';

describe('UserClient', () => {
  const client = new PublicApiClient().getUserClient().setUrl(USER_MOCK_URL);

  describe('getInfos', () => {
    it('calls the post method with the partial payload', async () => {
      nock(USER_MOCK_URL).get(GET_INFO_MOCK_URL).reply(200, PAYLOAD_USER);

      const response = await client.getInfos();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(PAYLOAD_USER);
    });
  });
});
