import {
  GetData,
  GetResultFields,
  IssueOfferFields,
  IssueSupportPlanFields,
  IssueType,
  IssueFields,
  IssueCreatedByFields,
  IssueAdditionalDataFields,
  IssuesType,
} from '../../../src';

export const LIST_ISSUE_RESPONSE: GetData<IssuesType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [IssueFields.COLUMN_ID]: 'id',
      [IssueFields.COLUMN_TITLE]: 'title',
      [IssueFields.COLUMN_DESCRIPTION]: 'description',
      [IssueFields.COLUMN_TOPIC_ID]: 'topicId',
      [IssueFields.COLUMN_END_CUSTOMER_REF]: 'endCustomerRef',
      [IssueFields.COLUMN_LANGUAGE]: 'lang',
      [IssueFields.COLUMN_OFFER]: {
        [IssueOfferFields.COLUMN_SKU]: 'sku',
        [IssueOfferFields.COLUMN_NAME]: 'name',
        [IssueOfferFields.COLUMN_VENDOR]: 'vendor',
      },
      [IssueFields.COLUMN_PRIORITY]: 1,
      [IssueFields.COLUMN_STATUS]: 'status',
      [IssueFields.COLUMN_CREATED_BY]: {
        [IssueCreatedByFields.COLUMN_FIRST_NAME]: 'firstName',
        [IssueCreatedByFields.COLUMN_LAST_NAME]: 'lastName',
        [IssueCreatedByFields.COLUMN_EMAIL]: 'email',
        [IssueCreatedByFields.COLUMN_PHONE]: 'phone',
      },
      [IssueFields.COLUMN_SUPPORT_PLAN]: {
        [IssueSupportPlanFields.COLUMN_SKU]: 'sku',
        [IssueSupportPlanFields.COLUMN_LABEL]: 'label',
        [IssueSupportPlanFields.COLUMN_SOURCE_PORTAL]: 'sourcePortal',
      },
      [IssueFields.COLUMN_PROGRAM]: 'program',
      [IssueFields.COLUMN_ADDITIONAL_DATA]: [
        {
          [IssueAdditionalDataFields.COLUMN_NAME]: 'name',
          [IssueAdditionalDataFields.COLUMN_VALUE]: 'value',
        },
      ],
      [IssueFields.COLUMN_CREATED]: '2020-02-01T19:00:00.000Z',
      [IssueFields.COLUMN_UPDATED]: '2020-02-01T19:00:00.000Z',
    },
    {
      [IssueFields.COLUMN_ID]: 'id',
      [IssueFields.COLUMN_TITLE]: 'title',
      [IssueFields.COLUMN_DESCRIPTION]: 'description',
      [IssueFields.COLUMN_TOPIC_ID]: 'topicId',
      [IssueFields.COLUMN_END_CUSTOMER_REF]: 'endCustomerRef',
      [IssueFields.COLUMN_LANGUAGE]: 'lang',
      [IssueFields.COLUMN_OFFER]: {
        [IssueOfferFields.COLUMN_SKU]: 'sku',
        [IssueOfferFields.COLUMN_NAME]: 'name',
        [IssueOfferFields.COLUMN_VENDOR]: 'vendor',
      },
      [IssueFields.COLUMN_PRIORITY]: 1,
      [IssueFields.COLUMN_STATUS]: 'status',
      [IssueFields.COLUMN_CREATED_BY]: {
        [IssueCreatedByFields.COLUMN_FIRST_NAME]: 'firstName',
        [IssueCreatedByFields.COLUMN_LAST_NAME]: 'lastName',
        [IssueCreatedByFields.COLUMN_EMAIL]: 'email',
        [IssueCreatedByFields.COLUMN_PHONE]: 'phone',
      },
      [IssueFields.COLUMN_SUPPORT_PLAN]: {
        [IssueSupportPlanFields.COLUMN_SKU]: 'sku',
        [IssueSupportPlanFields.COLUMN_LABEL]: 'label',
        [IssueSupportPlanFields.COLUMN_SOURCE_PORTAL]: 'sourcePortal',
      },
      [IssueFields.COLUMN_PROGRAM]: 'program',
      [IssueFields.COLUMN_ADDITIONAL_DATA]: [
        {
          [IssueAdditionalDataFields.COLUMN_NAME]: 'name',
          [IssueAdditionalDataFields.COLUMN_VALUE]: 'value',
        },
      ],
      [IssueFields.COLUMN_CREATED]: '2020-02-01T19:00:00.000Z',
      [IssueFields.COLUMN_UPDATED]: '2020-02-01T19:00:00.000Z',
    },
  ],
};

export const GET_ISSUE_RESPONSE: GetData<IssueType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [IssueFields.COLUMN_ID]: 'id',
    [IssueFields.COLUMN_TITLE]: 'title',
    [IssueFields.COLUMN_DESCRIPTION]: 'description',
    [IssueFields.COLUMN_TOPIC_ID]: 'topicId',
    [IssueFields.COLUMN_END_CUSTOMER_REF]: 'endCustomerRef',
    [IssueFields.COLUMN_LANGUAGE]: 'lang',
    [IssueFields.COLUMN_OFFER]: {
      [IssueOfferFields.COLUMN_SKU]: 'sku',
      [IssueOfferFields.COLUMN_NAME]: 'name',
      [IssueOfferFields.COLUMN_VENDOR]: 'vendor',
    },
    [IssueFields.COLUMN_PRIORITY]: 1,
    [IssueFields.COLUMN_STATUS]: 'status',
    [IssueFields.COLUMN_CREATED_BY]: {
      [IssueCreatedByFields.COLUMN_FIRST_NAME]: 'firstName',
      [IssueCreatedByFields.COLUMN_LAST_NAME]: 'lastName',
      [IssueCreatedByFields.COLUMN_EMAIL]: 'email',
      [IssueCreatedByFields.COLUMN_PHONE]: 'phone',
    },
    [IssueFields.COLUMN_SUPPORT_PLAN]: {
      [IssueSupportPlanFields.COLUMN_SKU]: 'sku',
      [IssueSupportPlanFields.COLUMN_LABEL]: 'label',
      [IssueSupportPlanFields.COLUMN_SOURCE_PORTAL]: 'sourcePortal',
    },
    [IssueFields.COLUMN_PROGRAM]: 'program',
    [IssueFields.COLUMN_ADDITIONAL_DATA]: [
      {
        [IssueAdditionalDataFields.COLUMN_NAME]: 'name',
        [IssueAdditionalDataFields.COLUMN_VALUE]: 'value',
      },
    ],
    [IssueFields.COLUMN_CREATED]: '2020-02-01T19:00:00.000Z',
    [IssueFields.COLUMN_UPDATED]: '2020-02-01T19:00:00.000Z',
  },
};
