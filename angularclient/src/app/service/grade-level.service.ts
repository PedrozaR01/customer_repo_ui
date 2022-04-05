import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GradeLevel } from '../model/grade-level';
import { Observable } from 'rxjs';

@Injectable()
export class GradeLevelService {

  private GradeLUrl: string;

  constructor(private http: HttpClient) {
    this.GradeLUrl = 'http://localhost:8080/gradelevel'
   }

   list(): Observable<any> {
    return this.http.get(this.GradeLUrl);
  }

  //yet to implement in the UI
  get(id: string): Observable<any> {
    return this.http.get(`${this.GradeLUrl}/${id}`);
  }

  create(data: GradeLevel): Observable<any> {
    return this.http.post(this.GradeLUrl, data);
  }

  update(id: string, data: GradeLevel): Observable<any> {
    return this.http.put(`${this.GradeLUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${this.GradeLUrl}/${id}`);
  }
}
