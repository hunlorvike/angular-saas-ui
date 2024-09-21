import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenu } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class SplitNavService {
    private splitLeftNavArray$ = new BehaviorSubject<IMenu[]>([]);

    setSplitLeftNavArrayStore(menu: IMenu[]): void {
        this.splitLeftNavArray$.next(menu);
    }

    getSplitLeftNavArrayStore(): Observable<IMenu[]> {
        return this.splitLeftNavArray$.asObservable();
    }
}
