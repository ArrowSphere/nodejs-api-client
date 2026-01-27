import { AbstractEntity } from '../../../abstractEntity';
import {
  GetLicenseAttachmentResult,
  GetLicenseAttachmentResultData,
} from './GetLicenseAttachmentResult';

export enum GetLicenseAttachmentsResultFields {
  COLUMN_ATTACHMENTS = 'attachements',
}

export type GetLicenseAttachmentsResultData = {
  [GetLicenseAttachmentsResultFields.COLUMN_ATTACHMENTS]: GetLicenseAttachmentResultData[];
};

export class GetLicenseAttachmentsResult extends AbstractEntity<GetLicenseAttachmentsResultData> {
  readonly #attachments: GetLicenseAttachmentResult[];

  public constructor(input: GetLicenseAttachmentsResultData) {
    super(input);

    this.#attachments = input[
      GetLicenseAttachmentsResultFields.COLUMN_ATTACHMENTS
    ].map(
      (result: GetLicenseAttachmentResultData) =>
        new GetLicenseAttachmentResult(result),
    );
  }

  getLicenseAttachments(): GetLicenseAttachmentResult[] {
    return this.#attachments;
  }

  public toJSON(): GetLicenseAttachmentsResultData {
    return {
      [GetLicenseAttachmentsResultFields.COLUMN_ATTACHMENTS]: this.#attachments.map(
        (result: GetLicenseAttachmentResult) => result.toJSON(),
      ),
    };
  }
}
