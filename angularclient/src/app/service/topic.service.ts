import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../model/topic';
import { Observable } from 'rxjs';

@Injectable()
export class TopicService {

  private topicsUrl: string;

  constructor(private http: HttpClient) {
    this.topicsUrl = 'http://localhost:8080/topics';
   }

   list(): Observable<any> {
    return this.http.get(this.topicsUrl);
  }

  //yet to implement in the UI
  get(id: string): Observable<any> {
    return this.http.get(`${this.topicsUrl}/${id}`);
  }

  create(data: Topic): Observable<any> {
    return this.http.post(this.topicsUrl, data);
  }

  update(id: string, data: Topic): Observable<any> {
    return this.http.put(`${this.topicsUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.topicsUrl}/${id}`);
  }
}
