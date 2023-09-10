import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftSidetabComponent } from './components/left-sidetab/left-sidetab.component';
import { RightSidetabComponent } from './components/right-sidetab/right-sidetab.component';



@NgModule({
  declarations: [
    LeftSidetabComponent,
    RightSidetabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeftSidetabComponent,
    RightSidetabComponent
  ]
})
export class SidetabsUiModule { }
