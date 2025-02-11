import { Routes } from '@angular/router';
import { PanelLayoutComponent } from './layouts';
import { DashboardPageComponent } from './pages';

export const routes: Routes = [
  {
    path: '',
    component: PanelLayoutComponent,

    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },

      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },
    ],
  },
];
