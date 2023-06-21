import { AbstractControl,ValidationErrors,ValidatorFn } from "@angular/forms";

export function createPasswordValidator():ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null =>{
        const password =control.value;

        if(!password){
            return null
        }
        
        const hasLowerCase =/[a-z]+/.test(password)
        const hasUpperCase=/[A-Z]+/.test(password)
        const hasSpecialCharacter=/[!@#$%^&:(),.?]+/.test(password)
        const hasNumeric=/[0-9]+/.test(password);
        
        const passwordValid=hasLowerCase&&hasNumeric&&hasSpecialCharacter&&hasUpperCase
        
        return !passwordValid?{passwordStrength:true}:null
    }
}