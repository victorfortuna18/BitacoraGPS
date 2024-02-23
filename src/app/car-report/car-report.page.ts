import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GpsService } from 'src/app/api/gps.service';
import * as xml2js from 'xml2js';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ModalController } from '@ionic/angular';
//import { GooglemapsComponent } from 'src/app/googlemaps/googlemaps.component';
import { GooglemapsComponent } from 'src/app/googlemapsWayPoints/googlemapsWayPoints.component';

@Component({
  selector: 'app-car-report',
  templateUrl: './car-report.page.html',
  styleUrls: ['./car-report.page.scss'],
})
export class CarReportPage implements OnInit {
  infoReport;
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
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private gpsService: GpsService,
    private nativeGeocoder: NativeGeocoder,
    public modalController: ModalController) {

    console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit() {
    this.getEventData();
  }



  getEventData() {

    let timeFrom = this.router.getCurrentNavigation().extras.state.dateFrom.split('T')[0];
    let timeTo = this.router.getCurrentNavigation().extras.state.dateTo.split('T')[0];
    let dateFromI = this.router.getCurrentNavigation().extras.state.dateFromI.split('T')[1].split('.')[0];
    let dateFromF = this.router.getCurrentNavigation().extras.state.dateFromF.split('T')[1].split('.')[0];
    let timeFinal = this.router.getCurrentNavigation().extras.state.dateFrom.replace('T', ' ').split('.')[0];
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
      '<Device>' + this.router.getCurrentNavigation().extras.state.deviceID + '</Device>' +
      /* '<TimeFrom timezone="EC/Pacific">' + timeFrom + ' ' + '00:00:00' + '</TimeFrom>' + */
      '<TimeFrom timezone="EC/Pacific">' + timeFrom + ' ' + dateFromI + '</TimeFrom>' +
      /* '<TimeTo timezone="EC/Pacific">' + timeTo + ' ' + '23:59:59' + '</TimeTo>' + */
      '<TimeTo timezone="EC/Pacific">' + timeFrom + ' ' + dateFromF + '</TimeTo>' +
      '<Limit>' + 1000 + '</Limit>' +
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
          console.log('Event data information');
          console.log(this.eventDataInformation);
          let listInfo = this.eventDataInformation.GTSRESPONSE.RECORD;
          for (let i = 0; i < listInfo.length; i++) {
            let address = listInfo[i].FIELD[7]._;
            let speedKPH = listInfo[i].FIELD[6]._;
            let statusCode = listInfo[i].FIELD[3]._;
            let timeGPS = this.getTime(listInfo[i].FIELD[2]._);
            switch (statusCode) {
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
              address: address,
              speedKPH: parseFloat(speedKPH).toFixed(2),
              valueCode: this.valueCode,
              timeGPS: timeGPS
            }
            this.dataListDevice.push(options);
          }
        });
        this.listFinal = this.dataListDevice;
      }).catch(error => {
        alert('No existen registros para las fechas seleccionadas.')
        this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
      }
      );

  }


  goToHome() {
    this.router.navigateByUrl('/home');
  }

  goReportSearch() {
    this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
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





