import { Component, OnInit } from '@angular/core';

import { Candidato } from '../../candidato.model';
import { FirebaseService } from '../../services/firebase.service';

import { Auth } from '../../services/auth.service';

@Component({
  selector: 'candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css'],
  providers: [FirebaseService]
})
export class CandidatoFormComponent implements OnInit {
  profile: any;
  candidatos: Candidato[];   
  alert: any = {};
  

  model= new Candidato(1, '', '', '', '',  '', '', '', null, '', '', '', 
  '', '', '',  '',  '', '', '', '', '', '',  '', '', '');   
/*
model = new Candidato(1, '',
                         'Profissional em TI', 
                         'Eduardo Lucas', 
                         'Masculino',  
                         'eduardolucas@gmail.com', 
                         '1961-03-24', 
                         'Casado', 
                         1, 
                         '71', '33594998', 'Residencial', 
                         '', '', '',
                         'Rua Dr. Hosannah de Olveira',  '155', 'Cond. Deauville Ap. 702-B', 'Itaigara', 'Salvador', 'BA', 
                         '12345',  'Inglês avançado', '12345', '12345');   
*/

  constructor(private _firebaseService: FirebaseService,
              private auth: Auth) { }

  
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('profile'));    
    this.model.email = this.profile.email;
    // Candidatos    
    this._firebaseService.getCandidatos().subscribe(candidatos => {
      this.candidatos = candidatos;
    }) 

  }
  
  addCandidato() {        
    this._firebaseService.addCandidato(this.model);  
    this.newAlert("success", "Registro gravado com sucesso!");
  } 

  public newAlert(type: string, message: string) {
        this.alert = {
        type: type,
        message: message
        } 
  }

  
    
             
}

