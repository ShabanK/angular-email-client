import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { BehaviorSubject } from "rxjs"
import { tap } from 'rxjs/operators';

interface SignupCredentials{
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse{
  username: string
}

@Injectable()
export class AuthService {

  rootUrl = `https://api.angular-email.com`
  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<any>(`${this.rootUrl}/auth/username`,{
      username
    })
  }

  signup(credentials: SignupCredentials){
    console.log("This was fired")
    return this.http.post<SignupResponse>(`${this.rootUrl}/auth/signup`,
      credentials
    ).pipe(
      tap(()=>{
        this.signedIn$.next(true)
      })
    )
  }

}
