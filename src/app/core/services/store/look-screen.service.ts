import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LockScreenFlag } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class LookScreenService {
    private lockScreen$ = new BehaviorSubject<LockScreenFlag>({
        locked: false,
        password: '',
        beforeLockPath: '',
    });

    setLockScreen(store: LockScreenFlag): void {
        this.lockScreen$.next(store);
    }

    getLockScreen(): Observable<LockScreenFlag> {
        return this.lockScreen$.asObservable();
    }
}
