import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogListing } from '../models/log-listing.model';
import { environment } from 'src/environments/environment.development';
import { CreateLog } from '../models/create-log.model';

@Injectable({
  providedIn: 'root'
})
export class DispensingLogService {

  constructor(private http: HttpClient) { }

  getAllLogs():Observable<LogListing[]>{
    return this.http.get<LogListing[]>(`${environment.apiBaseUrl}/api/DispensingRecord`);
  }

  createLog(record: FormData):Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/DispensingRecord`, record);
  }

  downloadFile(filename: string):Observable<Blob>{
    return this.http.get(`${environment.apiBaseUrl}/api/Images/download/${filename}`,
    { responseType: 'blob' });
  }
}
