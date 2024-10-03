import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MenuItem } from '@models/menu-item.interface';
import { NzAvatarComponent, NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'dai-minh-admin',
  standalone: true,
  imports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    RouterLink,
    RouterLinkActive,
    NzIconModule,
    NzDropDownModule,
    NzAvatarComponent,
    NzToolTipModule,
    RouterOutlet,
  ],
  templateUrl: './admin.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminComponent {
  private router = inject(Router);

  isOpenMap: Map<string, boolean> = new Map<string, boolean>();

  isCollapsed = false;
  menuItems: MenuItem[] = [
    {
      title: 'Trang chủ',
      icon: { type: 'home', theme: 'outline' },
      type: 'C',
      path: '/admin',
    },
    {
      title: 'Quản lý bài viết',
      icon: { type: 'book', theme: 'outline' },
      type: 'F',
      children: [
        {
          title: 'Danh sách bài viết',
          type: 'C',
          path: '/admin/posts/',
        },
        {
          title: 'Thêm bài viết',
          type: 'C',
          path: '/admin/posts/create',
        },
      ],
    },
  ];

  isSelected(path: string): boolean {
    if (!path) {
      return false;
    }
    return this.router.url === path;
  }

  isOpen(menu: MenuItem): boolean {
    return this.isOpenMap.get(menu.title) || false;
  }

  handleMenuOpenChange(menu: MenuItem): void {
    const currentState = this.isOpenMap.get(menu.title) || false;
    this.isOpenMap.set(menu.title, !currentState);
  }
}
