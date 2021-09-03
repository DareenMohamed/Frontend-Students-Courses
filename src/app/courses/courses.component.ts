import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { course } from '../shared/models/course.model';
import { CourseService } from '../shared/services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses : course[] | null  = [];
  add=false;
  course ?: course;
  @ViewChild('f') signupForm!: NgForm;
  error = false;
  errorAlert = "Please enter valid data and a course that is not already registered!";
  
  constructor(private httpService: CourseService) { }

    ngOnInit(): void { 
        this.httpService.getCourses('/api/Courses').subscribe( res => {this.courses = res.body ,  console.log(res.body)})
    }
    addCourseRequest(){
      this.add=true;
      this.error=false;
    }
    onSubmit(signupForm: NgForm){
      this.course = {id : this.signupForm.form.value.id , name:this.signupForm.form.value.name };
      this.httpService.addCourse('/api/Courses' , this.course)
                      .subscribe( res => {{this.courses = res.body}} ,
                                  error => {this.error = error});
      this.add=false;
  
    }
    onClose(){
      this.signupForm.reset();
      this.add=false;
    }
}