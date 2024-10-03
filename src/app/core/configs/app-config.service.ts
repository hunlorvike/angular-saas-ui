import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AppConfigService {
    private http = inject(HttpClient);
    private appConfig: NzSafeAny;

    loadAppConfig(): Promise<NzSafeAny> {
        return lastValueFrom(
            this.http.get('/assets/config/app-config.json'),
        ).then((config) => {
            this.appConfig = config;
            return config;
        });
    }

    get config(): NzSafeAny {
        return this.appConfig;
    }
}
