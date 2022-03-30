import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerService } from './service/customer.service';
import { CustomerListComponent } from './customer-list/customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form/customer-form.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
