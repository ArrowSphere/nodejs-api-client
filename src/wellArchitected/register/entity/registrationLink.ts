import { AbstractEntity } from '../../../abstractEntity';

export enum RegistrationLinkFields {
  COLUMN_EXTRA_PARAMS = 'extraParams',
  COLUMN_REGISTRATION_LINK = 'registrationLink',
}

export type RegistrationLinkType = {
  [RegistrationLinkFields.COLUMN_EXTRA_PARAMS]?: Record<string, string>;
  [RegistrationLinkFields.COLUMN_REGISTRATION_LINK]: string;
};

export class RegistrationLink extends AbstractEntity<RegistrationLinkType> {
  readonly #extraParams?: Record<string, string>;
  readonly #registrationLink: string;

  public constructor(registrationLinkInput: RegistrationLinkType) {
    super(registrationLinkInput);

    this.#registrationLink =
      registrationLinkInput[RegistrationLinkFields.COLUMN_REGISTRATION_LINK];

    this.#extraParams =
      registrationLinkInput[RegistrationLinkFields.COLUMN_EXTRA_PARAMS];
  }

  get extraParams(): Record<string, string> | undefined {
    return this.#extraParams;
  }

  get registrationLink(): string {
    return this.#registrationLink;
  }

  public toJSON(): RegistrationLinkType {
    return {
      [RegistrationLinkFields.COLUMN_EXTRA_PARAMS]: this.extraParams,
      [RegistrationLinkFields.COLUMN_REGISTRATION_LINK]: this.registrationLink,
    };
  }
}
