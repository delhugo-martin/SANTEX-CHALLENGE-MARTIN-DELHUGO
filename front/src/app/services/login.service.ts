import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private tokenKey: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ENDPOINT = 'http://localhost:3000/';

  // SETEAMOS EL TOKEN EN EL LOCAL STORAGE
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // RECUPERAMOS EL TOKEN DEL LOCALSTORAGE
  private getToken(): string | null {
    if (typeof window !== "undefined"){
      return localStorage.getItem(this.tokenKey);
    }else {return null}
  }

  // VERIFICAMOS AUTENTICACION
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    // recuperamos el token
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    //return Date.now() < exp;
    return true
  }

  // LOGOUT
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/']);
  }

  login(body: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/login', body).pipe(
      tap((res) => {
        if (res.token) {
          //console.log(res.token);
          // seteamos el token
          this.setToken(res.token);
        }
      })
    );
  } //
} ////////////////////////////////////
