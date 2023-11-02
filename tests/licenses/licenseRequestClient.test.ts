import sinon from 'sinon';
import { LicenseRequestClient } from '../../src/licenses';
import { PublicApiClient } from '../../src';
import { Axios } from 'axios';

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
        data: {
          data: [
            {
              licenseReference: 'XSP4289490',
              action: 'updateFriendlyName',
              status: 'In progress',
              userName: 'API xCP',
              createdAt: '2023-10-31 16:51:00',
            },
          ],
        },
        status: 200,
      };

      axiosClient.request.resolves(expectedResult);

      await licenseRequestClient.getLastRequests('XSP123');

      axiosClient.request.calledOnceWithExactly(sinon.match('XSP123'));
    });
  });
});
