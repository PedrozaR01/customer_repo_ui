import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerService } from './service/customer.service';
import { ProcessorService } from './service/processor-service';
import { TopicService } from './service/topic.service';
import { GradeLevelService } from './service/grade-level.service';
import { CustomerListComponent } from './customer-list/customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form/customer-form.component';
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { ProcessorFormComponent } from './processor-form/processor-form.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { GradeLevelListComponent } from './grade-level-list/grade-level-list.component';
import { GradeLevelFormComponent } from './grade-level-form/grade-level-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerFormComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    ProcessorListComponent,
    ProcessorFormComponent,
    TopicListComponent,
    TopicFormComponent,
    GradeLevelListComponent,
    GradeLevelFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CustomerService, 
    ProcessorService,
    TopicService,
    GradeLevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
