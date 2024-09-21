/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SelectivePreloadingStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if (route.data?.['preload'] && route.path != null) {
            this.preloadedModules.push(route.path);
            return fn();
        } else {
            return of(null);
        }
    }
}
