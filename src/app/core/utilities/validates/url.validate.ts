export function isUrl(value: string): boolean {
    return /^(https?:\/\/)?((([a-zA-Z0-9\-_]+\.)+[a-zA-Z]{2,})|localhost)(:\d+)?(\/[^\s]*)?$/i.test(
        value
    );
}
