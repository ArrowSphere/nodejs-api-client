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
  PRORATA = 'prorata',
  RECURRING = 'recurring',
}

export enum LicenseEventType {
  ACTIVATION_FAILURE = 'activation_failure',
  ACTIVATION_SUCCESS = 'activation_success',
  CANCELLED = 'cancelled',
  CREATED = 'created',
  PREPARATION = 'preparation',
  SUSPENDED = 'suspended',
  TRANSFERRED = 'transferred',
  TRANSMISSION_FAILURE = 'transmission_failure',
  TRANSMISSION_IN_PROGRESS = 'transmission_in_progress',
  TRANSMISSION_SUCCESS = 'transmission_success',
  UPDATED = 'updated',
  PENDING = 'pending',
}

export enum LicenseEventStatusCode {
  PREPARATION = '40',
  TRANSMISSION_IN_PROGRESS = '42',
  TRANSMISSION_FAILURE = '43',
  PENDING = '62',
  TRANSMISSION_SUCCESS = '44',
  IN_PROGRESS = '72',
  REJECTED = '85',
  COMPLETED = '86',
  SUSPENDED = '87',
  CANCELLED = '89',
  TRANSFERRED = '126',
}

export const LicenseEventStatusActionCodes: Partial<
  Record<LicenseEventStatusCode, LicenseEventType>
> = {
  [LicenseEventStatusCode.PREPARATION]: LicenseEventType.PREPARATION,
  [LicenseEventStatusCode.TRANSMISSION_IN_PROGRESS]:
    LicenseEventType.TRANSMISSION_IN_PROGRESS,
  [LicenseEventStatusCode.TRANSMISSION_FAILURE]:
    LicenseEventType.TRANSMISSION_FAILURE,
  [LicenseEventStatusCode.TRANSMISSION_SUCCESS]:
    LicenseEventType.TRANSMISSION_SUCCESS,
  [LicenseEventStatusCode.REJECTED]: LicenseEventType.ACTIVATION_FAILURE,
  [LicenseEventStatusCode.COMPLETED]: LicenseEventType.ACTIVATION_SUCCESS,
  [LicenseEventStatusCode.SUSPENDED]: LicenseEventType.SUSPENDED,
  [LicenseEventStatusCode.CANCELLED]: LicenseEventType.CANCELLED,
  [LicenseEventStatusCode.TRANSFERRED]: LicenseEventType.TRANSFERRED,
  [LicenseEventStatusCode.PENDING]: LicenseEventType.PENDING,
};

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
