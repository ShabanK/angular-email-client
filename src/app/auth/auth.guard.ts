import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return false;
  }
}
