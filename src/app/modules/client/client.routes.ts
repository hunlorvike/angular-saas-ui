import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages/home/home.component';

export const clientRoutes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
        ],
    },
    {
        path: 'document',
        loadComponent: () =>
            import('./pages/document/document.component').then(
                (m) => m.DocumentComponent,
            ),
    },
];
