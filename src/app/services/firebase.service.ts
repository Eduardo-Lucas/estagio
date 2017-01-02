import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rsjx/add/operator/map';

import { Candidato } from '/../../../../Users/eduar/Angular2-course/estagio/src/app/candidato.model';

@Injectable()
export class FirebaseService {
    candidatos: FirebaseListObservable<Candidato[]>;

    constructor(private _af: AngularFire) {}

    
}