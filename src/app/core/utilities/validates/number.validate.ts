export function isNum(value: string | number): boolean {
    return /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/.test(value.toString());
}

export function isInt(value: string | number): boolean {
    return (
        isNum(value) &&
        parseInt(value.toString(), 10).toString() === value.toString()
    );
}

export function isDecimal(value: string | number): boolean {
    return isNum(value) && !isInt(value);
}

export function isPositive(value: string | number): boolean {
    return isNum(value) && parseFloat(value.toString()) > 0;
}

export function isNegative(value: string | number): boolean {
    return isNum(value) && parseFloat(value.toString()) < 0;
}

export function isZero(value: string | number): boolean {
    return isNum(value) && parseFloat(value.toString()) === 0;
}
