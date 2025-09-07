import { Component } from '@angular/core';
import { LoginRequest } from '../models/login.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { DispensingLogService } from 'src/app/dispensing-log/services/dispensing-log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
model: LoginRequest;
loginError: string = '';

constructor(private loginService: LoginService, private router: Router, private logService: DispensingLogService){
  this.model = {
    username: '',
    password: ''
  }
}

onFormSubmit():void{
  if(this.model.username != null && this.model.password != null){
    this.loginService.login(this.model).subscribe({
      next: (response) => {
        localStorage.setItem('jwt', response.token);
        this.logService.getAllLogs().subscribe({
          next: (response) => {
            if(response.length > 0){
              this.router.navigateByUrl('/log/listing');
            }
            else{
              this.router.navigateByUrl('/log/add');
            }
          }
        })
      },
      error: (err) => {
        this.loginError = err.error;
      }
    })
  }
}
}
