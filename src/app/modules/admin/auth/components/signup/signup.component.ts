import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators,
    ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { passwordsMatchValidator } from '../../password.validator';
import { RouterLink } from '@angular/router';

@Component({
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NzIconModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        RouterLink,
    ],
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    signupForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.signupForm = this.fb.group(
            {
                username: [
                    null,
                    [Validators.required, Validators.minLength(3)],
                ],
                email: [null, [Validators.required, Validators.email]],
                password: [
                    null,
                    [Validators.required, Validators.minLength(6)],
                ],
                confirmPassword: [
                    null,
                    [Validators.required, Validators.minLength(6)],
                ],
            },
            { validator: passwordsMatchValidator() }
        );
    }

    onSubmit(): void {
        if (this.signupForm.valid) {
            console.log('Form Submitted', this.signupForm.value);
        } else {
            this.signupForm.markAllAsTouched();
        }
    }
}
