import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardComponent,
            },
            {
                path: 'article',
                loadChildren: () =>
                    import('./article/article.routes').then(
                        a => a.ARTICLE_ROUTES
                    ),
            },
        ],
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.routes').then(a => a.AUTH_ROUTES),
    },
];
