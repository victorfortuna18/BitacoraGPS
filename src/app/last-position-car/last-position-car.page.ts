import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GpsService } from 'src/app/api/gps.service';
import * as xml2js from 'xml2js';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ModalController } from '@ionic/angular';
//import { GooglemapsComponent } from 'src/app/googlemaps/googlemaps.component';
import { GooglemapsComponent } from 'src/app/googlemapsWayPoints/googlemapsWayPoints.component';
@Component({
  selector: 'app-last-position-car',
  templateUrl: './last-position-car.page.html',
  styleUrls: ['./last-position-car.page.scss'],
})
export class LastPositionCarPage implements OnInit {
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
  // coordinates
  lng;
  lat;
  // data car
  speedKPH;
  statusCode;
  valueCode;
  dataListDevice: any[] = [];
  listFinal;
  deviceID;

  searchTerm: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gpsService: GpsService,
    private nativeGeocoder: NativeGeocoder,
    public modalController: ModalController,
    private router: Router
  ) { }

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
      alert('¡Al parecer tenemos inconvenientes, por favor revisar su conexión a internet o intentar más tarde.!');
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

          let icnFl = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[27]._;

          if (icnFl == '4x4' || icnFl == 'bltruck' || icnFl == 'bus' || icnFl == 'excav' ||
            icnFl == 'grnbike' || icnFl == 'grua' || icnFl == 'h100' || icnFl == 'medi' ||
            icnFl == 'moto' || icnFl == 'policia' || icnFl == 'rcar' || icnFl == 'remolque' ||
            icnFl == 'taxi' || icnFl == 'yeltruck') {
            this.icon = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[27]._;
          } else {
            this.icon = 'rcar';
          }

          this.car = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[91]._;

          this.timeGPS = this.getTime(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);

          this.lat = parseFloat(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[72]._);
          this.lng = parseFloat(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[73]._);

          this.getEventData(deviceID, this.timeGPS, this.car, this.lat, this.lng, this.icon);

        });
      }).catch(error => alert(error.message));


  }

  getEventData(deviceID, timeGPS, car, lat, lng, icon) {
    let eventData =
      '<GTSRequest command="eventdata">' +
      ' <Authorization account="' +
      localStorage.getItem('account') +
      '" user="' +
      localStorage.getItem('user') +
      '" password="' +
      localStorage.getItem('password') +
      '"/>' +
      '<EventData>' +
      '<Device>' + deviceID + '</Device>' +
      '<TimeFrom timezone="EC/Pacific">' + timeGPS + '</TimeFrom>' +
      '<TimeTo timezone="EC/Pacific">' + timeGPS + '</TimeTo>' +
      '<Field name="speedKPH"/>' +
      '<Field name="address"/>' +
      '<Field name="statusdesc"/>' +
      '<Field name="latitude"/>' +
      '<Field name="longitude"/>' +
      '</EventData></GTSRequest>';

    this.gpsService.
      postEventData(eventData)
      .then((resEventData) => {
        const parserInformation = new xml2js.Parser({
          strict: false,
          trim: true,
        });
        parserInformation.parseString(resEventData.data, (err, result) => {
          this.eventDataInformation = result;
          this.address = this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[7]._;
          this.speedKPH = this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[6]._;
          this.statusCode = this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[3]._;
          switch (this.statusCode) {
            case '0xF010':
              this.valueCode = 'Inicializado';
              break;
            case '0xF020':
              this.valueCode = 'Localización';
              break;
            case '0xF040':
              this.valueCode = 'Consulta';
              break;
            case '0xF111':
              this.valueCode = 'Encendido';
              break;
            case '0xF112':
              this.valueCode = 'En movimiento';
              break;
            case '0xF113':
              this.valueCode = 'Detenido';
              break;
            case '0xF11A':
              this.valueCode = 'Exceso de velocidad';
              break;
            case '0xF11C':
              this.valueCode = 'Motor';
              break;
            case '0xF210':
              this.valueCode = 'Arribar';
              break;
            case '0xF230':
              this.valueCode = 'Salir';
              break;
            default:
              this.valueCode = 'Detenido';
          }

          let options = {
            deviceId: deviceID,
            address: this.address,
            speedKPH: parseFloat(this.speedKPH).toFixed(2),
            valueCode: this.valueCode,
            car: car,
            timeGPS: timeGPS,
            lat: lat,
            lng: lng,
            icon: icon
          }
          this.dataListDevice.push(options);

        });

        this.listFinal = this.dataListDevice;
      }).catch(error => 'alert(error.message)');

  }

  async addDirection(deviceId: any) {

    /* let position = {
      lat: lat,
      lng: lng
    };

    let label = {
      titulo: car,
      valueCode: valueCode,
      subtitulo: address,
      speedKPH: speedKPH,
      icon: icon
    } */

    let deviceID = {
      dvcID: deviceId
    }

    const modalAdd = await this.modalController.create({
      component: GooglemapsComponent,
      mode: 'ios',
      swipeToClose: true,
      componentProps: { deviceID: deviceID }
    });

    await modalAdd.present();



  }

  goToHome() {
    this.router.navigateByUrl('/home');
  }



  getTime(time) {

    const timeParse = parseFloat(time);

    const milliseconds = timeParse * 1000;

    const unixTimestamp = new Date(milliseconds);

    // adjust 0 before single digit date
    let date = ("0" + unixTimestamp.getDate()).slice(-2);

    // current month
    let month = ("0" + (unixTimestamp.getMonth() + 1)).slice(-2);

    // current year
    let year = unixTimestamp.getFullYear();

    // current hours
    let hours = unixTimestamp.getHours();

    // current minutes
    let minutes = unixTimestamp.getMinutes();

    // current seconds
    let seconds = unixTimestamp.getSeconds();

    let formatDate = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds;

    //  const timeFinal = unixTimestamp.toLocaleString().slice(0, 19).replace('T', ' ');

    return formatDate;

  }
}
