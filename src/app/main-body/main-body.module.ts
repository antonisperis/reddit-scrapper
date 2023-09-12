import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { InfoFetchModule } from '../info-fetch/info-fetch.module';
import { SidetabsUiModule } from '../sidetabs-ui/sidetabs-ui.module';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    MainBodyComponent
  ],
  imports: [
    CommonModule,
    InfoFetchModule,
    SidetabsUiModule,
    LoginModule
  ],
  exports: [
    MainBodyComponent
  ]
})
export class MainBodyModule { }
