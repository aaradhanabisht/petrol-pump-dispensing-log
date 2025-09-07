import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('jwt');
    let cloned = request
    if(token){
      cloned = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
      
    }
    return next.handle(cloned).pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status === 401){
          localStorage.removeItem('jwt');
          this.router.navigateByUrl('/login');
        }
        return throwError(() => error);
      }
      )
    );
  }
}
