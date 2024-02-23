import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastPositionPageRoutingModule } from './last-position-routing.module';

import { LastPositionPage } from './last-position.page';
import { GooglemapsComponent } from 'src/app/googlemapsWayPoints/googlemapsWayPoints.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastPositionPageRoutingModule
  ],
  declarations: [LastPositionPage, GooglemapsComponent]
})
export class LastPositionPageModule { }
