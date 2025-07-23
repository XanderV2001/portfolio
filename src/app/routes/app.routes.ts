import { Routes } from '@angular/router';
import { About } from '@views/about/about';
import { Home } from '@views/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
