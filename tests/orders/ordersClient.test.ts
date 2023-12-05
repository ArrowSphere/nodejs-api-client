import { GetResult, Parameters, PublicApiClient } from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import {
  PAYLOAD_ORDERS,
  PAYLOAD_ORDERS_WITHOUT_OPTIONAL,
} from './mocks/orders.mocks';
import {
  CreateOrderFullInputPayload,
  CreateOrderPartialInputPayload,
  CreateOrderResponsePayload,
  CreateOrderInjectionScenarioPayload,
} from './mocks/create.mocks';

export const ORDERS_MOCK_URL = 'https://orders.localhost/index.php/api';
export const ORDERS_CREATE = '/orders';
export const GET_ORDERS_URL = new RegExp('/orders.*');

describe('OrdersClient', () => {
  const client = new PublicApiClient()
    .getOrdersClient()
    .setUrl(ORDERS_MOCK_URL);

  describe('create', () => {
    it('calls the post method with the partial payload', async () => {
      nock(ORDERS_MOCK_URL)
        .post(ORDERS_CREATE)
        .reply(200, CreateOrderResponsePayload);

      const response = await client.create(CreateOrderPartialInputPayload);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(CreateOrderResponsePayload);
    });

    it('calls the post method with the full payload', async () => {
      nock(ORDERS_MOCK_URL)
        .post(ORDERS_CREATE)
        .reply(200, CreateOrderResponsePayload);

      const response = await client.create(CreateOrderFullInputPayload);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(CreateOrderResponsePayload);
    });

    it('calls the post method for injection  the full payload', async () => {
      nock(ORDERS_MOCK_URL)
        .post(ORDERS_CREATE)
        .reply(200, CreateOrderResponsePayload);

      const response = await client.create(CreateOrderInjectionScenarioPayload);

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.eqls(CreateOrderResponsePayload);
    });
  });

  describe('getListOrders', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should get list orders with parameters', async () => {
      nock(ORDERS_MOCK_URL).get(GET_ORDERS_URL).reply(200, PAYLOAD_ORDERS);
      const parameters: Parameters = {
        from: '2021-10-29',
        order_by: 'ASC',
        sort_by: 'status',
      };
      const page = 2;
      const per_page = 5;
      const result = await orderClient.getListOrders(
        per_page,
        page,
        parameters,
      );
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS);
    });

    it('Should get list orders with parameters without optional fields', async () => {
      nock(ORDERS_MOCK_URL)
        .get(GET_ORDERS_URL)
        .reply(200, PAYLOAD_ORDERS_WITHOUT_OPTIONAL);
      const parameters: Parameters = {
        from: '2021-10-29',
        order_by: 'ASC',
        sort_by: 'status',
      };
      const page = 2;
      const per_page = 5;
      const result = await orderClient.getListOrders(
        per_page,
        page,
        parameters,
      );
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS_WITHOUT_OPTIONAL);
    });

    it('Should get list orders without parameters', async () => {
      nock(ORDERS_MOCK_URL).get(GET_ORDERS_URL).reply(200, PAYLOAD_ORDERS);

      const result = await orderClient.getListOrders();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS);
    });

    it('Should get list orders without parameters without optional fields', async () => {
      nock(ORDERS_MOCK_URL)
        .get(GET_ORDERS_URL)
        .reply(200, PAYLOAD_ORDERS_WITHOUT_OPTIONAL);

      const result = await orderClient.getListOrders();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS_WITHOUT_OPTIONAL);
    });
  });

  describe('getOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should get order by reference', async () => {
      nock(ORDERS_MOCK_URL).get(GET_ORDERS_URL).reply(200, PAYLOAD_ORDERS);

      const result = await orderClient.getOrder('XSPO123');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS);
    });

    it('Should get order by reference ', async () => {
      nock(ORDERS_MOCK_URL)
        .get(GET_ORDERS_URL)
        .reply(200, PAYLOAD_ORDERS_WITHOUT_OPTIONAL);

      const result = await orderClient.getOrder('XSPO123');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_ORDERS_WITHOUT_OPTIONAL);
    });
  });
});
