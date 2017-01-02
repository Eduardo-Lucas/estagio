import { Component, OnInit } from '@angular/core';

import { Estagio } from '/../../../../Users/eduar/Angular2-course/estagio/src/app/estagio.model';

@Component({
  selector: 'estagio-form',
  templateUrl: './estagio-form.component.html',
  styleUrls: ['./estagio-form.component.css']
})
export class EstagioFormComponent implements OnInit {
  
  model= new Estagio(1, '', '', '',  '', '', '', 0, '', '', '', 
  '', '', '',  '',  '', '', '', '', '', '',  '', '', '');   
/*
model= new Estagio(1, 'Estagiário', 'Aline Paiva Lucas', 'Feminino',  'alineplucas@gmail.com', '01/13/1996', 'Solteiro', 0, '71', '33594998', 'Residencial', 
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
