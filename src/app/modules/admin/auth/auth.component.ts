import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'dmvn-auth',
    standalone: true,
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>',
})
export class AuthComponent {}
