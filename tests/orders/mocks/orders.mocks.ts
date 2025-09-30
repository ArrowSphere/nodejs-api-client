// PAYLOADS
import {
  AdditionalExtraInformationFields,
  AttachmentOrderFields,
  AttachmentOrderType,
  AttachmentsOrderListFields,
  AttachmentsOrderListType,
  DataListOrdersFields,
  DataListOrdersType,
  GetData,
  GetResultFields,
  IdentifiersVendorFields,
  OrderFields,
  OrderPartnerFields,
  OrderProductsFields,
  ProductIdentifiersFields,
  ProductPricesFields,
  ProductProgramFields,
  ReferenceLinkFields,
  SharedContactFields,
  UpdateOrderInputFields,
  UpdateOrderInputType,
  UpdateOrderResultData,
  VendorAttributesFields,
} from '../../../src';
import { PriceBandFields } from '../../../src/orders/entities/orders/products/priceBand/priceBand';
import { OrganizationUnitTypeFields } from '../../../src/orders/entities/orders/products/organizationUnit/organizationUnit';

export const PAYLOAD_ORDERS: GetData<DataListOrdersType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataListOrdersFields.COLUMN_ORDERS]: [
      {
        [OrderFields.COLUMN_REFERENCE]: 'XSPO123',
        [OrderFields.COLUMN_STATUS]: 'In progress',
        [OrderFields.COLUMN_DATESTATUS]: '2017-05-15 09:39:05',
        [OrderFields.COLUMN_DATECREATION]: '2017-05-15 09:39:05',
        [OrderFields.COLUMN_ORDER_REFERENCE]: 'O_ARWS-V7-2704f97d-656151',
        [OrderFields.COLUMN_PARTNER]: {
          [OrderPartnerFields.COLUMN_COMPANYNAME]: 'MyCompany',
          [OrderPartnerFields.COLUMN_CONTACT]: {
            [SharedContactFields.COLUMN_FIRSTNAME]: 'email@provider.com',
            [SharedContactFields.COLUMN_LASTNAME]: '/api/customers/XSP17727',
            [SharedContactFields.COLUMN_EMAIL]: '/api/customers/XSP17727',
          },
        },
        [OrderFields.COLUMN_CUSTOMER]: {
          [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSP17727',
          [ReferenceLinkFields.COLUMN_LINK]: '/api/customers/XSP17727',
        },
        [OrderFields.COLUMN_PONUMBER]: '123456',
        [OrderFields.COLUMN_END_CUSTOMER_PO_NUMBER]: '654321',
        [OrderFields.COLUMN_PRODUCTS]: [
          {
            [OrderProductsFields.COLUMN_SKU]:
              'Microsoft||MS-0ZH-VISIO||B4D4B7F4-4089-43B6-9C44-DE97B760FB11',
            [OrderProductsFields.COLUMN_QUANTITY]: 2,
            [OrderProductsFields.COLUMN_STATUS]: 'Provisioned',
            [OrderProductsFields.COLUMN_DATESTATUS]: '2017-05-15 09:39:05',
            [OrderProductsFields.COLUMN_DETAILEDSTATUS]: 'Provisioned',
            [OrderProductsFields.COLUMN_IS_ADDON]: true,
            [OrderProductsFields.COLUMN_ARROWSUBCATEGORIES]: ['nce'],
            [OrderProductsFields.COLUMN_IS_TRIAL]: true,
            [OrderProductsFields.COLUMN_PRICES]: {
              [ProductPricesFields.COLUMN_BUY]: 11,
              [ProductPricesFields.COLUMN_SELL]: 11,
              [ProductPricesFields.COLUMN_CURRENCY]: 'EUR',
              [ProductPricesFields.COLUMN_PERIODICITY]: 'per Month',
              [ProductPricesFields.COLUMN_TERM]: 'one year',
              [ProductPricesFields.COLUMN_PERIODICITY_CODE]: 8640,
              [ProductPricesFields.COLUMN_TERM_CODE]: 8640,
            },
            [OrderProductsFields.COLUMN_SUBSCRIPTION]: {
              [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSPS7896',
              [ReferenceLinkFields.COLUMN_LINK]: '/api/subscriptions/XSPS7896',
            },
            [OrderProductsFields.COLUMN_LICENSE]: {
              [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSP87708',
              [ReferenceLinkFields.COLUMN_LINK]: '/api/licenses/XSP87708',
            },
            [OrderProductsFields.COLUMN_NAME]: 'products_name',
            [OrderProductsFields.COLUMN_CLASSIFICATION]:
              'products_classification',
            [OrderProductsFields.COLUMN_PROGRAM]: {
              [ProductProgramFields.COLUMN_LEGACY_CODE]: 'legacy_code',
            },
            [OrderProductsFields.COLUMN_IDENTIFIERS]: {
              [ProductIdentifiersFields.COLUMN_VENDOR]: {
                [IdentifiersVendorFields.COLUMN_SKU]: 'sku',
                [IdentifiersVendorFields.COLUMN_ATTRIBUTES]: {
                  [VendorAttributesFields.COLUMN_CAN_SWITCH_AUTO_RENEW]: true,
                },
                [IdentifiersVendorFields.COLUMN_BRAND]: 'brand',
              },
            },
            [OrderProductsFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU321',
            [OrderProductsFields.COLUMN_ORGANIZATION_UNIT]: {
              [OrganizationUnitTypeFields.COLUMN_ORGANIZATION_UNIT_REF]:
                'XSPOU321',
              [OrganizationUnitTypeFields.COLUMN_NAME]:
                'organization_unit_name',
            },
            [OrderProductsFields.COLUMN_PRICE_BAND]: {
              [PriceBandFields.COLUMN_ATTRIBUTES]: [
                { name: 'Attribute1', value: 'value1' },
                { name: 'Attribute2', value: 'value2' },
                { name: 'Attribute3', value: 'value3' },
              ],
            },
          },
        ],
        [OrderFields.COLUMN_EXTRA_INFORMATION]: {
          [AdditionalExtraInformationFields.COLUMN_PROGRAMS]: {
            info1: {
              key1: 'value1',
            },
          },
        },
        [OrderFields.COLUMN_ORGANIZATION_UNIT_REF]: 'XSPOU123',
      },
    ],
  },
};

export const PAYLOAD_ORDERS_WITHOUT_OPTIONAL: GetData<DataListOrdersType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataListOrdersFields.COLUMN_ORDERS]: [
      {
        [OrderFields.COLUMN_REFERENCE]: 'XSPO123',
        [OrderFields.COLUMN_STATUS]: 'In progress',
        [OrderFields.COLUMN_DATESTATUS]: '2017-05-15 09:39:05',
        [OrderFields.COLUMN_DATECREATION]: '2017-05-15 09:39:05',
        [OrderFields.COLUMN_ORDER_REFERENCE]: 'O_ARWS-V7-2704f97d-656151',
        [OrderFields.COLUMN_CUSTOMER]: {
          [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSP17727',
          [ReferenceLinkFields.COLUMN_LINK]: '/api/customers/XSP17727',
        },
        [OrderFields.COLUMN_PONUMBER]: '123456',
        [OrderFields.COLUMN_END_CUSTOMER_PO_NUMBER]: '654321',
        [OrderFields.COLUMN_PRODUCTS]: [
          {
            [OrderProductsFields.COLUMN_SKU]:
              'Microsoft||MS-0ZH-VISIO||B4D4B7F4-4089-43B6-9C44-DE97B760FB11',
            [OrderProductsFields.COLUMN_QUANTITY]: 2,
            [OrderProductsFields.COLUMN_STATUS]: 'Provisioned',
            [OrderProductsFields.COLUMN_DATESTATUS]: '2017-05-15 09:39:05',
            [OrderProductsFields.COLUMN_DETAILEDSTATUS]: 'Provisioned',
            [OrderProductsFields.COLUMN_IS_ADDON]: true,
            [OrderProductsFields.COLUMN_IS_TRIAL]: true,
            [OrderProductsFields.COLUMN_PRICES]: {
              [ProductPricesFields.COLUMN_BUY]: 11,
              [ProductPricesFields.COLUMN_SELL]: 11,
              [ProductPricesFields.COLUMN_CURRENCY]: 'EUR',
              [ProductPricesFields.COLUMN_PERIODICITY]: 'per Month',
              [ProductPricesFields.COLUMN_TERM]: 'one year',
              [ProductPricesFields.COLUMN_PERIODICITY_CODE]: 8640,
              [ProductPricesFields.COLUMN_TERM_CODE]: 8640,
            },
            [OrderProductsFields.COLUMN_LICENSE]: {
              [ReferenceLinkFields.COLUMN_REFERENCE]: 'XSP87708',
              [ReferenceLinkFields.COLUMN_LINK]: '/api/licenses/XSP87708',
            },
            [OrderProductsFields.COLUMN_NAME]: 'products_name',
            [OrderProductsFields.COLUMN_CLASSIFICATION]:
              'products_classification',
            [OrderProductsFields.COLUMN_PROGRAM]: {
              [ProductProgramFields.COLUMN_LEGACY_CODE]: 'legacy_code',
            },
            [OrderProductsFields.COLUMN_IDENTIFIERS]: {
              [ProductIdentifiersFields.COLUMN_VENDOR]: {
                [IdentifiersVendorFields.COLUMN_SKU]: 'sku',
                [IdentifiersVendorFields.COLUMN_ATTRIBUTES]: {},
                [IdentifiersVendorFields.COLUMN_BRAND]: 'brand',
              },
            },
          },
        ],
      },
    ],
  },
};

