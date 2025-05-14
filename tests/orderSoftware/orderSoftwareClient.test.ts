import { PublicApiClient } from '../../src/publicApiClient';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import { GET_ORDER_SOFTWARE_DATA } from './mocks/orderSoftware.mock';
import { DataListOrdersSoftware, GetResult } from '../../src';

export const ORDER_SOFTWARE_MOCK_URL = 'https://orderSoftware.localhost';
export const GET_ORDER_SOFTWARE_LIST = '/orderSoftware/';
export const GET_ORDER_SOFTWARE = '/orderSoftware/XSP123456';
describe('OrderSoftwareClient', () => {
  const client = new PublicApiClient()
    .getOrderSoftwareClient()
    .setUrl(ORDER_SOFTWARE_MOCK_URL);

  describe('getOrdersList', () => {
    it('call the get method', async () => {
      nock(ORDER_SOFTWARE_MOCK_URL)
        .get(GET_ORDER_SOFTWARE_LIST)
        .reply(constants.HTTP_STATUS_OK, GET_ORDER_SOFTWARE_DATA);

      const response: GetResult<DataListOrdersSoftware> = await client.getOrdersList();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_ORDER_SOFTWARE_DATA);
    });
    it('call the get method begin month', async () => {
      nock(ORDER_SOFTWARE_MOCK_URL)
        .get(GET_ORDER_SOFTWARE_LIST + '?dateBegin=2024-10-24')
        .reply(constants.HTTP_STATUS_OK, GET_ORDER_SOFTWARE_DATA);

      const response: GetResult<DataListOrdersSoftware> = await client.getOrdersList(
        '2024-10-24',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_ORDER_SOFTWARE_DATA);
    });
  });

  describe('getOrder', () => {
    it('call the get method', async () => {
      nock(ORDER_SOFTWARE_MOCK_URL)
        .get(GET_ORDER_SOFTWARE)
        .reply(constants.HTTP_STATUS_OK, GET_ORDER_SOFTWARE_DATA);

      const response: GetResult<DataListOrdersSoftware> = await client.getOrder(
        'XSP123456',
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equals(GET_ORDER_SOFTWARE_DATA);
    });
  });

  describe('deleteOrder', () => {
    it('call the delete method', async () => {
      nock(ORDER_SOFTWARE_MOCK_URL)
        .delete(GET_ORDER_SOFTWARE)
        .reply(constants.HTTP_STATUS_NO_CONTENT);

      await client.deleteOrder('XSP123456');

      expect(nock.isDone()).to.be.true;
    });
  });
});
