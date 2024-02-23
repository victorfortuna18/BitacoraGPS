(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_list-car-actions-custom_list-car-actions-custom_module_ts"],{

/***/ 4473:
/*!***********************************************************************************!*\
  !*** ./src/app/list-car-actions-custom/list-car-actions-custom-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarActionsCustomPageRoutingModule": () => (/* binding */ ListCarActionsCustomPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _list_car_actions_custom_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-car-actions-custom.page */ 9367);




const routes = [
    {
        path: '',
        component: _list_car_actions_custom_page__WEBPACK_IMPORTED_MODULE_0__.ListCarActionsCustomPage
    }
];
let ListCarActionsCustomPageRoutingModule = class ListCarActionsCustomPageRoutingModule {
};
ListCarActionsCustomPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListCarActionsCustomPageRoutingModule);



/***/ }),

/***/ 2209:
/*!***************************************************************************!*\
  !*** ./src/app/list-car-actions-custom/list-car-actions-custom.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarActionsCustomPageModule": () => (/* binding */ ListCarActionsCustomPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _list_car_actions_custom_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-car-actions-custom-routing.module */ 4473);
/* harmony import */ var _list_car_actions_custom_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-car-actions-custom.page */ 9367);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let ListCarActionsCustomPageModule = class ListCarActionsCustomPageModule {
};
ListCarActionsCustomPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _list_car_actions_custom_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListCarActionsCustomPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_list_car_actions_custom_page__WEBPACK_IMPORTED_MODULE_1__.ListCarActionsCustomPage]
    })
], ListCarActionsCustomPageModule);



/***/ }),

/***/ 9367:
/*!*************************************************************************!*\
  !*** ./src/app/list-car-actions-custom/list-car-actions-custom.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarActionsCustomPage": () => (/* binding */ ListCarActionsCustomPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_car_actions_custom_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-car-actions-custom.page.html */ 6438);
/* harmony import */ var _list_car_actions_custom_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-car-actions-custom.page.scss */ 8105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let ListCarActionsCustomPage = class ListCarActionsCustomPage {
    constructor(activatedRoute, gpsService, nativeGeocoder, modalController, router, popoverController) {
        this.activatedRoute = activatedRoute;
        this.gpsService = gpsService;
        this.nativeGeocoder = nativeGeocoder;
        this.modalController = modalController;
        this.router = router;
        this.popoverController = popoverController;
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
                this.simNumber = this.informationDevice.GTSRESPONSE.RECORD[0].FIELD[30]._;
                let options = {
                    car: this.car,
                    modelGPS: this.modelGPS,
                    simNumber: this.simNumber
                };
                this.dataListDevice.push(options);
            });
        }).catch(error => alert(error.message));
    }
    addDirection(modelGPS, simNumber, car) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/custom-message'], { state: simNumber });
        });
    }
    goToHome() {
        this.router.navigateByUrl('/home');
    }
};
ListCarActionsCustomPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController }
];
ListCarActionsCustomPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-list-car-actions-custom',
        template: _raw_loader_list_car_actions_custom_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_car_actions_custom_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListCarActionsCustomPage);



/***/ }),

/***/ 8105:
/*!***************************************************************************!*\
  !*** ./src/app/list-car-actions-custom/list-car-actions-custom.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #6B9727;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\nion-icon {\n  color: #FFF150;\n}\n\nion-button {\n  --background: #6B9727;\n  --border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY2FyLWFjdGlvbnMtY3VzdG9tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJsaXN0LWNhci1hY3Rpb25zLWN1c3RvbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xufVxuXG4uaWNvbi1hcnJvdyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20taW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xufVxuXG5pb24taWNvbiB7XG5jb2xvcjogI0ZGRjE1MDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ 6438:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-car-actions-custom/list-car-actions-custom.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goToHome()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"dataListDevice; else skeleton\">\n    <ion-searchbar placeholder='Busca tu vehículo' [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\" animanted>\n    </ion-searchbar>\n    <ion-list *ngFor=\"let dld of dataListDevice | filter:searchTerm\">\n\n      <!-- <ion-item (click)=\"addDirection(dld.lat,dld.lng, dld.car, dld.address, dld.valueCode, dld.speedKPH,dld.icon)\"> -->\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\n        <ion-label style=\"color: rgb(32, 137, 178)\">{{dld.car}} <br />\n          <p style=\"color: grey\">\n            <!-- Modelo Equipo: {{dld.modelGPS}} <br> -->\n            <!-- Teléfono GPS: {{dld.simNumber}} -->\n          </p>\n        </ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"addDirection(dld.modelGPS,dld.simNumber,dld.car)\">\n            <ion-icon slot=\"icon-only\" ios=\"mail\" md=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <br />\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ng-template #skeleton>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_list-car-actions-custom_list-car-actions-custom_module_ts.js.map