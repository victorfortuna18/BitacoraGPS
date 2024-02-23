import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCarReportPage } from './list-car-report.page';

const routes: Routes = [
  {
    path: '',
    component: ListCarReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCarReportPageRoutingModule {}
