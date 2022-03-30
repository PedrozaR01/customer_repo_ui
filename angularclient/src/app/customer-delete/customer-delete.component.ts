import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';

/*
This component class implements the delete method. It imports the customer class and service and 
angular´s router to move us from path to path.
The http file receives the id of the customer to delete.
*/

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) { 
    this.customer = new Customer();
  }

  onSubmit(){
    this.customerService.delete(this.customer.customerId).subscribe(
      result => this.gotoCustomerList()
    );
  }

  gotoCustomerList(){
   this.router.navigate(['/customers']);
 }

  ngOnInit(): void {
  }

}
