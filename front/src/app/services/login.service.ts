import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
    ) { }



    ENDPOINT = "http://localhost:3000/"

    loginUser(body:any):Observable<any>{
      return this.http.post("http://localhost:3000/login",body)
    }
}
