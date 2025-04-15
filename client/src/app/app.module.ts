import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employe/edit-employe.component';
import { MaterialModule } from './shared/modules/material.module';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
