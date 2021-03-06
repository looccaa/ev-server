import CreatedUpdatedProps from '../CreatedUpdatedProps';
import { OCPIRole } from './OCPIRole';
import { OcpiBusinessDetails } from '../Setting';

export default interface OCPIEndpoint extends CreatedUpdatedProps {
  id: string;
  role: OCPIRole;
  name: string;
  baseUrl: string;
  localToken: string;
  token: string;
  countryCode: string;
  partyId: string;
  backgroundPatchJob: boolean;
  status?: string;
  version?: string;
  businessDetails?: OcpiBusinessDetails;
  availableEndpoints?: OCPIEndpoint[];
  versionUrl?: string;
  lastPatchJobOn?: Date;
  lastPatchJobResult?: {
    successNbr: number;
    failureNbr: number;
    totalNbr: number;
    chargeBoxIDsInFailure?: string[];
    chargeBoxIDsInSuccess?: string[];
    tokenIDsInFailure?: string[];
  };
}
