import { Component, OnInit } from '@angular/core';
import { LogListing } from '../models/log-listing.model';
import { Observable } from 'rxjs';
import { DispensingLogService } from '../services/dispensing-log.service';
import { DispenserNoEnum, PaymentModeEnum } from '../models/dispensing-log-enums';
import { LoginService } from 'src/app/auth/services/login.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-dispensing-log-list',
  templateUrl: './dispensing-log-list.component.html',
  styleUrls: ['./dispensing-log-list.component.css']
})
export class DispensingLogListComponent implements OnInit{

  filters = {
  dispenserNo: -1,
  paymentMode: -1,
  startDate: null as string | null,
  endDate: null as string | null
  };
  dispenserOptions = [
    { key: -1, value: "All"},
    { key: DispenserNoEnum.D_01, value: "D_01" },
    { key: DispenserNoEnum.D_02, value: "D_02" },
    { key: DispenserNoEnum.D_03, value: "D_03" },
    { key: DispenserNoEnum.D_04, value: "D_04" }
  ];
  paymentModeOptions = [
    { key: -1, value: "All"},
    { key: PaymentModeEnum.Cash, value: "Cash" },
    { key: PaymentModeEnum.CreditCard, value: "Credit Card" },
    { key: PaymentModeEnum.UPI, value: "UPI" }
  ];
  minDate = '2020-01-01';
  maxDate = new Date().toISOString().slice(0,10);
  dateValidationMsg = '';
  dispensingLogs: LogListing[] = [];
  filteredLogs: LogListing[] = [];
  DispenserNumberEnum = DispenserNoEnum;
  PaymentModeEnum = PaymentModeEnum;

  constructor(private logService: DispensingLogService, private loginService: LoginService){

  }
  ngOnInit(): void {
    this.getAllLogs();
  }
  

  getAllLogs():void{
    this.logService.getAllLogs().subscribe({
      next: (response: LogListing[]) => {
        this.dispensingLogs = response;
        this.filteredLogs = [...this.dispensingLogs];
      }
    });
  }

  onLogout(){
    this.loginService.logout();
  }

  onDownload(url: string){
    const filePath = url || '';
    const filename = filePath.split('/').pop();
    if(filename){
      this.logService.downloadFile(filename).subscribe({
        next: (response) => {
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(response);
          link.download = filename;
          link.click();
          window.URL.revokeObjectURL(link.href);
        }
      });
    }
  }

  applyFilters() {
    this.dateValidationMsg = '';

  const start = this.filters.startDate ? this.filters.startDate : null;
  const end   = this.filters.endDate ? this.filters.endDate : null;

  // Validate
  if (start && start < this.minDate) {
    this.dateValidationMsg = `Start Date must be after ${this.minDate}`;
    this.filteredLogs = [...this.dispensingLogs];
    return;
  }
  if (end && end > this.maxDate) {
    this.dateValidationMsg = `End Date must be before ${this.maxDate}`;
    this.filteredLogs = [...this.dispensingLogs];
    return;
  }
  if (start && end && start > end) {
    this.dateValidationMsg = `Start Date cannot be after End Date.`;
    this.filteredLogs = [...this.dispensingLogs];
    return;
  }
    // Filtering logic
     this.filteredLogs = this.dispensingLogs.filter(log => {
    const logDate = new Date(log.timestamp).toISOString().slice(0, 10); // "YYYY-MM-DD"
    const matchesDispenser = this.filters.dispenserNo == -1 || log.dispenserNo == this.filters.dispenserNo;
    const matchesPayment = this.filters.paymentMode == -1 || log.paymentMode == this.filters.paymentMode;
    const matchesStart = !start || logDate >= start;
    const matchesEnd   = !end   || logDate <= end;
    return matchesDispenser && matchesPayment && matchesStart && matchesEnd;
  });
  }
}
