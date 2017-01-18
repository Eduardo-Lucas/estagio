import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Candidato } from './../candidato.model';
import { Administrador } from './../administrador.model';

@Injectable()
export class FirebaseService {
    candidatos: FirebaseListObservable<Candidato[]>; 
    administradores: FirebaseListObservable<Administrador[]>;

    constructor(private _af: AngularFire) {}

    getAdministradores(emailAdmin: string = null) {
       if(emailAdmin != null) {
           console.log("Email SIM: "+emailAdmin);
            this.administradores = this._af.database.list('/administradores', {
                query: {
                    orderByChild: 'emailAdmin',
                    equalTo: emailAdmin
                }
            }) as
                FirebaseListObservable<Administrador[]>                                  
       } else {
           console.log("Email NÃO: "+emailAdmin);
            this.administradores = this._af.database.list('/administradores') as            
                FirebaseListObservable<Administrador[]>                                  
       }               
        return this.administradores; 
        
    }

    addCandidato(candidato) {
        //console.log("Quando chega no Service: "+candidato);
        return this.candidatos.push(candidato);        
    }

    getCandidatos(email: string = null) {
        if(email != null) {
            this.candidatos = this._af.database.list('/candidatos', {
                query: {
                    orderByChild: 'email',
                    equalTo: email
                }
            }) as
                FirebaseListObservable<Candidato[]>
                
        } else {
            this.candidatos = this._af.database.list('/candidatos') as
                FirebaseListObservable<Candidato[]>
                         
        }
        return this.candidatos;   
    }

    verificaEmail(email) {
        this.candidatos = this._af.database.list('/candidatos', {
            query: {
                orderByChild: 'email',
                equalTo: email
            }
        }) as
            FirebaseListObservable<Candidato[]>
            return this.candidatos;
    }

    deleteCandidato(key) {
        return this.candidatos.remove(key);
    }

    updateCadastro(key, cadastro) {
        return this.candidatos.update(key, cadastro);
    }


}