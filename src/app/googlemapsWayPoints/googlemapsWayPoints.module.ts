import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglemapsComponent } from './googlemapsWayPoints.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [GooglemapsComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [GooglemapsComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class GooglemapsModule { }
