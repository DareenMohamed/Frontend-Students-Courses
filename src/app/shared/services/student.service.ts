import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl = 'http://localhost:52451';
  constructor(private httpClient: HttpClient) { }

  getStudents(url : String){
   return this.httpClient.get<student []>(this.baseUrl + url , {
      observe:'response'
    })
  }
  addStudent(url: string, student: student) {
    return this.httpClient.post<student[]>(this.baseUrl + url, student, {
       observe:'response' })
    }
}
