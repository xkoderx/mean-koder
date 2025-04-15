import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit, AfterViewInit {
  employees$: Observable<Employee[]> = new Observable();
  displayedColumns: string[] = ['name', 'position', 'level', 'actions'];
  dataSource = new MatTableDataSource<Employee>();
  papa = this.employeesService.getEmployees().subscribe((data) => {
    this.dataSource.data = data;
  });
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private employeesService: EmployeeService
  ) {
    this.dataSource = new MatTableDataSource<Employee>();
  }

  ngOnInit(): void {
    this.fetchEmployees();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  deleteEmployee(id: string): void {
    this.employeesService.deleteEmployee(id).subscribe({
      next: () => this.fetchEmployees(),
    });
  }

  private fetchEmployees(): void {
    this.employees$ = this.employeesService.getEmployees();
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
