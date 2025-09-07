import { DispenserNoEnum, PaymentModeEnum } from "./dispensing-log-enums";

export interface CreateLog{
  dispenserNo: DispenserNoEnum | null;
  quantityFilled: number;
  vehicleNumber: string;
  paymentMode: PaymentModeEnum | null;
  paymentProof: File | null; // Use File for uploads in Angular
}