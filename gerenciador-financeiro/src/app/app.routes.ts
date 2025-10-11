import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home').then(m => m.Home)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
