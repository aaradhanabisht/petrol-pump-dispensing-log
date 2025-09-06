import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DispensingLogListComponent } from './dispensing-log/dispensing-log-list/dispensing-log-list.component';
import { AddDispensingLogComponent } from './dispensing-log/add-dispensing-log/add-dispensing-log.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DispensingLogListComponent,
    AddDispensingLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
