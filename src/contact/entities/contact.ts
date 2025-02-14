import { AbstractEntity } from '../../abstractEntity';
import { XcpInvitation, XcpInvitationType } from './xcpInvitation';

export enum ContactFields {
  COLUMN_ID = 'id',
  COLUMN_COMPANY_ID = 'companyId',
  COLUMN_RESELLER = 'reseller',
  COLUMN_FIRSTNAME = 'firstname',
  COLUMN_LASTNAME = 'lastname',
  COLUMN_EMAIL = 'email',
  COLUMN_PHONE = 'phone',
  COLUMN_ERP_ID = 'erpId',
  COLUMN_TYPE = 'type',
  COLUMN_ROLE = 'role',
  COLUMN_STATUS = 'status',
  COLUMN_XAP_USERNAME = 'xapUsername',
  COLUMN_XCP_INVITATION = 'xcpInvitation',
}

export type ContactType = {
  [ContactFields.COLUMN_ID]: number;
  [ContactFields.COLUMN_COMPANY_ID]: number;
  [ContactFields.COLUMN_RESELLER]: string;
  [ContactFields.COLUMN_FIRSTNAME]: string;
  [ContactFields.COLUMN_LASTNAME]: string;
  [ContactFields.COLUMN_EMAIL]: string;
  [ContactFields.COLUMN_PHONE]: string;
  [ContactFields.COLUMN_ERP_ID]: string;
  [ContactFields.COLUMN_TYPE]: string;
  [ContactFields.COLUMN_ROLE]: string;
  [ContactFields.COLUMN_STATUS]: string;
  [ContactFields.COLUMN_XAP_USERNAME]?: string;
  [ContactFields.COLUMN_XCP_INVITATION]?: XcpInvitationType;
};

export class Contact extends AbstractEntity<ContactType> {
  readonly #id: number;
  readonly #companyId: number;
  readonly #reseller: string;
  readonly #firstname: string;
  readonly #lastname: string;
  readonly #email: string;
  readonly #phone: string;
  readonly #erpId: string;
  readonly #type: string;
  readonly #role: string;
  readonly #status: string;
  readonly #xapUsername?: string;
  readonly #xcpInvitation?: XcpInvitation;

  public constructor(contactDataInput: ContactType) {
    super(contactDataInput);

    this.#id = contactDataInput[ContactFields.COLUMN_ID];
    this.#companyId = contactDataInput[ContactFields.COLUMN_COMPANY_ID];
    this.#reseller = contactDataInput[ContactFields.COLUMN_RESELLER];
    this.#firstname = contactDataInput[ContactFields.COLUMN_FIRSTNAME];
    this.#lastname = contactDataInput[ContactFields.COLUMN_LASTNAME];
    this.#email = contactDataInput[ContactFields.COLUMN_EMAIL];
    this.#phone = contactDataInput[ContactFields.COLUMN_PHONE];
    this.#erpId = contactDataInput[ContactFields.COLUMN_ERP_ID];
    this.#type = contactDataInput[ContactFields.COLUMN_TYPE];
    this.#role = contactDataInput[ContactFields.COLUMN_ROLE];
    this.#status = contactDataInput[ContactFields.COLUMN_STATUS];
    this.#xapUsername = contactDataInput[ContactFields.COLUMN_XAP_USERNAME];
    this.#xcpInvitation = contactDataInput[ContactFields.COLUMN_XCP_INVITATION]
      ? new XcpInvitation(
          contactDataInput[
            ContactFields.COLUMN_XCP_INVITATION
          ] as XcpInvitationType,
        )
      : undefined;
  }

  public get id(): number {
    return this.#id;
  }

  get companyId(): number {
    return this.#companyId;
  }

  get reseller(): string {
    return this.#reseller;
  }

  get firstname(): string {
    return this.#firstname;
  }

  get lastname(): string {
    return this.#lastname;
  }

  get email(): string {
    return this.#email;
  }

  get phone(): string {
    return this.#phone;
  }

  get erpId(): string {
    return this.#erpId;
  }

  get type(): string {
    return this.#type;
  }

  get role(): string {
    return this.#role;
  }

  get status(): string {
    return this.#status;
  }

  get xapUsername(): string | undefined {
    return this.#xapUsername;
  }

  get xcpInvitation(): XcpInvitation | undefined {
    return this.#xcpInvitation;
  }

  public toJSON(): ContactType {
    return {
      [ContactFields.COLUMN_ID]: this.id,
      [ContactFields.COLUMN_COMPANY_ID]: this.companyId,
      [ContactFields.COLUMN_RESELLER]: this.reseller,
      [ContactFields.COLUMN_FIRSTNAME]: this.firstname,
      [ContactFields.COLUMN_LASTNAME]: this.lastname,
      [ContactFields.COLUMN_EMAIL]: this.email,
      [ContactFields.COLUMN_PHONE]: this.phone,
      [ContactFields.COLUMN_ERP_ID]: this.erpId,
      [ContactFields.COLUMN_TYPE]: this.type,
      [ContactFields.COLUMN_ROLE]: this.role,
      [ContactFields.COLUMN_STATUS]: this.status,
      [ContactFields.COLUMN_XAP_USERNAME]: this.xapUsername,
      [ContactFields.COLUMN_XCP_INVITATION]: this.xcpInvitation?.toJSON(),
    };
  }
}
