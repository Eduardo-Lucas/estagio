import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import { Candidato } from './../candidato.model';

@Injectable()
export class FirebaseService {
    candidatos: FirebaseListObservable<Candidato[]>;

    constructor(private _af: AngularFire) {}

    addCandidato(candidato) {
        //console.log("Quando chega no Service: "+candidato);
        return this.candidatos.push(candidato);        
    }

    getCandidatos() {
        this.candidatos = this._af.database.list('/candidatos') as
            FirebaseListObservable<Candidato[]>
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