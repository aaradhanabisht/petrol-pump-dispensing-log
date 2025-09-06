import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensingLogListComponent } from './dispensing-log/dispensing-log-list/dispensing-log-list.component';
import { AddDispensingLogComponent } from './dispensing-log/add-dispensing-log/add-dispensing-log.component';

const routes: Routes = [
  {path: 'log/listing', component: DispensingLogListComponent},
  {path: 'log/add', component: AddDispensingLogComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
