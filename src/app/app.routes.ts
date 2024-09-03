import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () =>
            import('./modules/admin/admin.routes').then(a => a.routes),
    },
];
