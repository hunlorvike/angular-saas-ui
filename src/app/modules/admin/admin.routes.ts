import { Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

export const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./pages/dashboard/dashboard.component').then(
                        (m) => m.DashboardComponent,
                    ),
                data: {
                    breadcrumb: 'Trang chủ',
                },
            },
            {
                path: 'posts',
                loadChildren: () =>
                    import('./pages/post/post.routes').then(
                        (r) => r.postRoutes,
                    ),
                data: {
                    breadcrumb: 'Quản lý bài viết',
                },
            },
        ],
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./pages/auth/auth.routes').then((r) => r.authRoutes),
    },
];
