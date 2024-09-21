import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EquipmentWidth } from '../../models';

@Injectable({
    providedIn: 'root',
})
export class WindowsWidthService {
    private windowWidth$ = new BehaviorSubject<EquipmentWidth>(
        EquipmentWidth.xxl
    );

    setWindowWidth(store: EquipmentWidth): void {
        this.windowWidth$.next(store);
    }

    getWindowWidth(): Observable<EquipmentWidth> {
        return this.windowWidth$.asObservable();
    }
}
