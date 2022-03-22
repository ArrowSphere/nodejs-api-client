export enum SharedContactFields {
  COLUMN_FIRSTNAME = 'firstName',
  COLUMN_LASTNAME = 'lastName',
  COLUMN_EMAIL = 'email',
}

export interface SharedContactInterface {
  [SharedContactFields.COLUMN_FIRSTNAME]: string;
  [SharedContactFields.COLUMN_LASTNAME]: string;
  [SharedContactFields.COLUMN_EMAIL]: string;
}
