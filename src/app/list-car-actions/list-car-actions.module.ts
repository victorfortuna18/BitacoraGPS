import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListCarActionsPageRoutingModule } from './list-car-actions-routing.module';

import { ListCarActionsPage } from './list-car-actions.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCarActionsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ListCarActionsPage]
})
export class ListCarActionsPageModule { }
