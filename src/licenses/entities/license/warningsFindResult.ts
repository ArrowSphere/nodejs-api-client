import { AbstractWarning, WarningData } from './abstractWarning';

export class WarningsFindResult extends AbstractWarning {
  public constructor(data: WarningData) {
    super(data);
  }

  public toJSON(): WarningData {
    return super.toJSON();
  }
}
