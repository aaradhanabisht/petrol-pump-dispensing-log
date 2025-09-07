import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensingLogListComponent } from './dispensing-log/dispensing-log-list/dispensing-log-list.component';
import { AddDispensingLogComponent } from './dispensing-log/add-dispensing-log/add-dispensing-log.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'log/listing', component: DispensingLogListComponent, canActivate: [AuthGuard]},
  {path: 'log/add', component: AddDispensingLogComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
