import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employee';
import { EmployeeServiceService } from 'src/app/services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees! : Employee[];
  constructor(private employeeServiceService : EmployeeServiceService, private router: Router ) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList(){
    this.employeeServiceService.getEmployeeList().subscribe(data =>{
      this.employees = data;
    })
    console.log(this.employees);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }
  viewEmployee(id: number)
  {
    this.router.navigate(['employee-details',id]);
  }
  deleteEmployee(id: number)
  {
    this.employeeServiceService.deleteEmployee(id).subscribe(data => {
      this.getEmployeeList();
    })
  }

}
