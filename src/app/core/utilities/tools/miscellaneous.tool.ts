import { silentEvent } from 'ng-zorro-antd/core/util';

export function stopMouseEvent(e: MouseEvent): void {
    silentEvent(e);
}
