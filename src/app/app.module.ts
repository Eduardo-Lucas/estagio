import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { AlertModule } from 'ng2-bootstrap';

import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { Auth } from './services/auth.service';
import { AuthGuard } from './auth.guard';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { CandidatoFormComponent } from './components/candidato-form/candidato-form.component';
import { CandidatoListComponent } from './components/candidato-list/candidato-list.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileComponent } from './components/profile/profile.component';

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
    CandidatoFormComponent,
    CandidatoListComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AlertModule.forRoot(),
    routing
  ],
  providers: [appRoutingProviders, 
              AUTH_PROVIDERS,
              Auth,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
