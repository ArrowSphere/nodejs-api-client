import { AbstractEntity } from '../../abstractEntity';

export enum QuoteLastVersionFields {
  VERSION = 'version',
  DATE_UPDATE = 'dateUpdate',
}

export type QuoteLastVersionType = {
  [QuoteLastVersionFields.VERSION]?: number;
  [QuoteLastVersionFields.DATE_UPDATE]?: string;
};

export class QuoteLastVersion extends AbstractEntity<QuoteLastVersionType> {
  readonly #version?: number;
  readonly #dateUpdate?: string;

  public constructor(data: QuoteLastVersionType) {
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

  public toJSON(): QuoteLastVersionType {
    return {
      [QuoteLastVersionFields.VERSION]: this.version,
      [QuoteLastVersionFields.DATE_UPDATE]: this.dateUpdate,
    };
  }
}
