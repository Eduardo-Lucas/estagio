import { Component, OnInit } from '@angular/core';

import { Estagio } from '/../../../../Users/eduar/Angular2-course/estagio/src/app/estagio.model';

@Component({
  selector: 'estagio-form',
  templateUrl: './estagio-form.component.html',
  styleUrls: ['./estagio-form.component.css']
})
export class EstagioFormComponent implements OnInit {
  
  model= new Estagio(1, '', 'Masculino',  '71', '', 'Residencial', '',  '', '',
  '', '', 'Solteiro', 0, '', 's/n', '', '', 'Salvador', 'BA',  '', '', '');   

  constructor() { }

  ngOnInit() {
  }

  get currentEstagio() {
    return JSON.stringify(this.model);
  }

}
