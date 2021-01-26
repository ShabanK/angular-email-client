import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { AsyncValidator, FormControl } from "@angular/forms"
import { catchError, map } from "rxjs/operators"
import { of } from "rxjs/observable/of"

@Injectable()
export class UniqueUserName implements AsyncValidator {
    constructor(private http:HttpClient){}
    validate = (control: FormControl)=>{
        const {value} = control 
        return this.http.post<any>("https://api.angular-email.com/auth/username",{
            username: value
        }).pipe(
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
