export enum LicenseEventActionType {
  AUTO_RENEW_OFF = 'autoRenewOff',
  AUTO_RENEW_ON = 'autoRenewOn',
  CANCELLED = 'cancelled',
  CREATION = 'creation',
  DISABLED = 'disabled',
  EXPIRED = 'expired',
  QUANTITY_UPDATE = 'quantityUpdate',
  REACTIVATED = 'reactivated',
  RENEW = 'renew',
  SUSPENDED = 'suspended',
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
}

export interface LicenseEventQuantity {
  current: number;
  requested: number;
}

export interface LicenseEventUser {
  name: string;
  email: string;
}

export interface LicenseEventDetails {
  message: string;
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
