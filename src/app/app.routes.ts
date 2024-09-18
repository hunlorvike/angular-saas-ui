import { Routes } from '@angular/router';
import { NotfoundComponent } from './modules/notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./modules/client/client.routes').then(a => a.CLIENT_ROUTES),
    },
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.routes').then(a => a.ADMIN_ROUTES),
    },
    {
        path: '**',
        component: NotfoundComponent,
    },
];
