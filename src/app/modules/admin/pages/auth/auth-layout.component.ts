import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'dai-minh-auth',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <div
            class="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8 bg-gray-50"
        >
            <div class="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    class="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Công ty của bạn"
                />
                <h2
                    class="mt-10 text-center text-3xl font-semibold leading-9 tracking-tight text-gray-900"
                >
                    {{ heading }}
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Vui lòng nhập email và mật khẩu của bạn để đăng nhập.
                </p>
            </div>
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md w-full">
                <ng-content></ng-content>
            </div>
        </div>
    `,
})
export class AuthLayoutComponent {
    @Input() heading = '';
}
