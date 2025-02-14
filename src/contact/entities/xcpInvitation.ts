import { AbstractEntity } from '../../abstractEntity';

export enum XcpInvitationFields {
  COLUMN_ID = 'id',
  COLUMN_CODE = 'code',
  COLUMN_CREATED_AT = 'created_at',
  COLUMN_UPDATED_AT = 'updated_at',
  COLUMN_SENDER_ID = 'sender_id',
  COLUMN_CONTACT_ID = 'contact_id',
  COLUMN_POLICY = 'policy',
}

export type XcpInvitationType = {
  [XcpInvitationFields.COLUMN_ID]: number;
  [XcpInvitationFields.COLUMN_CODE]: string;
  [XcpInvitationFields.COLUMN_CREATED_AT]: string;
  [XcpInvitationFields.COLUMN_UPDATED_AT]: string;
  [XcpInvitationFields.COLUMN_SENDER_ID]: number;
  [XcpInvitationFields.COLUMN_CONTACT_ID]: number;
  [XcpInvitationFields.COLUMN_POLICY]: string;
};

export class XcpInvitation extends AbstractEntity<XcpInvitationType> {
  readonly #id: number;
  readonly #code: string;
  readonly #created_at: string;
  readonly #updated_at: string;
  readonly #sender_id: number;
  readonly #contact_id: number;
  readonly #policy: string;

  public constructor(xcpInvitationDataInput: XcpInvitationType) {
    super(xcpInvitationDataInput);

    this.#id = xcpInvitationDataInput[XcpInvitationFields.COLUMN_ID];
    this.#code = xcpInvitationDataInput[XcpInvitationFields.COLUMN_CODE];
    this.#created_at =
      xcpInvitationDataInput[XcpInvitationFields.COLUMN_CREATED_AT];
    this.#updated_at =
      xcpInvitationDataInput[XcpInvitationFields.COLUMN_UPDATED_AT];
    this.#sender_id =
      xcpInvitationDataInput[XcpInvitationFields.COLUMN_SENDER_ID];
    this.#contact_id =
      xcpInvitationDataInput[XcpInvitationFields.COLUMN_CONTACT_ID];
    this.#policy = xcpInvitationDataInput[XcpInvitationFields.COLUMN_POLICY];
  }

  get id(): number {
    return this.#id;
  }
  get code(): string {
    return this.#code;
  }
  get created_at(): string {
    return this.#created_at;
  }
  get updated_at(): string {
    return this.#updated_at;
  }
  get sender_id(): number {
    return this.#sender_id;
  }
  get contact_id(): number {
    return this.#contact_id;
  }
  get policy(): string {
    return this.#policy;
  }

  public toJSON(): XcpInvitationType {
    return {
      [XcpInvitationFields.COLUMN_ID]: this.id,
      [XcpInvitationFields.COLUMN_CODE]: this.code,
      [XcpInvitationFields.COLUMN_CREATED_AT]: this.created_at,
      [XcpInvitationFields.COLUMN_UPDATED_AT]: this.updated_at,
      [XcpInvitationFields.COLUMN_SENDER_ID]: this.sender_id,
      [XcpInvitationFields.COLUMN_CONTACT_ID]: this.contact_id,
      [XcpInvitationFields.COLUMN_POLICY]: this.policy,
    };
  }
}
