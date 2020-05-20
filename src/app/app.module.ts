import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MyRoutes } from './routes.component';

// My Services
import { AccountService } from './shared/services/account.service';

// My Components
import { AppComponent } from './app.component';
import { CreateComponent } from './components/account/create/create.component';
import { Error404Component } from './errors/error404/error404.component';
import { VerifyComponent } from './components/account/verify/verify.component';

@NgModule({
  declarations: [AppComponent, CreateComponent, Error404Component, VerifyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyRoutes,
  ],
  providers: [AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
