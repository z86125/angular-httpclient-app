import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];
  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
    this.loadEmployees();
  }
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    });
  }

  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees();
      });
    }
  }
  updateEmployee(id) {
    this.router.navigate(['/update-employee/' + id]);
  }
}
