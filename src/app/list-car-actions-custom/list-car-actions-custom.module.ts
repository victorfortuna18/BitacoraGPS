import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarActionsCustomPageRoutingModule } from './list-car-actions-custom-routing.module';

import { ListCarActionsCustomPage } from './list-car-actions-custom.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarActionsCustomPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListCarActionsCustomPage]
})
export class ListCarActionsCustomPageModule { }
