import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  baseUrl = 'http://localhost:52451';
  constructor(private httpClient: HttpClient) { }

  getCourses(url : String){
   return this.httpClient.get<course []>(this.baseUrl + url , {
      observe:'response'
    })
  }
  addCourse(url: string, course: course) {
    return this.httpClient.post<course[]>(this.baseUrl + url, course, { observe:
   'response' })
    }
}
