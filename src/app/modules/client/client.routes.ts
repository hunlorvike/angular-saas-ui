import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './pages';
import { ContactComponent } from './pages/contact/contact.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { FeatureComponent } from './pages/feature/feature.component';

export const clientRoutes: Routes = [
    {
        path: '',
        component: ClientComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
            },
            {
                path: 'feature',
                component: FeatureComponent,
            },
            {
                path: 'pricing',
                component: PricingComponent,
            },
            {
                path: 'contact',
                component: ContactComponent,
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
