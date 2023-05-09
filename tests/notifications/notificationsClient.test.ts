import { GetResult, NotificationsClient, PublicApiClient } from '../../src';
import nock from 'nock';
import {
  PAYLOAD_COUNT_NOTIFICATION,
  PAYLOAD_LIST_ALL_NOTIFICATIONS,
  PAYLOAD_ONE_NOTIFICATION,
} from './mocks/notifications.mocks';
import { expect } from 'chai';
import { beforeEach } from 'mocha';

export const NOTIFICATIONS_URL = 'https://notifications.localhost';
export const TEST_NOTIFICATIONS_URL = '/notification';
export const TEST_NOTIFICATIONS_URL_READ = '/notification/read';
export const TEST_NOTIFICATIONS_URL_PARAMS = new RegExp('/notification/*');
export const TEST_NOTIFICATIONS_URL_PARAMS_READ = new RegExp(
  '/notification/.*./read',
);
export const TEST_NOTIFICATIONS_URL_COUNT = new RegExp('/notification/count');

let client: NotificationsClient;
describe('NotificationsClient', () => {
  beforeEach(() => {
    client = new PublicApiClient()
      .getNotificationsClient()
      .setUrl(NOTIFICATIONS_URL);
  });

  describe('list', () => {
    it('should list notification', async () => {
      nock(NOTIFICATIONS_URL)
        .get(TEST_NOTIFICATIONS_URL)
        .reply(200, PAYLOAD_LIST_ALL_NOTIFICATIONS);

      const result = await client.list();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.be.deep.equals(PAYLOAD_LIST_ALL_NOTIFICATIONS);
    });
  });

  describe('deleteAll', () => {
    it('should delete all notifications', async () => {
      nock(NOTIFICATIONS_URL).delete(TEST_NOTIFICATIONS_URL).reply(204);

      await client.deleteAll();
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('getNotification', () => {
    it('should get one notification', async () => {
      nock(NOTIFICATIONS_URL)
        .get(TEST_NOTIFICATIONS_URL_PARAMS)
        .reply(200, PAYLOAD_ONE_NOTIFICATION);

      const result = await client.getOne('XXXXXXXXXXX');
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.be.deep.equals(PAYLOAD_ONE_NOTIFICATION);
    });
  });

  describe('deleteNotification', () => {
    it('should list notification without parameters', async () => {
      nock(NOTIFICATIONS_URL).delete(TEST_NOTIFICATIONS_URL_PARAMS).reply(204);

      await client.deleteOne('XXXXXXXXXX');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('readAll', () => {
    it('should read all notifications', async () => {
      nock(NOTIFICATIONS_URL).patch(TEST_NOTIFICATIONS_URL_READ).reply(204);

      await client.readAll();
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('read', () => {
    it('should read one notifications', async () => {
      nock(NOTIFICATIONS_URL)
        .patch(TEST_NOTIFICATIONS_URL_PARAMS_READ)
        .reply(204);

      await client.readOne('XXXXXXXXXX');
      expect(nock.isDone()).to.be.true;
    });
  });

  describe('count', () => {
    it('should count notifications', async () => {
      nock(NOTIFICATIONS_URL)
        .get(TEST_NOTIFICATIONS_URL_COUNT)
        .reply(200, PAYLOAD_COUNT_NOTIFICATION);

      const result = await client.count();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.be.deep.equals(PAYLOAD_COUNT_NOTIFICATION);
    });
  });
});
