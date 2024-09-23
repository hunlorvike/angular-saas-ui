import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMenu } from '@app/core/models';

@Injectable({
    providedIn: 'root',
})
export class SplitNavService {
    private splitLeftNavArray$ = new BehaviorSubject<IMenu[]>([]);

    setSplitLeftNavArray(menu: IMenu[]): void {
        this.splitLeftNavArray$.next(menu);
    }

    getSplitLeftNavArray(): Observable<IMenu[]> {
        return this.splitLeftNavArray$.asObservable();
    }
}
