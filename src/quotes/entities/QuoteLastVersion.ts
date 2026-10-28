import { AbstractEntity } from '../../abstractEntity';

export enum QuoteLastVersionFields {
  VERSION = 'version',
  DATE_UPDATE = 'dateUpdate',
}

export type QuoteLastVersionData = {
  [QuoteLastVersionFields.VERSION]?: number;
  [QuoteLastVersionFields.DATE_UPDATE]?: string;
};

export class QuoteLastVersion extends AbstractEntity<QuoteLastVersionData> {
  readonly #version?: number;
  readonly #dateUpdate?: string;

  public constructor(data: QuoteLastVersionData) {
    super(data);

    this.#version = data[QuoteLastVersionFields.VERSION];
    this.#dateUpdate = data[QuoteLastVersionFields.DATE_UPDATE];
  }

  get version(): number | undefined {
    return this.#version;
  }

  get dateUpdate(): string | undefined {
    return this.#dateUpdate;
  }

  public toJSON(): QuoteLastVersionData {
    return {
      [QuoteLastVersionFields.VERSION]: this.version,
      [QuoteLastVersionFields.DATE_UPDATE]: this.dateUpdate,
    };
  }
}
