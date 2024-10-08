import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { SpinnerService } from '@services/ui';

@Component({
    selector: 'dm-spinner',
    standalone: true,
    imports: [CommonModule],
    template: `
        <ng-container *ngIf="isLoading">
            <div class="backdrop">
                <div class="absolute inset-0 flex justify-center items-center">
                    <div
                        class="border-4 border-blue-200 border-t-blue-500 rounded-full w-6 h-6 animate-spin"
                    ></div>
                </div>
            </div>
        </ng-container>
    `,
    styles: `
        .backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.1);
            z-index: 9999;
        }
    `,
})
export class SpinnerComponent implements OnInit {
    isLoading = false;
    spinnerService = inject(SpinnerService);

    constructor() {}

    ngOnInit(): void {
        this.spinnerService.getLoading().subscribe((loading) => {
            this.isLoading = loading;
        });
    }
}
