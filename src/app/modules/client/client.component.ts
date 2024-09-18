import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'dmvn-client',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './client.component.html',
})
export class ClientComponent {}
