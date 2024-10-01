import { Routes } from '@angular/router';

export const clientRoutes: Routes = [
  {
    path: 'document',
    loadComponent: () =>
      import('./pages/document/document.component').then(
        (m) => m.DocumentComponent,
      ),
  },
];
