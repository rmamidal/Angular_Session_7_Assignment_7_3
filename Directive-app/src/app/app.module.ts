import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './emp.component';
import { HoverOverComponent } from './directive/hover-over.directive'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HoverOverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
