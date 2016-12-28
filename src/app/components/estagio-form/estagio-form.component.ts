import { Component, OnInit } from '@angular/core';

import { Estagio } '../../estagio.model';

@Component({
  selector: 'estagio-form',
  templateUrl: './estagio-form.component.html',
  styleUrls: ['./estagio-form.component.css']
})
export class EstagioFormComponent implements OnInit {
  
  model = new Estagio();

  constructor() { }

  ngOnInit() {
  }

}
