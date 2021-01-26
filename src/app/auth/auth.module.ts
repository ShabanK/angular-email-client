import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ReactiveFormsModule} from "@angular/forms"

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {MatchPassword} from "./validators/match-password"
import {UniqueUserName} from "./validators/unique-user-name"

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MatchPassword, UniqueUserName],
  declarations: [SigninComponent, SignupComponent]
})
export class AuthModule { }
