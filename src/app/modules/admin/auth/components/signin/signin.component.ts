import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
    ReactiveFormsModule,
    FormGroup,
    FormBuilder,
    Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
    standalone: true,
    imports: [
        NzIconModule,
        CommonModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
        RouterLink,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
    signinForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.signinForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit(): void {
        if (this.signinForm.valid) {
            console.log('Form Submitted', this.signinForm.value);
        } else {
            this.signinForm.markAllAsTouched();
        }
    }
}
