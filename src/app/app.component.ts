import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        NzIconModule,
        CommonModule,
        ReactiveFormsModule,
        NzFormModule,
        NzInputModule,
        NzButtonModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit(): void {
        if (this.loginForm.valid) {
            console.log('Form Submitted', this.loginForm.value);
        } else {
            this.loginForm.markAllAsTouched();
        }
    }
}
