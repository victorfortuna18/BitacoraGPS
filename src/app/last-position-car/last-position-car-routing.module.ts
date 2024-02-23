import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastPositionCarPage } from './last-position-car.page';

const routes: Routes = [
  {
    path: '',
    component: LastPositionCarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastPositionCarPageRoutingModule {}
