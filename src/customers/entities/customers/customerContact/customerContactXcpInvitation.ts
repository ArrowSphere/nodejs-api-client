import { AbstractEntity } from '../../../../abstractEntity';

export enum CustomerContactXcpInvitationFields {
  COLUMN_POLICY = 'policy',
}

export type CustomerContactXcpInvitationType = {
  [CustomerContactXcpInvitationFields.COLUMN_POLICY]?: string;
};

export class CustomerContactXcpInvitation extends AbstractEntity<CustomerContactXcpInvitationType> {
  readonly #policy?: string;

  public constructor(
    getCustomerContactXcpInvitationDataInput: CustomerContactXcpInvitationType,
  ) {
    super(getCustomerContactXcpInvitationDataInput);

    this.#policy =
      getCustomerContactXcpInvitationDataInput[
        CustomerContactXcpInvitationFields.COLUMN_POLICY
      ] ?? undefined;
  }

  get policy(): string | undefined {
    return this.#policy;
  }

  public toJSON(): CustomerContactXcpInvitationType {
    return {
      [CustomerContactXcpInvitationFields.COLUMN_POLICY]: this.policy,
    };
  }
}
