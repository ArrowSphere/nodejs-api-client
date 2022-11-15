import { AbstractEntity } from '../../../abstractEntity';
import { SecurityChecks, SecurityChecksType } from './securityChecks';

export enum ChecksFields {
  COLUMN_CHECKS = 'checks',
  COLUMN_UPDATED_AT = 'updatedAt',
}

export type ChecksType = {
  [ChecksFields.COLUMN_CHECKS]: Array<SecurityChecksType>;
  [ChecksFields.COLUMN_UPDATED_AT]: string;
};

export class Checks extends AbstractEntity<ChecksType> {
  readonly #checks: Array<SecurityChecks>;
  readonly #updatedAt: string;

  public constructor(checksDataInput: ChecksType) {
    super(checksDataInput);

    this.#checks = checksDataInput[ChecksFields.COLUMN_CHECKS].map(
      (securityChecks: SecurityChecksType) =>
        new SecurityChecks(securityChecks),
    );
    this.#updatedAt = checksDataInput[ChecksFields.COLUMN_UPDATED_AT];
  }

  get checks(): Array<SecurityChecks> {
    return this.#checks;
  }

  get updatedAt(): string {
    return this.#updatedAt;
  }

  public toJSON(): ChecksType {
    return {
      [ChecksFields.COLUMN_CHECKS]: this.checks.map(
        (securityChecks: SecurityChecks) => securityChecks.toJSON(),
      ),
      [ChecksFields.COLUMN_UPDATED_AT]: this.updatedAt,
    };
  }
}
