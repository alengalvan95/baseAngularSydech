import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CustomToastComponent } from './custom-toast/custom-toast.component';
import { NgZorroAntdModule } from '../ng-zorro-antd.module';






@NgModule({
  declarations: [
    SpinnerComponent,
    NavMenuComponent,
    CustomToastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    SpinnerComponent,
    NavMenuComponent,
    CustomToastComponent
  ]
})
export class SharedModule { }
