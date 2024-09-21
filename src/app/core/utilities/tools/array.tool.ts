import { NzSafeAny } from 'ng-zorro-antd/core/types';

export function fnRemoveDouble<T>(list: NzSafeAny[], col: NzSafeAny): T {
    const obj: Record<string, boolean> = {};
    return list.reduce((cur, next) => {
        const key = next[col];
        if (!obj[key]) {
            obj[key] = true;
            cur.push(next);
        }
        return cur;
    }, [] as T[]);
}
