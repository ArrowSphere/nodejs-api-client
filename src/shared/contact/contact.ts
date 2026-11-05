export enum SharedContactFields {
  COLUMN_FIRSTNAME = 'firstName',
  COLUMN_LASTNAME = 'lastName',
  COLUMN_EMAIL = 'email',
  COLUMN_PHONE = 'phone',
}

export interface SharedContactInterface {
  [SharedContactFields.COLUMN_FIRSTNAME]: string;
  [SharedContactFields.COLUMN_LASTNAME]: string;
  [SharedContactFields.COLUMN_EMAIL]: string;
  [SharedContactFields.COLUMN_PHONE]?: string;
}
