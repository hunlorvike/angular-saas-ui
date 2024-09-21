export function fnGetRandom(m: number, n: number): number {
    return Math.floor(Math.random() * (m - n) + n);
}
