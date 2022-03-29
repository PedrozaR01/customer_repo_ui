import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

  private customersUrl: string;

  constructor(private http: HttpClient) {
    this.customersUrl = 'http://localhost:8080/customers';
   }

   list(): Observable<any> {
    return this.http.get(this.customersUrl);
  }

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
