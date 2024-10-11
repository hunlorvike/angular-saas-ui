import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Faq {
    question: string;
    answer: string;
    show: boolean;
}
@Component({
    selector: 'dm-faq',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss',
})
export class FaqComponent {
    faqs: Faq[] = [
        {
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy on all products. Items must be returned in their original condition with the receipt included.',
            show: false,
        },
        {
            question: 'How can I track my order?',
            answer: 'Once your order has been shipped, we will send you an email with tracking information. You can also log in to your account and view the status of your order.',
            show: false,
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards, PayPal, and Apple Pay.',
            show: false,
        },
        {
            question: 'Can I change or cancel my order?',
            answer: 'You can change or cancel your order within 24 hours of placing it. Please contact our customer service team as soon as possible.',
            show: false,
        },
    ];

    toggleAnswer(index: number) {
        this.faqs[index].show = !this.faqs[index].show;
    }
}
