import { Routes } from '@angular/router';
import { Layout } from './shared/components/layout/layout';
import { Story } from './pages/story/story';

export const routes: Routes = [
  {
    path: 'story',
    component: Layout,
    children: [
      {
        path: ':id/timeline/:timelineId',
        component: Story
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'story/1/timeline/1'
  }
];
