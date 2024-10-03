import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProgressBarService } from '@services/ui';

@Component({
    selector: 'dai-minh-progress-bar',
    standalone: true,
    imports: [CommonModule],
    template: `
        <ng-container *ngIf="isLoading">
            <div class="bg-progress">
                <div class="bg-blue-600 h-full animate-progress"></div>
            </div>
        </ng-container>
    `,
    styles: `
        .animate-progress {
            @apply w-full h-full bg-blue-600 border border-blue-800 rounded;
            animation: progress 1s infinite linear;
            transform-origin: 0% 50%;
        }

        @keyframes progress {
            0% {
                transform: translateX(0) scaleX(0);
            }

            40% {
                transform: translateX(0) scaleX(0.4);
            }

            100% {
                transform: translateX(100%) scaleX(0.5);
            }
        }

        .bg-progress {
            @apply bg-blue-200 h-[5px] w-full overflow-hidden;
        }
    `,
})
export class ProgressBarComponent implements OnInit {
    isLoading = false;
    progressBarService = inject(ProgressBarService);

    constructor() {}

    ngOnInit(): void {
        this.progressBarService.getLoading().subscribe((loading) => {
            this.isLoading = loading;
        });
    }
}
