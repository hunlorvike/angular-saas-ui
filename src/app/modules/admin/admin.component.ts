import {
    AfterViewInit,
    Component,
    CUSTOM_ELEMENTS_SCHEMA,
    DestroyRef,
    inject,
    OnInit,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SideNavComponent } from '../../partials/side-nav/side-nav.component';
import { WindowService } from '../../core/services/dom/window.service';
import { ThemeService } from '../../core/services/store/theme.service';
import { SplitNavService } from '../../core/services/store/split-nav.service';
import { Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CONSTANTS } from '../../core/constants';
import { IMenu } from '../../core/models/menu.model';
import { ITheme, ISetting } from '../../core/models/setting.model';

/**
 * Component quản lý giao diện chính của trang admin.
 * Cung cấp các chức năng như điều hướng, quản lý chủ đề và trạng thái của sidebar.
 */
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
        SideNavComponent,
    ],
    templateUrl: './admin.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminComponent implements OnInit, AfterViewInit {
    sideNavWidth = CONSTANTS.LAYOUT.SIDE_NAV_WIDTH; // Chiều rộng của sidebar
    collapsedNavWidth = CONSTANTS.LAYOUT.COLLAPSED_NAV_WIDTH; // Chiều rộng của sidebar khi thu gọn

    private destroyRef = inject(DestroyRef); // Service để quản lý vòng đời
    private windowService = inject(WindowService); // Service để tương tác với window
    private themeService = inject(ThemeService); // Service để quản lý chủ đề
    private splitNavService = inject(SplitNavService); // Service để quản lý navigation phân tách

    isNightTheme$ = this.themeService.getIsNightTheme(); // Observable để theo dõi chế độ ban đêm
    isCompactTheme$ = this.themeService.getIsCompactTheme(); // Observable để theo dõi chế độ gọn
    themeOptions$ = this.themeService.getThemesMode(); // Observable để lấy các tùy chọn chủ đề
    isOverMode$: Observable<boolean> = this.themeService.getIsOverMode(); // Observable để theo dõi chế độ quá tải
    isCollapsed$: Observable<boolean> = this.themeService.getIsCollapsed(); // Observable để theo dõi trạng thái thu gọn
    mixinModeLeftNav$ = this.splitNavService.getSplitLeftNavArray(); // Observable để lấy danh sách navigation bên trái

    isMixinMode = false; // Trạng thái chế độ mixin
    isNightTheme = false; // Trạng thái chế độ ban đêm
    isCompactTheme = false; // Trạng thái chế độ gọn
    isFixedLeftNav = false; // Trạng thái sidebar cố định
    isSplitNav = false; // Trạng thái navigation phân tách
    isCollapsed = false; // Trạng thái thu gọn
    isOverMode = false; // Trạng thái quá tải
    isShowTab = false; // Trạng thái hiển thị tab
    isFixedTab = false; // Trạng thái tab cố định
    isHasNavArea = false; // Trạng thái có khu vực navigation
    isHasNavHeadArea = false; // Trạng thái có khu vực đầu navigation
    isHasFooterArea = false; // Trạng thái có footer
    isHasTopArea = false; // Trạng thái có khu vực trên

    isFixedHead = false; // Trạng thái đầu cố định
    isSideMode = false; // Trạng thái chế độ bên
    isTopMode = false; // Trạng thái chế độ trên
    theme: ITheme['key'] = 'dark'; // Chủ đề hiện tại

    themeOptions!: ISetting; // Tùy chọn chủ đề
    mixinModeLeftNav: IMenu[] = []; // Danh sách navigation bên trái trong chế độ mixin
    contentMarginTop = '48px'; // Độ cao lề trên của nội dung

    ngOnInit(): void {
        this.getThemeOptions();
    }

    ngAfterViewInit(): void {
        if (
            this.windowService.getStorage(CONSTANTS.STATUS.IS_FIRST_LOGIN) !==
            'false'
        ) {
            this.windowService.setStorage(
                CONSTANTS.STATUS.IS_FIRST_LOGIN,
                'false'
            ); // Đặt giá trị khi lần đầu đăng nhập
        }
    }

    changeCollapsed(isCollapsed: boolean): void {
        if (!this.isOverMode) {
            this.isCollapsed = isCollapsed; // Cập nhật trạng thái thu gọn
            this.themeService.setIsCollapsed(this.isCollapsed); // Cập nhật trạng thái trong Service chủ đề
        }
    }

    prepareRoute(outLlet: RouterOutlet): string {
        return outLlet?.activatedRouteData?.['key']; // Lấy key của route hiện tại
    }

    judgeMarginTop(): string {
        let marginTop = this.isShowTab ? (this.isFixedTab ? 96 : 48) : 48; // Tính toán độ cao lề trên
        if (!this.isFixedHead || this.isMixinMode || !this.isHasTopArea) {
            marginTop = this.isShowTab ? (this.isFixedTab ? 48 : 0) : 0; // Cập nhật độ cao lề trên nếu không có đầu cố định
        }
        return `${this.isCompactTheme ? marginTop - 8 : marginTop}px`; // Trả về độ cao lề trên
    }

    getThemeOptions(): void {
        this.themeOptions$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(res => {
                this.themeOptions = res; // Cập nhật tùy chọn chủ đề
                const {
                    theme,
                    layout: {
                        fixedHead,
                        splitNav,
                        fixedLeftNav,
                        isShowTab,
                        fixedTab,
                        hasTopArea,
                        hasFooterArea,
                        hasNavArea,
                        hasNavHeadArea,
                    },
                } = this.themeOptions;

                this.isFixedLeftNav = fixedLeftNav; // Cập nhật trạng thái sidebar cố định
                this.isHasNavArea = hasNavArea; // Cập nhật trạng thái có khu vực navigation
                this.isHasTopArea = hasTopArea; // Cập nhật trạng thái có khu vực trên
                this.isHasNavHeadArea = hasNavHeadArea; // Cập nhật trạng thái có khu vực đầu navigation
                this.isShowTab = isShowTab; // Cập nhật trạng thái hiển thị tab
                this.isSplitNav = splitNav; // Cập nhật trạng thái navigation phân tách
                this.theme = theme; // Cập nhật chủ đề
                this.isFixedHead = fixedHead; // Cập nhật trạng thái đầu cố định
                this.isHasFooterArea = hasFooterArea; // Cập nhật trạng thái có footer
                this.isFixedTab = fixedTab; // Cập nhật trạng thái tab cố định

                this.contentMarginTop = this.judgeMarginTop(); // Cập nhật độ cao lề trên của nội dung
            });

        this.isCollapsed$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(res => (this.isCollapsed = res)); // Cập nhật trạng thái thu gọn
        this.isOverMode$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(res => (this.isOverMode = res)); // Cập nhật trạng thái quá tải
        this.isNightTheme$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(res => (this.isNightTheme = res)); // Cập nhật trạng thái chế độ ban đêm
        this.isCompactTheme$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(res => (this.isCompactTheme = res)); // Cập nhật trạng thái chế độ gọn
        this.mixinModeLeftNav$
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(res => (this.mixinModeLeftNav = res)); // Cập nhật danh sách navigation bên trái trong chế độ mixin
    }
}
