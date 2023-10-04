import { AbstractEntity } from '../../../../abstractEntity';

export enum SecurityResourcesFields {
  COLUMN_STATUS = 'status',
  COLUMN_VALUES = 'values',
}

export type SecurityResourcesType = {
  [SecurityResourcesFields.COLUMN_STATUS]: string;
  [SecurityResourcesFields.COLUMN_VALUES]: Array<string>;
};

export class SecurityResources extends AbstractEntity<SecurityResourcesType> {
  readonly #status: string;
  readonly #values: Array<string>;

  public constructor(securityResources: SecurityResourcesType) {
    super(securityResources);

    this.#status = securityResources[SecurityResourcesFields.COLUMN_STATUS];
    this.#values = securityResources[SecurityResourcesFields.COLUMN_VALUES];
  }

  get status(): string {
    return this.#status;
  }

  get values(): Array<string> {
    return this.#values;
  }

  public toJSON(): SecurityResourcesType {
    return {
      [SecurityResourcesFields.COLUMN_STATUS]: this.status,
      [SecurityResourcesFields.COLUMN_VALUES]: this.values,
    };
  }
}
