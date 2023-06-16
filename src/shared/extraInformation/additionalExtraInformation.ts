import { AbstractEntity } from '../../abstractEntity';

export enum AdditionalExtraInformationFields {
  COLUMN_PROGRAMS = 'programs',
}

export type AdditionalExtraInformationItemType = {
  [key: string]: { [name: string]: string } | unknown;
};

export type AdditionalExtraInformationType = {
  [AdditionalExtraInformationFields.COLUMN_PROGRAMS]?: AdditionalExtraInformationItemType;
};

export class AdditionalExtraInformation extends AbstractEntity<AdditionalExtraInformationType> {
  readonly #programs?: AdditionalExtraInformationItemType;

  public constructor(
    additionalExtraInformation: AdditionalExtraInformationType,
  ) {
    super(additionalExtraInformation);

    this.#programs =
      additionalExtraInformation[
        AdditionalExtraInformationFields.COLUMN_PROGRAMS
      ];
  }

  get programs(): AdditionalExtraInformationItemType | undefined {
    return this.#programs;
  }

  public toJSON(): AdditionalExtraInformationType {
    return {
      [AdditionalExtraInformationFields.COLUMN_PROGRAMS]: this.programs,
    };
  }
}
