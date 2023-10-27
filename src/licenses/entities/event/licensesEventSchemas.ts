import { Schema } from 'type-fest';
import { LicenseEvent } from './licenseEvent';
import {
  LicensesEventDataField,
  LicensesEventPageType,
} from './licensesEventQueries';

export type LicensesEventSchema = Schema<LicenseEvent, boolean>;
export type LicensesEventPageSchema = Schema<LicensesEventPageType, boolean>;
export type LicensesEventInputSchema = {
  [LicensesEventDataField.EVENT]?: LicensesEventSchema;
};
