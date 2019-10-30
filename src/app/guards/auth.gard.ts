import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Injectable()
export class AuthGard implements CanActivate{

    constructor(private router : Router, 
        private loginService : LoginService){

    }

    canActivate( route : ActivatedRouteSnapshot, 
                routerState : RouterStateSnapshot){

             const logado = this.loginService.isUsuarioLogado();
             var isDonoRoute = route.url.toString().includes("dono");
             var loggedUserIsDono = this.loginService.isDono();

             if (loggedUserIsDono || (!isDonoRoute && logado)){
                return true;
             }
             else {
                this.router.navigate(['/login']);
             }       

        // se logado
            // navegar par aprincipal
        //senão
            //navegar para login

                   
                }

}