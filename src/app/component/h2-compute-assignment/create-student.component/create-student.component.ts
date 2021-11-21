import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentDetails } from '../../../Model/student.details';
import { DataTransformationService } from '../../../service/datatransformation.service';

@Component({
  selector: 'create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css'],
})
export class CreateStudentComponent implements OnInit {
  studentFormGroup!: FormGroup;

  dataSource: StudentDetails[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataTransformationService: DataTransformationService
  ) {
    this.dataTransformationService.dataSource.subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {
    this.initStudentDetailsForm();
  }

  initStudentDetailsForm() {
    this.studentFormGroup = this.fb.group({
      firstname: [''],
      lastname: [''],
      dob: [''],
    });
  }

  onSubmit() {
    let length: number = this.dataSource.length;
    let code: string;
    if (length < 10) {
      code = '00';
    } else {
      code = '0';
    }
    code += (length + 1).toString();
    let newStudent: StudentDetails = {
      code: code,
      firstname: this.studentFormGroup.get('firstname')?.value,
      lastname: this.studentFormGroup.get('lastname')?.value,
      dob: this.studentFormGroup.get('dob')?.value,
    };
    this.dataSource.push(newStudent);
    this.dataTransformationService.setStudentData(this.dataSource);
    this.studentFormGroup.reset();
  }

  Cancel() {
    this.router.navigate(['/']);
  }
}
