import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPaginatorComponent } from './ui-paginator/ui-paginator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    UiPaginatorComponent
  ],
  declarations: [
    UiPaginatorComponent
  ]
})
export class UserInterfaceModule { }
