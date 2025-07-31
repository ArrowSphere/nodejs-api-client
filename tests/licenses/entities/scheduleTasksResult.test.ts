import { expect } from 'chai';
import { ScheduleTasksResult } from '../../../src';

describe('ScheduleTasksResult', () => {
  describe('parse an empty response, eventBridge case', () => {
    it('should handle empty object', function () {
      const result: ScheduleTasksResult = new ScheduleTasksResult({});
      expect(result.toJSON()).to.eqls({});
    });

    it('should handle undefined object', function () {
      const result: ScheduleTasksResult = new ScheduleTasksResult(undefined);
      expect(result.toJSON()).to.eqls({});
    });
  });

  describe('parse an plain response, legacy case', () => {
    it('should handle plain object', function () {
      const result: ScheduleTasksResult = new ScheduleTasksResult({
        scheduleTaskId: 1234,
      });
      expect(result.toJSON()).to.eqls({ scheduleTaskId: 1234 });
    });
  });
});
