import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarReportPageRoutingModule } from './list-car-report-routing.module';

import { ListCarReportPage } from './list-car-report.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarReportPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListCarReportPage]
})
export class ListCarReportPageModule { }
