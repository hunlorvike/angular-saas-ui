import { Directive, ElementRef, inject, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[dmTypingEffect]',
    standalone: true,
})
export class DmTypingEffectDirective implements OnInit {
    @Input()
    dmTypingEffect = '';

    @Input()
    typingSpeed = 100;

    private el = inject(ElementRef);
    private index = 0;
    private isDeleting = false;

    ngOnInit() {
        this.type();
    }

    type() {
        const placeholder = this.dmTypingEffect.substring(0, this.index);
        this.el.nativeElement.placeholder = placeholder;

        this.el.nativeElement.style.transition = 'placeholder 0.3s ease';

        if (this.isDeleting) {
            this.index--;
            if (this.index < 0) {
                this.isDeleting = false;
                this.index = 0;
            }
        } else {
            this.index++;
            if (this.index > this.dmTypingEffect.length) {
                this.isDeleting = true;
                this.index = this.dmTypingEffect.length;
            }
        }

        setTimeout(() => this.type(), this.typingSpeed);
    }
}
