import { Component } from '@angular/core';
import { BackgroundSvgComponent } from '../../components';

@Component({
    selector: 'dm-coming-soon',
    standalone: true,
    imports: [BackgroundSvgComponent],
    templateUrl: './coming-soon.component.html',
    styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {}
