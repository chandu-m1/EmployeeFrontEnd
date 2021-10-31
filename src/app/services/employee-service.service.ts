import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private baseUrl = "https://spring-employee.herokuapp.com/employees"
  constructor(private httpClient : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployeeList(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id: number, employee: Employee): Observable<Employee>
  {
    return this.httpClient.put<Employee>(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id : number):  Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
