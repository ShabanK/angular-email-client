import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<any>("https://api.angular-email.com/auth/username",{
      username
    })
  }

  signup(credentials: any){
    console.log("This was fired")
    return this.http.post<any>("https://api.angular-email.com/auth/signup",
    credentials
    )
  }

}
