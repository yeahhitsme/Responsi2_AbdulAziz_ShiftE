import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageToysPageRoutingModule } from './manage-toys-routing.module';

import { ManageToysPage } from './manage-toys.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageToysPageRoutingModule
  ],
  declarations: [ManageToysPage]
})
export class ManageToysPageModule {}
