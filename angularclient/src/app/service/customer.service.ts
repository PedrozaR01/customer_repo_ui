import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';//libary that implements the http requests
import { Customer } from 'src/app/model/customer';
import { Observable } from 'rxjs'; //This returns instances of objects like customers, for example

/*
This service class makes the
requests to the API at port 8080/customers.
In other words, this class consumes the api created on Java.
The syntax for Observable<any> could replace "any" to "Customers" 
or whatever class we create.
*/

@Injectable() //this simply indicates that the service is created and injected via Angular's dependencies
export class CustomerService {

  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8080/customers';
   }

   list(): Observable<any> {
    return this.http.get(this.customersUrl);
  }

  //yet to implement in the UI
  get(id: string): Observable<any> {
    return this.http.get(`${this.customersUrl}/${id}`);
  }

  create(data: Customer): Observable<any> {
    return this.http.post(this.customersUrl, data);
  }

  update(id: string, data: Customer): Observable<any> {
    return this.http.put(`${this.customersUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.customersUrl}/${id}`);
  }

}
