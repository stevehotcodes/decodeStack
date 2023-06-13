import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }
 
  passwordChecker(password:string): string []{
    const errors:string []=[]

    if(!/[a-z]/.test(password)){
      errors.push('password must contain at least one lowercase character ')
    }

    if(!/[A-Z]/.test(password)){
      errors.push('password must contain at least one uppercase character ')
    }
    if(!/\d/.test(password)){
      errors.push('password must contain at least one number character ')
    }
    if(!/[!@#$%^&:(),.?]/.test(password)){
      errors.push('password must contain at least one special character ')
    }

    return errors
    
  }






}
