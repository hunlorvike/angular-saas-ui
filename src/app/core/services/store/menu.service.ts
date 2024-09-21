import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenu } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    private menuArray$ = new BehaviorSubject<IMenu[]>([]);

    setMenuArrayStore(menuArray: IMenu[]): void {
        this.menuArray$.next(menuArray);
    }

    getMenuArrayStore(): Observable<IMenu[]> {
        return this.menuArray$.asObservable();
    }
}
