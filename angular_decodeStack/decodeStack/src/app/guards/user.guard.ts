import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree, } from "@angular/router";
import { Observable } from "rxjs";
import { UserServicesService } from "../services/user.service";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn:'root'
})

export class UserGuard implements CanActivate{
    
    constructor (private router:Router, private userSvc:UserServicesService,private authSvc:AuthService){}
    

    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean > | Promise<boolean > {
        try{
            if(this.authSvc.getUserSignInToken()){

                return true
                
            }
            else{
                this.router.navigate(['/signin'])
                return false
            }
        }
        catch{
            throw new Error("Method not implemented.");
        }

        
  
      
     
    }


    }

