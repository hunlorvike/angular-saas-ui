import { Injectable } from '@angular/core';
import { ISetting } from '@app/core/models';
import { BehaviorSubject, Observable } from 'rxjs';

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

    setThemeMode(model: ISetting): void {
        this.themeMode$.next(model);
    }

    getThemesMode(): Observable<ISetting> {
        return this.themeMode$.asObservable();
    }

    setIsNightTheme(isNight: boolean): void {
        this.isNightTheme$.next(isNight);
    }

    getIsNightTheme(): Observable<boolean> {
        return this.isNightTheme$.asObservable();
    }

    setIsCompactTheme(isNight: boolean): void {
        this.isCompactTheme$.next(isNight);
    }

    getIsCompactTheme(): Observable<boolean> {
        return this.isCompactTheme$.asObservable();
    }

    setIsOverMode(isNight: boolean): void {
        this.isOverModeTheme$.next(isNight);
    }

    getIsOverMode(): Observable<boolean> {
        return this.isOverModeTheme$.asObservable();
    }

    setIsCollapsed(isCollapsed: boolean): void {
        this.isCollapsed$.next(isCollapsed);
    }

    getIsCollapsed(): Observable<boolean> {
        return this.isCollapsed$.asObservable();
    }
}
