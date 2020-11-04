import { OICPEvseDataRecord } from './OICPEvse';
import { OICPIdentification } from './OICPIdentification';

export interface OICPSession {
  id: string;
  identification: OICPIdentification;
  empPartnerSessionID: string;
  start_datetime: Date;
  end_datetime?: Date;
  kwh: number;
  evse: OICPEvseDataRecord;
  meter_id?: string;
  currency: string;
  meterValueInBetween?: number[];
  total_cost?: number;
  status: OICPSessionStatus;
  last_updated: Date;
}

export enum OICPSessionStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  INVALID = 'INVALID',
  PENDING = 'PENDING',
}