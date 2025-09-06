import { DispenserNoEnum, PaymentModeEnum } from "./dispensing-log-enums";

export interface LogListing {
  id: number;
  dispenserNo: DispenserNoEnum;
  quantityFilled: number;
  vehicleNumber: string;
  paymentMode: PaymentModeEnum;
  paymentProofUrl: string;
  timestamp: Date;
}
