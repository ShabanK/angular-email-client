import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { tap, skipWhile, take } from "rxjs/operators";

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}
interface SigninCredentials {
  username: string;
  password: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface SignupResponse {
  username: string;
}

@Injectable()
export class AuthService {
  rootUrl = `https://api.angular-email.com`;
  signedIn$ = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<any>(`${this.rootUrl}/auth/username`, {
      username,
    });
  }

  signup(credentials: SignupCredentials) {
    console.log("This was fired");
    return this.http
      .post<SignupResponse>(`${this.rootUrl}/auth/signup`, credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }

  signin(credentials: SigninCredentials) {
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    );
  }

  checkAuth() {
    return this.http
      .get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
      .pipe(
        tap(({ authenticated }) => {
          this.signedIn$.next(authenticated);
        })
      );
  }

  signout() {
    return this.http.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }
}
