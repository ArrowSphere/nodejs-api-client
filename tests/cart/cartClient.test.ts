import { GetResult, PublicApiClient } from '../../src';
import nock from 'nock';
import { constants } from 'http2';
import { expect } from 'chai';
import {
  CART_ADD_ITEM_REQUEST,
  CART_ADD_ITEM_RESPONSE,
  CART_ADD_ITEM_URL_INTERCEPTOR,
  CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_REQUEST,
  CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_RESPONSE,
  CART_ITEM_ID,
  CART_LIST_ITEMS_RESPONSE,
  CART_LIST_ITEMS_URL_INTERCEPTOR,
  CART_MOCK_URL,
  CART_REMOVE_ITEM_RESPONSE,
  CART_REMOVE_ITEM_URL_INTERCEPTOR,
  CART_REMOVE_ITEMS_RESPONSE,
  CART_REMOVE_ITEMS_URL_INTERCEPTOR,
  CART_UPDATE_ITEM_REQUEST,
  CART_UPDATE_ITEM_RESPONSE,
  CART_UPDATE_ITEM_URL_INTERCEPTOR,
} from './mocks/cart.mocks';
import { Item, ItemList } from '../../src';

describe('CartClient', function () {
  const client = new PublicApiClient().getCartClient().setUrl(CART_MOCK_URL);

  describe('add item on cart', function () {
    it('call the post method', async function () {
      nock(CART_MOCK_URL)
        .post(CART_ADD_ITEM_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_CREATED, CART_ADD_ITEM_RESPONSE);

      const response: GetResult<Item> = await client.addItem(
        CART_ADD_ITEM_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CART_ADD_ITEM_RESPONSE);
    });

    it('call the post method without additional data', async function () {
      nock(CART_MOCK_URL)
        .post(CART_ADD_ITEM_URL_INTERCEPTOR)
        .reply(
          constants.HTTP_STATUS_CREATED,
          CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_RESPONSE,
        );

      const response: GetResult<Item> = await client.addItem(
        CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(
        CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_RESPONSE,
      );
    });
  });

  describe('update item on cart', function () {
    it('call the patch method', async function () {
      nock(CART_MOCK_URL)
        .patch(CART_UPDATE_ITEM_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_UPDATE_ITEM_RESPONSE);

      const response: GetResult<Item> = await client.updateItem(
        CART_ITEM_ID,
        CART_UPDATE_ITEM_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CART_UPDATE_ITEM_RESPONSE);
    });
  });

  describe('list items on cart', function () {
    it('call the get method', async function () {
      nock(CART_MOCK_URL)
        .get(CART_LIST_ITEMS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_LIST_ITEMS_RESPONSE);

      const response: GetResult<ItemList> = await client.listItems();

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CART_LIST_ITEMS_RESPONSE);
    });
  });

  describe('remove item on cart', function () {
    it('call the delete method', async function () {
      nock(CART_MOCK_URL)
        .delete(CART_REMOVE_ITEM_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_REMOVE_ITEM_RESPONSE);

      await client.removeItem(CART_ITEM_ID);
    });
  });

  describe('remove items on cart', function () {
    it('call the delete method', async function () {
      nock(CART_MOCK_URL)
        .delete(CART_REMOVE_ITEMS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_REMOVE_ITEMS_RESPONSE);

      await client.removeItems();
    });
  });
});
