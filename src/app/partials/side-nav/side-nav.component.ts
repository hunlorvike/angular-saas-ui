import {
    ChangeDetectionStrategy,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/services/store/theme.service';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Observable } from 'rxjs';

@Component({
    selector: 'dmvn-side-nav',
    standalone: true,
    imports: [CommonModule, RouterLink, NavBarComponent],
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
    private themeService = inject(ThemeService);
    isCollapsed$: Observable<boolean> = this.themeService.getIsCollapsed();
}
