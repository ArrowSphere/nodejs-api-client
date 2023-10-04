import { AbstractEntity } from '../../../../abstractEntity';
import { SecurityStandards, SecurityStandardsType } from './securityStandards';

export enum StandardsFields {
  COLUMN_STANDARDS = 'standards',
  COLUMN_UPDATED_AT = 'updatedAt',
}

export type StandardsType = {
  [StandardsFields.COLUMN_STANDARDS]: Array<SecurityStandardsType>;
  [StandardsFields.COLUMN_UPDATED_AT]: string;
};

export class Standards extends AbstractEntity<StandardsType> {
  readonly #standards: Array<SecurityStandards>;
  readonly #updatedAt: string;

  public constructor(standardsDataInput: StandardsType) {
    super(standardsDataInput);

    this.#standards = standardsDataInput[StandardsFields.COLUMN_STANDARDS].map(
      (securityStandards: SecurityStandardsType) =>
        new SecurityStandards(securityStandards),
    );
    this.#updatedAt = standardsDataInput[StandardsFields.COLUMN_UPDATED_AT];
  }

  get standards(): Array<SecurityStandards> {
    return this.#standards;
  }

  get updatedAt(): string {
    return this.#updatedAt;
  }

  public toJSON(): StandardsType {
    return {
      [StandardsFields.COLUMN_STANDARDS]: this.standards.map(
        (securityStandards: SecurityStandards) => securityStandards.toJSON(),
      ),
      [StandardsFields.COLUMN_UPDATED_AT]: this.updatedAt,
    };
  }
}
