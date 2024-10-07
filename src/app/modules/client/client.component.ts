import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientModuleModule } from './components';

@Component({
    selector: 'dai-minh-client',
    standalone: true,
    imports: [RouterOutlet, ClientModuleModule],
    templateUrl: './client.component.html',
})
export class ClientComponent {}
