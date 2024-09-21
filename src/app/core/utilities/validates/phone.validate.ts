export function isPhone(value: string): boolean {
    return /^(?:0\d{2,3}-?)?\d{7,8}$/.test(value);
}

export function isVietnamesePhoneNumber(value: string): boolean {
    return /(?:[+84|84|0]+(?:3|5|7|8|9|1[2|6|8|9]))+(\d{8})\b/.test(value);
}

export function isChinesePhoneNumber(value: string): boolean {
    return /^(?:\+86)?1[3-9]\d{9}$/.test(value);
}
