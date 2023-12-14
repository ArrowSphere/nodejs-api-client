import sinon from 'sinon';
import { LicenseRequestClient, LicenseRequestType } from '../../src/licenses';
import { PublicApiClient } from '../../src';
import { Axios } from 'axios';
import { expect } from 'chai';

describe('LicenseRequestClient', () => {
  const licenseRequestClient: LicenseRequestClient = new PublicApiClient()
    .getLicenseRequestClient()
    .setUrl('http://localhost');
  let axiosClient: sinon.SinonStubbedInstance<Axios>;

  beforeEach(() => {
    axiosClient = sinon.stub(Axios.prototype);
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('getLastRequests', () => {
    it('makes a graphql POST request on the specified URL /licenses/XSP123/request', async () => {
      const expectedResult = {
        status: 200,
        data: [
          {
            licenseReference: 'XSP4806212',
            action: 'conversionToExistingOrigin',
            message:
              'Microsoft subscription cannot be converted to product CFQ7TTC0LDPB:0001',
            status: 'External Warning',
            userName: 'michel',
            createdAt: '2023-12-13 16:14:51',
            updatedAt: '2023-12-13 16:17:16',
          },
        ],
      };

      axiosClient.request.resolves({
        status: expectedResult.status,
        data: {
          ...expectedResult,
        },
      });

      const response: LicenseRequestType[] = await licenseRequestClient.getLastRequests(
        'XSP123',
      );

      expect(response).to.deep.equal(expectedResult.data);
      axiosClient.request.calledOnceWithExactly(sinon.match('XSP123'));
    });
  });
});
