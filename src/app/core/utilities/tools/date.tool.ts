import { endOfDay, startOfDay } from 'date-fns';

export function fnStartOfDay(time: number): number {
    return startOfDay(time).getTime();
}

export function fnEndOfDay(time: number): number {
    return endOfDay(time).getTime();
}
