import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'dmvn-article',
    standalone: true,
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>',
})
export class ArticleComponent {}
