import { Component, OnInit } from '@angular/core';
import { LogListing } from '../models/log-listing.model';
import { Observable } from 'rxjs';
import { DispensingLogService } from '../services/dispensing-log.service';
import { DispenserNoEnum, PaymentModeEnum } from '../models/dispensing-log-enums';

@Component({
  selector: 'app-dispensing-log-list',
  templateUrl: './dispensing-log-list.component.html',
  styleUrls: ['./dispensing-log-list.component.css']
})
export class DispensingLogListComponent implements OnInit{

  dispensingLogs$?: Observable<LogListing[]>;
  DispenserNumberEnum = DispenserNoEnum;
  PaymentModeEnum = PaymentModeEnum;

  constructor(private logService: DispensingLogService){

  }
  ngOnInit(): void {
    this.getAllLogs();
  }
  

  getAllLogs():void{
    this.dispensingLogs$ = this.logService.getAllLogs();
  }
}
