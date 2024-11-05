import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllPlayersService {

  constructor(private http: HttpClient) {  }

  ENDPOINT = "http://localhost:3000/"


    PlayersGET():Observable<any> {
      return this.http.get("http://localhost:3000/players")

    }

    PlayerByShortNameGET(short_name:any):Observable<any> {
      return this.http.get("http://localhost:3000/player/short_name/"+short_name)

    }

    PlayerByClubNameGET(club_name:any):Observable<any> {
      return this.http.get("http://localhost:3000/player/club_name/"+club_name)
    }

    PlayerByAgeGET(age:any):Observable<any> {
      return this.http.get("http://localhost:3000/player/age/"+age)
    }

    PlayerByLeagueNameGET(league_name:any):Observable<any> {
      return this.http.get("http://localhost:3000/player/league_name/"+league_name)
    }

}
