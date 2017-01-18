import { Component } from '@angular/core';
import { Auth } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']})
export class AppComponent  {

  constructor(private auth: Auth) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      if(!this.auth.authenticated) {
          this.auth.login();
      }    
  }
                  
}
