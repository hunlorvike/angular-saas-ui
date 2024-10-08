import { Component } from '@angular/core';
import { DmTypingEffectDirective } from '@services/directive/dm-typing-effect.directive';

@Component({
    selector: 'dm-header',
    standalone: true,
    imports: [DmTypingEffectDirective],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    isMobileMenuOpen = false;

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
}
