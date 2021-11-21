import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDetailsResponse } from '../Model/student.details.response';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getApplicationData(): Observable<StudentDetailsResponse> {
    const url = '../../assets/json/student_details.json';
    return this.httpClient.get<StudentDetailsResponse>(url);
  }
}
