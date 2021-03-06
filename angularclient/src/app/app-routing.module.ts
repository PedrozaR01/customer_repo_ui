import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list/customer-list.component'; 
import { CustomerFormComponent } from './customer-form/customer-form/customer-form.component'; 
import { CustomerUpdateComponent } from './customer-update/customer-update.component';
import { CustomerDeleteComponent } from './customer-delete/customer-delete.component';
import { ProcessorFormComponent } from './processor-form/processor-form.component';
import { ProcessorListComponent } from './processor-list/processor-list.component';
import { ProcessorUpdateComponent } from './processor-update/processor-update.component';
import { TopicFormComponent } from './topic-form/topic-form.component';
import { TopicListComponent } from './topic-list/topic-list.component';
import { GradeLevelFormComponent } from './grade-level-form/grade-level-form.component';
import { GradeLevelListComponent } from './grade-level-list/grade-level-list.component';

/*
This module is responsible for all the routing, along with the path, it tells 
what component should be used, these path are called in the app.component.html file
in the buttons.
*/

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'addcustomer', component: CustomerFormComponent },
  { path: 'updatecustomer/:id', component: CustomerUpdateComponent},
  { path: 'deletecustomer', component: CustomerDeleteComponent},
  { path: 'processors', component: ProcessorListComponent},
  { path: 'addprocessor', component: ProcessorFormComponent},
  { path: 'updateprocessor/:id', component: ProcessorUpdateComponent},
  { path: 'topics', component: TopicListComponent},
  { path: 'addtopic', component: TopicFormComponent},
  { path: 'gradelevel', component: GradeLevelListComponent},
  { path: 'addgradelevel', component: GradeLevelFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }