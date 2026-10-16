import { AbstractEntity } from '../../abstractEntity';
import { Quote, QuoteData } from './Quote';

export type QuoteListData = Array<QuoteData>;

export class QuoteList extends AbstractEntity<QuoteListData> {
  readonly #quotes: Array<Quote>;

  public constructor(data: QuoteListData) {
    super(data);

    this.#quotes = data.map((quote: QuoteData) => new Quote(quote));
  }

  get quotes(): Array<Quote> {
    return this.#quotes;
  }

  public toJSON(): QuoteListData {
    return this.quotes.map((quote: Quote) => quote.toJSON());
  }
}
