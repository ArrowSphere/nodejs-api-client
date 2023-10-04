import { AbstractEntity } from '../../../abstractEntity';

export enum RegistrationLinkFields {
  COLUMN_REGISTRATION_LINK = 'registrationLink',
}

export type RegistrationLinkType = {
  [RegistrationLinkFields.COLUMN_REGISTRATION_LINK]: string;
};

export class RegistrationLink extends AbstractEntity<RegistrationLinkType> {
  readonly #registrationLink: string;

  public constructor(registrationLinkInput: RegistrationLinkType) {
    super(registrationLinkInput);

    this.#registrationLink =
      registrationLinkInput[RegistrationLinkFields.COLUMN_REGISTRATION_LINK];
  }

  get registrationLink(): string {
    return this.#registrationLink;
  }

  public toJSON(): RegistrationLinkType {
    return {
      [RegistrationLinkFields.COLUMN_REGISTRATION_LINK]: this.registrationLink,
    };
  }
}
