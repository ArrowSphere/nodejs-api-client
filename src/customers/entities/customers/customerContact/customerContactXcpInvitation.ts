import { AbstractEntity } from '../../../../abstractEntity';

export enum CustomerContactXcpInvitationFields {
  COLUMN_POLICY = 'policy',
  COLUMN_CREATED_AT = 'createdAt',
  COLUMN_EXPIRED_AT = 'expiredAt',
}

export type CustomerContactXcpInvitationType = {
  [CustomerContactXcpInvitationFields.COLUMN_POLICY]?: string;
  [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]?: string;
  [CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT]?: string;
};

export class CustomerContactXcpInvitation extends AbstractEntity<CustomerContactXcpInvitationType> {
  readonly #policy?: string;
  readonly #createdAt?: string;
  readonly #expiredAt?: string;

  public constructor(
    getCustomerContactXcpInvitationDataInput: CustomerContactXcpInvitationType,
  ) {
    super(getCustomerContactXcpInvitationDataInput);

    this.#policy =
      getCustomerContactXcpInvitationDataInput[
        CustomerContactXcpInvitationFields.COLUMN_POLICY
      ] ?? undefined;
    this.#createdAt =
      getCustomerContactXcpInvitationDataInput[
        CustomerContactXcpInvitationFields.COLUMN_CREATED_AT
      ];
    this.#expiredAt =
      getCustomerContactXcpInvitationDataInput[
        CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT
      ];
  }

  get policy(): string | undefined {
    return this.#policy;
  }

  get createdAt(): string | undefined {
    return this.#createdAt;
  }

  get expiredAt(): string | undefined {
    return this.#expiredAt;
  }

  public toJSON(): CustomerContactXcpInvitationType {
    return {
      [CustomerContactXcpInvitationFields.COLUMN_POLICY]: this.policy,
      [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]: this.createdAt,
      [CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT]: this.expiredAt,
    };
  }
}
