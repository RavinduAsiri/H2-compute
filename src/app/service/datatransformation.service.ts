import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentDetails } from '../Model/student.details';

@Injectable({
  providedIn: 'root',
})
export class DataTransformationService {
  data: StudentDetails[] = [];

  private studentDetailsSubject = new BehaviorSubject<StudentDetails[]>(
    this.data
  );
  dataSource = this.studentDetailsSubject.asObservable();

  constructor() {}

  setStudentData(data: StudentDetails[]) {
    this.studentDetailsSubject.next(data);
  }
}
