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
  CART_ADD_BUNDLE_ITEM_REQUEST,
  CART_ADD_BUNDLE_ITEM_RESPONSE,
  CART_ITEM_ID,
  CART_LIST_ITEMS_RESPONSE,
  CART_LIST_ITEMS_URL_INTERCEPTOR,
  CART_LIST_ITEMS_WITHOUT_PREFERRED_CURRENCY_RESPONSE,
  CART_MOCK_URL,
  CART_REMOVE_ITEM_RESPONSE,
  CART_REMOVE_ITEM_URL_INTERCEPTOR,
  CART_REMOVE_ITEMS_RESPONSE,
  CART_REMOVE_ITEMS_URL_INTERCEPTOR,
  CART_UPDATE_ITEM_REQUEST,
  CART_UPDATE_ITEM_RESPONSE,
  CART_UPDATE_ITEM_URL_INTERCEPTOR,
  CART_LIST_ITEMS_WITH_ACTIONS_RESPONSE,
  CHANGE_CUSTOMER_REQUEST,
  CHANGE_CUSTOMER_URL_INTERCEPTOR,
} from './mocks/cart.mocks';
import {
  CartActionsEnum,
  CartItemListResult,
  Item,
  ItemList,
  ItemPreferredCurrency,
} from '../../src';

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

    it('call the post method with a bundle item', async function () {
      nock(CART_MOCK_URL)
        .post(CART_ADD_ITEM_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_CREATED, CART_ADD_BUNDLE_ITEM_RESPONSE);

      const response: GetResult<Item> = await client.addItem(
        CART_ADD_BUNDLE_ITEM_REQUEST,
      );

      expect(response).to.be.instanceof(GetResult);
      expect(response.toJSON()).to.be.deep.equal(CART_ADD_BUNDLE_ITEM_RESPONSE);
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

      const [item] = response.data.items;
      expect(item.preferredCurrency).to.be.instanceof(ItemPreferredCurrency);
      expect(item.preferredCurrency?.conversionRules.currency).to.equal('PLN');
      expect(item.preferredCurrency?.values.prices?.endCustomer).to.equal(
        12.34,
      );
    });

    it('call the get method without preferredCurrency', async function () {
      nock(CART_MOCK_URL)
        .get(CART_LIST_ITEMS_URL_INTERCEPTOR)
        .reply(
          constants.HTTP_STATUS_OK,
          CART_LIST_ITEMS_WITHOUT_PREFERRED_CURRENCY_RESPONSE,
        );

      const response = await client.listItems();

      expect(response.toJSON()).to.be.deep.equal(
        CART_LIST_ITEMS_WITHOUT_PREFERRED_CURRENCY_RESPONSE,
      );
      expect(response.data.items[0].preferredCurrency).to.be.undefined;
    });
  });

  describe('cart actions', function () {
    it('exposes cartActions on listItems', async function () {
      nock(CART_MOCK_URL)
        .get(CART_LIST_ITEMS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_LIST_ITEMS_WITH_ACTIONS_RESPONSE);

      const response = await client.listItems();

      expect(response).to.be.instanceof(CartItemListResult);
      expect(response.cartActions).to.be.deep.equal([
        CartActionsEnum.CHECKOUT,
        CartActionsEnum.REQUEST_QUOTE,
      ]);
      expect(response.toJSON()).to.be.deep.equal(
        CART_LIST_ITEMS_WITH_ACTIONS_RESPONSE,
      );
    });

    it('defaults cartActions to an empty array when absent', async function () {
      nock(CART_MOCK_URL)
        .get(CART_LIST_ITEMS_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_LIST_ITEMS_RESPONSE);

      const response = await client.listItems();

      expect(response.cartActions).to.be.deep.equal([]);
    });

    it('exposes cartActions on changeCustomer', async function () {
      nock(CART_MOCK_URL)
        .post(CHANGE_CUSTOMER_URL_INTERCEPTOR)
        .reply(constants.HTTP_STATUS_OK, CART_LIST_ITEMS_WITH_ACTIONS_RESPONSE);

      const response = await client.changeCustomer(CHANGE_CUSTOMER_REQUEST);

      expect(response.cartActions).to.be.deep.equal([
        CartActionsEnum.CHECKOUT,
        CartActionsEnum.REQUEST_QUOTE,
      ]);
      expect(response.data).to.be.instanceof(ItemList);
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
