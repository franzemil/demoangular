import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { AppMaterialModule } from '../app.material.module';


@NgModule({
  declarations: [AppBarComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [AppBarComponent, AppMaterialModule]
})
export class CommonsModule { }
