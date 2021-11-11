import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReverseAuthGuard } from '../../_core/auth/services/reverse.auth.guard';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',component: LoginComponent,
        data: { returnUrl: window.location.pathname },
        canActivate:[ReverseAuthGuard]
      },
      {
        path: 'forgot_password',
        component: ForgotPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
