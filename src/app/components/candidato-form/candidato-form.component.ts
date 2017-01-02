import { Component, OnInit } from '@angular/core';

import { Candidato } from '/../../../../Users/eduar/Angular2-course/estagio/src/app/candidato.model';

@Component({
  selector: 'candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.css']
})
export class CandidatoFormComponent implements OnInit {
  
  model= new Candidato(1, '', '', '',  '', '', '', 0, '', '', '', 
  '', '', '',  '',  '', '', '', '', '', '',  '', '', '');   
/*
model= new Candidato(1, 'Estagiário', 'Aline Paiva Lucas', 'Feminino',  'alineplucas@gmail.com', '01/13/1996', 'Solteiro', 0, '71', '33594998', 'Residencial', 
  '', '', '',
   'Rua Dr. Hosannah de Olveira',  '155', 'Cond. Deauville Ap. 702-B', 'Itaigara', 'Salvador', 'BA', '',  'Inglês instrumental', '', '');   
*/
  constructor() { }

  ngOnInit() {
  }

  get currentEstagio() {
    return JSON.stringify(this.model);
  }

}
