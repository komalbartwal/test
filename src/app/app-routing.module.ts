import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/auth/services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./_view/auth/auth.module').then((m) => m.AuthModule),
      
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./_view/auth/auth.module').then((m) => m.AuthModule),
      
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('../app/_view/pages/pages.module').then((m) => m.PagesModule),
  },
  { path: '**', redirectTo: 'auth' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
