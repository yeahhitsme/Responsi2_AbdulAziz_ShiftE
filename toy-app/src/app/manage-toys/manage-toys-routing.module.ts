import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageToysPage } from './manage-toys.page';

const routes: Routes = [
  {
    path: '',
    component: ManageToysPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageToysPageRoutingModule {}
