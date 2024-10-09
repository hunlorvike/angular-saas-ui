import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from '@models/navigation.models';
import { DmTypingEffectDirective } from '@services/directive/dm-typing-effect.directive';

@Component({
    selector: 'dm-header',
    standalone: true,
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        DmTypingEffectDirective,
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    isMobileMenuOpen = false;

    menuItems: MenuItem[] = [
        { title: 'Home', path: '/', type: 'C' },
        { title: 'Features', path: '/features', type: 'C' },
        { title: 'Pricing', path: '/pricing', type: 'C' },
        { title: 'About', path: '/about', type: 'C' },
        { title: 'Contact', path: '/contact', type: 'C' },
    ];

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
}
