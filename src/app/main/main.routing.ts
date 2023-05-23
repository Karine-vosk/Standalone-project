import {Route} from '@angular/router';
import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';
import {SecondPageComponent} from './second-page/second-page.component';

export default [
  {
    path: '',
    title: 'main',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home'
      },
      {
        path: 'second-page',
        component: SecondPageComponent,
        title: 'Second-page'
      }
    ]
  }
] as Route[];
