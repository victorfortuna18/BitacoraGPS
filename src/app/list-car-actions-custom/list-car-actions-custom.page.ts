import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GpsService } from 'src/app/api/gps.service';
import * as xml2js from 'xml2js';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ModalController, PopoverController } from '@ionic/angular';
import { GooglemapsComponent } from 'src/app/googlemaps/googlemaps.component';
import { ActioncarrComponent } from '../actioncarr/actioncarr.component';

@Component({
  selector: 'app-list-car-actions-custom',
  templateUrl: './list-car-actions-custom.page.html',
  styleUrls: ['./list-car-actions-custom.page.scss'],
})
export class ListCarActionsCustomPage implements OnInit {
  public folder: string;
  xml;
  informationDevice;
  eventDataInformation;
  address = {
    thoroughfare: undefined,
    locality: undefined,
    administrativeArea: undefined,
    countryName: undefined
  };


  // var response evendata
  car;
  timeGPS;
  icon;
  modelGPS;
  simNumber;
  // coordinates
  lng;
  lat;
  // data car
  speedKPH;
  statusCode;
  valueCode;
  dataListDevice: any[] = [];
  listFinal;
  searchTerm: string;
  constructor(private activatedRoute: ActivatedRoute,
    private gpsService: GpsService,
    private nativeGeocoder: NativeGeocoder,
    public modalController: ModalController,
    private router: Router,
    public popoverController: PopoverController) { }

  ngOnInit() {
    this.getInfoDevice();
  }

  getInfoDevice() {
    let bodyDeviceID =
      '<GTSRequest command="dbget">' +
      ' <Authorization account="' +
      localStorage.getItem('account') +
      '" user="' +
      localStorage.getItem('user') +
      '" password="' +
      localStorage.getItem('password') +
      '"/>' +
      '<RecordKey table="Device" partial="true">' +
      '<Field name="accountID">' +
      localStorage.getItem('account') +
      '</Field>' +
      '</RecordKey></GTSRequest>';

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.gpsService.postDeviceID(bodyDeviceID).then((res) => {
      const parser = new xml2js.Parser({ strict: false, trim: true });
      parser.parseString(res.data, (err, result) => {
        this.xml = result;

        let multipleDevice = this.xml.GTSRESPONSE.RECORDKEY;
        for (let i = 0; i < multipleDevice.length; i++) {
          localStorage.setItem('deviceID' + i, multipleDevice[i].FIELD[1]._);
          this.getMultipleDevice(multipleDevice[i].FIELD[1]._);
        }
      });

    }).catch(error => {
      this.goToHome();
      alert('¡Al parecer tenemos inconvenientes, por favor revisar su conexión a internet o intentar más tarde.!')
    });

  }


  getMultipleDevice(deviceID) {
    let deviceInformation =
      '<GTSRequest command="dbget">' +
      ' <Authorization account="' +
      localStorage.getItem('account') +
      '" user="' +
      localStorage.getItem('user') +
      '" password="' +
      localStorage.getItem('password') +
      '"/>' +
      '<Record table="Device">' +
      '<Field name="accountID">' +
      localStorage.getItem('account') +
      '</Field>' +
      '<Field name="deviceID">' +
      deviceID +
      '</Field>' +
      '</Record></GTSRequest>';

    this.gpsService
      .postDeviceInformation(deviceInformation)
      .then((resInformation) => {
        const parserInformation = new xml2js.Parser({
          strict: false,
          trim: true,
        });
        parserInformation.parseString(resInformation.data, (err, result) => {
          this.informationDevice = result;

          this.car = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[91]._;
          this.modelGPS = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[3]._;
          this.simNumber = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[30]._;

          let options = {
            car: this.car,
            modelGPS: this.modelGPS,
            simNumber: this.simNumber
          }
          this.dataListDevice.push(options);

        });
      }).catch(error => alert(error.message));


  }


  async addDirection(modelGPS: any, simNumber: any, car: any) {
    this.router.navigate(['/custom-message'], { state: simNumber });
  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }




}
