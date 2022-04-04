import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Processor } from '../model/processor';
import { Observable } from 'rxjs';

@Injectable()
export class ProcessorService {

  private processorsUrl: string;

  constructor(private http: HttpClient) { 
    this.processorsUrl = 'http://localhost:8080/processors';
  }

  list(): Observable<any> {
    return this.http.get(this.processorsUrl);
  }

  //yet to implement in the UI
  get(id: string): Observable<any> {
    return this.http.get(`${this.processorsUrl}/${id}`);
  }

  create(data: Processor): Observable<any> {
    return this.http.post(this.processorsUrl, data);
  }

  update(id: string, data: Processor): Observable<any> {
    return this.http.put(`${this.processorsUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.processorsUrl}/${id}`);
  }
}
