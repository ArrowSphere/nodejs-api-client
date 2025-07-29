import {
  GetData,
  GetResultFields,
  TopicsType,
  TopicFields,
} from '../../../src';

export const LIST_TOPIC_RESPONSE: GetData<TopicsType> = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: [
    {
      [TopicFields.COLUMN_ID]: 1,
      [TopicFields.COLUMN_NAME]: 'platformIssue',
      [TopicFields.COLUMN_LABEL]: 'label',
      [TopicFields.COLUMN_PREMIUM]: true,
      [TopicFields.COLUMN_DESCRIPTION]: 'description',
      [TopicFields.COLUMN_CLASSIFICATION]: 'PaaS',
    },
  ],
};
