import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCarActionsCustomPage } from './list-car-actions-custom.page';

const routes: Routes = [
  {
    path: '',
    component: ListCarActionsCustomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCarActionsCustomPageRoutingModule {}
