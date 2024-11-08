import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditPlayerService {
  constructor(private http: HttpClient) {}

  ENDPOINT_PUT = 'http://localhost:3000/player/put';
  ENDPOINT_GET = 'http://localhost:3000/player/id/';

  PlayerByIdGET(id: any): Observable<any> {
    return this.http.get(this.ENDPOINT_GET + id);
  }

  PlayerPUT(player: any): Observable<any> {
    return this.http.put(this.ENDPOINT_PUT, player);
  }

}/////////////////////////////////////////////////////////////////////
