import { Routes } from '@angular/router';
import { Layout } from './shared/layout/layout';
import { Timeline } from './pages/timeline/timeline';

export const routes: Routes = [
  {
    path: 'timeline',
    component: Layout,
    children: [
      {
        path: ':id',
        component: Timeline
      }
    ]
  }
];
