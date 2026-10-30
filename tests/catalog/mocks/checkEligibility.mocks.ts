import {
  CheckEligibilityItemsType,
  CheckEligibilityPayload,
  GetData,
} from '../../../src';

export const CHECK_ELIGIBILITY_PAYLOAD: CheckEligibilityPayload = {
  resellerReference: 'XSP1705147',
  customerReference: 'XSP1705148',
  items: [
    {
      vendorProgram: 'MSCSP',
      quantity: 5,
      pricebandArrowsphereSku: 'MSCSP_CFQ7TTC0LFLZ-0002_BE_EUR_1_8640_8640',
    },
  ],
};

export const CHECK_ELIGIBILITY_RESPONSE: GetData<CheckEligibilityItemsType> = {
  status: 200,
  data: [
    {
      quantity: 5,
      pricebandArrowsphereSku: 'MSCSP_CFQ7TTC0LFLZ-0002_BE_EUR_1_8640_8640',
      isEligible: true,
      prices: {
        arrow: 12.12,
        partner: 13.5,
        endCustomer: 14.2,
        retail: 15.0,
      },
      pricingRules: [{ tier: 2, type: 'rate', rateType: 'uplift', value: 0.1 }],
      pricesWithoutPromotion: {
        arrow: 12.5,
        partner: 13.9,
        endCustomer: 14.6,
        retail: 15.0,
      },
      growthMargin: {
        growthMarginId: '39NFJQT119V9:0002:084R5MQ9QF55',
        discountType: 'PercentDiscount',
        incrementalMarginRate: 0.15,
      },
    },
  ],
};
