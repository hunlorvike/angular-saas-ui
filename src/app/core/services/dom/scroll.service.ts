import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

/**
 * Service này cung cấp các chức năng để quản lý và tương tác với vị trí scroll của các phần tử và cửa sổ.
 * @description Service này được thiết kế để giúp quản lý và điều khiển vị trí scroll của các phần tử và cửa sổ trong ứng dụng.
 */
@Injectable({
    providedIn: 'root',
})
export class ScrollService {
    private readonly _document = inject(DOCUMENT);
    private readonly _platform = inject(Platform);

    /**
     * Lấy tài liệu HTML của ứng dụng.
     * @returns Trả về tài liệu HTML của ứng dụng.
     */
    private getDocument(): Document {
        return this._document;
    }

    /**
     * Lấy cửa sổ của ứng dụng.
     * @returns Trả về cửa sổ của ứng dụng.
     */
    private getWindow(): Window {
        const doc = this.getDocument();
        return doc.defaultView as Window;
    }

    /**
     * Lấy vị trí scroll của phần tử hoặc cửa sổ.
     * @param element Phần tử hoặc cửa sổ để lấy vị trí scroll.
     * @returns Trả về một mảng chứa vị trí scroll ngang và dọc của phần tử hoặc cửa sổ.
     */
    getScrollPosition(element?: Element | Window): [number, number] {
        if (!this._platform.isBrowser) {
            return [0, 0];
        }

        const win = this.getWindow();
        if (element && element !== win) {
            return [
                (element as Element).scrollLeft,
                (element as Element).scrollTop,
            ];
        } else {
            return [win.scrollX, win.scrollY];
        }
    }

    /**
     * Scroll đến vị trí đã chỉ định.
     * @param element Phần tử hoặc cửa sổ để scroll đến.
     * @param position Vị trí scroll ngang và dọc.
     */
    scrollToPosition(
        element: Element | Window | null | undefined,
        position: [number, number]
    ): void {
        if (!this._platform.isBrowser) {
            return;
        }

        (element || this.getWindow()).scrollTo(position[0], position[1]);
    }

    /**
     * Scroll đến phần tử đã chỉ định với độ lệch trên.
     * @param element Phần tử để scroll đến.
     * @param topOffset Độ lệch trên.
     */
    scrollToElement(element?: Element | null, topOffset = 0): void {
        if (!this._platform.isBrowser) {
            return;
        }
        if (!element) {
            element = this.getDocument().body;
        }

        element.scrollIntoView();

        const win = this.getWindow();
        if (win?.scrollBy) {
            win.scrollBy(0, element?.getBoundingClientRect().top - topOffset);

            if (win.scrollY < 20) {
                win.scrollBy(0, -win.scrollY);
            }
        }
    }

    /**
     * Scroll lên đầu trang với độ lệch trên.
     * @param topOffset Độ lệch trên.
     */
    scrollToTop(topOffset = 0): void {
        if (!this._platform.isBrowser) {
            return;
        }
        this.scrollToElement(this.getDocument().body, topOffset);
    }
}
