import {Injectable} from "@angular/core"
import { AsyncValidator, FormControl } from "@angular/forms"
import { catchError, map } from "rxjs/operators"
import { of } from "rxjs/observable/of"
import {AuthService} from "../auth.service"

@Injectable()
export class UniqueUserName implements AsyncValidator {
    constructor(private authService:AuthService){}
    validate = (control: FormControl)=>{
        const {value} = control 
        return this.authService.usernameAvailable(value)
        .pipe(
            //theres only two conditions
            //one is {available: true} which can get mapped
            //other is an error that skips over map and other operators
            //so for now, no point in doing checks inside the map
            //just return null
            map(()=>{
                return null
            }),
            catchError((err)=>{
                console.log(err)
                if(err.error.username){
                    return of({nonUniqueUsername:true})
                } else {
                    return of({offline: true})
                }
            })
        )
    }
}
