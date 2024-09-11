import {
    ApplicationConfig,
    provideZoneChangeDetection,
    importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
    provideClientHydration,
    withEventReplay,
} from '@angular/platform-browser';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsFormPlugin } from '@ngxs/form-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsRouterPlugin } from '@ngxs/router-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { vi_VN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NzIconModule, provideNzIcons } from 'ng-zorro-antd/icon';
import { icons } from './icons-provider';

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideClientHydration(withEventReplay()),
        provideStore(
            [],
            withNgxsReduxDevtoolsPlugin(),
            withNgxsFormPlugin(),
            withNgxsLoggerPlugin(),
            withNgxsRouterPlugin(),
            withNgxsStoragePlugin({
                keys: ['auth'],
            })
        ),
        importProvidersFrom(FormsModule, NzIconModule),
        provideHttpClient(),
        provideNzI18n(vi_VN),
        provideAnimationsAsync(),
        provideNzIcons(icons),
    ],
};
