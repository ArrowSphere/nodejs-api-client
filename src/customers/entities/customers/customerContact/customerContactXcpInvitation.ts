import { AbstractEntity } from '../../../../abstractEntity';

export enum CustomerContactXcpInvitationFields {
  COLUMN_POLICY = 'policy',
  COLUMN_CREATED_AT = 'createdAt',
}

export type CustomerContactXcpInvitationType = {
  [CustomerContactXcpInvitationFields.COLUMN_POLICY]?: string;
  [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]?: string;
};

export class CustomerContactXcpInvitation extends AbstractEntity<CustomerContactXcpInvitationType> {
  readonly #policy?: string;
  readonly #createdAt?: Date;

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
  }

  get policy(): string | undefined {
    return this.#policy;
  }
  get createdAt(): Date | undefined {
    return this.#createdAt;
  }

  public toJSON(): CustomerContactXcpInvitationType {
    return {
      [CustomerContactXcpInvitationFields.COLUMN_POLICY]: this.policy,
      [CustomerContactXcpInvitationFields.COLUMN_CREATED_AT]: this.createdAt?.toISOString(),
    };
  }
}
