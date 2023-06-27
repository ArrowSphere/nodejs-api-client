import {
  CreateOrderInputFields,
  CreateOrderInputType,
  ReferenceLinkFields,
  ReferenceLinkType,
  scenarioType,
} from '../../../src';
import { GetData } from '../../../src';

export const CreateOrderResponsePayload: GetData<ReferenceLinkType> = {
  status: 200,
  data: {
    [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSPO123456',
    [ReferenceLinkFields.COLUMN_LINK]: '/api/orders/XSPO123456',
  },
};

export const CreateOrderPartialInputPayload: CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSP4533',
  },
  [CreateOrderInputFields.COLUMN_PRODUCTS]: [
    {
      [CreateOrderInputFields.COLUMN_ARROW_SPHERE_PRICE_BAND_SKU]:
        'MSCSP_CFQ7TTC0LDPB-0001_FR_EUR_1_720_720',
      [CreateOrderInputFields.COLUMN_SKU]:
        'SAAS||Microsoft||MS-0A-O365-BUSINESS||BD938F12-058F-4927-BBA3-AE36B1D2501C',
      [CreateOrderInputFields.COLUMN_QUANTITY]: 2,
      [CreateOrderInputFields.COLUMN_SUBSCRIPTION]: {
        [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSPS12348',
      },
    },
  ],
};

export const CreateOrderFullInputPayload: CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSP4533',
    [CreateOrderInputFields.COLUMN_PO_NUMBER]: '456789',
  },
  [CreateOrderInputFields.COLUMN_PRODUCTS]: [
    {
      [CreateOrderInputFields.COLUMN_ARROW_SPHERE_PRICE_BAND_SKU]:
        'MSCSP_CFQ7TTC0LDPB-0001_FR_EUR_1_720_720',
      [CreateOrderInputFields.COLUMN_SKU]:
        'SAAS||Microsoft||MS-0A-O365-BUSINESS||BD938F12-058F-4927-BBA3-AE36B1D2501C',
      [CreateOrderInputFields.COLUMN_QUANTITY]: 2,
      [CreateOrderInputFields.COLUMN_SUBSCRIPTION]: {
        [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSPS12348',
      },
      [CreateOrderInputFields.COLUMN_PARENT_LICENSE_ID]: 'XSP0007',
      [CreateOrderInputFields.COLUMN_PARENT_SKU]: 'XXXXXXX-XXXXX-XXXXXXXXXX',
      [CreateOrderInputFields.COLUMN_PERIODICITY]: 'per Month',
      [CreateOrderInputFields.COLUMN_TERM]: '1 Year',
      [CreateOrderInputFields.COLUMN_DISCOUNT]: 5,
      [CreateOrderInputFields.COLUMN_UPLIFT]: 2,
    },
  ],
  [CreateOrderInputFields.COLUMN_EXTRA_INFORMATION]: {
    programs: {
      info1: {
        key1: 'value1',
      },
      info2: {
        key1: 'value1',
        key2: 'value2',
      },
    },
  },
};

export const CreateOrderInjectionScenarioPayload: CreateOrderInputType = {
  [CreateOrderInputFields.COLUMN_CUSTOMER]: {
    [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSP4533',
    [CreateOrderInputFields.COLUMN_PO_NUMBER]: '456789',
  },
  [CreateOrderInputFields.COLUMN_SCENARIO]: scenarioType.INJECTION,
  [CreateOrderInputFields.COLUMN_PRODUCTS]: [
    {
      [CreateOrderInputFields.COLUMN_ARROW_SPHERE_PRICE_BAND_SKU]:
        'MSCSP_CFQ7TTC0LDPB-0001_FR_EUR_1_720_720',
      [CreateOrderInputFields.COLUMN_SKU]:
        'SAAS||Microsoft||MS-0A-O365-BUSINESS||BD938F12-058F-4927-BBA3-AE36B1D2501C',
      [CreateOrderInputFields.COLUMN_QUANTITY]: 2,
      [CreateOrderInputFields.COLUMN_SUBSCRIPTION]: {
        [CreateOrderInputFields.COLUMN_REFERENCE]: 'XSPS12348',
      },
      [CreateOrderInputFields.COLUMN_PARENT_LICENSE_ID]: 'XSP0007',
      [CreateOrderInputFields.COLUMN_PARENT_SKU]: 'XXXXXXX-XXXXX-XXXXXXXXXX',
      [CreateOrderInputFields.COLUMN_PERIODICITY]: 720,
      [CreateOrderInputFields.COLUMN_TERM]: 8640,
      [CreateOrderInputFields.COLUMN_AUTO_RENEW]: false,
      [CreateOrderInputFields.COLUMN_EFFECTIVE_START_DATE]:
        '2023-01-01 00:00:00',
      [CreateOrderInputFields.COLUMN_EFFECTIVE_END_DATE]: '2024-01-01 00:00:00',
      [CreateOrderInputFields.COLUMN_VENDOR_REFERENCE_ID]:
        '56733dc0-2ca3-466a-a15d-6665cccfbc8d',
      [CreateOrderInputFields.COLUMN_FRIENDLY_NAME]: 'friendly_name',
      [CreateOrderInputFields.COLUMN_COMMENT1]: 'comment1',
      [CreateOrderInputFields.COLUMN_COMMENT2]: 'comment2',
      [CreateOrderInputFields.COLUMN_PRICE]: {
        [CreateOrderInputFields.COLUMN_PRICE_BUY]: {
          [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]: 'EUR',
          [CreateOrderInputFields.COLUMN_PRICE_UNIT]: 3.1,
          [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]: 1,
        },
        [CreateOrderInputFields.COLUMN_PRICE_LIST]: {
          [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]: 'EUR',
          [CreateOrderInputFields.COLUMN_PRICE_UNIT]: 3.7,
          [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]: 1,
        },
        [CreateOrderInputFields.COLUMN_PRICE_RESELLER]: {
          [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]: 'EUR',
          [CreateOrderInputFields.COLUMN_PRICE_UNIT]: 3.5,
          [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]: 1,
        },
        [CreateOrderInputFields.COLUMN_PRICE_END_CUSTOMER]: {
          [CreateOrderInputFields.COLUMN_PRICE_CURRENCY]: 'EUR',
          [CreateOrderInputFields.COLUMN_PRICE_UNIT]: 3.6,
          [CreateOrderInputFields.COLUMN_PRICE_EXCHANGE_RATE]: 1,
        },
      },
    },
  ],
};
