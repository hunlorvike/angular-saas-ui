import {
    inject,
    APP_INITIALIZER,
    EnvironmentProviders,
    Provider,
} from '@angular/core';
import { AppConfigService } from './core/configs/app-config.service';

export function initAppConfig() {
    const appConfigService = inject(AppConfigService);
    return () => appConfigService.loadAppConfig();
}

export const providers: (Provider | EnvironmentProviders)[] = [
    {
        provide: APP_INITIALIZER,
        useFactory: initAppConfig,
        multi: true,
    },
];
