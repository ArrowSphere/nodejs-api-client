import {
  GetData,
  GetResultFields,
  ItemAddRequestType,
  ItemRequestFields,
  ItemAdditionalDataRequestFields,
  ItemType,
  ItemAdditionalDataFields,
  ItemFields,
  ItemListType,
  ItemUpdateRequestType,
  ItemBundleRequestType,
} from '../../../src';
import { constants } from 'http2';

export const CART_MOCK_URL = 'https://cart.localhost/';
export const CART_MOCK_PATH = '/cart';
export const CART_ADD_ITEM_URL_INTERCEPTOR = new RegExp(`^${CART_MOCK_PATH}$`);
export const CART_UPDATE_ITEM_URL_INTERCEPTOR = new RegExp(
  `^${CART_MOCK_PATH}/[A-Za-z0-9]+(\\?.*)?`,
);
export const CART_LIST_ITEMS_URL_INTERCEPTOR = new RegExp(
  `^${CART_MOCK_PATH}(\\?.*)?`,
);
export const CART_REMOVE_ITEM_URL_INTERCEPTOR = new RegExp(
  `^${CART_MOCK_PATH}/[A-Za-z0-9]+(\\?.*)?`,
);
export const CART_REMOVE_ITEMS_URL_INTERCEPTOR = new RegExp(
  `^${CART_MOCK_PATH}(\\?.*)?`,
);

export const CART_ITEM_ID = '2587c69e-667a-11ed-9022-0242ac120002';

export const CART_ADD_ITEM_REQUEST: ItemAddRequestType = {
  [ItemRequestFields.ADDITIONAL_DATA]: [
    {
      [ItemAdditionalDataRequestFields.NAME]: 'resellerRate',
      [ItemAdditionalDataRequestFields.VALUE]: '5.04934',
    },
  ],
  [ItemRequestFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
  [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]:
    '031C9E47-4802-4248-838E-778FB1D2CC05',
  [ItemRequestFields.QUANTITY]: 5,
};

export const CART_ADD_ITEM_RESPONSE: GetData<ItemType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_CREATED,
  [GetResultFields.COLUMN_DATA]: {
    [ItemFields.ITEM_ID]: CART_ITEM_ID,
    [ItemFields.ADDITIONAL_DATA]: [
      {
        [ItemAdditionalDataFields.NAME]: 'resellerRate',
        [ItemAdditionalDataFields.VALUE]: '5.04934',
      },
    ],
    [ItemFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
    [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]:
      '031C9E47-4802-4248-838E-778FB1D2CC05',
    [ItemFields.QUANTITY]: 5,
  },
};

export const CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_REQUEST: ItemAddRequestType = {
  [ItemRequestFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
  [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]:
    '031C9E47-4802-4248-838E-778FB1D2CC05',
  [ItemRequestFields.QUANTITY]: 5,
};

export const CART_ADD_ITEM_WITHOUT_ADDITIONAL_DATA_RESPONSE: GetData<ItemType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_CREATED,
  [GetResultFields.COLUMN_DATA]: {
    [ItemFields.ITEM_ID]: CART_ITEM_ID,
    [ItemFields.ADDITIONAL_DATA]: [
      {
        [ItemAdditionalDataFields.NAME]: 'resellerRate',
        [ItemAdditionalDataFields.VALUE]: '5.04934',
      },
    ],
    [ItemFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
    [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]:
      '031C9E47-4802-4248-838E-778FB1D2CC05',
    [ItemFields.QUANTITY]: 5,
  },
};

export const CART_UPDATE_ITEM_REQUEST: ItemUpdateRequestType = {
  [ItemRequestFields.ADDITIONAL_DATA]: [
    {
      [ItemAdditionalDataRequestFields.NAME]: 'resellerRate',
      [ItemAdditionalDataRequestFields.VALUE]: '5.04934',
    },
  ],
  [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]:
    '031C9E47-4802-4248-838E-778FB1D2CC05',
  [ItemRequestFields.QUANTITY]: 2,
};

export const CART_UPDATE_ITEM_RESPONSE: GetData<ItemType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: {
    [ItemFields.ITEM_ID]: CART_ITEM_ID,
    [ItemFields.ADDITIONAL_DATA]: [
      {
        [ItemAdditionalDataFields.NAME]: 'resellerRate',
        [ItemAdditionalDataFields.VALUE]: '5.04934',
      },
    ],
    [ItemFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
    [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]:
      '031C9E47-4802-4248-838E-778FB1D2CC05',
    [ItemFields.QUANTITY]: 2,
  },
};

export const CART_LIST_ITEMS_RESPONSE: GetData<ItemListType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_OK,
  [GetResultFields.COLUMN_DATA]: [
    {
      [ItemFields.ITEM_ID]: CART_ITEM_ID,
      [ItemFields.ADDITIONAL_DATA]: [
        {
          [ItemAdditionalDataFields.NAME]: 'resellerRate',
          [ItemAdditionalDataFields.VALUE]: '5.04934',
        },
      ],
      [ItemFields.OFFER_NAME]: 'Microsoft 365 Business Premium',
      [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]:
        '031C9E47-4802-4248-838E-778FB1D2CC05',
      [ItemFields.QUANTITY]: 2,
    },
  ],
};

export const CART_REMOVE_ITEM_RESPONSE: GetData<undefined> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_NO_CONTENT,
  [GetResultFields.COLUMN_DATA]: undefined,
};

