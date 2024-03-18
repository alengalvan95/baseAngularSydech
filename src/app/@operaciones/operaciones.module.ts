import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { RecuperacionContraseniaComponent } from './autenticacion/recuperacion-contrasenia/recuperacion-contrasenia.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';
import { SharedModule } from '../@shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    LoginComponent,
    RecuperacionContraseniaComponent,
    InicioComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgZorroAntdModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RecuperacionContraseniaComponent,
    InicioComponent
  ],
  providers: []
})
export class OperacionesModule { }
