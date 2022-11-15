import { AbstractEntity } from '../../../abstractEntity';

export enum SecurityChecksFields {
  COLUMN_DESCRIPTION = 'description',
  COLUMN_FLAGGED = 'flagged',
  COLUMN_IS_FAILED = 'isFailed',
  COLUMN_METADATA = 'metadata',
  COLUMN_NAME = 'name',
  COLUMN_PROCESSED = 'processed',
  COLUMN_REFERENCE = 'reference',
  COLUMN_SCORE = 'score',
  COLUMN_SEVERITY = 'severity',
}

export type SecurityChecksType = {
  [SecurityChecksFields.COLUMN_DESCRIPTION]: string;
  [SecurityChecksFields.COLUMN_FLAGGED]: number;
  [SecurityChecksFields.COLUMN_IS_FAILED]: boolean;
  [SecurityChecksFields.COLUMN_METADATA]: Array<string>;
  [SecurityChecksFields.COLUMN_NAME]: string;
  [SecurityChecksFields.COLUMN_PROCESSED]: number;
  [SecurityChecksFields.COLUMN_REFERENCE]: string;
  [SecurityChecksFields.COLUMN_SCORE]: number;
  [SecurityChecksFields.COLUMN_SEVERITY]: string;
};

export class SecurityChecks extends AbstractEntity<SecurityChecksType> {
  readonly #description: string;
  readonly #flagged: number;
  readonly #isFailed: boolean;
  readonly #metadata: Array<string>;
  readonly #name: string;
  readonly #processed: number;
  readonly #reference: string;
  readonly #score: number;
  readonly #severity: string;

  public constructor(securityChecksDataInput: SecurityChecksType) {
    super(securityChecksDataInput);

    this.#description =
      securityChecksDataInput[SecurityChecksFields.COLUMN_DESCRIPTION];
    this.#flagged =
      securityChecksDataInput[SecurityChecksFields.COLUMN_FLAGGED];
    this.#isFailed =
      securityChecksDataInput[SecurityChecksFields.COLUMN_IS_FAILED];
    this.#metadata =
      securityChecksDataInput[SecurityChecksFields.COLUMN_METADATA];
    this.#name = securityChecksDataInput[SecurityChecksFields.COLUMN_NAME];
    this.#processed =
      securityChecksDataInput[SecurityChecksFields.COLUMN_PROCESSED];
    this.#reference =
      securityChecksDataInput[SecurityChecksFields.COLUMN_REFERENCE];
    this.#score = securityChecksDataInput[SecurityChecksFields.COLUMN_SCORE];
    this.#severity =
      securityChecksDataInput[SecurityChecksFields.COLUMN_SEVERITY];
  }

  get description(): string {
    return this.#description;
  }

  get flagged(): number {
    return this.#flagged;
  }

  get isFailed(): boolean {
    return this.#isFailed;
  }

  get metadata(): Array<string> {
    return this.#metadata;
  }

  get name(): string {
    return this.#name;
  }

  get processed(): number {
    return this.#processed;
  }

  get reference(): string {
    return this.#reference;
  }

  get score(): number {
    return this.#score;
  }

  get severity(): string {
    return this.#severity;
  }

  public toJSON(): SecurityChecksType {
    return {
      [SecurityChecksFields.COLUMN_DESCRIPTION]: this.description,
      [SecurityChecksFields.COLUMN_FLAGGED]: this.flagged,
      [SecurityChecksFields.COLUMN_IS_FAILED]: this.isFailed,
      [SecurityChecksFields.COLUMN_METADATA]: this.metadata,
      [SecurityChecksFields.COLUMN_NAME]: this.name,
      [SecurityChecksFields.COLUMN_PROCESSED]: this.processed,
      [SecurityChecksFields.COLUMN_REFERENCE]: this.reference,
      [SecurityChecksFields.COLUMN_SCORE]: this.score,
      [SecurityChecksFields.COLUMN_SEVERITY]: this.severity,
    };
  }
}
