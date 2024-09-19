import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import {
    COLLAPSED_NAV_WIDTH,
    SIDE_NAV_WIDTH,
} from '../../core/constants/theme.constants';
import { SideNavComponent } from '../../partials/side-nav/side-nav.component';

@Component({
    selector: 'dmvn-admin',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        NgClass,
        NzMenuModule,
        NzIconModule,
        NzLayoutModule,
        SideNavComponent
    ],
    templateUrl: './admin.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminComponent {
    sideNavWidth = SIDE_NAV_WIDTH;
    collapsedNavWidth = COLLAPSED_NAV_WIDTH;

    isCollapsed = false;
    isFixedLeftNav = false;

    theme: 'light' | 'dark' = 'light';
}
