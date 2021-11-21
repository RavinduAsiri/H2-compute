import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './component/h2-compute-assignment/create-student.component/create-student.component';
import { H2ComputeComponent } from './component/h2-compute-assignment/h2-compute.component';

const routes: Routes = [
  { path: '', component: H2ComputeComponent },
  { path: 'newstudent', component: CreateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
