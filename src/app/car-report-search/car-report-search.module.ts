import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarReportSearchPageRoutingModule } from './car-report-search-routing.module';

import { CarReportSearchPage } from './car-report-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarReportSearchPageRoutingModule
  ],
  declarations: [CarReportSearchPage]
})
export class CarReportSearchPageModule {}
