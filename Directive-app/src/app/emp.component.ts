// Importing componenet and employee.
import { Component } from "@angular/core";
import { Employee }  from "./employee";

// Component Decorator.
@Component({
    selector: "emp-app",
    templateUrl: "./emp.component.html"
})
export class EmployeeComponent {
  // Property of type Employee Object.
  EmployeeList: Employee[]= [
    {"firstName":"Gautam", "lastName":"Bhalla" },
    {"firstName":"Saurabh", "lastName":"Bhatia" },
    {"firstName":"King", "lastName":"Kochhar" },
    {"firstName":"Sarah", "lastName":"Bowling" }
  ]

  // Empoyee Array with employee Object.
  employees: Array<Employee>  = this.EmployeeList;

}
