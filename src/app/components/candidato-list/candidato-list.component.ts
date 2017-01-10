import { Component, OnInit } from '@angular/core';

import { Candidato } from '../../candidato.model';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Auth } from '../../services/auth.service';

@Component({
  selector: 'candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.css'],
  providers: [FirebaseService]
})
export class CandidatoListComponent implements OnInit  {
  candidatos: Candidato[];

  model= new Candidato(1, '', '', '',  '', '', '', null, '', '', '', 
  '', '', '',  '',  '', '', '', '', '', '',  '', '', '');   

   appState : string;
   activeKey: string;

  constructor(private _firebaseService: FirebaseService,
              private auth: Auth) {
  }

  changeState(state, key) {    
    if(key) {    
      this.activeKey = key;
    }
    this.appState = state;
  }

  ngOnInit() {
    // Busca candidatos na Nuvem
    this._firebaseService.getCandidatos().subscribe(candidatos => {
      //console.log(candidatos);
      this.candidatos = candidatos;
    })
  }
  
  showEdit(candidato) {             
    this.changeState('edit', candidato.$key);    
    this.model = candidato;   
  }

  atualizaCadastro() {
    var updCadastro = {
         tipo: this.model.tipo,
         nome: this.model.nome ,
         sexo: this.model.sexo ,
         email: this.model.email ,
         dataNascimento: this.model.dataNascimento ,
         estadoCivil: this.model.estadoCivil ,
         filhos: this.model.filhos ,
         ddd1: this.model.ddd1 ,
         telefone1: this.model.telefone1 ,
         tipo1: this.model.tipo1,
         ddd2: this.model.ddd2 ,
         telefone2: this.model.telefone2 ,
         tipo2: this.model.tipo2 ,
         endereco: this.model.endereco ,
         numero: this.model.numero ,
         complemento: this.model.complemento ,
         bairro: this.model.bairro ,
         cidade: this.model.cidade ,
         uf: this.model. uf,
         formacao: this.model.formacao ,
         nivelIngles: this.model.nivelIngles ,
         experiencia: this.model.experiencia ,
         qualificacao: this.model.qualificacao
    }
    this._firebaseService.updateCadastro( this.activeKey , updCadastro);
    this.changeState('default', null);
    
  }


deleteCandidato(key) {
    //console.log("Chave passada: "+key);
    this._firebaseService.deleteCandidato(key);
    this.changeState('default', null); 
  }

  

}
