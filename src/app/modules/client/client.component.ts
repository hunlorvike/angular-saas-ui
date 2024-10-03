import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from '../common/progress-bar/progress-bar.component';
import { SpinnerComponent } from '../common/spinner/spinner.component';

@Component({
    selector: 'dai-minh-client',
    standalone: true,
    imports: [RouterOutlet, ProgressBarComponent, SpinnerComponent],
    templateUrl: './client.component.html',
})
export class ClientComponent {}
