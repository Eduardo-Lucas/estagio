import { Component, OnInit } from '@angular/core';

import { Candidato } from '../../candidato.model';
import { FirebaseService } from '../../services/firebase.service';
import { AlertTimeOutComponent } from '../alert-time-out/alert-time-out.component';

import { Auth } from '../../services/auth.service';

@Component({
  selector: 'candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css'],
  providers: [FirebaseService]
})
export class CandidatoFormComponent implements OnInit {
  candidatos: Candidato[];   
  alert: any = {};
  
/*   
  model= new Candidato(1, '', '', '',  '', '', '', null, '', '', '', 
  '', '', '',  '',  '', '', '', '', '', '',  '', '', '');   
*/
 
model = new Candidato(1, 'Representante', 
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


  constructor(private _firebaseService: FirebaseService,
              private auth: Auth) { }

  
  ngOnInit() {
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

