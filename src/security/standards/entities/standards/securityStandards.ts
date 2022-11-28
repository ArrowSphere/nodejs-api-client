import { AbstractEntity } from '../../../../abstractEntity';

export enum SecurityStandardsFields {
  COLUMN_FAILED = 'failed',
  COLUMN_NAME = 'name',
  COLUMN_PASSED = 'passed',
  COLUMN_REFERENCE = 'reference',
  COLUMN_SCORE = 'score',
  COLUMN_TOTAL = 'total',
}

export type SecurityStandardsType = {
  [SecurityStandardsFields.COLUMN_FAILED]: number;
  [SecurityStandardsFields.COLUMN_NAME]: string;
  [SecurityStandardsFields.COLUMN_PASSED]: number;
  [SecurityStandardsFields.COLUMN_REFERENCE]: string;
  [SecurityStandardsFields.COLUMN_SCORE]: number;
  [SecurityStandardsFields.COLUMN_TOTAL]: number;
};

export class SecurityStandards extends AbstractEntity<SecurityStandardsType> {
  readonly #failed: number;
  readonly #name: string;
  readonly #passed: number;
  readonly #reference: string;
  readonly #score: number;
  readonly #total: number;

  public constructor(standardsSecurityDataInput: SecurityStandardsType) {
    super(standardsSecurityDataInput);

    this.#failed =
      standardsSecurityDataInput[SecurityStandardsFields.COLUMN_FAILED];
    this.#name =
      standardsSecurityDataInput[SecurityStandardsFields.COLUMN_NAME];
    this.#passed =
      standardsSecurityDataInput[SecurityStandardsFields.COLUMN_PASSED];
    this.#reference =
      standardsSecurityDataInput[SecurityStandardsFields.COLUMN_REFERENCE];
    this.#score =
      standardsSecurityDataInput[SecurityStandardsFields.COLUMN_SCORE];
    this.#total =
      standardsSecurityDataInput[SecurityStandardsFields.COLUMN_TOTAL];
  }

  get failed(): number {
    return this.#failed;
  }

  get name(): string {
    return this.#name;
  }

  get passed(): number {
    return this.#passed;
  }

  get reference(): string {
    return this.#reference;
  }

  get score(): number {
    return this.#score;
  }

  get total(): number {
    return this.#total;
  }

  public toJSON(): SecurityStandardsType {
    return {
      [SecurityStandardsFields.COLUMN_FAILED]: this.failed,
      [SecurityStandardsFields.COLUMN_NAME]: this.name,
      [SecurityStandardsFields.COLUMN_PASSED]: this.passed,
      [SecurityStandardsFields.COLUMN_REFERENCE]: this.reference,
      [SecurityStandardsFields.COLUMN_SCORE]: this.score,
      [SecurityStandardsFields.COLUMN_TOTAL]: this.total,
    };
  }
}
