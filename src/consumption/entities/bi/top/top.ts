import { AbstractEntity } from '../../../../abstractEntity';

export enum TopFields {
  COLUMN_RANK = 'rank',
  COLUMN_METRIC = 'metric',
  COLUMN_NAME = 'name',
  COLUMN_REF = 'ref',
}

export type TopType = {
  [TopFields.COLUMN_RANK]: string;
  [TopFields.COLUMN_METRIC]: number;
  [TopFields.COLUMN_NAME]: string;
  [TopFields.COLUMN_REF]: string;
};

export class Top extends AbstractEntity<TopType> {
  readonly #rank: string;
  readonly #metric: number;
  readonly #name: string;
  readonly #ref: string;

  public constructor(topResponse: TopType) {
    super(topResponse);

    this.#rank = topResponse[TopFields.COLUMN_RANK];
    this.#metric = topResponse[TopFields.COLUMN_METRIC];
    this.#name = topResponse[TopFields.COLUMN_NAME];
    this.#ref = topResponse[TopFields.COLUMN_REF];
  }

  get rank(): string {
    return this.#rank;
  }

  get metric(): number {
    return this.#metric;
  }

  get name(): string {
    return this.#name;
  }

  get ref(): string {
    return this.#ref;
  }

  public toJSON(): TopType {
    return {
      [TopFields.COLUMN_RANK]: this.rank,
      [TopFields.COLUMN_METRIC]: this.metric,
      [TopFields.COLUMN_NAME]: this.name,
      [TopFields.COLUMN_REF]: this.ref,
    };
  }
}
