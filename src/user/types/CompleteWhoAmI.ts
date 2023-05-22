import { AbstractEntity } from '../../abstractEntity';
import {
  CompleteWhoAmICompany,
  CompleteWhoAmICompanyData,
} from './CompleteWhoAmICompany';
import {
  CompleteWhoAmIUser,
  CompleteWhoAmIUserData,
} from './CompleteWhoAmIUser';

export enum CompleteWhoAmIResponseFields {
  COLUMN_COMPANY = 'company',
  COLUMN_USER = 'user',
}

export type CompleteWhoAmIResponseData = {
  [CompleteWhoAmIResponseFields.COLUMN_COMPANY]: CompleteWhoAmICompanyData;
  [CompleteWhoAmIResponseFields.COLUMN_USER]: CompleteWhoAmIUserData;
};

export class CompleteWhoAmI extends AbstractEntity<CompleteWhoAmIResponseData> {
  constructor(data: CompleteWhoAmIResponseData) {
    super(data);

    this.#user = new CompleteWhoAmIUser(
      data[CompleteWhoAmIResponseFields.COLUMN_USER],
    );
    this.#company = new CompleteWhoAmICompany(
      data[CompleteWhoAmIResponseFields.COLUMN_COMPANY],
    );
  }

  readonly #user: CompleteWhoAmIUser;
  readonly #company: CompleteWhoAmICompany;

  get user(): CompleteWhoAmIUser {
    return this.#user;
  }

  get company(): CompleteWhoAmICompany {
    return this.#company;
  }

  public toJSON(): CompleteWhoAmIResponseData {
    return {
      [CompleteWhoAmIResponseFields.COLUMN_USER]: this.user.toJSON(),
      [CompleteWhoAmIResponseFields.COLUMN_COMPANY]: this.company.toJSON(),
    };
  }
}
