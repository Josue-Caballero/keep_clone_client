import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { CreateComponent } from './components/account/create/create.component';
import { VerifyComponent } from './components/account/verify/verify.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/account/profile/profile.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { LoggedGuard } from './shared/guards/logged.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'signup',
    component: CreateComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'confirm/:token',
    component: VerifyComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'keep',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'configuration',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    component: Error404Component,
  },
];

export const MyRoutes = RouterModule.forRoot(routes);
