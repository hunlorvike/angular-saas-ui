import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private isCollapsed$ = new BehaviorSubject<boolean>(false);

    setIsCollapsed(isCollapsed: boolean): void {
        this.isCollapsed$.next(isCollapsed);
    }

    getIsCollapsed(): Observable<boolean> {
        return this.isCollapsed$.asObservable();
    }
}
