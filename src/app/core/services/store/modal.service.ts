import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalService {
    private modal$ = new BehaviorSubject<boolean>(false);

    setModalFullStatusStore(store: boolean): void {
        this.modal$.next(store);
    }

    getModalFullStatusStore(): Observable<boolean> {
        return this.modal$.asObservable();
    }
}
