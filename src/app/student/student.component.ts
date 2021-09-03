import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { student } from '../shared/models/student.model';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students : student[] | null  = [];
  add=false;
  student ?: student;
  @ViewChild('f') signupForm!: NgForm;
  error = false;
  errorAlert = "Please enter valid data and a student that is not already registered!";
  
  
  constructor(private httpService: StudentService) { }

    ngOnInit(): void { 
        this.httpService.getStudents('/api/Students').subscribe( res => this.students = res.body )
    }
    addStudentRequest(){
      this.add=true;
      this.error=false;
    }
    onSubmit(signupForm: NgForm){
      this.student = {id : this.signupForm.form.value.id , name:this.signupForm.form.value.name , gpa:this.signupForm.form.value.gpa };
      this.httpService.addStudent('/api/Students' , this.student)
                              .subscribe( res => {this.students = res.body}, 
                                          error => {this.error = error});
      this.add=false;
  
    }
    onClose(){
      this.signupForm.reset();
      this.add=false;
    }
}
