import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { enrollement } from '../shared/models/enrollement.model';
import { EnrollementService } from '../shared/services/enrollement.service';

@Component({
  selector: 'app-enrollements',
  templateUrl: './enrollements.component.html',
  styleUrls: ['./enrollements.component.css']
})
export class EnrollementsComponent implements OnInit {
  enrollements: enrollement[] | null = [];
  add = false;
  enrollement?: enrollement;
  error = false;
  errorAlert = "";
  alert1 = "Can only enroll existing students to existing courses! ";
  alert2 = "Student already enrolled in this course or invalid data!";

  @ViewChild('f') signupForm!: NgForm;

  constructor(private httpService: EnrollementService) { }

  ngOnInit(): void {
    this.httpService.getEnrollements('/api/StudentsCourses').subscribe(res => this.enrollements = res.body)
  }
  addEnrollementRequest() {
    this.add = true;
    this.error=false;
  }
  onSubmit(signupForm: NgForm) {
    this.enrollement = { studentName: this.signupForm.form.value.studentName, courseName: this.signupForm.form.value.courseName };
    this.httpService.addEnrollement('/api/StudentsCourses', this.enrollement)
                    .subscribe(res => { this.enrollements = res.body } , 
                               error => {this.error = error , this.errorAlert=(error.status==500?(this.alert1):this.alert2)});
    this.add = false;
  }
  onClose() {
    this.signupForm.reset();
    this.add = false;
  }
}