import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/common';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/client/client.routes').then(
                (r) => r.clientRoutes,
            ),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.routes').then((r) => r.adminRoutes),
    },
    {
        path: '**',
        component: PageNotFoundComponent,
    },
];
