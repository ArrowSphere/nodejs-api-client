export enum LicenseEventActionType {
  AUTO_RENEW_OFF = 'autoRenewOff',
  AUTO_RENEW_ON = 'autoRenewOn',
  CANCELLED = 'cancelled',
  CREATION = 'creation',
  DISABLED = 'disabled',
  EXPIRED = 'expired',
  QUANTITY_UPDATE = 'quantityUpdate',
  REACTIVATED = 'reactivated',
  RECURRING = 'recurring',
  RENEW = 'renew',
  SUSPENDED = 'suspended',
}

export enum LicenseEventType {
  ACTIVATION_SUCCESS = 'activation_success',
  UPDATED = 'updated',
  PREPARATION = 'preparation',
  CREATED = 'created',
  TRANSMISSION_IN_PROGRESS = 'transmission_in_progress',
}

export enum LicenseEventStatusCode {
  PENDING = '62',
  IN_PROGRESS = '72',
  REJECTED = '85',
  COMPLETED = '86',
}

export interface LicenseEventVendor {
  name: string;
  code: string;
}

export interface LicenseEventCustomer {
  name: string;
  ref: string;
}

export interface LicenseEventReseller {
  name: string;
  ref: string;
}

export interface LicenseEventPriceband {
  vendorSku: string;
  arrowsphereSku: string;
}

export interface LicenseEventOffer {
  arrowsphereSku: string;
  name: string;
  isManualProvisioning?: boolean | null;
}

export interface LicenseEventQuantity {
  current: number;
  requested: number | null;
}

export interface LicenseEventUser {
  name: string;
  email: string;
}

export interface LicenseEventDetails {
  message: string;
  source: string | null;
}

export interface LicenseEvent {
  id: number;
  partnerRef: string;
  orderRef: string;
  createdAt: string;
  customer: LicenseEventCustomer;
  reseller: LicenseEventReseller;
  marketplace: string;
  friendlyName: string;
  vendor: LicenseEventVendor;
  priceband: LicenseEventPriceband;
  offer: LicenseEventOffer;
  uom: string;
  periodicity: number;
  term: number;
  trial: boolean;
  quantity: LicenseEventQuantity;
  statusCode: string;
  user: LicenseEventUser;
  actionType: LicenseEventActionType;
  eventDetails: LicenseEventDetails;
}
