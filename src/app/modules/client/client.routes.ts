import { Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import {
    AboutUsComponent,
    ContactComponent,
    FaqComponent,
    FeatureComponent,
    HomeComponent,
    PricingComponent,
} from './pages';

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
                path: 'about-us',
                component: AboutUsComponent,
            },
            {
                path: 'contact',
                component: ContactComponent,
            },
            {
                path: 'faq',
                component: FaqComponent,
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
