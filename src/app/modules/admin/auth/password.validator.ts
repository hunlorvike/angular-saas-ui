import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordsMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const password = formGroup.get('password');
        const confirmPassword = formGroup.get('confirmPassword');

        if (
            !password ||
            !confirmPassword ||
            !password.value ||
            !confirmPassword.value
        ) {
            return null;
        }

        if (password.value !== confirmPassword.value) {
            return { passwordsMismatch: true };
        }

        return null;
    };
}
