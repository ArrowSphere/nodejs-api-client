import { AbstractEntity } from '../../../../abstractEntity';

export enum RulesFields {
  COLUMN_LOCATIONS = 'locations',
  COLUMN_ROLES = 'roles',
  COLUMN_MARKETPLACES = 'marketplaces',
  COLUMN_SUBSCRIPTIONS = 'subscriptions',
  COLUMN_RESELLERS = 'resellers',
  COLUMN_END_CUSTOMERS = 'endCustomers',
}

export type RulesType = {
  [RulesFields.COLUMN_LOCATIONS]: string[];
  [RulesFields.COLUMN_ROLES]: string[];
  [RulesFields.COLUMN_MARKETPLACES]: string[];
  [RulesFields.COLUMN_SUBSCRIPTIONS]: string[];
  [RulesFields.COLUMN_RESELLERS]: string[];
  [RulesFields.COLUMN_END_CUSTOMERS]: string[];
};

export class Rules extends AbstractEntity<RulesType> {
  readonly #locations: string[];
  readonly #roles: string[];
  readonly #marketplaces: string[];
  readonly #subscriptions: string[];
  readonly #resellers: string[];
  readonly #endCustomers: string[];

  constructor(rulesInput: RulesType) {
    super(rulesInput);
    this.#locations = rulesInput[RulesFields.COLUMN_LOCATIONS];
    this.#roles = rulesInput[RulesFields.COLUMN_ROLES];
    this.#marketplaces = rulesInput[RulesFields.COLUMN_MARKETPLACES];
    this.#subscriptions = rulesInput[RulesFields.COLUMN_SUBSCRIPTIONS];
    this.#resellers = rulesInput[RulesFields.COLUMN_RESELLERS];
    this.#endCustomers = rulesInput[RulesFields.COLUMN_END_CUSTOMERS];
  }

  get locations(): string[] {
    return this.#locations;
  }

  get roles(): string[] {
    return this.#roles;
  }

  get marketplaces(): string[] {
    return this.#marketplaces;
  }

  get subscriptions(): string[] {
    return this.#subscriptions;
  }

  get resellers(): string[] {
    return this.#resellers;
  }

  get endCustomers(): string[] {
    return this.#endCustomers;
  }

  public toJSON(): RulesType {
    return {
      [RulesFields.COLUMN_LOCATIONS]: this.locations,
      [RulesFields.COLUMN_ROLES]: this.roles,
      [RulesFields.COLUMN_MARKETPLACES]: this.marketplaces,
      [RulesFields.COLUMN_SUBSCRIPTIONS]: this.subscriptions,
      [RulesFields.COLUMN_RESELLERS]: this.resellers,
      [RulesFields.COLUMN_END_CUSTOMERS]: this.endCustomers,
    };
  }
}
