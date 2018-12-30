import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Services/authentification/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './components/main/main.module#MainModule',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: './components/login/login.module#LoginModule'
  },
  {
    path: 'user',
    loadChildren: './components/customer/customer.module#CustomerModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'not-found',
    loadChildren: './components/notfound/notfound.module#NotfoundModule'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}