import { DestroyRef, inject, Injectable } from '@angular/core';
import { WindowService } from '../dom/window.service';
import { LookScreenService } from '../store/look-screen.service';
import { THEME_CONST } from '../../constants';
import { fnDecrypt, fnEncrypt } from '../../utilities/tools/encrypt.tool';
import { first } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
    providedIn: 'root',
})
export class SubLockedStatusService {
    private windowService = inject(WindowService);
    private lockScreenService = inject(LookScreenService);
    private destroyRef = inject(DestroyRef);

    initLockedStatus(): void {
        const hasCash = this.windowService.getSessionStorage(
            THEME_CONST.LOCKED_KEY
        );

        if (hasCash) {
            this.lockScreenService.setLockScreen(
                fnDecrypt(hasCash, THEME_CONST.SALT)
            );
        } else {
            this.lockScreenService
                .getLockScreen()
                .pipe(first(), takeUntilDestroyed(this.destroyRef))
                .subscribe(res =>
                    this.windowService.setSessionStorage(
                        THEME_CONST.LOCKED_KEY,
                        fnEncrypt(JSON.stringify(res), THEME_CONST.SALT)
                    )
                );
        }
    }
}
