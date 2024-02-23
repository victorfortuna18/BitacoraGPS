import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { ModalController } from '@ionic/angular';
import { GooglemapsService } from './googlemapsWayPoints.service';
import * as xml2js from 'xml2js';
import { GpsService } from 'src/app/api/gps.service';
import { Router } from '@angular/router';

const { Geolocation } = Plugins;
declare var google: any;

@Component({
  selector: 'googlemapsWayPoints',
  templateUrl: './googlemapsWayPoints.component.html',
  styleUrls: ['./googlemapsWayPoints.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  @Input() position = {
    lat: -0.126979,
    lng: -78.4686374
  };

  @Input() label = {
    titulo: 'ubicacion',
    subtitulo: 'mi ubicacion'
  }

  @Input() deviceID = {
    dvcID: ''
  }
  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;

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
  // coordinates
  lng;
  lat;
  // data car
  speedKPH;
  statusCode;
  valueCode;

  speedKPHF;
  statusCodeF;
  valueCodeF;
  addressF;

  xEnd;
  yEnd;

  @ViewChild('divMap', { static: true }) divMap: ElementRef;

  end = 'José el Capitán Cangrejo, Gonzalo Zaldumbide N49-171, Quito 170138';
  start = 'Comité del Pueblo, Quito';

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController,
    private nativeGeocoder: NativeGeocoder,
    private gpsService: GpsService,
    private router: Router) { }

  ngOnInit() {
    this.init();
  }

  async init() {
    this.googlemapsService.init(this.renderer, this.document).
      then(() => {
        this.initMap();
        console.log('se ejecuto servicio');
      }).catch((err) => {
        console.log(err);
      })
  }

  initMap() {
    const position = this.position;
    const label = this.label;
    const deviceID = this.deviceID;
    console.log('DEVICE ID ENTRADA');
    console.log(deviceID.dvcID);
    //get api uses
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    let latLng = new google.maps.LatLng(position.lat, position.lng);

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
      deviceID.dvcID +
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


          let timeFrom = this.getHoursSubtract(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);

          let timeTo = this.getTime(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);

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
            '<Device>' + deviceID.dvcID + '</Device>' +
            '<TimeFrom timezone="EC/Pacific">' + timeFrom + '</TimeFrom>' +
            '<TimeTo timezone="EC/Pacific">' + timeTo + '</TimeTo>' +
            '<Limit>6</Limit>' +
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
                console.log('Informacion Event Data');
                console.log(this.eventDataInformation);

                this.address = this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[7]._;
                this.addressF = this.eventDataInformation.GTSRESPONSE.RECORD[5].FIELD[7]._;
                this.speedKPH = this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[6]._;
                this.speedKPHF = this.eventDataInformation.GTSRESPONSE.RECORD[5].FIELD[6]._;
                this.statusCode = this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[3]._;

                let lat = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[4]._);
                let lng = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[5]._);


                let mapOptions = {
                  center: { lat: lat, lng: lng },
                  zoom: 12,
                  disableDefaultUI: false,
                  clickableIcons: false
                };

                this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);

                let latStart = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[4]._);
                let lngStart = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[5]._);
                let latEnd = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[5].FIELD[4]._);
                let lngEnd = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[5].FIELD[5]._);
                let waypoints = this.eventDataInformation.GTSRESPONSE.RECORD;
                this.calculateAndDisplayRoute(latStart, lngStart, latEnd, lngEnd, waypoints);

                this.xEnd = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[5].FIELD[4]._);
                this.yEnd = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[5].FIELD[5]._);

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
                }
              })
            }).catch(error =>
            //alert(error.message)
            {
              alert('El vehículo seleccionado todavía no tiene registros.');
              this.dismiss();
            }

            );
        });
      }).catch(error => alert(error.message));


  }

  calculateAndDisplayRoute(latStart: any, lngStart: any, latEnd: any, lngEnd: any, waypoints: any) {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const waypts: any[] = [];
    for (let i = 0; i < waypoints.length; i++) {
      console.log('waypoints for')

      console.log(waypoints[0].FIELD[4]._);
      console.log(waypoints[1].FIELD[4]._);
      let lat = parseFloat(waypoints[i].FIELD[4]._)
      let lng = parseFloat(waypoints[i].FIELD[5]._)
      const stop = new google.maps.LatLng(lat, lng);
      let options = {
        location: stop,
        stopover: true
      };
      waypts.push(options);
    }
    console.log(waypts);
    const stop = new google.maps.LatLng(-0.11212333333333334, -78.48314);
    const waypts2 = [
      {
        location: stop,
        stopover: true
      }
    ];
    let startAdress = new google.maps.LatLng(latStart, lngStart);
    let endAdress = new google.maps.LatLng(latEnd, lngEnd);
    directionsService.route({
      origin: startAdress,
      destination: endAdress,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: google.maps.TravelMode.DRIVING
    }, (response, status) => {
      if (status === 'OK') {
        console.log(response);
        directionsRenderer.setDirections(response);
        directionsRenderer.setMap(this.map);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  /*   getInfoDevice() {
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
  
      this.gpsService.postDeviceID(bodyDeviceID).then((res) => {
        const parser = new xml2js.Parser({ strict: false, trim: true });
        parser.parseString(res.data, (err, result) => {
          this.xml = result;
          localStorage.setItem(
            'deviceID',
            this.xml.GTSRESPONSE.RECORDKEY[0].FIELD[1]._
          );
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
            localStorage.getItem('deviceID') +
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
  
  
                let timeFrom = this.getHoursSubtract(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);
  
                let timeTo = this.getTime(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);
  
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
                  '<Device>' + localStorage.getItem('deviceID') + '</Device>' +
                  '<TimeFrom timezone="EC/Pacific">' + timeFrom + '</TimeFrom>' +
                  '<TimeTo timezone="EC/Pacific">' + timeTo + '</TimeTo>' +
                  '<Limit>6</Limit>' +
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
                      console.log('Informacion Event Data');
                      console.log(this.eventDataInformation);
                      console.log(this.eventDataInformation.GTSRESPONSE.RECORD[1].FIELD[7]._);
                      console.log(this.eventDataInformation.GTSRESPONSE.RECORD[2].FIELD[7]._);
                      console.log(this.eventDataInformation.GTSRESPONSE.RECORD[3]);
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
                      }
                    })
                  }).catch(error => alert(error.message));
              });
            }).catch(error => alert(error.message));
        });
        console.log(this.xml);
      }).catch(error => alert(error.message));
    } */


  getHoursSubtract(time) {

    const timeParse = parseFloat(time);

    const milliseconds = timeParse * 1000;

    const unixTimestamp = new Date(milliseconds);

    // current hours
    let hours = unixTimestamp.setHours(unixTimestamp.getHours() - 5);
    const second = new Date(hours);

    // adjust 0 before single digit date
    let date = ("0" + second.getDate()).slice(-2);

    // current month
    let month = ("0" + (second.getMonth() + 1)).slice(-2);

    // current year
    let year = second.getFullYear();

    let hoursSb = second.getHours();

    // current minutes
    let minutes = second.getMinutes();

    // current seconds
    let seconds = second.getSeconds();

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    // console.log(year + "-" + month + "-" + date + " " + hoursSb + ":" + minutes + ":" + seconds);

    let formatDate = year + "-" + month + "-" + date + " " + hoursSb + ":" + minutes + ":" + seconds;

    return formatDate;

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


  clickHandleEvent() {
    this.map.addListener('click',)
  }

  addMarker(position: any) {
    let latLng = new google.maps.LatLng(position.lat, position.lng);
    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }

  setInfoWindow(marker: any, titulo: string, subtitulo: string, valueCode: string, speedKPH: string) {
    const contentString = '<div id="contentInsideMap">' +
      '<div>' +
      '</div>' +
      '<p style="font-weight: bold; margin-botton: 5px; color:black;">' +
      '(' + valueCode + ')' + titulo + '</p>' +
      '<div id="bodyContent">' +
      '<p class="normal m-0" style="color:grey;">' +
      '(' + speedKPH + 'km/h)' + subtitulo + '</p>' +
      '</div>' +
      '</div>';

    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
  }

  dismiss() {
    google.maps.event.clearInstanceListeners('divMap');
    this.modalController.dismiss();
  }

  async myLocation() {
    let lat = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[4]._);
    let lng = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[5]._);

    let position2 = {
      lat: this.xEnd, lng: this.yEnd
    }

    let endAdress = new google.maps.LatLng(this.xEnd, this.yEnd);
    let mapOptions = {
      center: { lat: this.xEnd, lng: this.yEnd },
      zoom: 20,
      disableDefaultUI: false,
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: false,
      icon: ''
    });
    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position2);
    this.marker.addListener("click", () => {
      this.setInfoWindow(this.marker, this.car, this.addressF, this.valueCode, parseFloat(this.speedKPHF).toFixed(2));
    });

  }


}
