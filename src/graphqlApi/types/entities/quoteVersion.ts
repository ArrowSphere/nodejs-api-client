import { QuoteItemType } from './quote';

export type QuoteVersion = {
  createdAt?: string;
  id?: number;
  items?: QuoteItemType[];
  updatedAt?: string;
  version?: string;
};
