import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import { Customer } from '../model/customer';
/*
Here the update or put method is implemented, it recieves a customer object and an Id 
to update the existing customer with the new data.
*/

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  @Input() customer: Customer = {customerId: '', email: '', firstName: '', lastName: '',
    zipCode: '', gradeLevel: '', topicId: '', customerDescription: ''}
  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService
  ) {
    this.customer = new Customer();
   }

   ngOnInit(): void {
     this.getCustomer();
  }

  getCustomer(): void{
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.customerService.get(id).subscribe(customer => this.customer = customer);
  }
   save(){
     this.customerService.update(this.customer.customerId, this.customer).subscribe(
       result => this.gotoCustomerList()
     );
   }

   gotoCustomerList(){
    this.router.navigate(['/customers']);
  }

  

}
