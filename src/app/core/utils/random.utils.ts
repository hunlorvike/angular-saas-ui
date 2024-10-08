// random.utils.ts

export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomColor(): string {
    const HUE = Math.floor(Math.random() * 360);

    const SATURATION = getRandomInt(20, 50);

    const LIGHTNESS = getRandomInt(60, 80);

    return `hsl(${HUE}, ${SATURATION}%, ${LIGHTNESS}%)`;
}
