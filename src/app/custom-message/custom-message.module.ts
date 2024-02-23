import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomMessagePageRoutingModule } from './custom-message-routing.module';

import { CustomMessagePage } from './custom-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomMessagePageRoutingModule
  ],
  declarations: [CustomMessagePage]
})
export class CustomMessagePageModule {}
