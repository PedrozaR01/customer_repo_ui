import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';
/* 
Component responsible to add new customers.
it implements routes, the customer class as well as the service class.
From the service class it calls the create method that recieves a customer object.
The data input is at the html file. The html file has a submit button that call 
this "onSubmit" method, which is where the http methos is called.
Then, it returns us to the list of all customers.
*/ 
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  customer: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {
    this.customer = new Customer();
   }

   onSubmit(){
     this.customerService.create(this.customer).subscribe(result => 
      this.gotoCustomerList());
   }

   gotoCustomerList(){
    this.router.navigate(['/customers']);
  }

  ngOnInit(): void {
  }

}
