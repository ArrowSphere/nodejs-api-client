import { LicenseEvent } from './licenseEvent';

export interface LicenseEventPagination {
  perPage?: number;
  currentPage?: number;
  totalPage?: number;
  total?: number;
  next?: string;
  previous?: string;
}

export interface PaginatedLicenseEvents {
  filters?: LicenseEventFilters[];
  pagination?: LicenseEventPagination;
  events?: Array<{ event: LicenseEvent }>;
}

export interface LicenseEventFilters {
  name: string;
  values: LicenseEventFiltersValues[];
}

export interface LicenseEventFiltersValues {
  value: string;
  count: number;
}

export interface LicenseEventQueryResponse {
  data: {
    getEvents: PaginatedLicenseEvents;
  };
}
