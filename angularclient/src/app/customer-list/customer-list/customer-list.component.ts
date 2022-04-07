import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer'; 
import { CustomerService } from 'src/app/service/customer.service';



/**
 This class simply implements the get method for all customers
 the html file has a table that iterates over the customer object. 
 
 */

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers!: Customer[];
  

  constructor(
    private customerService: CustomerService,
    private router: Router
    ) {

   }

   deleteCustomer(Id: string){
     this.customerService.delete(Id).subscribe((success => {this.ngOnInit()}));
   }

  ngOnInit(){
    this.customerService.list().subscribe(data => {
      this.customers = data;
    });
    
  }

}
