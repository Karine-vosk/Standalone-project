import {Route} from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.routing'),
  },
  {
    path: 'todo-list',
    loadComponent: () => import('./todo-list/todo-list.component'),
    title: 'Todo-list'
  },
  {
    path: 'products-list',
    loadComponent: () => import('./products-list/products-list.component')
  }
];


