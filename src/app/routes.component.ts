import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/error404/error404.component';
import { CreateComponent } from './components/account/create/create.component';
import { VerifyComponent } from './components/account/verify/verify.component';

const routes: Routes = [
  {
    path: 'signup',
    component: CreateComponent,
  },
  {
    path: 'confirm/:token',
    component: VerifyComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

export const MyRoutes = RouterModule.forRoot(routes);
