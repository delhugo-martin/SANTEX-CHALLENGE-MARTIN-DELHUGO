import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FindPlayerService {
  constructor(private http: HttpClient) {}

  ENDPOINT_GET = 'http://localhost:3000/player/player_id/';

  //  PLayerPOST(datos: any, id:any) {
  PlayerByIdGET(id: any): Observable<any> {
    return this.http.get(this.ENDPOINT_GET + id);
  }

} // END
