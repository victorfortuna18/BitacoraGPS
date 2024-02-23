import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarPageRoutingModule } from './list-car-routing.module';

import { ListCarPage } from './list-car.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListCarPage]
})
export class ListCarPageModule { }
