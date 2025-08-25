import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'bienvenida',
        pathMatch: 'full',
    },
    {
        path: 'bienvenida',
        loadComponent: () =>
            import('./pages/bienvenida/bienvenida').then((component) => component.Bienvenida),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./pages/login/login').then((component) => component.Login),
    },
    {
        path: 'registro',
        loadComponent: () =>
            import('./pages/registro/registro').then((component) => component.Registro),
    },
    {
        path: 'sobre-mi',
        loadComponent: () =>
            import('./pages/sobre-mi/sobre-mi').then((component) => component.SobreMi),
    },
    {
        path: 'error',
        loadComponent: () =>
            import('./pages/error/error').then((component) => component.Error),
    },
    {
        path: '**',
        loadComponent: () =>
            import('./pages/error/error').then((component) => component.Error),
    }
];
