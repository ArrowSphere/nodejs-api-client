import {
  AbstractActiveSeats,
  ActiveSeatsData,
} from '../../../common/abstract/abstractActiveSeats';

export type ActiveSeatsGetResultData = ActiveSeatsData;

export class ActiveSeatsGetResult extends AbstractActiveSeats {
  public constructor(data: ActiveSeatsGetResultData) {
    super(data);
  }

  public toJSON(): ActiveSeatsGetResultData {
    return super.toJSON();
  }
}
