import { GetResult, Parameters, PublicApiClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import { PAYLOAD_GET_ORDERS } from './mocks/orders.mocks';

export const ORDERS_MOCK_URL = 'https://orders.localhost';
export const GET_ORDERS_URL = new RegExp('/orders.*');

describe('OrdersClient', () => {
  describe('getListOrders', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should get list orders with parameters', async () => {
      nock(ORDERS_MOCK_URL).get(GET_ORDERS_URL).reply(200, PAYLOAD_GET_ORDERS);
      const parameters: Parameters = {
        from: '2021-10-29',
        order_by: 'ASC',
        page: '2',
        per_page: '5',
        sort_by: 'status',
      };
      const result = await orderClient.getListOrders(parameters);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_ORDERS);
    });

    it('Should get list orders without parameters', async () => {
      nock(ORDERS_MOCK_URL).get(GET_ORDERS_URL).reply(200, PAYLOAD_GET_ORDERS);

      const result = await orderClient.getListOrders();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_ORDERS);
    });
  });

  describe('getOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should get order by reference', async () => {
      nock(ORDERS_MOCK_URL).get(GET_ORDERS_URL).reply(200, PAYLOAD_GET_ORDERS);

      const result = await orderClient.getOrder('XSPO123');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_ORDERS);
    });
  });
});
