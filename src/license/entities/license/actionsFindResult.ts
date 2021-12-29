import { AbstractActions, ActionsData } from './abstractActions';

export class ActionsFindResult extends AbstractActions {
  public constructor(data: ActionsData) {
    super(data);
  }

  public toJSON(): ActionsData {
    return super.toJSON();
  }
}
