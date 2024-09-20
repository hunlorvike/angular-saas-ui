import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISetting } from '../models';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private isNightTheme$ = new BehaviorSubject<boolean>(false);
    private isCollapsed$ = new BehaviorSubject<boolean>(false);
    private isCompactTheme$ = new BehaviorSubject<boolean>(false);
    private isOverModeTheme$ = new BehaviorSubject<boolean>(false);
    private themeMode$ = new BehaviorSubject<ISetting>({
        theme: 'dark',
        color: '@1890FF',
        layout: {
            fixedHead: true,
            fixedLeftNav: true,
            fixedTab: true,
            splitNav: true,
            hasTopArea: true,
            hasFooterArea: true,
            hasNavArea: true,
            hasNavHeadArea: true,
            isShowTab: true,
        },
    }); 

    setIsCollapsed(isCollapsed: boolean): void {
        this.isCollapsed$.next(isCollapsed);
    }

    getIsCollapsed(): Observable<boolean> {
        return this.isCollapsed$.asObservable();
    }
}
