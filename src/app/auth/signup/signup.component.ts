import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { MatchPassword } from "../validators/match-password"
import { UniqueUserName } from "../validators/unique-user-name"
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ],[this.uniqueUsername.validate]
    ),
    password: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
    passwordConfirmation: new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
    ]),
  },
  //custom validators for formgroup
  {validators: [this.matchPassword.validate]}
  )
  constructor(
    private matchPassword: MatchPassword,
    private uniqueUsername: UniqueUserName,
    private authService: AuthService   
  ) { }
 
  ngOnInit() {
  }

  onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    console.log(this.authForm.value)
    this.authService.signup(this.authForm.value)
    .subscribe({
      next: (response)=>{
        console.log(response)
        //redirect somewhere else on success 
      },
      error:(err)=>{
        if(!err.state){
          this.authForm.setErrors({noConnection:true})
        }else{
          this.authForm.setErrors({unknownError:true})
        }
      }
    })
  }
}