export const CART_REMOVE_ITEMS_RESPONSE: GetData<undefined> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_NO_CONTENT,
  [GetResultFields.COLUMN_DATA]: undefined,
};

export const CART_ADD_BUNDLE_ITEM_REQUEST: ItemBundleRequestType = {
  [ItemRequestFields.BUNDLE_ARROWSPHERE_SKU]: 'ALO001_TEST-BUNDLE',
  [ItemRequestFields.OFFER_NAME]: 'ALO 001 TEST BUNDLE',
  [ItemRequestFields.QUANTITY]: 1,
  [ItemRequestFields.BASE_PRICE_BANDS]: [
    {
      [ItemRequestFields.OFFER_NAME]: 'ALO 001 TEST OFFER 1',
      [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]: 'ALO001_TEST-OFFER-1',
      [ItemRequestFields.QUANTITY]: 1,
    },
    {
      [ItemRequestFields.OFFER_NAME]: 'ALO 001 TEST OFFER 2',
      [ItemRequestFields.PRICE_BAND_ARROWSPHERE_SKU]: 'ALO001_TEST-OFFER-2',
      [ItemRequestFields.QUANTITY]: 1,
    },
  ],
};

export const CART_ADD_BUNDLE_ITEM_RESPONSE: GetData<ItemType> = {
  [GetResultFields.COLUMN_STATUS]: constants.HTTP_STATUS_CREATED,
  [GetResultFields.COLUMN_DATA]: {
    [ItemFields.ITEM_ID]: CART_ITEM_ID,
    [ItemFields.OFFER_NAME]: 'ALO 001 TEST BUNDLE',
    [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: 'ALO001_TEST-BUNDLE',
    [ItemFields.QUANTITY]: 1,
    [ItemFields.IS_BUNDLE]: true,
    [ItemFields.BUNDLE_ARROWSPHERE_SKU]: 'ALO001_TEST-BUNDLE',
    [ItemFields.BASE_PRICE_BANDS]: [
      {
        [ItemFields.ITEM_ID]: '2587c69e-667a-11ed-9022-0242ac120003',
        [ItemFields.OFFER_NAME]: 'ALO 001 TEST OFFER 1',
        [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: 'ALO001_TEST-OFFER-1',
        [ItemFields.QUANTITY]: 1,
      },
      {
        [ItemFields.ITEM_ID]: '2587c69e-667a-11ed-9022-0242ac120004',
        [ItemFields.OFFER_NAME]: 'ALO 001 TEST OFFER 2',
        [ItemFields.PRICE_BAND_ARROWSPHERE_SKU]: 'ALO001_TEST-OFFER-2',
        [ItemFields.QUANTITY]: 1,
      },
    ],
  },
};
