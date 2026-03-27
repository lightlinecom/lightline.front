import { Routes } from '@angular/router';
import { Layout } from './shared/layout/layout';
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
    ]
  }
];
