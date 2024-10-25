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
  readonly #createdAt?: Date;
  readonly #expiredAt?: Date;

  public constructor(
    getCustomerContactXcpInvitationDataInput: CustomerContactXcpInvitationType,
  ) {
    super(getCustomerContactXcpInvitationDataInput);

    this.#policy =
      getCustomerContactXcpInvitationDataInput[
        CustomerContactXcpInvitationFields.COLUMN_POLICY
      ] ?? undefined;
    this.#createdAt = getCustomerContactXcpInvitationDataInput[
      CustomerContactXcpInvitationFields.COLUMN_CREATED_AT
    ]
      ? new Date(
          getCustomerContactXcpInvitationDataInput[
            CustomerContactXcpInvitationFields.COLUMN_CREATED_AT
          ] as string,
        )
      : undefined;
    this.#expiredAt = getCustomerContactXcpInvitationDataInput[
      CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT
    ]
      ? new Date(
          getCustomerContactXcpInvitationDataInput[
            CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT
          ] as string,
        )
      : undefined;
  }

  get policy(): string | undefined {
    return this.#policy;
  }
  get createdAt(): Date | undefined {
    return this.#createdAt;
  }
  get expiredAt(): Date | undefined {
    return this.#expiredAt;
  }

  public toJSON(): CustomerContactXcpInvitationType {
    return {
      [CustomerContactXcpInvitationFields.COLUMN_POLICY]: this.policy,
      [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]: this.createdAt?.toISOString(),
      [CustomerContactXcpInvitationFields.COLUMN_EXPIRED_AT]: this.expiredAt?.toISOString(),
    };
  }
}
