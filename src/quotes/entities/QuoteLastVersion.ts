import { AbstractEntity } from '../../abstractEntity';

export enum QuoteLastVersionFields {
  DATE_UPDATE = 'dateUpdate',
  VERSION = 'version',
}

export type QuoteLastVersionData = {
  [QuoteLastVersionFields.DATE_UPDATE]?: string;
  [QuoteLastVersionFields.VERSION]?: number;
};

export class QuoteLastVersion extends AbstractEntity<QuoteLastVersionData> {
  readonly #dateUpdate?: string;
  readonly #version?: number;

  public constructor(data: QuoteLastVersionData) {
    super(data);

    this.#dateUpdate = data[QuoteLastVersionFields.DATE_UPDATE];
    this.#version = data[QuoteLastVersionFields.VERSION];
  }

  get dateUpdate(): string | undefined {
    return this.#dateUpdate;
  }

  get version(): number | undefined {
    return this.#version;
  }

  public toJSON(): QuoteLastVersionData {
    return {
      [QuoteLastVersionFields.DATE_UPDATE]: this.dateUpdate,
      [QuoteLastVersionFields.VERSION]: this.version,
    };
  }
}
