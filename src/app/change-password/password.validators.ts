import { AbstractControl, ValidationErrors } from "../../../node_modules/@angular/forms";
import { resolve } from "../../../node_modules/@types/q";

export class PasswordValidators{
    
    static validOldPassword(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve) => {
            if(control.value == "1234"){
                resolve({invalidOldPassword : true});
            }else{
                resolve(null);
            }
        });
    }

    static passwordsShouldMatch(control: AbstractControl){
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value){
            return { passwordsShouldMatch : true};
        }

        return null;
    }
}