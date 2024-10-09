import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages';

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
    {
        path: 'coming-soon',
        loadComponent: () =>
            import('./pages/coming-soon/coming-soon.component').then(
                (m) => m.ComingSoonComponent,
            ),
    },
];
