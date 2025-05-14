import {
  GetResult,
  Parameters,
  PublicApiClient,
  StaffTypeEnum,
  UpdateAdditionalInformationOrderInputType,
  UpdateContributorOrderInputType,
} from '../../src';
import nock from 'nock';
import { expect } from 'chai';
import {
  PAYLOAD_GET_ATTACHMENTS_ORDER_RESULT,
  PAYLOAD_ORDERS,
  PAYLOAD_ORDERS_WITHOUT_OPTIONAL,
  PAYLOAD_UPDATE_ORDER,
  PAYLOAD_UPDATE_ORDER_RESULT,
  PAYLOAD_UPLOAD_ATTACHMENT_ORDER_RESULT,
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
export const UPDATE_ORDERS_URL = new RegExp('/orders.*');
export const ARCHIVE_ORDERS_URL = new RegExp('/orders/XSPO[0-9]+/archive');
export const CANCEL_ORDERS_URL = new RegExp('/orders/XSPO[0-9]+/cancel');
export const REJECT_GRADED_ORDERS_URL = new RegExp(
  '/orders/XSPO[0-9]+/rejectGraded',
);
export const RESUBMIT_GRADED_ORDERS_URL = new RegExp(
  '/orders/XSPO[0-9]+/resubmit',
);
export const VALIDATE_GRADED_ORDERS_URL = new RegExp(
  '/orders/XSPO[0-9]+/validate',
);
export const CONTRIBUTOR_GRADED_ORDERS_URL = new RegExp(
  '/orders/XSPO[0-9]+/contributor',
);
export const ADDITIONALINFORMATION_GRADED_ORDERS_URL = new RegExp(
  '/orders/XSPO[0-9]+/additionalInformation',
);
export const ATTACHMENT_ORDER_URL = new RegExp('/orders/XSPO[0-9]+/attachment');
export const DELETE_ATTACHMENT_ORDER_URL = new RegExp(
  '/orders/XSPO[0-9]+/attachment/.*',
);

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

  describe('updateOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should update order', async () => {
      nock(ORDERS_MOCK_URL)
        .patch(UPDATE_ORDERS_URL)
        .reply(200, PAYLOAD_UPDATE_ORDER_RESULT);

      const result = await orderClient.updateOrder(
        'XSPO123',
        PAYLOAD_UPDATE_ORDER,
      );
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_UPDATE_ORDER_RESULT);
    });
  });

  describe('archiveOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL).patch(ARCHIVE_ORDERS_URL).reply(200);

      await orderClient.archiveOrder('XSPO123');

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('cancelOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL).patch(CANCEL_ORDERS_URL).reply(200);

      await orderClient.cancelOrder('XSPO123');

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('rejectGradedOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL).patch(REJECT_GRADED_ORDERS_URL).reply(200);

      await orderClient.rejectGradedOrder('XSPO123');

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('resubmitOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL).patch(RESUBMIT_GRADED_ORDERS_URL).reply(200);

      await orderClient.resubmitOrder('XSPO123');

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('validateOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL).patch(VALIDATE_GRADED_ORDERS_URL).reply(200);

      await orderClient.validateOrder('XSPO123');

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('updateStaffContributorsOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL).patch(CONTRIBUTOR_GRADED_ORDERS_URL).reply(200);
      const payload: UpdateContributorOrderInputType = {
        contributor: [
          {
            type: StaffTypeEnum.FCST,
            staffId: 1,
          },
          {
            type: StaffTypeEnum.ISR,
            staffId: 2,
          },
        ],
      };

      await orderClient.updateStaffContributorsOrder('XSPO123', payload);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('updateAdditionalInformationOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('Should archive order', async () => {
      nock(ORDERS_MOCK_URL)
        .patch(ADDITIONALINFORMATION_GRADED_ORDERS_URL)
        .reply(200);
      const payload: UpdateAdditionalInformationOrderInputType = {
        data: [
          {
            name: 'promotion_code',
            value: 'SKW-ZEAZ',
          },
        ],
      };

      await orderClient.updateAdditionalInformationOrder('XSPO123', payload);

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getAttachmentsOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('should return the order attachments list', async () => {
      nock(ORDERS_MOCK_URL)
        .get(ATTACHMENT_ORDER_URL)
        .reply(200, PAYLOAD_GET_ATTACHMENTS_ORDER_RESULT);

      const result = await orderClient.getAttachmentsOrder('XSPO123');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_ATTACHMENTS_ORDER_RESULT);
    });
  });

  describe('deleteAttachmentOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('should delete an order attachment', async () => {
      nock(ORDERS_MOCK_URL).delete(DELETE_ATTACHMENT_ORDER_URL).reply(204);

      await orderClient.deleteAttachmentOrder('XSPO123', 'attachment-test.pdf');

      expect(nock.isDone()).to.be.true;
    });
  });

  describe('uploadAttachmentOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('should add a new attachment to the order and return the information about the new attachment', async () => {
      nock(ORDERS_MOCK_URL)
        .post(ATTACHMENT_ORDER_URL)
        .reply(200, PAYLOAD_UPLOAD_ATTACHMENT_ORDER_RESULT);

      const result = await orderClient.uploadAttachmentOrder('XSPO123', {
        fileEncoded:
          'data:application/pdf;base64,b2DFFEFDSSGDFGDGSDFGFHGDFGFDGDFG',
        name: 'attachment-test.pdf',
      });
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_UPLOAD_ATTACHMENT_ORDER_RESULT);
    });
  });

  describe('injectionScenarioOrder', async () => {
    const orderClient = new PublicApiClient()
      .getOrdersClient()
      .setUrl(ORDERS_MOCK_URL);

    it('should upload an xlsx file and return the information about the uploaded file', async () => {
      nock(ORDERS_MOCK_URL)
        .post('/orders/injectionScenario')
        .reply(200, PAYLOAD_UPLOAD_ATTACHMENT_ORDER_RESULT);

      const result = await orderClient.injectionScenarioOrder({
        fileEncoded:
          'data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,EUsDBBQABddfdfsfs',
      });
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_UPLOAD_ATTACHMENT_ORDER_RESULT);
    });
  });
});
