import { Routes } from '@angular/router';

export const authRoutes: Routes = [
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'prefix',
    },
    {
        path: 'sign-in',
        loadComponent: () =>
            import('./sign-in/sign-in.component').then(
                (m) => m.SignInComponent,
            ),
    },
];
