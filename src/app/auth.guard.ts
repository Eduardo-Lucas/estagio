import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Auth } from './services/auth.service';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGuard implements CanActivate   {
    constructor(private auth: Auth,
                private router: Router) {

                }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if(this.auth.authenticated()) {
            console.log('Auth Guard Ok');
            return true;
        } else {
            console.log('Blocked by Auth Guard');
            this.router.navigate(['/home']);
            return false;
        }
    }
}






