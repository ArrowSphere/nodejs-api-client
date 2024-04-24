import { expect } from 'chai';
import { PAYLOAD_GET_SCHEDULED_TASKS } from '../licenses.mocks';
import { GetScheduledTasksResult } from '../../../src';

describe('Get Scheduled tasks Result', () => {
  it('GetScheduledTasksResult toJSON', () => {
    const result = new GetScheduledTasksResult(PAYLOAD_GET_SCHEDULED_TASKS);
    expect(result.toJSON()).to.deep.equal(PAYLOAD_GET_SCHEDULED_TASKS);
  });
});
