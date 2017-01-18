import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { options } from '../auth.options';

// Avoid name not found warnings
//declare var Auth0Lock: any;
let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class Auth {
    // Configure Auth0Lock
    lock = new Auth0Lock('Df77yobHO4872DSRgKsW9QhUwVsNKu5u', 'eduardolucas.auth0.com', options);

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            this.lock.getProfile(authResult.idToken, function(error: any, profile: any)  {
                if(error){
                    throw new Error(error);
                }
                // Set Profile
                localStorage.setItem('profile', JSON.stringify(profile));
                // Set Token
                localStorage.setItem('id_token', authResult.idToken);
            })
        
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public logout() {
        // Remove info from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }


    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

}
