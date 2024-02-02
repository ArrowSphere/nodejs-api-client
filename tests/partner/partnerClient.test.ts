import { PublicApiClient } from '../../src';
import { expect } from 'chai';
import { Axios, AxiosHeaders, AxiosResponse } from 'axios';
import sinon from 'sinon';

export const CUSTOMERS_MOCK_URL = 'https://customers.localhost';

describe('PartnerClient', () => {
  describe('deletePartner', () => {
    const client = new PublicApiClient()
      .getPartnerClient()
      .setUrl(CUSTOMERS_MOCK_URL);

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
        headers: new AxiosHeaders({}),
        config: {
          headers: new AxiosHeaders({}),
        },
      };

      axiosClient.request.resolves(expectedResult);

      const result = await client.deletePartner('XSP123');

      expect(result).to.be.deep.equals(expectedResult.data);
    });
  });
});
