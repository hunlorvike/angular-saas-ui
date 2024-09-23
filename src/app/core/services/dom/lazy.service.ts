import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, share } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { LazyResult } from '@app/core/models';

/**
 * Service LazyService để tải các tệp JavaScript và CSS một cách lười biếng.
 */
@Injectable({
    providedIn: 'root',
})
export class LazyService {
    private list: Record<string, boolean> = {};
    private cached: Record<string, LazyResult> = {};
    private notify$ = new BehaviorSubject<LazyResult[]>([]);
    private readonly _document = inject(DOCUMENT);

    /**
     * Trả về một Observable để theo dõi các thay đổi trong danh sách tải.
     */
    getChange(): Observable<LazyResult[]> {
        return this.notify$.asObservable().pipe(
            share(),
            filter(ls => ls.length > 0)
        );
    }

    /**
     * Xóa tất cả các tệp đã tải và bộ nhớ cache.
     */
    clear(): void {
        this.list = {};
        this.cached = {};
    }

    /**
     * Tải các tệp từ đường dẫn đã cho.
     * @param paths - Đường dẫn tệp hoặc mảng các đường dẫn tệp.
     * @returns Promise chứa kết quả tải.
     */
    load(paths: string | string[]): Promise<LazyResult[]> {
        const pathArray = Array.isArray(paths) ? paths : [paths];
        const promises = pathArray.map(path =>
            path.endsWith('.js') ? this.loadScript(path) : this.loadStyle(path)
        );

        return Promise.all(promises).then(res => {
            this.notify$.next(res);
            return res;
        });
    }

    /**
     * Tải một tệp JavaScript.
     * @param path - Đường dẫn tệp JavaScript.
     * @param innerContent - Nội dung bên trong tệp (nếu có).
     * @returns Promise chứa kết quả tải.
     */
    private loadScript(
        path: string,
        innerContent?: string
    ): Promise<LazyResult> {
        return new Promise(resolve => {
            if (this.list[path]) {
                resolve({ ...this.cached[path], status: 'loading' });
                return;
            }

            this.list[path] = true;
            const node = this._document.createElement('script') as NzSafeAny;
            node.type = 'text/javascript';
            node.src = path;
            node.charset = 'utf-8';
            if (innerContent) {
                node.innerHTML = innerContent;
            }

            node.onload = () => {
                const item: LazyResult = { path, status: 'ok' };
                this.cached[path] = item;
                resolve(item);
                this.notify$.next([item]);
            };

            node.onerror = (error: NzSafeAny) => {
                resolve({ path, status: 'error', error });
            };

            this._document.head.appendChild(node);
        });
    }

    /**
     * Tải một tệp CSS.
     * @param path - Đường dẫn tệp CSS.
     * @param rel - Mối quan hệ của tệp (mặc định là 'stylesheet').
     * @param innerContent - Nội dung bên trong tệp (nếu có).
     * @returns Promise chứa kết quả tải.
     */
    private loadStyle(
        path: string,
        rel = 'stylesheet',
        innerContent?: string
    ): Promise<LazyResult> {
        return new Promise(resolve => {
            if (this.list[path]) {
                resolve(this.cached[path]);
                return;
            }

            this.list[path] = true;
            const node = this._document.createElement('link');
            node.rel = rel;
            node.type = 'text/css';
            node.href = path;
            if (innerContent) {
                node.innerHTML = innerContent;
            }

            this._document.head.appendChild(node);
            const item: LazyResult = { path, status: 'ok' };
            this.cached[path] = item;
            resolve(item);
        });
    }
}
