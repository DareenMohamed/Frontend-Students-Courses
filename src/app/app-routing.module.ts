import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { EnrollementsComponent } from './enrollements/enrollements.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'Students', component: StudentComponent},
  {path: 'Courses', component: CoursesComponent},
  {path: 'Enrollments', component: EnrollementsComponent},
  {path: '**',redirectTo: '/', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
