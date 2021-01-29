import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { AuthService } from "./auth.service";
import { skipWhile, take } from "rxjs/operators";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.signedIn$.pipe(
      skipWhile((value) => value === null),
      take(1)
    );
  }
}
