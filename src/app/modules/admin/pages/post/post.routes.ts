import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

export const postRoutes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
    {
        path: 'list',
        component: ListComponent,
        data: {
            breadcrumb: 'Danh sách bài viết',
        },
    },
    {
        path: 'create',
        component: CreateComponent,
        data: {
            breadcrumb: 'Thêm bài viết',
        },
    },
    {
        path: 'edit/:id',
        component: EditComponent,
        data: {
            breadcrumb: 'Chỉnh sửa bài viết',
        },
    },
];
