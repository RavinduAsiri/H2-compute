import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StudentDetails } from '../../../Model/student.details';
import { DataTransformationService } from '../../../service/datatransformation.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  studentformGroup!: FormGroup;

  dataSource: StudentDetails[] = [];

  get firstName() {
    return this.studentformGroup.get('firstname');
  }

  get lastName() {
    return this.studentformGroup.get('lastname');
  }

  get dob() {
    return this.studentformGroup.get('dob');
  }

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    private dataTransformationService: DataTransformationService,
    @Inject(MAT_DIALOG_DATA) public data: StudentDetails
  ) {
    this.dataTransformationService.dataSource.subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {
    this.initStudentForm();
  }

  initStudentForm() {
    this.studentformGroup = this.fb.group({
      firstname: [this.data.firstname, Validators.required],
      lastname: [this.data.lastname, Validators.required],
      dob: [this.data.dob, Validators.required],
    });
  }

  onSubmit() {
    let code: string = this.data.code;
    this.dataSource.forEach((data) => {
      if (code == data.code) {
        data.firstname = this.firstName?.value;
        data.lastname = this.lastName?.value;
        data.dob = this.dob?.value;
      }
    });
    this.dataTransformationService.setStudentData(this.dataSource);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
