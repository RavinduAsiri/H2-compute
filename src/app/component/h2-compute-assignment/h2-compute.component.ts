import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditComponent } from './edit-component/edit.component';

import { StudentDetails } from 'src/app/Model/student.details';

import { DataTransformationService } from 'src/app/service/datatransformation.service';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'h2-compute',
  templateUrl: './h2-compute.component.html',
  styleUrls: ['./h2-compute.component.css'],
})
export class H2ComputeComponent implements OnInit {
  dataSource: StudentDetails[] = [];
  displayedColumns: string[] = [
    'code',
    'firstname',
    'lastname',
    'dob',
    'action',
  ];

  constructor(
    private router: Router,
    private dataTransformationService: DataTransformationService,
    private studentService: StudentService,
    public dialog: MatDialog
  ) {
    this.dataTransformationService.dataSource.subscribe((data) => {
      this.dataSource = data;
    });
    this.getStudentDetails();
  }

  ngOnInit(): void {}

  /** get all student details */
  getStudentDetails() {
    if (this.dataSource.length == 0) {
      this.studentService.getApplicationData().subscribe((data) => {
        this.dataSource = data.list;
        this.dataTransformationService.setStudentData(this.dataSource);
      });
    }
  }

  /** open dialog view to edit student details */
  openDialog(row: StudentDetails): void {
    this.dialog.open(EditComponent, {
      width: '500px',
      height: '400px',
      data: row,
    });
  }

  createNewStudent() {
    this.router.navigate(['/newstudent']);
  }

  /** delete row data (when clicking the delete action) */
  deleteRowData(row: StudentDetails) {
    this.dataSource = this.dataSource.filter((value) => {
      return value.code != row.code;
    });
  }
}
