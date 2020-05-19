import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { GrettingComponent } from './components/gretting/gretting.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {
    path: '',
    component: GrettingComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  declarations: [AppComponent, Error404Component],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
