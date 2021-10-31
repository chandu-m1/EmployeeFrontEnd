import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../common/employee';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number;
  employee!:Employee;
  constructor(private route: ActivatedRoute, private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
  }

}