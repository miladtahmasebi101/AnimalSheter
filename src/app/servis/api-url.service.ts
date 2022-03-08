import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  constructor(
    private http: HttpClient,) { }

  getUserinformation() {
    return this.http
      .get<any>(
        `${environment.apiUrl}pets`
      )
      ;
  }
  getFaq() {
    return this.http
      .get<any>(
        `${environment.apiUrl}faqs`
      )
      ;
  }
}
