import CryptoJS from 'crypto-js';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { LockScreenFlag } from '../../models';
import { v4 as uuidv4 } from 'uuid';

export function fnEncrypt(word: NzSafeAny, keyStr: string): string {
    return CryptoJS.AES.encrypt(JSON.stringify(word), keyStr).toString();
}

export function fnDecrypt(word: NzSafeAny, keyStr: string): LockScreenFlag {
    const bytes = CryptoJS.AES.decrypt(word, keyStr);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

export function fnGetUUID(): string {
    return uuidv4();
}
