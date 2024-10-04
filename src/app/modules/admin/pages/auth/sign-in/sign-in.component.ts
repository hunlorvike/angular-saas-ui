import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AuthLayoutComponent } from '../auth-layout.component';
import { RouterLink, Router } from '@angular/router';

@Component({
    standalone: true,
    imports: [FormsModule, AuthLayoutComponent, RouterLink],
    templateUrl: './sign-in.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SignInComponent {
    signInForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder,
    ) {
        this.signInForm = this.fb.group({
            email: [''],
            password: [''],
        });
    }

    onSubmit() {
        console.log('Sign In form submitted with', this.signInForm.value);

        const isLoginSuccessful = true;

        if (isLoginSuccessful) {
            this.router.navigate(['/admin']);
        }
    }
}
