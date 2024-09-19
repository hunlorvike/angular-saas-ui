import { IMenu } from '../../models';

export const menuList: IMenu[] = [
    {
        id: 1,
        fatherId: 0,
        path: '/admin',
        name: 'Trang chủ',
        type: 'C',
        icon: { name: 'home', type: 'outlined' },
        codes: ['dmvn:default'],
        newLinkFlag: 0,
    },
    {
        id: 2,
        fatherId: 0,
        path: '/settings',
        name: 'Cài đặt',
        type: 'C',
        icon: { name: 'setting', type: 'outlined' },
        codes: ['dmvn:sa'],
        newLinkFlag: 0,
    },
    {
        id: 3,
        fatherId: 0,
        path: '/admin/users',
        name: 'Quản lý người dùng',
        type: 'C',
        icon: { name: 'users', type: 'outlined' },
        codes: ['dmvn:default'],
        newLinkFlag: 0,
    },
];
