import { Routes } from '@angular/router';
import { PanelLayoutComponent } from './layouts';
import {
  ArtistsPageComponent,
  DashboardPageComponent,
  MessagesPageComponent,
  OrdersPageComponent,
  ProfilePageComponent,
  SupportPageComponent,
  WorksPageComponent,
} from './pages';

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
      {
        path: 'orders',
        component: OrdersPageComponent,
      },
      {
        path: 'profile',
        component: ProfilePageComponent,
      },
      {
        path: 'messages',
        component: MessagesPageComponent,
      },
      {
        path: 'support',
        component: SupportPageComponent,
      },
      {
        path: 'works',
        component: WorksPageComponent,
      },
      {
        path: 'artists',
        component: ArtistsPageComponent,
      },
    ],
  },
];
