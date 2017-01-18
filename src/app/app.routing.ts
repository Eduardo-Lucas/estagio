import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatoFormComponent } from './components/candidato-form/candidato-form.component';
import { CandidatoListComponent } from './components/candidato-list/candidato-list.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent        
    },    
        {
        path: 'home',
        component: HomeComponent        
    },    

    {
        path: 'formulario',
        component: CandidatoFormComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'lista',
        component: CandidatoListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'perfil',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

