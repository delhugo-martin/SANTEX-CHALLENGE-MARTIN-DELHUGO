import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterPlayerService {


// CONTRUCTOR
  constructor(
  private http:HttpClient
  ) { }

// ENDPOINT
ENDPOINT = "http://localhost:3000/"


//  PLayerPOST(datos: any, id:any) {
  PlayerPOST(body:any):Observable<any> {
    console.log("jugador registrado")
    return this.http.post("http://localhost:3000/player", body)
  }


  GetUser():Observable<any>{
    return this.http.get("http://localhost:3000/user/1")
  }


}//////////////
