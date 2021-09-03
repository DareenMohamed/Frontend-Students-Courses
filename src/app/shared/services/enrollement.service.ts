import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enrollement } from '../models/enrollement.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollementService {
  baseUrl = 'http://localhost:52451';
  constructor(private httpClient: HttpClient) { }

  getEnrollements(url : String){
   return this.httpClient.get<enrollement []>(this.baseUrl + url , {
      observe:'response'
    })
  }
  addEnrollement(url: string, enrollement: enrollement) {
    return this.httpClient.post<enrollement[]>(this.baseUrl + url, enrollement, { observe:
   'response' })
    }
}
