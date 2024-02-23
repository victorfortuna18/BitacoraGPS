import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarReportSearchPage } from './car-report-search.page';

const routes: Routes = [
  {
    path: '',
    component: CarReportSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarReportSearchPageRoutingModule {}
