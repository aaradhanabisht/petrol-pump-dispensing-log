import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogListing } from '../models/log-listing.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DispensingLogService {

  constructor(private http: HttpClient) { }

  getAllLogs():Observable<LogListing[]>{
    return this.http.get<LogListing[]>(`${environment.apiBaseUrl}/api/DispensingRecord`);
  }

}
