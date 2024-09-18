import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

export const ARTICLE_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: ListComponent },
    { path: 'add', component: AddComponent },
    { path: 'edit/:id', component: EditComponent },
];
