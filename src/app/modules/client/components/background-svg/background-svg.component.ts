import { CommonModule } from '@angular/common';
import {
    Component,
    NO_ERRORS_SCHEMA,
    OnInit,
    HostListener,
} from '@angular/core';
import { CIRCLE_SETTINGS } from '@constants/circle.const';
import { getRandomInt, getRandomColor } from '@utils/random.utils';

interface Circle {
    cx: number;
    cy: number;
    r: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
}

@Component({
    selector: 'dm-bg-svg',
    standalone: true,
    imports: [CommonModule],
    template: `
        <svg
            class="absolute inset-0 w-screen h-screen -z-10 overflow-hidden blur-xl opacity-30"
            xmlns="http://www.w3.org/2000/svg"
        >
            <ng-container *ngFor="let circle of circles">
                <circle
                    [attr.cx]="circle.cx"
                    [attr.cy]="circle.cy"
                    [attr.r]="circle.r"
                    [attr.fill]="circle.fill"
                ></circle>
            </ng-container>
        </svg>
    `,
    styles: `
        :host {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: -10;
        }
    `,
    schemas: [NO_ERRORS_SCHEMA],
})
export class BackgroundSvgComponent implements OnInit {
    circles: Circle[] = [];
    private resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    ngOnInit(): void {
        this.generateRandomCircles();
    }

    private generateRandomCircles(): void {
        this.circles = [];
        const areaWidth = window.innerWidth;
        const areaHeight = window.innerHeight;

        const numberOfCircles = getRandomInt(
            CIRCLE_SETTINGS.minCircleCount,
            CIRCLE_SETTINGS.maxCircleCount,
        );

        for (let i = 0; i < numberOfCircles; i++) {
            this.circles.push(this.createCircle(areaWidth, areaHeight));
        }
    }

    private createCircle(areaWidth: number, areaHeight: number): Circle {
        return {
            cx: Math.random() * areaWidth,
            cy: Math.random() * areaHeight,
            r: getRandomInt(
                CIRCLE_SETTINGS.minRadius,
                CIRCLE_SETTINGS.maxRadius,
            ),
            fill: getRandomColor(),
            stroke: getRandomColor(),
            strokeWidth: getRandomInt(1, 5),
        };
    }

    @HostListener('window:resize')
    onResize(): void {
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
        }
        this.resizeTimeout = setTimeout(() => {
            this.generateRandomCircles();
        }, 200);
    }
}
