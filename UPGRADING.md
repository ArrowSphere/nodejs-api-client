# Upgrade guide

## 1.0.3 to 2.0.0

### Changes to the licences client

The object `LicensesClient` now has more information. Object `LicenseOfferFindResult` has been removed,
it's replaced by `OfferFindResult` with new fields, and object `AbstractLicense` extends `LicenseFindResult` 
has more fields.

- `LicenseFindResultFields.ACTIVE_SEATS_LAST_UPDATE` has been renamed to `ActiveSeatsFindResultFields.COLUMN_LAST_UPDATE`.
- `LicenseFindResultFields.ACTIVE_SEATS_NUMBER` has been renamed to `ActiveSeatsFindResultFields.COLUMN_NUMBER`
- `LicenseFindResultFields.PRICE_BUY_PRICE` has been renamed to `PriceFindResultFields.COLUMN_BUY_PRICE`
- `LicenseFindResultFields.PRICE_LIST_PRICE` has been renamed to `PriceFindResultFields.COLUMN_LIST_PRICE`
- `LicenseFindResultFields.PRICE_CURRENCY` has been renamed to `PriceFindResultFields.COLUMN_CURRENCY`

- `LicenseOfferFields` has been renamed to `OfferFindResultFields`
- `LicenseOfferFields.COLUMN_IS_AUTO_RENEW` has been renamed to `ActionFlagsFindResultFields.COLUMN_IS_AUTO_RENEW`
- `LicenseOfferFields.COLUMN_IS_MANUAL_PROVISIONING` has been renamed to `ActionFlagsFindResultFields.COLUMN_MANUAL_PROVISIONING`
- `LicenseOfferFields.COLUMN_ACTION_FLAGS` has been renamed to `PriceBandFindResultFields.COLUMN_ACTION_FLAGS`
- `LicenseOfferFields.COLUMN_CAN_BE_CANCELLED` has been renamed to `PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_CANCELLED`
- `LicenseOfferFields.COLUMN_CAN_BE_REACTIVATED` has been renamed to `PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_REACTIVATED`
- `LicenseOfferFields.COLUMN_CAN_BE_SUSPENDED` has been renamed to `PriceBandActionFlagsFindResultFields.COLUMN_CAN_BE_SUSPENDED`
- `LicenseOfferFields.COLUMN_CAN_DECREASE_SEATS` has been renamed to `PriceBandActionFlagsFindResultFields.COLUMN_CAN_DECREASE_SEATS`
- `LicenseOfferFields.COLUMN_CAN_INCREASE_SEATS` has been renamed to `PriceBandActionFlagsFindResultFields.COLUMN_CAN_INCREASE_SEATS`
- `LicenseOfferFields.COLUMN_MARKETPLACE` has been renamed to `PriceBandFindResultFields.COLUMN_MARKETPLACE`
- `LicenseOfferFields.COLUMN_IS_ENABLED` has been renamed to `PriceBandFindResultFields.COLUMN_IS_ENABLED`
- `LicenseOfferFields.COLUMN_CURRENCY` has been renamed to `PriceBandFindResultFields.COLUMN_CURRENCY`
- `LicenseOfferFields.COLUMN_PRICES` has been renamed to `PriceBandFindResultFields.COLUMN_PRICES`
- `LicenseOfferFields.COLUMN_PUBLIC` has been renamed to `PriceBandPriceFindResultFields.COLUMN_PUBLIC`
- `LicenseOfferFields.COLUMN_BUY` has been renamed to `PriceBandPriceFindResultFields.COLUMN_BUY`
- `LicenseOfferFields.COLUMN_SELL` has been renamed to `PriceBandPriceFindResultFields.COLUMN_SELL`
- `LicenseOfferFields.COLUMN_BILLING` has been renamed to `PriceBandFindResultFields.COLUMN_BILLING`
- `LicenseOfferFields.COLUMN_TERM` has been renamed to `BillingFindResultFields.COLUMN_TERM`
- `LicenseOfferFields.COLUMN_TYPE` has been renamed to `BillingFindResultFields.COLUMN_TYPE`
- `LicenseOfferFields.COLUMN_CYCLE` has been renamed to `BillingFindResultFields.COLUMN_CYCLE`

Different types have been replaced :

 - `LicenseOfferFindResultData` becomes `OfferFindResultData`
 - `LicenseDataKeywords` becomes `DataKeywords`
 - `LicenseRawKeywordsParameters` becomes `LicenseRawKeywordsParametersLicence` and `LicenseRawKeywordsParametersOffer`
 - `LicenseRawSortParameters` becomes `LicenseRawSortParametersLicense` and `LicenseRawSortParametersOffer`