import {
  AbstractRestfulClient,
  Parameters,
  ParametersWithPaginationType,
  Payload,
} from '../abstractRestfulClient';
import { GetResult } from '../getResult';
import { Notifications } from './entities/notifications';
import { Total } from './entities/total';

export enum ListParametersFields {
  COLUMN_CREATED = 'created',
  COLUMN_HAS_BEEN_READ = 'hasBeenRead',
  COLUMN_SEARCH_AFTER = 'searchAfter',
}

export type ListParametersType = ParametersWithPaginationType & {
  [ListParametersFields.COLUMN_CREATED]?: string;
  [ListParametersFields.COLUMN_HAS_BEEN_READ]?: string;
  [ListParametersFields.COLUMN_SEARCH_AFTER]?: string;
};

export enum CreatePayloadFields {
  COLUMN_USERNAME = 'username',
  COLUMN_SUBJECT = 'subject',
  COLUMN_CONTENT = 'content',
}

export type CreatePayloadType = {
  [CreatePayloadFields.COLUMN_USERNAME]: string;
  [CreatePayloadFields.COLUMN_SUBJECT]: string;
  [CreatePayloadFields.COLUMN_CONTENT]: string;
};

export class NotificationsClient extends AbstractRestfulClient {
  /**
   * The base path of the API
   */
  protected basePath = '/notification';

  public async list(
    parameters: ListParametersType = {},
  ): Promise<GetResult<Notifications>> {
    return new GetResult(Notifications, await this.get(parameters));
  }

  public async deleteAll(parameters: Parameters = {}): Promise<void> {
    return await this.delete(parameters);
  }

  public async getOne(
    notificationId: string,
    parameters: Parameters = {},
  ): Promise<GetResult<Notifications>> {
    this.path = `/${notificationId}`;

    return new GetResult(Notifications, await this.get(parameters));
  }

  public async deleteOne(
    notificationId: string,
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${notificationId}`;

    return await this.delete(parameters);
  }

  public async readAll(
    payload: Payload = {},
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = '/read';

    return await this.patch(payload, parameters);
  }

  public async readOne(
    notificationId: string,
    payload: Payload = {},
    parameters: Parameters = {},
  ): Promise<void> {
    this.path = `/${notificationId}/read`;

    return await this.patch(payload, parameters);
  }

  public async count(parameters: Parameters = {}): Promise<GetResult<Total>> {
    this.path = '/count';

    return new GetResult(Total, await this.get(parameters));
  }
}
