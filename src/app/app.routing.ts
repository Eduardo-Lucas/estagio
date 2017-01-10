import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CandidatoFormComponent } from './components/candidato-form/candidato-form.component';
import { CandidatoListComponent } from './components/candidato-list/candidato-list.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
        
    },
    {
        path: 'formulario',
        component: CandidatoFormComponent

    },
    {
        path: 'lista',
        component: CandidatoListComponent
    }

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

