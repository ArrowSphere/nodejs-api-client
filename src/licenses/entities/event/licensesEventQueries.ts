import { LicenseEvent } from './licenseEvent';
import {
  LicensesEventPageSchema,
  LicensesEventInputSchema,
} from './licensesEventSchemas';

export enum LicensesEventSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export enum LicensesEventInputPaginationField {
  PAGE = 'page',
  PER_PAGE = 'perPage',
}

export type LicensesEventInputPaginationType = {
  [LicensesEventInputPaginationField.PAGE]?: number;
  [LicensesEventInputPaginationField.PER_PAGE]?: number;
};

export enum LicensesEventGetEventsQueryField {
  ARGS = '__args',
  EVENTS = 'events',
  PAGINATE = 'paginate',
}
export enum LicensesEventGetEventsResponseField {
  DATA = '__args',
  EVENTS = 'events',
  PAGINATION = 'pagination',
}

export enum LicensesEventDataField {
  EVENT = 'event',
}

export enum LicensesEventPaginationField {
  CURRENT_PAGE = 'currentPage',
  PER_PAGE = 'perPage',
  TOTAL = 'total',
  TOTAL_PAGE = 'totalPage',
}

export type LicensesEventPageType = {
  [LicensesEventPaginationField.CURRENT_PAGE]?: number;
  [LicensesEventPaginationField.PER_PAGE]?: number;
  [LicensesEventPaginationField.TOTAL]?: number;
  [LicensesEventPaginationField.TOTAL_PAGE]?: number;
};

export enum LicensesEventInputSortField {
  ORDER = 'order',
  NAME = 'name',
}

export type LicensesEventInputSortType = {
  [LicensesEventInputSortField.ORDER]?: LicensesEventSortDirection;
  [LicensesEventInputSortField.NAME]?: string;
};

export enum LicensesEventQueryArgumentField {
  SEARCH_BODY = 'searchBody',
  PAGINATE = 'paginate',
}

export enum LicensesEventInputFiltersField {
  NAMES = 'names',
  VALUES = 'values',
}

export type LicensesEventInputFiltersType = {
  [LicensesEventInputFiltersField.NAMES]?: string;
  [LicensesEventInputFiltersField.VALUES]?: string | string[];
};

export enum LicensesEvenInputSearchBodyField {
  FILTERS = 'filters',
  SORT = 'sort',
}

export type LicensesEventInputSearchBodyType = {
  [LicensesEvenInputSearchBodyField.FILTERS]?: LicensesEventInputFiltersType[];
  [LicensesEvenInputSearchBodyField.SORT]?: LicensesEventInputSortType[];
};

export type LicensesEventQueryArgumentsType = {
  [LicensesEventQueryArgumentField.SEARCH_BODY]?: LicensesEventInputSearchBodyType;
  [LicensesEventQueryArgumentField.PAGINATE]?: LicensesEventInputPaginationType;
};

export enum LicensesEventQueries {
  GET_EVENTS = 'getEvents',
}

export type LicensesEventGetEventsQueryType = {
  [LicensesEventQueries.GET_EVENTS]: {
    [LicensesEventGetEventsQueryField.ARGS]?: LicensesEventQueryArgumentsType;
    [LicensesEventGetEventsResponseField.EVENTS]: LicensesEventInputSchema;
    [LicensesEventGetEventsResponseField.PAGINATION]?: LicensesEventPageSchema;
  };
};

export type LicensesEventGetEventsResponseType = {
  [LicensesEventGetEventsResponseField.DATA]: {
    [LicensesEventQueries.GET_EVENTS]?: {
      [LicensesEventGetEventsQueryField.EVENTS]?: LicensesEventGetEventsResponseDataType[];
    };
  };
  [LicensesEventGetEventsResponseField.PAGINATION]?: LicensesEventPageType;
};

export type LicensesEventGetEventsResponseDataType = {
  [LicensesEventDataField.EVENT]?: LicenseEvent;
};
