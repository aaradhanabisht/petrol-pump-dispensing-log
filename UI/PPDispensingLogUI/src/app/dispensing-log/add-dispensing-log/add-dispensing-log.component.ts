import { Component } from '@angular/core';
import { CreateLog } from '../models/create-log.model';
import { DispenserNoEnum, PaymentModeEnum } from '../models/dispensing-log-enums';
import { DispensingLogService } from '../services/dispensing-log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dispensing-log',
  templateUrl: './add-dispensing-log.component.html',
  styleUrls: ['./add-dispensing-log.component.css']
})
export class AddDispensingLogComponent {
  model: CreateLog;
  dispenserOptions = [
  { key: DispenserNoEnum.D_01, value: "D 01" },
  { key: DispenserNoEnum.D_02, value: "D 02" },
  { key: DispenserNoEnum.D_03, value: "D 03" },
  { key: DispenserNoEnum.D_04, value: "D 04" }
];
paymentModeOptions = [
  { key: PaymentModeEnum.Cash, value: "Cash" },
  { key: PaymentModeEnum.CreditCard, value: "Credit Card" },
  { key: PaymentModeEnum.UPI, value: "UPI" }
];


  constructor(private logService: DispensingLogService, private router: Router){
    this.model = {
      vehicleNumber: "",
      quantityFilled: 0,
      dispenserNo: null,
      paymentMode: null,
      paymentProof: null
    }
  }

  onFormSubmit(){
    const formData = new FormData();
formData.append('vehicleNumber', this.model.vehicleNumber);
formData.append('quantityFilled', this.model.quantityFilled.toString());
formData.append('dispenserNo', (this.model.dispenserNo ?? '').toString());
formData.append('paymentMode', (this.model.paymentMode ?? '').toString());
if (this.model.paymentProof) {
  formData.append('paymentProof', this.model.paymentProof, this.model.paymentProof.name);
}
    this.logService.createLog(formData).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/log/listing');
      },
      error: (err) => {
        alert(err);
      }
    })
  }

  onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  this.model.paymentProof = input.files && input.files.length > 0 ? input.files[0] : null;
}
}
