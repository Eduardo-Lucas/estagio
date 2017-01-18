import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
import { Administrador } from '../../administrador.model';
import { Candidato } from '../../candidato.model';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [FirebaseService]
})
export class ProfileComponent implements OnInit {
  administradores: Administrador[];
  candidatos: Candidato[];
  profile: any;
  appState : string;
  activeKey: string;
  model= new Candidato(1, '', '', '', '',  '', '', '', null, '', '', '', 
  '', '', '',  '',  '', '', '', '', '', '',  '', '', ''); 


  constructor(private _firebaseService: FirebaseService,
              private auth: Auth) { 
    }

  ngOnInit() {
    if(this.auth.authenticated) {
      this.profile = JSON.parse(localStorage.getItem('profile'));    
        console.log("Email Passado: "+JSON.stringify(this.profile.email));
      /*  De posse do email logado, preciso verificar se pertence ou não a um Administrador.
          Se pertencer a um Administrador, a lista vai aparecer com todos os candidatos.
          Caso contrário, vai aparecer apenas o Perfil do candidato.
      */
      // Busca administradores na Nuvem
      this._firebaseService.getAdministradores(this.profile.email).subscribe(administradores => {
        console.log("Administradores: "+administradores);        
        this.administradores = administradores;
        });

        
        if(this.administradores) {
          // Busca TODOS candidatos na Nuvem
          this._firebaseService.getCandidatos().subscribe(candidatos => {
            //console.log("Candidatos: "+JSON.stringify(candidatos));
            this.candidatos = candidatos;
            });
  
        } else {
          // Busca APENAS UM candidato na Nuvem
          this._firebaseService.getCandidatos(this.profile.email).subscribe(candidatos => {
            //console.log("Candidatos: "+JSON.stringify(candidatos));
            this.candidatos = candidatos;
            });
        }        
      }
  
  }

  changeState(state, key) {    
    if(key) {    
      this.activeKey = key;
    }
    this.appState = state;
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
