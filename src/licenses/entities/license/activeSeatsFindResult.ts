import {
  DataKeywords,
  FiltersParameters,
  SortParameters,
} from '../../licensesClient';
import {
  AbstractActiveSeats,
  ActiveSeatsData,
  ActiveSeatsFields,
} from '../../../common/abstract/abstractActiveSeats';

export type ActiveSeatsFindResultData = ActiveSeatsData;

export type ActiveSeatsFindResultDataKeywords = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: DataKeywords;
  [ActiveSeatsFields.COLUMN_NUMBER]?: DataKeywords;
};

export type ActiveSeatsFindResultDataSortParameters = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: SortParameters;
  [ActiveSeatsFields.COLUMN_NUMBER]?: SortParameters;
};

export type ActiveSeatsFindResultDataFiltersParameters = {
  [ActiveSeatsFields.COLUMN_LAST_UPDATE]?: FiltersParameters;
  [ActiveSeatsFields.COLUMN_NUMBER]?: FiltersParameters;
};

export class ActiveSeatsFindResult extends AbstractActiveSeats {
  public constructor(data: ActiveSeatsFindResultData) {
    super(data);
  }

  public toJSON(): ActiveSeatsFindResultData {
    return super.toJSON();
  }
}
