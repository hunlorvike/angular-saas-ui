import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { metaGuard } from '@services/guards/meta.guard';
import { metaConfig } from '@config/meta.config';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [metaGuard],
    data: {
      meta: {
        defaults: {
          ...metaConfig.defaults,
          title: 'Trang chủ',
        },
      },
    },
  },
];
