import { AbstractLicense, LicenseData } from './abstractLicense';

export class LicenseFindResult extends AbstractLicense {
  public constructor(data: LicenseData) {
    super(data);
  }

  public toJSON(): LicenseData {
    return super.toJSON();
  }
}
