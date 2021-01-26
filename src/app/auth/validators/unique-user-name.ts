import {Injectable} from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { AsyncValidator } from "@angular/forms"

@Injectable()
export class UniqueUserName implements AsyncValidator {
    constructor(private http:HttpClient){}
    validate(){
        return null
    }
}
