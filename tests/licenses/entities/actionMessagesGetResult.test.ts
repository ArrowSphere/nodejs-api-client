import { expect } from 'chai';
import {
  ActionMessagesGetResult,
  ActionMessagesGetResultData,
  ActionMessagesGetResultFields,
} from '../../../src';

describe('ActionMessagesGetResult', () => {
  const ACTION_MESSAGE_PAYLOAD: ActionMessagesGetResultData = {
    [ActionMessagesGetResultFields.COLUMN_ACTION]: 'action',
    [ActionMessagesGetResultFields.COLUMN_MESSAGE]: 'message',
    [ActionMessagesGetResultFields.COLUMN_MAX_DECREASE]: 5,
    [ActionMessagesGetResultFields.COLUMN_SUPPORTED_UNTIL]: 'supported_until',
    [ActionMessagesGetResultFields.COLUMN_SUSPEND_DATE]: 'suspend_date',
  };

  const result = new ActionMessagesGetResult(ACTION_MESSAGE_PAYLOAD);

  describe('constructor', () => {
    it('sets a default value for object', function () {
      expect(result).to.be.instanceof(ActionMessagesGetResult);
    });
  });

  describe('toJSON', () => {
    it('sets a default value for toJSON function', function () {
      expect(result.toJSON()).to.eqls(ACTION_MESSAGE_PAYLOAD);
    });
  });
});
