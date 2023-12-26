import { AbstractEntity } from '../../../../abstractEntity';
import {
  CustomerContactXcpInvitation,
  CustomerContactXcpInvitationType,
} from './customerContactXcpInvitation';

export type CustomerContactRoleType = CustomerContactRoleEnum | string;
export enum CustomerContactRoleEnum {
  PRIMARY = 'primary',
  MICROSOFT_CUSTOMER_AGREEMENT = 'MicrosoftCustomerAgreement',
}

export type CustomerContactTypeType = CustomerContactTypeEnum | string;
export enum CustomerContactTypeEnum {
  TECHNICAL = 'Technical',
  FIELD_SALES = 'Field Sales',
  MARKETING = 'Marketing',
  OPERATIONS = 'Operations',
  MANAGEMENT = 'Management',
  INSIDE_SALES = 'Inside Sales',
  OTHER = 'Other',
}

export enum CustomerContactFields {
  COLUMN_REFERENCE = 'reference',
  COLUMN_FIRST_NAME = 'firstName',
  COLUMN_LAST_NAME = 'lastName',
  COLUMN_EMAIL = 'email',
  COLUMN_PHONE = 'phone',
  COLUMN_USERNAME = 'username',
  COLUMN_TYPE = 'type',
  COLUMN_ROLE = 'role',
  COLUMN_IS_ACTIVE = 'isActive',
  COLUMN_XCP_INVITATION = 'xcpInvitation',
  COLUMN_ORGANIZATION_UNIT_ID = 'organizationUnitId',
}

export type CustomerContactType = {
  [CustomerContactFields.COLUMN_REFERENCE]: string;
  [CustomerContactFields.COLUMN_FIRST_NAME]: string;
  [CustomerContactFields.COLUMN_LAST_NAME]: string;
  [CustomerContactFields.COLUMN_EMAIL]: string;
  [CustomerContactFields.COLUMN_PHONE]: string;
  [CustomerContactFields.COLUMN_USERNAME]?: string;
  [CustomerContactFields.COLUMN_TYPE]: string;
  [CustomerContactFields.COLUMN_ROLE]: string;
  [CustomerContactFields.COLUMN_IS_ACTIVE]: boolean;
  [CustomerContactFields.COLUMN_XCP_INVITATION]?: CustomerContactXcpInvitationType;
  [CustomerContactFields.COLUMN_ORGANIZATION_UNIT_ID]?: number;
};

export class CustomerContact extends AbstractEntity<CustomerContactType> {
  readonly #reference: string;
  readonly #firstName: string;
  readonly #lastName: string;
  readonly #email: string;
  readonly #phone: string;
  readonly #username?: string;
  readonly #type: string;
  readonly #role: string;
  readonly #isActive: boolean;
  readonly #xcpInvitation?: CustomerContactXcpInvitation;
  readonly #organizationUnitId?: number;

  public constructor(getCustomerContactDataInput: CustomerContactType) {
    super(getCustomerContactDataInput);

    this.#reference =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_REFERENCE];
    this.#firstName =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_FIRST_NAME];
    this.#lastName =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_LAST_NAME];
    this.#email =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_EMAIL];
    this.#phone =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_PHONE];
    this.#username =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_USERNAME];
    this.#type = getCustomerContactDataInput[CustomerContactFields.COLUMN_TYPE];
    this.#role = getCustomerContactDataInput[CustomerContactFields.COLUMN_ROLE];
    this.#isActive =
      getCustomerContactDataInput[CustomerContactFields.COLUMN_IS_ACTIVE];
    this.#xcpInvitation = getCustomerContactDataInput[
      CustomerContactFields.COLUMN_XCP_INVITATION
    ]
      ? new CustomerContactXcpInvitation(
          getCustomerContactDataInput[
            CustomerContactFields.COLUMN_XCP_INVITATION
          ] as CustomerContactXcpInvitationType,
        )
      : undefined;
    this.#organizationUnitId =
      getCustomerContactDataInput[
        CustomerContactFields.COLUMN_ORGANIZATION_UNIT_ID
      ];
  }

  get reference(): string {
    return this.#reference;
  }

  get firstName(): string {
    return this.#firstName;
  }

  get lastName(): string {
    return this.#lastName;
  }

  get email(): string {
    return this.#email;
  }

  get phone(): string {
    return this.#phone;
  }

  get username(): string | undefined {
    return this.#username;
  }

  get type(): string {
    return this.#type;
  }

  get role(): string {
    return this.#role;
  }

  get isActive(): boolean {
    return this.#isActive;
  }

  get xcpInvitation(): CustomerContactXcpInvitationType | undefined {
    return this.#xcpInvitation;
  }

  get organizationUnitId(): number | undefined {
    return this.#organizationUnitId;
  }

  public toJSON(): CustomerContactType {
    return {
      [CustomerContactFields.COLUMN_REFERENCE]: this.reference,
      [CustomerContactFields.COLUMN_FIRST_NAME]: this.firstName,
      [CustomerContactFields.COLUMN_LAST_NAME]: this.lastName,
      [CustomerContactFields.COLUMN_EMAIL]: this.email,
      [CustomerContactFields.COLUMN_PHONE]: this.phone,
      [CustomerContactFields.COLUMN_USERNAME]: this.username,
      [CustomerContactFields.COLUMN_TYPE]: this.type,
      [CustomerContactFields.COLUMN_ROLE]: this.role,
      [CustomerContactFields.COLUMN_IS_ACTIVE]: this.isActive,
      [CustomerContactFields.COLUMN_XCP_INVITATION]: this.xcpInvitation,
      [CustomerContactFields.COLUMN_ORGANIZATION_UNIT_ID]: this
        .organizationUnitId,
    };
  }
}
