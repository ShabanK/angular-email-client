import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http"


import { AppComponent } from './app.component';

import {AuthModule} from "./auth/auth.module"
import {MatchPassword} from "./auth/validators/match-password"
import {UniqueUserName} from "./auth/validators/unique-user-name"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule, HttpClientModule
  ],
  providers: [MatchPassword, UniqueUserName],
  bootstrap: [AppComponent]
})
export class AppModule { }
