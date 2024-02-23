import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastPositionCarPageRoutingModule } from './last-position-car-routing.module';

import { LastPositionCarPage } from './last-position-car.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastPositionCarPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LastPositionCarPage]
})
export class LastPositionCarPageModule { }
