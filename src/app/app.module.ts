import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MyRoutes } from './routes.component';

// My Services
import { AccountService } from './shared/services/account.service';
import { AuthService } from './shared/services/auth.service';
import { AuthInterceptorService } from './components/login/services/auth-interceptor.service';

// My Components
import { AppComponent } from './app.component';
import { CreateComponent } from './components/account/create/create.component';
import { Error404Component } from './errors/error404/error404.component';
import { VerifyComponent } from './components/account/verify/verify.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/account/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    Error404Component,
    VerifyComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyRoutes,
  ],
  providers: [
    AccountService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
