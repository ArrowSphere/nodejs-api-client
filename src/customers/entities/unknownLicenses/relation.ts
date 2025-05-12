import { AbstractEntity } from '../../../abstractEntity';

export enum RelationFields {
  COLUMN_TYPE = 'type',
  COLUMN_PARTNER_REF = 'partnerRef',
  COLUMN_SCOPE = 'scope',
}

export type RelationType = {
  [RelationFields.COLUMN_TYPE]: string;
  [RelationFields.COLUMN_PARTNER_REF]?: string;
  [RelationFields.COLUMN_SCOPE]: string;
};

export class Relation extends AbstractEntity<RelationType> {
  readonly #type: string;
  readonly #partnerRef: string | undefined;
  readonly #scope: string;

  public constructor(relationDataInput: RelationType) {
    super(relationDataInput);

    this.#type = relationDataInput[RelationFields.COLUMN_TYPE];
    this.#partnerRef =
      relationDataInput[RelationFields.COLUMN_PARTNER_REF] ?? undefined;
    this.#scope = relationDataInput[RelationFields.COLUMN_SCOPE];
  }

  get type(): string {
    return this.#type;
  }

  get partnerRef(): string | undefined {
    return this.#partnerRef;
  }

  get scope(): string {
    return this.#scope;
  }

  public toJSON(): RelationType {
    return {
      [RelationFields.COLUMN_TYPE]: this.type,
      [RelationFields.COLUMN_PARTNER_REF]: this.partnerRef,
      [RelationFields.COLUMN_SCOPE]: this.scope,
    };
  }
}
