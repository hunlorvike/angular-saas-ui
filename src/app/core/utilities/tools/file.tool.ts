import { NzSafeAny } from 'ng-zorro-antd/core/types';

export function fnGetFile(url: string, isBlob = false): Promise<NzSafeAny> {
    return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        client.responseType = isBlob ? 'blob' : '';
        client.onload = () => {
            if (client.status === 200) {
                const urlArr = client.responseURL.split('/');
                resolve({
                    data: client.response,
                    url: urlArr[urlArr.length - 1],
                });
            } else {
                reject(
                    new Error(`Error ${client.status}: ${client.statusText}`)
                );
            }
        };
        client.onerror = () => {
            reject(new Error('Network error occurred'));
        };
        client.open('GET', url);
        client.send();
    });
}

export function getBase64(file: File): Promise<string | ArrayBuffer | null> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error =>
            reject(new Error(`File reading error: ${error}`));
    });
}
