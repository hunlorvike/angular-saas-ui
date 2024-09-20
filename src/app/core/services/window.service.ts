import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
/**
 * Tạo một token để inject vào window object.
 * @description Token này được sử dụng để inject vào window object.
 */
const WINDOW_TOKEN = new InjectionToken<Window>(
    'A reference to the window object',
    {
        factory: () => window,
    }
);

/**
 * Service này cung cấp các chức năng để tương tác với window object.
 * @description Service này được cung cấp để sử dụng các chức năng của window object.
 */
@Injectable({
    providedIn: 'root',
})
export class WindowService {
    /**
     * Kiểm tra xem ứng dụng có đang chạy trên trình duyệt không.
     * @description Kiểm tra xem ứng dụng có đang chạy trên trình duyệt không.
     */
    private readonly isBrowser: boolean;
    /**
     * Window object được inject vào dịch vụ.
     * @description Window object được inject vào dịch vụ để sử dụng các chức năng của nó.
     */
    private readonly window = inject(WINDOW_TOKEN);
    /**
     * Platform ID được inject vào dịch vụ.
     * @description Platform ID được inject vào dịch vụ để kiểm tra xem ứng dụng có đang chạy trên trình duyệt không.
     */
    private readonly platformId = inject(PLATFORM_ID);

    /**
     * Constructor của dịch vụ.
     * @description Constructor của dịch vụ, được sử dụng để kiểm tra xem ứng dụng có đang chạy trên trình duyệt không.
     */
    constructor() {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    /**
     * Thực thi một hành động trên trình duyệt.
     * @description Thực thi một hành động trên trình duyệt nếu ứng dụng đang chạy trên trình duyệt.
     * @param action Hành động cần thực thi.
     */
    private executeBrowserAction(action: () => void): void {
        if (this.isBrowser) {
            action();
        }
    }

    /**
     * Hiển thị một thông báo trên trình duyệt.
     * @description Hiển thị một thông báo trên trình duyệt.
     * @param message Nội dung của thông báo.
     */
    alert(message: string): void {
        this.executeBrowserAction(() => alert(message));
    }

    /**
     * Hiển thị một hộp thoại xác nhận trên trình duyệt.
     * @description Hiển thị một hộp thoại xác nhận trên trình duyệt.
     * @param message Nội dung của hộp thoại.
     * @returns Trả về true nếu người dùng xác nhận, ngược lại trả về false.
     */
    confirm(message: string): boolean {
        return this.isBrowser ? this.window.confirm(message) : false;
    }

    /**
     * Đặt một giá trị vào bộ nhớ cục bộ.
     * @description Đặt một giá trị vào bộ nhớ cục bộ của trình duyệt.
     * @param key Khóa của giá trị.
     * @param value Giá trị cần đặt.
     */
    setStorage(key: string, value: string): void {
        this.executeBrowserAction(() => localStorage.setItem(key, value));
    }

    /**
     * Lấy một giá trị từ bộ nhớ cục bộ.
     * @description Lấy một giá trị từ bộ nhớ cục bộ của trình duyệt.
     * @param key Khóa của giá trị.
     * @returns Trả về giá trị nếu tồn tại, ngược lại trả về null.
     */
    getStorage(key: string): string | null {
        return this.isBrowser ? localStorage.getItem(key) : null;
    }

    /**
     * Xóa một giá trị khỏi bộ nhớ cục bộ.
     * @description Xóa một giá trị khỏi bộ nhớ cục bộ của trình duyệt.
     * @param key Khóa của giá trị.
     */
    removeStorage(key: string): void {
        this.executeBrowserAction(() => localStorage.removeItem(key));
    }

    /**
     * Xóa toàn bộ bộ nhớ cục bộ.
     * @description Xóa toàn bộ bộ nhớ cục bộ của trình duyệt.
     */
    clearStorage(): void {
        this.executeBrowserAction(() => localStorage.clear());
    }

    /**
     * Đặt một giá trị vào bộ nhớ phiên.
     * @description Đặt một giá trị vào bộ nhớ phiên của trình duyệt.
     * @param key Khóa của giá trị.
     * @param value Giá trị cần đặt.
     */
    setSessionStorage(key: string, value: string): void {
        this.executeBrowserAction(() => sessionStorage.setItem(key, value));
    }

    /**
     * Lấy một giá trị từ bộ nhớ phiên.
     * @description Lấy một giá trị từ bộ nhớ phiên của trình duyệt.
     * @param key Khóa của giá trị.
     * @returns Trả về giá trị nếu tồn tại, ngược lại trả về null.
     */
    getSessionStorage(key: string): string | null {
        return this.isBrowser ? sessionStorage.getItem(key) : null;
    }

    /**
     * Xóa một giá trị khỏi bộ nhớ phiên.
     * @description Xóa một giá trị khỏi bộ nhớ phiên của trình duyệt.
     * @param key Khóa của giá trị.
     */
    removeSessionStorage(key: string): void {
        this.executeBrowserAction(() => sessionStorage.removeItem(key));
    }

    /**
     * Xóa toàn bộ bộ nhớ phiên.
     * @description Xóa toàn bộ bộ nhớ phiên của trình duyệt.
     */
    clearSessionStorage(): void {
        this.executeBrowserAction(() => sessionStorage.clear());
    }
}
