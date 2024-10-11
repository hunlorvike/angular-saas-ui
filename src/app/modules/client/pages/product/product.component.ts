import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'dm-product',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
    filters = [
        {
            id: 'locationDropdown',
            title: 'Vị trí',
            options: ['Trong nhà', 'Ngoài trời'],
            isOpen: false,
        },
        {
            id: 'brandDropdown',
            title: 'Nhãn hiệu',
            options: ['Dulux', 'Jotun', 'Kova', 'Nippon'],
            isOpen: false,
        },
        {
            id: 'productDropdown',
            title: 'Sản phẩm',
            options: ['Sơn nước', 'Sơn dầu', 'Sơn chống thấm'],
            isOpen: false,
        },
        {
            id: 'projectTypeDropdown',
            title: 'Loại dự án',
            options: ['Dự án nhà ở', 'Dự án thương mại', 'Dự án công nghiệp'],
            isOpen: false,
        },
        {
            id: 'surfaceDropdown',
            title: 'Bề mặt cần sơn',
            options: ['Tường', 'Trần', 'Sàn'],
            isOpen: false,
        },
        {
            id: 'finishDropdown',
            title: 'Bề mặt hoàn thiện',
            options: ['Matte', 'Satin', 'Gloss'],
            isOpen: false,
        },
        {
            id: 'colorDropdown',
            title: 'Màu sắc',
            options: ['Đen', 'Trắng', 'Xanh', 'Đỏ', 'Vàng'],
            isOpen: false,
        },
        {
            id: 'sizeDropdown',
            title: 'Kích thước',
            options: ['Nhỏ', 'Vừa', 'Lớn'],
            isOpen: false,
        },
        {
            id: 'priceDropdown',
            title: 'Giá',
            options: [
                'Dưới 500,000 VND',
                '500,000 - 1,000,000 VND',
                'Trên 1,000,000 VND',
            ],
            isOpen: false,
        },
    ];

    products = [
        {
            name: 'Sơn Dulux Đen Mờ',
            description: 'Sơn Dulux đen mờ với độ bền cao, dễ lau chùi.',
            price: 600000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Jotun Xanh Lá',
            description: 'Sơn Jotun xanh lá với khả năng chống thấm tuyệt vời.',
            price: 750000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Kova Bóng',
            description: 'Sơn Kova bóng với độ bóng cao, dễ dàng vệ sinh.',
            price: 800000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Dulux Đen Mờ',
            description: 'Sơn Dulux đen mờ với độ bền cao, dễ lau chùi.',
            price: 600000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Jotun Xanh Lá',
            description: 'Sơn Jotun xanh lá với khả năng chống thấm tuyệt vời.',
            price: 750000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Kova Bóng',
            description: 'Sơn Kova bóng với độ bóng cao, dễ dàng vệ sinh.',
            price: 800000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Dulux Đen Mờ',
            description: 'Sơn Dulux đen mờ với độ bền cao, dễ lau chùi.',
            price: 600000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Jotun Xanh Lá',
            description: 'Sơn Jotun xanh lá với khả năng chống thấm tuyệt vời.',
            price: 750000,
            image: 'https://via.placeholder.com/400x250',
        },
        {
            name: 'Sơn Kova Bóng',
            description: 'Sơn Kova bóng với độ bóng cao, dễ dàng vệ sinh.',
            price: 800000,
            image: 'https://via.placeholder.com/400x250',
        },
    ];

    toggleDropdown(filterId: string) {
        const filter = this.filters.find((f) => f.id === filterId);
        if (filter) {
            filter.isOpen = !filter.isOpen;
        }
    }
}
