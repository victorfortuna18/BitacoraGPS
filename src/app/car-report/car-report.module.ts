import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarReportPageRoutingModule } from './car-report-routing.module';

import { CarReportPage } from './car-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarReportPageRoutingModule
  ],
  declarations: [CarReportPage]
})
export class CarReportPageModule {}
