import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { CandidatoFormComponent } from './components/candidato-form/candidato-form.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCnmN44RTv99Fopd0u-r5atjS06d4R3JnM",
  authDomain: "candidatos-bddd6.firebaseapp.com",
  databaseURL: "https://candidatos-bddd6.firebaseio.com",
  storageBucket: "candidatos-bddd6.appspot.com"
}

@NgModule({
  declarations: [
    AppComponent,
    CandidatoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
