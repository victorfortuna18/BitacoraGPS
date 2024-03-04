(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_list-car-report_list-car-report_module_ts"],{

/***/ 7559:
/*!*******************************************************************!*\
  !*** ./src/app/list-car-report/list-car-report-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarReportPageRoutingModule": () => (/* binding */ ListCarReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _list_car_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-car-report.page */ 8697);




const routes = [
    {
        path: '',
        component: _list_car_report_page__WEBPACK_IMPORTED_MODULE_0__.ListCarReportPage
    }
];
let ListCarReportPageRoutingModule = class ListCarReportPageRoutingModule {
};
ListCarReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListCarReportPageRoutingModule);



/***/ }),

/***/ 5413:
/*!***********************************************************!*\
  !*** ./src/app/list-car-report/list-car-report.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarReportPageModule": () => (/* binding */ ListCarReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _list_car_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-car-report-routing.module */ 7559);
/* harmony import */ var _list_car_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-car-report.page */ 8697);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let ListCarReportPageModule = class ListCarReportPageModule {
};
ListCarReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _list_car_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListCarReportPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_list_car_report_page__WEBPACK_IMPORTED_MODULE_1__.ListCarReportPage]
    })
], ListCarReportPageModule);



/***/ }),

/***/ 8697:
/*!*********************************************************!*\
  !*** ./src/app/list-car-report/list-car-report.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarReportPage": () => (/* binding */ ListCarReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_list_car_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-car-report.page.html */ 8354);
/* harmony import */ var _list_car_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-car-report.page.scss */ 9146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);







let ListCarReportPage = class ListCarReportPage {
    constructor(activatedRoute, gpsService, router) {
        this.activatedRoute = activatedRoute;
        this.gpsService = gpsService;
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
                this.car = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[91]._;
                this.modelGPS = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[3]._;
                this.deviceID = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[1]._;
                let options = {
                    car: this.car,
                    modelGPS: this.modelGPS,
                    deviceID: this.deviceID
                };
                this.dataListDevice.push(options);
            });
        }).catch(error => alert(error.message));
    }
    goToReportSearch(deviceID) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/car-report-search/' + deviceID], { queryParams: { deviceID: deviceID } });
        });
    }
    goToHome() {
        this.router.navigateByUrl('/home');
    }
};
ListCarReportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ListCarReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-car-report',
        template: _raw_loader_list_car_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_car_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListCarReportPage);



/***/ }),

/***/ 9146:
/*!***********************************************************!*\
  !*** ./src/app/list-car-report/list-car-report.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  color: #FFF150;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY2FyLXJlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxjQUFBO0FBQ0E7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7QUFDSiIsImZpbGUiOiJsaXN0LWNhci1yZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuY29sb3I6ICNGRkYxNTA7XG59XG5cbi5pY29uLWFycm93IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG59Il19 */");

/***/ }),

/***/ 8354:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-car-report/list-car-report.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goToHome()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"dataListDevice; else skeleton\">\n    <ion-searchbar placeholder='Busca tu vehículo' [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\" animanted>\n    </ion-searchbar>\n    <ion-list *ngFor=\"let dld of dataListDevice | filter:searchTerm\">\n\n      <!-- <ion-item (click)=\"addDirection(dld.lat,dld.lng, dld.car, dld.address, dld.valueCode, dld.speedKPH,dld.icon)\"> -->\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"document\"></ion-icon>\n        <ion-label style=\"color: rgb(32, 137, 178)\">{{dld.car}} <br />\n          <p style=\"color: grey\">\n            <!--  Modelo Equipo: {{dld.modelGPS}} <br> -->\n            <!-- Código Dispositivo: {{dld.deviceID}} -->\n          </p>\n        </ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"goToReportSearch(dld.deviceID)\">\n            <ion-icon slot=\"icon-only\" ios=\"options\" md=\"ellipsis-vertical\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <br />\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ng-template #skeleton>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_list-car-report_list-car-report_module_ts.js.map