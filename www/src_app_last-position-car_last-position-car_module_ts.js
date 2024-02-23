(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_last-position-car_last-position-car_module_ts"],{

/***/ 5534:
/*!***********************************************************************!*\
  !*** ./src/app/last-position-car/last-position-car-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionCarPageRoutingModule": () => (/* binding */ LastPositionCarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _last_position_car_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./last-position-car.page */ 7510);




const routes = [
    {
        path: '',
        component: _last_position_car_page__WEBPACK_IMPORTED_MODULE_0__.LastPositionCarPage
    }
];
let LastPositionCarPageRoutingModule = class LastPositionCarPageRoutingModule {
};
LastPositionCarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LastPositionCarPageRoutingModule);



/***/ }),

/***/ 3830:
/*!***************************************************************!*\
  !*** ./src/app/last-position-car/last-position-car.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionCarPageModule": () => (/* binding */ LastPositionCarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _last_position_car_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./last-position-car-routing.module */ 5534);
/* harmony import */ var _last_position_car_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last-position-car.page */ 7510);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let LastPositionCarPageModule = class LastPositionCarPageModule {
};
LastPositionCarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _last_position_car_routing_module__WEBPACK_IMPORTED_MODULE_0__.LastPositionCarPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_last_position_car_page__WEBPACK_IMPORTED_MODULE_1__.LastPositionCarPage]
    })
], LastPositionCarPageModule);



/***/ }),

/***/ 7510:
/*!*************************************************************!*\
  !*** ./src/app/last-position-car/last-position-car.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionCarPage": () => (/* binding */ LastPositionCarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_last_position_car_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./last-position-car.page.html */ 2160);
/* harmony import */ var _last_position_car_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last-position-car.page.scss */ 7414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_googlemapsWayPoints_googlemapsWayPoints_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/googlemapsWayPoints/googlemapsWayPoints.component */ 7834);









//import { GooglemapsComponent } from 'src/app/googlemaps/googlemaps.component';

let LastPositionCarPage = class LastPositionCarPage {
    constructor(activatedRoute, gpsService, nativeGeocoder, modalController, router) {
        this.activatedRoute = activatedRoute;
        this.gpsService = gpsService;
        this.nativeGeocoder = nativeGeocoder;
        this.modalController = modalController;
        this.router = router;
        this.address = {
            thoroughfare: undefined,
            locality: undefined,
            administrativeArea: undefined,
            countryName: undefined
        };
        this.dataListDevice = [];
    }
    ngOnInit() {
        this.getInfoDevice();
    }
    getInfoDevice() {
        let bodyDeviceID = '<GTSRequest command="dbget">' +
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
            const parser = new xml2js__WEBPACK_IMPORTED_MODULE_3__.Parser({ strict: false, trim: true });
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
            deviceID +
            '</Field>' +
            '</Record></GTSRequest>';
        this.gpsService
            .postDeviceInformation(deviceInformation)
            .then((resInformation) => {
            const parserInformation = new xml2js__WEBPACK_IMPORTED_MODULE_3__.Parser({
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
                }
                else {
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
        let eventData = '<GTSRequest command="eventdata">' +
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
            const parserInformation = new xml2js__WEBPACK_IMPORTED_MODULE_3__.Parser({
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
                };
                this.dataListDevice.push(options);
            });
            this.listFinal = this.dataListDevice;
        }).catch(error => 'alert(error.message)');
    }
    addDirection(deviceId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
            };
            const modalAdd = yield this.modalController.create({
                component: src_app_googlemapsWayPoints_googlemapsWayPoints_component__WEBPACK_IMPORTED_MODULE_5__.GooglemapsComponent,
                mode: 'ios',
                swipeToClose: true,
                componentProps: { deviceID: deviceID }
            });
            yield modalAdd.present();
        });
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
};
LastPositionCarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
LastPositionCarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-last-position-car',
        template: _raw_loader_last_position_car_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_last_position_car_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LastPositionCarPage);



/***/ }),

/***/ 7414:
/*!***************************************************************!*\
  !*** ./src/app/last-position-car/last-position-car.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-skeleton ion-skeleton-text {\n  line-height: 13px;\n}\n\n.custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px;\n}\n\n.custom-ion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhc3QtcG9zaXRpb24tY2FyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGIiwiZmlsZSI6Imxhc3QtcG9zaXRpb24tY2FyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xufVxuXG4uaWNvbi1hcnJvdyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY3VzdG9tLXNrZWxldG9uIGlvbi1za2VsZXRvbi10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG5cbi5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmN1c3RvbS1pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ 2160:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/last-position-car/last-position-car.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goToHome()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"listFinal; else skeleton\">\n    <ion-searchbar placeholder='Busca tu vehículo' [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\" animanted>\n    </ion-searchbar>\n    <ion-list *ngFor=\"let dld of listFinal | filter:searchTerm\">\n      <ion-item (click)=\"addDirection(dld.deviceId)\">\n        <ion-avatar slot=\"start\">\n          <img src=\"assets/img/{{dld.icon}}.png\">\n        </ion-avatar>\n        <!-- <ion-icon slot=\"start\" name=\"car\"></ion-icon> -->\n        <ion-label style=\"color: rgb(32, 137, 178)\">{{dld.car}} <br />\n          <p style=\"color: grey\">\n            {{dld.address}} <br>\n            ({{dld.speedKPH}} km/h) {{dld.valueCode}}\n          </p>\n          <p style=\"color: grey\">{{dld.timeGPS}}</p>\n        </ion-label>\n        <br />\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ng-template #skeleton>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_last-position-car_last-position-car_module_ts.js.map