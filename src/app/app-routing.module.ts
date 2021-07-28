import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { RandomGuard } from './auth/guards/random.guard';
import { RegisterComponent } from './login/register/register.component';
import { SelecItensComponent } from './selec-itens/selec-itens.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ThanksComponent } from './thanks/thanks.component';


const routes: Routes = [
  {
  path: '',
  component: LoginComponent,
  canActivate: [AuthGuard]
  },
  {
    path: 'escolha/:name',
    component: SelecItensComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'confirmar/:name',
    component: ConfirmationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'obrigado/:name',
    component: ThanksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  {
    path: 'configuracao',
    loadChildren: () => import('./user-settings/user-settings.module').then(m => m.UserSettingsModule),
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
