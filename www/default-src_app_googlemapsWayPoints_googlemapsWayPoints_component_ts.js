(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["default-src_app_googlemapsWayPoints_googlemapsWayPoints_component_ts"],{

/***/ 7834:
/*!**********************************************************************!*\
  !*** ./src/app/googlemapsWayPoints/googlemapsWayPoints.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsComponent": () => (/* binding */ GooglemapsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_googlemapsWayPoints_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./googlemapsWayPoints.component.html */ 1449);
/* harmony import */ var _googlemapsWayPoints_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemapsWayPoints.component.scss */ 731);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _googlemapsWayPoints_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./googlemapsWayPoints.service */ 8871);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 9895);












const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins;
let GooglemapsComponent = class GooglemapsComponent {
    constructor(renderer, document, googlemapsService, modalController, nativeGeocoder, gpsService, router) {
        this.renderer = renderer;
        this.document = document;
        this.googlemapsService = googlemapsService;
        this.modalController = modalController;
        this.nativeGeocoder = nativeGeocoder;
        this.gpsService = gpsService;
        this.router = router;
        this.position = {
            lat: -0.126979,
            lng: -78.4686374
        };
        this.label = {
            titulo: 'ubicacion',
            subtitulo: 'mi ubicacion'
        };
        this.deviceID = {
            dvcID: ''
        };
        this.address = {
            thoroughfare: undefined,
            locality: undefined,
            administrativeArea: undefined,
            countryName: undefined
        };
        this.end = 'José el Capitán Cangrejo, Gonzalo Zaldumbide N49-171, Quito 170138';
        this.start = 'Comité del Pueblo, Quito';
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.googlemapsService.init(this.renderer, this.document).
                then(() => {
                this.initMap();
                console.log('se ejecuto servicio');
            }).catch((err) => {
                console.log(err);
            });
        });
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
        let deviceInformation = '<GTSRequest command="dbget">' +
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
            const parserInformation = new xml2js__WEBPACK_IMPORTED_MODULE_5__.Parser({
                strict: false,
                trim: true,
            });
            parserInformation.parseString(resInformation.data, (err, result) => {
                this.informationDevice = result;
                this.car = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[91]._;
                let timeFrom = this.getHoursSubtract(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);
                let timeTo = this.getTime(this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[75]._);
                let eventData = '<GTSRequest command="eventdata">' +
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
                    const parserInformation = new xml2js__WEBPACK_IMPORTED_MODULE_5__.Parser({
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
                    });
                }).catch(error => {
                    alert('El vehículo seleccionado todavía no tiene registros.');
                    this.dismiss();
                });
            });
        }).catch(error => alert(error.message));
    }
    calculateAndDisplayRoute(latStart, lngStart, latEnd, lngEnd, waypoints) {
        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer();
        const waypts = [];
        for (let i = 0; i < waypoints.length; i++) {
            console.log('waypoints for');
            console.log(waypoints[0].FIELD[4]._);
            console.log(waypoints[1].FIELD[4]._);
            let lat = parseFloat(waypoints[i].FIELD[4]._);
            let lng = parseFloat(waypoints[i].FIELD[5]._);
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
            }
            else {
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
        this.map.addListener('click');
    }
    addMarker(position) {
        let latLng = new google.maps.LatLng(position.lat, position.lng);
        this.marker.setPosition(latLng);
        this.map.panTo(position);
        this.positionSet = position;
    }
    setInfoWindow(marker, titulo, subtitulo, valueCode, speedKPH) {
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
    myLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            let lat = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[4]._);
            let lng = parseFloat(this.eventDataInformation.GTSRESPONSE.RECORD[0].FIELD[5]._);
            let position2 = {
                lat: this.xEnd, lng: this.yEnd
            };
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
        });
    }
};
GooglemapsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT,] }] },
    { type: _googlemapsWayPoints_service__WEBPACK_IMPORTED_MODULE_4__.GooglemapsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_6__.GpsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router }
];
GooglemapsComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    deviceID: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input }],
    divMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['divMap', { static: true },] }]
};
GooglemapsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'googlemapsWayPoints',
        template: _raw_loader_googlemapsWayPoints_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_googlemapsWayPoints_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GooglemapsComponent);



/***/ }),

/***/ 8871:
/*!********************************************************************!*\
  !*** ./src/app/googlemapsWayPoints/googlemapsWayPoints.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsService": () => (/* binding */ GooglemapsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


let GooglemapsService = class GooglemapsService {
    constructor() {
        this.apiKey = 'AIzaSyA_ci5sjI7vlVfTB8sqdt9FgAJF1ZLDAiE';
        this.mapsLoaded = false;
    }
    init(renderer, document) {
        return new Promise((resolve) => {
            if (this.mapsLoaded) {
                console.log('google is preview loaded');
                resolve(true);
                return;
            }
            const script = renderer.createElement('script');
            script.id = 'googleMaps';
            window['initMap'] = () => {
                this.mapsLoaded = true;
                if (google) {
                    console.log('google is loaded');
                }
                else {
                    console.log('google is not defined');
                }
                resolve(true);
                return;
            };
            if (this.apiKey) {
                script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=initMap';
                console.log(script.src);
            }
            else {
                script.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap';
            }
            console.log(script);
            console.log(document.body);
            renderer.appendChild(document.body, script);
        });
    }
};
GooglemapsService.ctorParameters = () => [];
GooglemapsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], GooglemapsService);



/***/ }),

/***/ 731:
/*!************************************************************************!*\
  !*** ./src/app/googlemapsWayPoints/googlemapsWayPoints.component.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.miubicacion {\n  position: fixed;\n  bottom: 0px;\n  background: #ffd740;\n}\n\n.aceptar {\n  position: fixed;\n  top: 50px;\n  right: 5px;\n  background: #80d894;\n}\n\n.search {\n  position: fixed;\n  top: 45px;\n  left: 0px;\n}\n\n.normal {\n  color: gray;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZW1hcHNXYXlQb2ludHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQztFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoiZ29vZ2xlbWFwc1dheVBvaW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuIC5taXViaWNhY2lvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmQ3NDA7XG59XG5cbi5hY2VwdGFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzgwZDg5NDtcbn1cblxuLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiAwcHg7XG59IFxuXG4ubm9ybWFsIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzZCOTcyNztcbn0iXX0= */");

/***/ }),

/***/ 1449:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/googlemapsWayPoints/googlemapsWayPoints.component.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n <ion-toolbar class=\"new-background-color\">\n    <ion-title>\n      Ultimas ubicaciones\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cerrar</span>\n        <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>  \n\n<ion-content>\n    <div #divMap class=\"map\">\n    </div>\n\n    <ion-chip class=\"miubicacion\" (click)=\"myLocation()\">\n    <ion-label>\n      Mi última ubicación\n    </ion-label> \n    <ion-icon name=\"locate\"></ion-icon>    \n  </ion-chip>\n\n  <!-- <ion-chip class=\"aceptar\" (click)=\"aceptar()\">\n    <ion-label class=\"normal\">Aceptar</ion-label> \n    <ion-icon name=\"checkmark\"></ion-icon> \n  </ion-chip> -->\n  </ion-content>\n\n  ");

/***/ })

}]);
//# sourceMappingURL=default-src_app_googlemapsWayPoints_googlemapsWayPoints_component_ts.js.map