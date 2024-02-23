import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCarActionsPage } from './list-car-actions.page';

const routes: Routes = [
  {
    path: '',
    component: ListCarActionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCarActionsPageRoutingModule {}
