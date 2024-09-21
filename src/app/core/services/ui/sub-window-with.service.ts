import { BreakpointObserver } from '@angular/cdk/layout';
import { DestroyRef, inject, Injectable } from '@angular/core';
import { EquipmentWidth } from '../../models';
import { WindowsWidthService } from '../store/windows-width.service';
import { ThemeService } from '../store/theme.service';

@Injectable({
    providedIn: 'root',
})
export class SubWindowWithService {
    subWidthObject: Record<string, [EquipmentWidth, [number, number]]> = {
        '(max-width: 575.98px)': [EquipmentWidth.xs, [0, 575.98]],
        '(min-width: 576px) and (max-width: 767.98px)': [
            EquipmentWidth.sm,
            [576, 767.98],
        ],
        '(min-width: 768px) and (max-width: 991.98px)': [
            EquipmentWidth.md,
            [768, 991.98],
        ],
        '(min-width: 992px) and (max-width: 1199.98px)': [
            EquipmentWidth.lg,
            [992, 1199.98],
        ],
        '(min-width: 1200px) and (max-width: 1599.98px)': [
            EquipmentWidth.xl,
            [1200, 1599.98],
        ],
        '(min-width: 1600px)': [EquipmentWidth.xxl, [1600, 9999]],
    };
    private windowWidthService = inject(WindowsWidthService);
    private destroyRef = inject(DestroyRef);
    private breakPoint$ = inject(BreakpointObserver);
    private themeService = inject(ThemeService);

    // TODO: chưa làm xong
}
