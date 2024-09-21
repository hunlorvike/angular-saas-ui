import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpinService {
    private spin$ = new BehaviorSubject<boolean>(false);

    setCurrentGlobalSpinStore(isSpinning: boolean): void {
        this.spin$.next(isSpinning);
    }

    getCurrentGlobalSpinStore(): Observable<boolean> {
        return this.spin$.asObservable();
    }
}
