import { Routes } from '@angular/router';
import { CortinasForm } from './Pages/cortinas-form/cortinas-form';
import { CortinasList } from './Pages/cortinas-list/cortinas-list';

export const routes: Routes = [
  { path: 'cortinas-form', component: CortinasForm },
  { path: 'cortinas-list', component: CortinasList },
  { path: '**', redirectTo: 'cortinas-form' },
  { path: '', redirectTo: 'cortinas-form', pathMatch: 'full' },
];
