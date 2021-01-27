import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"


import { AppComponent } from './app.component';

import {AuthModule} from "./auth/auth.module"
import {AuthService} from "./auth/auth.service"
import {MatchPassword} from "./auth/validators/match-password"
import {UniqueUserName} from "./auth/validators/unique-user-name"
import {AuthHttpInterceptor} from "./auth/auth-http-interceptor"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule, HttpClientModule
  ],
  providers: [
    MatchPassword,
    UniqueUserName,
    AuthService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
