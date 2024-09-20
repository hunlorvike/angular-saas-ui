/**
 * TODO: Sửa lại process bar
 */
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    Input,
    OnChanges,
    signal,
    SimpleChanges,
    OnDestroy,
} from '@angular/core';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { interval, Subscription } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
    selector: 'dmvn-process-bar',
    standalone: true,
    imports: [CommonModule, NzProgressModule],
    template: `
        <div *ngIf="isLoading$()" class="process-bar">
            <nz-progress
                [nzPercent]="percent$()"
                [nzStatus]="'active'"
                [nzShowInfo]="false"></nz-progress>
        </div>
    `,
    styles: `
        .process-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 9999;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProcessBarComponent implements OnChanges, OnDestroy {
    @Input() isLoading = true;

    public isLoading$ = signal<boolean>(true);
    public percent$ = signal<number>(0);

    private subscription: Subscription | null = null;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['isLoading'] && this.isLoading) {
            this.startLoading();
        } else if (changes['isLoading'] && !this.isLoading) {
            this.resetLoading();
        }
    }

    ngOnDestroy(): void {
        // Clear subscription when component is destroyed
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private startLoading(): void {
        this.isLoading$.set(true);

        if (this.subscription) {
            this.subscription.unsubscribe();
        }

        let currentPercent = 0;
        this.subscription = interval(1000)
            .pipe(
                takeWhile(() => this.isLoading), // Continue while loading is true
                tap(() => {
                    console.log('Progress step initiated'); // Log mỗi khi interval bắt đầu
                }),
                map(() => {
                    currentPercent += 5;
                    if (currentPercent > 100) {
                        currentPercent = 0; // Reset to 0 if it exceeds 100
                        console.log('Progress reset to 0');
                    }
                    return currentPercent;
                }),
                tap(percent => {
                    console.log(`Current progress: ${percent}%`); // Log phần trăm mỗi lần nó thay đổi
                })
            )
            .subscribe(percent => {
                this.percent$.set(percent);
            });
    }

    private resetLoading(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.isLoading$.set(false);
        this.percent$.set(0);
        console.log('Loading reset and stopped');
    }
}
