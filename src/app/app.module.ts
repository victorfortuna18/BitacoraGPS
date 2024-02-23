import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GpsService } from './api/gps.service';
import { HttpClientModule } from '@angular/common/http';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';
import { GooglemapsModule } from './googlemaps/googlemaps.module';
import { LoginPage } from './pages/login/login.page';
import { SMS } from '@ionic-native/sms/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GpsService,
    NativeGeocoder,
    HTTP,
    SMS,
    CallNumber,
    Network
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
