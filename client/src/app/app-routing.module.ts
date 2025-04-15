import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employe/edit-employe.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'employees/new', component: AddEmployeeComponent },
  { path: 'employees/edit/:id', component: EditEmployeeComponent },
  { path: '**', redirectTo: 'employees',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
