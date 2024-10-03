import {
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    inject,
    OnInit,
} from '@angular/core';
import {
    Router,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ActivatedRoute,
    NavigationEnd,
    NavigationStart,
} from '@angular/router';
import { Breadcrumb, MenuItem } from '@models/index';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { filter } from 'rxjs/operators';

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
export class AdminComponent implements OnInit {
    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);

    isMenuOpenMap = new Map<string, boolean>();
    breadCrumbList: Breadcrumb[] = [];

    isCollapsed = false;
    menuItems: MenuItem[] = [
        {
            title: 'Trang chủ',
            icon: { type: 'home', theme: 'outline' },
            type: 'C',
            path: '/admin/dashboard',
        },
        {
            title: 'Quản lý bài viết',
            icon: { type: 'book', theme: 'outline' },
            type: 'F',
            children: [
                {
                    title: 'Danh sách bài viết',
                    type: 'C',
                    path: '/admin/posts/list',
                },
                {
                    title: 'Thêm bài viết',
                    type: 'C',
                    path: '/admin/posts/create',
                },
            ],
        },
    ];

    ngOnInit(): void {
        this.__initializeBreadcrumbs();
        this.breadCrumbList = this.__generateBreadcrumbs(
            this.activatedRoute.root,
        );
    }

    private __initializeBreadcrumbs(): void {
        this.router.events
            .pipe(
                filter(
                    (event) =>
                        event instanceof NavigationEnd ||
                        event instanceof NavigationStart,
                ),
            )
            .subscribe(() => {
                this.breadCrumbList = this.__generateBreadcrumbs(
                    this.activatedRoute.root,
                );
            });
    }

    private __generateBreadcrumbs(
        route: ActivatedRoute,
        url = '',
        breadcrumbs: Breadcrumb[] = [],
    ): Breadcrumb[] {
        const childRoutes: ActivatedRoute[] = route.children;

        if (!childRoutes.length) return breadcrumbs;

        childRoutes.forEach((child) => {
            const routePath = child.snapshot.url
                .map((segment) => segment.path)
                .filter((path) => path)
                .join('/');

            const breadcrumbLabel = child.snapshot.data['breadcrumb'];

            if (routePath) {
                url += `/${routePath}`;
            }

            if (routePath && routePath !== 'admin' && breadcrumbLabel) {
                breadcrumbs.push({ label: breadcrumbLabel, url });
            }

            this.__generateBreadcrumbs(child, url, breadcrumbs);
        });

        return breadcrumbs;
    }

    isMenuSelected(path: string): boolean {
        return path ? this.router.url === path : false;
    }

    isMenuOpen(menu: MenuItem): boolean {
        return this.isMenuOpenMap.get(menu.title) || false;
    }

    handleMenuToggle(menu: MenuItem): void {
        this.isMenuOpenMap.set(menu.title, !this.isMenuOpenMap.get(menu.title));
    }
}
