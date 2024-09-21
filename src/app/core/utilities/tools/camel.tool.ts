/**
 * Chuyển đổi chuỗi sang dạng camelCase.
 * @param value Chuỗi cần chuyển đổi.
 * @returns Chuỗi đã được chuyển đổi sang dạng camelCase.
 */
export function camelCase(value: string): string {
    return value.replace(/-\w/g, (_r, i) => value.charAt(i + 1).toUpperCase());
}

/**
 * Chuyển đổi chuỗi sang dạng kebab-case.
 * @param value Chuỗi cần chuyển đổi.
 * @returns Chuỗi đã được chuyển đổi sang dạng kebab-case.
 */
export function fnKebabCase(value: string): string {
    return value
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/([0-9])([a-zA-Z]+)$/g, '-$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

/**
 * Chuyển đổi chuỗi sang dạng upperCamelCase.
 * @param value Chuỗi cần chuyển đổi.
 * @returns Chuỗi đã được chuyển đổi sang dạng upperCamelCase.
 */
export function upperCamelCase(value: string): string {
    const camelCased = camelCase(value);
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}

/**
 * Chuyển đổi chuỗi sang dạng lowerCamelCase.
 * @param value Chuỗi cần chuyển đổi.
 * @returns Chuỗi đã được chuyển đổi sang dạng lowerCamelCase.
 */
export function lowerCamelCase(value: string): string {
    const camelCased = camelCase(value);
    return camelCased.charAt(0).toLowerCase() + camelCased.slice(1);
}
