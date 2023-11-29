import {
  LicenseEventActionType,
  LicensesEventGetEventsQueryField,
  LicensesEventGetEventsQueryType,
  LicensesEventGetEventsResponseDataType,
  LicensesEventQueries,
  LicensesEventSortDirection,
} from '../../src/licenses';

export const EVENTS_SAMPLE: LicensesEventGetEventsResponseDataType[] = [
  {
    event: {
      friendlyName: 'chocolat',
      id: 11802206,
      partnerRef: 'XSP5102652',
      orderRef: 'O_ARWS-V7-295b4b91-17727',
      createdAt: '2022-12-14 18:32:19',
      marketplace: 'FR',
      vendor: {
        name: 'Microsoft',
        code: 'Microsoft',
      },
      uom: 'LICENSE',
      periodicity: 720,
      term: 8640,
      trial: false,
      statusCode: '86',
      actionType: LicenseEventActionType.AUTO_RENEW_OFF,
      eventDetails: {
        message: 'The auto-renew has been disabled.',
        source: '',
      },
      user: {
        name: 'Aaro Test',
        email: 'finnish.arrow.translation@yopmail.com',
      },
      quantity: {
        current: 26,
        requested: null,
      },
      offer: {
        name: 'Microsoft 365 Business Standard',
        arrowsphereSku: 'CFQ7TTC0LDPB:0001',
      },
      priceband: {
        arrowsphereSku: 'MSCSP_CFQ7TTC0LDPB-0001_FR_EUR_1_720_8640',
        vendorSku: 'CFQ7TTC0LDPB:0001',
      },
      reseller: {
        name: 'Arrow ECS France Test',
        ref: 'XSP17727',
      },
      customer: {
        name: 'Arrow ECS France Test',
        ref: 'XSP17727',
      },
    },
  },
];

export const GET_EVENTS_QUERY: LicensesEventGetEventsQueryType = {
  [LicensesEventQueries.GET_EVENTS]: {
    [LicensesEventGetEventsQueryField.ARGS]: {
      paginate: {
        page: 1,
        perPage: 20,
      },
      searchBody: {
        aggregatorFilter: ['event.partnerRef'],
        exclusionFilters: [
          {
            names: 'event.orderRef',
            values: ['XSP999'],
          },
        ],
        filters: [
          {
            names: 'event.actionType',
            values: ['renew'],
          },
        ],
        highlight: true,
        keywordByFields: [
          {
            name: 'event.customer.name',
            values: ['The compant'],
          },
        ],
        keywords: 'Office',
        sort: [
          {
            name: 'event.customer.name',
            order: LicensesEventSortDirection.asc,
          },
        ],
      },
    },
    events: {
      event: {
        friendlyName: true,
        id: true,
        partnerRef: true,
        orderRef: true,
        createdAt: true,
        marketplace: true,
        vendor: {
          name: true,
          code: true,
        },
        uom: true,
        periodicity: true,
        term: true,
        trial: true,
        statusCode: true,
        actionType: true,
        eventDetails: {
          message: true,
          source: true,
        },
        user: {
          name: true,
          email: true,
        },
        quantity: {
          current: true,
          requested: true,
        },
        offer: {
          name: true,
          arrowsphereSku: true,
        },
        priceband: {
          arrowsphereSku: true,
          vendorSku: true,
        },
        reseller: {
          name: true,
          ref: true,
        },
        customer: {
          name: true,
          ref: true,
        },
      },
    },
    pagination: {
      currentPage: true,
      perPage: true,
      total: true,
      totalPage: true,
    },
  },
};

export const GET_EVENTS_GQL =
  '{getEvents (paginate: {page: 1, perPage: 20}, searchBody: {aggregatorFilter: ["event.partnerRef"], exclusionFilters: [{names: "event.orderRef", values: ["XSP999"]}], filters: [{names: "event.actionType", values: ["renew"]}], highlight: true, keywordByFields: [{name: "event.customer.name", values: ["The compant"]}], keywords: "Office", sort: [{name: "event.customer.name", order: "asc"}]}) { events { event { friendlyName id partnerRef orderRef createdAt marketplace vendor { name code } uom periodicity term trial statusCode actionType eventDetails { message source } user { name email } quantity { current requested } offer { name arrowsphereSku } priceband { arrowsphereSku vendorSku } reseller { name ref } customer { name ref } } } pagination { currentPage perPage total totalPage } }}';
