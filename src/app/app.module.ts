import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ExampleComponent } from './component/example/example.component';
import { H2ComputeComponent } from './component/h2-compute-assignment/h2-compute.component';
import { EditComponent } from './component/h2-compute-assignment/edit-component/edit.component';
import { NewApplicationComponent } from './component/new-application/new-application.component';

import { StudentService } from './service/student.service';
import { DataTransformationService } from './service/datatransformation.service';
import { CreateStudentComponent } from './component/h2-compute-assignment/create-student.component/create-student.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ExampleComponent,
    H2ComputeComponent,
    CreateStudentComponent,
    NewApplicationComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatChipsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatStepperModule,
    HttpClientModule,
    AppRoutingModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [StudentService, DataTransformationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
