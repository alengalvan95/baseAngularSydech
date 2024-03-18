import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './@operaciones/autenticacion/login/login.component';
import { RecuperacionContraseniaComponent } from './@operaciones/autenticacion/recuperacion-contrasenia/recuperacion-contrasenia.component';
import { InicioComponent } from './@operaciones/inicio/inicio.component';
import { AuthGuard } from './guards/AuthGuard';
import { PageNotFoundComponent } from './@operaciones/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "recuperacion-contrasenia",
    component: RecuperacionContraseniaComponent,
  },
  {
    path: "inicio",
    component: InicioComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
