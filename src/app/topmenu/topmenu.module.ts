import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TopMenuPage } from './topmenu.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    TopMenuPage
  ],
  declarations: [TopMenuPage]
})
export class TopMenuPageModule {}
