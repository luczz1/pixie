import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {  TopPageRoutingModule } from './top-routing.module';

import { TopPage } from './top.page';
import { TopMenuPageModule } from 'src/app/topmenu/topmenu.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TopMenuPageModule,
    TopPageRoutingModule
  ],
  declarations: [TopPage]
})
export class TopPageModule {}
