import { AbstractEntity } from '../../abstractEntity';

export enum TopicFields {
  COLUMN_ID = 'id',
  COLUMN_NAME = 'name',
  COLUMN_LABEL = 'label',
  COLUMN_PREMIUM = 'premium',
  COLUMN_DESCRIPTION = 'content',
  COLUMN_CLASSIFICATION = 'classification',
}

export type TopicType = {
  [TopicFields.COLUMN_ID]: number;
  [TopicFields.COLUMN_NAME]: string;
  [TopicFields.COLUMN_LABEL]: string;
  [TopicFields.COLUMN_PREMIUM]: boolean;
  [TopicFields.COLUMN_DESCRIPTION]: string;
  [TopicFields.COLUMN_CLASSIFICATION]: string;
};

export class Topic extends AbstractEntity<TopicType> {
  readonly #id: number;
  readonly #name: string;
  readonly #label: string;
  readonly #premium: boolean;
  readonly #description: string;
  readonly #classification: string;

  constructor(input: TopicType) {
    super(input);

    this.#id = input[TopicFields.COLUMN_ID];
    this.#name = input[TopicFields.COLUMN_NAME];
    this.#label = input[TopicFields.COLUMN_LABEL];
    this.#premium = input[TopicFields.COLUMN_PREMIUM];
    this.#description = input[TopicFields.COLUMN_DESCRIPTION];
    this.#classification = input[TopicFields.COLUMN_CLASSIFICATION];
  }

  get id(): number {
    return this.#id;
  }

  get name(): string {
    return this.#name;
  }

  get label(): string {
    return this.#label;
  }

  get premium(): boolean {
    return this.#premium;
  }

  get description(): string {
    return this.#description;
  }

  get classification(): string {
    return this.#classification;
  }

  public toJSON(): TopicType {
    return {
      [TopicFields.COLUMN_ID]: this.id,
      [TopicFields.COLUMN_NAME]: this.name,
      [TopicFields.COLUMN_LABEL]: this.label,
      [TopicFields.COLUMN_PREMIUM]: this.premium,
      [TopicFields.COLUMN_DESCRIPTION]: this.description,
      [TopicFields.COLUMN_CLASSIFICATION]: this.classification,
    };
  }
}

export type TopicsType = Array<TopicType>;
export class Topics extends AbstractEntity<TopicsType> {
  readonly #list: Topic[];

  constructor(input: TopicsType) {
    super(input);
    this.#list = input.map((item) => new Topic(item));
  }

  get list(): Topic[] {
    return this.#list;
  }

  public toJSON(): TopicsType {
    return this.list.map((item) => item.toJSON());
  }
}
