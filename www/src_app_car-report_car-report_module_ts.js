(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_car-report_car-report_module_ts"],{

/***/ 939:
/*!*********************************************************!*\
  !*** ./src/app/car-report/car-report-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReportPageRoutingModule": () => (/* binding */ CarReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _car_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-report.page */ 3939);




const routes = [
    {
        path: '',
        component: _car_report_page__WEBPACK_IMPORTED_MODULE_0__.CarReportPage
    }
];
let CarReportPageRoutingModule = class CarReportPageRoutingModule {
};
CarReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarReportPageRoutingModule);



/***/ }),

/***/ 9813:
/*!*************************************************!*\
  !*** ./src/app/car-report/car-report.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReportPageModule": () => (/* binding */ CarReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _car_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-report-routing.module */ 939);
/* harmony import */ var _car_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-report.page */ 3939);







let CarReportPageModule = class CarReportPageModule {
};
CarReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarReportPageRoutingModule
        ],
        declarations: [_car_report_page__WEBPACK_IMPORTED_MODULE_1__.CarReportPage]
    })
], CarReportPageModule);



/***/ }),

/***/ 3939:
/*!***********************************************!*\
  !*** ./src/app/car-report/car-report.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReportPage": () => (/* binding */ CarReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_car_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./car-report.page.html */ 2604);
/* harmony import */ var _car_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-report.page.scss */ 6882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);









let CarReportPage = class CarReportPage {
    constructor(router, activatedRoute, gpsService, nativeGeocoder, modalController) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.gpsService = gpsService;
        this.nativeGeocoder = nativeGeocoder;
        this.modalController = modalController;
        this.address = {
            thoroughfare: undefined,
            locality: undefined,
            administrativeArea: undefined,
            countryName: undefined
        };
        this.dataListDevice = [];
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
        let eventData = '<GTSRequest command="eventdata">' +
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
            const parserInformation = new xml2js__WEBPACK_IMPORTED_MODULE_3__.Parser({
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
                    };
                    this.dataListDevice.push(options);
                }
            });
            this.listFinal = this.dataListDevice;
        }).catch(error => {
            alert('No existen registros para las fechas seleccionadas.');
            this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
        });
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
};
CarReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
CarReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-car-report',
        template: _raw_loader_car_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_car_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarReportPage);



/***/ }),

/***/ 6882:
/*!*************************************************!*\
  !*** ./src/app/car-report/car-report.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #6B9727;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\nion-icon {\n  color: #FFF150;\n}\n\nion-button {\n  --background: #6B9727;\n  --border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0EsY0FBQTtBQUNBOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6ImNhci1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzZCOTcyNztcbn1cblxuLmljb24tYXJyb3cge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VzdG9tLWlvbi10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzZCOTcyNztcbn1cblxuaW9uLWljb24ge1xuY29sb3I6ICNGRkYxNTA7XG59XG5cbmlvbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogIzZCOTcyNztcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 2604:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-report/car-report.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goReportSearch()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">Movimientos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"listFinal; else skeleton\">\n    <ion-list *ngFor=\"let dld of listFinal\">\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"analytics\"></ion-icon>\n        <ion-label style=\"color: rgb(32, 137, 178)\">\n          <p style=\"color: grey\">\n            {{dld.address}} <br>\n            ({{dld.speedKPH}} km/h) {{dld.valueCode}}\n          </p>\n          <p style=\"color: grey\">{{dld.timeGPS}}</p>\n        </ion-label>\n        <br />\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ng-template #skeleton>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_car-report_car-report_module_ts.js.map