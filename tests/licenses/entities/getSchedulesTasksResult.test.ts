import { expect } from 'chai';
import { PAYLOAD_GET_SCHEDULES_TASKS } from '../licenses.mocks';
import { GetSchedulesTasksResult } from '../../../src';

describe('Get Schedules tasks Result', () => {
  it('GetSchedulesTasksResult toJSON', () => {
    const result = new GetSchedulesTasksResult(PAYLOAD_GET_SCHEDULES_TASKS);
    expect(result.toJSON()).to.deep.equal(PAYLOAD_GET_SCHEDULES_TASKS);
  });
});
