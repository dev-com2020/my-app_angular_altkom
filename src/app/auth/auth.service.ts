import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token = ''
  get isLoggedIn() {
    return this.token !== ''
  }

  constructor(private http: HttpClient) { }

  login(): Observable<string>{
    return this.http.post<string>('https://fakestoreapi.com/auth/login',{
      username: 'johnd',
      password: 'm38rmF$'
    }).pipe(tap(token => this.token = token))
  }

  logout(){
    this.token =''
  }
}
