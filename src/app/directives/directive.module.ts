import { NgModule } from '@angular/core';
import { TrimDirective } from './trim.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NumberDirective } from './numbers.directive';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [TrimDirective, NumberDirective],
  exports: [TrimDirective, NumberDirective]
})
export class DirectivesModule { }