import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerService } from './service/customer.service';
import { ProcessorService } from './service/processor-service';
import { CustomerListComponent } from './customer-list/customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form/customer-form.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { ProcessorFormComponent } from './processor-form/processor-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    ProcessorListComponent,
    ProcessorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CustomerService, ProcessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
