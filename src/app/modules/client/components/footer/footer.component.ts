import { Component } from '@angular/core';
import { DmTypingEffectDirective } from '@services/directive/dm-typing-effect.directive';

@Component({
    selector: 'dm-footer',
    standalone: true,
    imports: [DmTypingEffectDirective],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
})
export class FooterComponent {}
