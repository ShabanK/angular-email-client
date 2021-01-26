import { Injectable } from "@angular/core"
import { FormGroup, Validator} from "@angular/forms"

@Injectable()
export class MatchPassword implements Validator {
    validate(formGroup: FormGroup){
        const {password, passwordConfirmation} = formGroup.value
        if (password===passwordConfirmation){
            return null
        } else return {passwordsDontMatch: true}
        
        // return null 
    }
}
