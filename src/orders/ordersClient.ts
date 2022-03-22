import { AbstractClient } from '../abstractClient';

export enum ReferenceLinkFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_LINK = 'link',
}

export type ReferenceLinkType = {
  [ReferenceLinkFields.COLUMN_REFERENCE]: string;
  [ReferenceLinkFields.COLUMN_LINK]: string;
};

export class OrdersClient extends AbstractClient {
  /**
   * The base path of the Orders API
   */
  private ROOT_PATH = '/orders/';
}
