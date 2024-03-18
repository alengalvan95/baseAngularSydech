import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperacionesModule } from './@operaciones/operaciones.module';
import { SharedModule } from './@shared/shared.module';
import { AppInjectorService } from './@services/app-injector.service';
import { NgIdleModule } from '@ng-idle/core';
import { WebRestService } from './@services/crud.rest.service';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { AuthInterceptor } from './interceptors/http.interceptors';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OperacionesModule,
    SharedModule,
    NgZorroAntdModule,
    NgIdleModule.forRoot()
  ],
  providers: [
    WebRestService,
    { provide: NZ_I18N, useValue: es_ES },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjectorService.setInjector(this.injector);
  }
}