export const PAYLOAD_UPDATE_ORDER: UpdateOrderInputType = {
  [UpdateOrderInputFields.COLUMN_PO_NUMBER]: 'PO_NUMBER',
  [UpdateOrderInputFields.COLUMN_END_CUSTOMER_PO_NUMBER]:
    'END_CUSTOMER_PO_NUMBER',
};

export const PAYLOAD_UPDATE_ORDER_RESULT: GetData<UpdateOrderResultData> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    message: 'Order with reference {orderReference} has been updated',
  },
};

export const PAYLOAD_GET_ATTACHMENTS_ORDER_RESULT: GetData<AttachmentsOrderListType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [AttachmentsOrderListFields.COLUMN_ATTACHMENTS]: [
      {
        [AttachmentOrderFields.COLUMN_LAST_MODIFIED]: '2023-10-10T10:00:00Z',
        [AttachmentOrderFields.COLUMN_METADATA]: {
          usedid: '123456',
          username: 'arrowuser',
        },
        [AttachmentOrderFields.COLUMN_NAME]: 'attachment_name',
        [AttachmentOrderFields.COLUMN_URL]:
          'https://example.com/attachment/123',
      },
    ],
  },
};

export const PAYLOAD_UPLOAD_ATTACHMENT_ORDER_RESULT: GetData<AttachmentOrderType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [AttachmentOrderFields.COLUMN_LAST_MODIFIED]: '2023-10-10T10:00:00Z',
    [AttachmentOrderFields.COLUMN_METADATA]: {
      usedid: '123456',
      username: 'arrowuser',
    },
    [AttachmentOrderFields.COLUMN_NAME]: 'attachment_name',
    [AttachmentOrderFields.COLUMN_URL]: 'https://example.com/attachment/123',
  },
};
