import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';

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
