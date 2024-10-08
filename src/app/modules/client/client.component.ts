import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientModuleModule } from './components';

@Component({
    selector: 'dai-minh-client',
    standalone: true,
    imports: [RouterOutlet, ClientModuleModule],
    templateUrl: './client.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ClientComponent {}
