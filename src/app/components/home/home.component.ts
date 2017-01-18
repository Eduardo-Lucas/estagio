import { Component, OnInit } from '@angular/core';

import { Auth } from '../../services/auth.service';
import { Candidato } from '../../candidato.model';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [FirebaseService]
})
export class HomeComponent implements OnInit {
  candidatos: Candidato[];
  profile: any;
  
  constructor(private _firebaseService: FirebaseService,
              private auth: Auth) { }

  ngOnInit() {
    if(!this.auth.authenticated) {
      this.auth.login();
    }
    this.profile = JSON.parse(localStorage.getItem('profile'));    
  }

}
