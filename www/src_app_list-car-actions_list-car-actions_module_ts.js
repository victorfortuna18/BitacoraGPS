(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_list-car-actions_list-car-actions_module_ts"],{

/***/ 4644:
/*!****************************************************!*\
  !*** ./src/app/actioncarr/actioncarr.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActioncarrComponent": () => (/* binding */ ActioncarrComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_actioncarr_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./actioncarr.component.html */ 4875);
/* harmony import */ var _actioncarr_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actioncarr.component.scss */ 6266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sms/ngx */ 3535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _api_gps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/gps.service */ 6663);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);









let ActioncarrComponent = class ActioncarrComponent {
    constructor(sms, popoverController, loadingCtrl, toastCtrl, alertCtrl, gpsService, callNumber) {
        this.sms = sms;
        this.popoverController = popoverController;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.gpsService = gpsService;
        this.callNumber = callNumber;
        this.dataSMS = {
            modelGPS: '',
            simNumber: '',
            car: ''
        };
        this.dataMessage = {
            message: ''
        };
    }
    ngOnInit() {
        this.dataSMS;
    }
    sendSMS(action, modelGPS, simNumber) {
        const model = 'TK';
        let stopContador = parseInt(localStorage.getItem('stopContador'));
        let resumeContador = parseInt(localStorage.getItem('resumeContador'));
        let armContador = parseInt(localStorage.getItem('armContador'));
        let monitorContador = parseInt(localStorage.getItem('monitorContador'));
        if (modelGPS.startsWith(model)) {
            switch (action) {
                case 'stop':
                    let stopNumber = stopContador + 1;
                    localStorage.setItem('stopContador', String(stopNumber));
                    if (parseInt(localStorage.getItem('stopContador')) <= 3) {
                        this.presentAlertConfirm(simNumber, 'stop123456');
                    }
                    else {
                        this.showError();
                    }
                    break;
                case 'resume':
                    let resumeNumber = resumeContador + 1;
                    localStorage.setItem('resumeContador', String(resumeNumber));
                    if (parseInt(localStorage.getItem('resumeContador')) <= 3) {
                        this.presentAlertConfirm(simNumber, 'resume123456');
                    }
                    else {
                        this.showError();
                    }
                    break;
                case 'arm':
                    let armNumber = armContador + 1;
                    localStorage.setItem('armContador', String(armNumber));
                    if (parseInt(localStorage.getItem('armContador')) <= 3) {
                        this.presentAlertConfirm(simNumber, 'arm123456');
                    }
                    else {
                        this.showError();
                    }
                    break;
                /* case 'disarm':
                  this.sms.send(simNumber, 'disarm123456');
                  break; */
                case 'monitor':
                    let monitorNumber = monitorContador + 1;
                    localStorage.setItem('monitorContador', String(monitorNumber));
                    if (parseInt(localStorage.getItem('monitorContador')) <= 3) {
                        this.presentAlertConfirm(simNumber, 'monitor123456');
                    }
                    else {
                        this.showError();
                    }
                    break;
                /*  case 'Tracker':
                   this.sms.send(simNumber, 'tracker123456'); */
                default:
                    this.sms.send(simNumber, 'hola');
                    break;
            }
        }
        else {
            switch (action) {
                case 'stop':
                    this.sms.send(simNumber, 'AT+GTOUT=gv300,1,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$');
                    break;
                case 'resume':
                    this.sms.send(simNumber, 'AT+GTOUT=gv300,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$');
                    break;
                case 'arm':
                    this.sms.send(simNumber, 'AT+GTOUT=gv300,0,,,1,0,0,0,0,0,0,,0,0,,,,FFFF$');
                    break;
                case 'disarm':
                    this.sms.send(simNumber, 'AT+GTOUT=gv300,0,,,0,0,0,0,0,0,0,,0,0,,,,FFFF$');
                    break;
                case 'monitor':
                    this.sms.send(simNumber, 'monitor');
                    break;
                case 'Tracker':
                    this.sms.send(simNumber, 'tracker');
                default:
                    this.sms.send(simNumber, 'hola');
                    break;
            }
        }
    }
    dismiss() {
        this.popoverController.dismiss();
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /* this.loading = this.loadingCtrl.create({
              content: 'Autenticando',
            });
        
            this.loading.present(); */
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Enviando Mensaje...',
                duration: 1000,
            });
            yield this.loading.present();
            /*  const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!'); */
        });
    }
    showError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: '.my-custom-classAlert',
                header: 'Ha superado el limite de intentos, el siguiente mes se habilitará nuevamente la opción.',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    toastFunction(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (response == 'ok') {
                const toast = yield this.toastCtrl.create({
                    color: 'dark',
                    duration: 2000,
                    message: 'Mensaje Enviado',
                    position: 'top',
                });
                yield toast.present();
            }
            else {
                const toast = yield this.toastCtrl.create({
                    color: 'dark',
                    duration: 2000,
                    message: 'Mensaje No Enviado',
                    position: 'top',
                });
                yield toast.present();
            }
        });
    }
    presentAlertConfirm(simNumber, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: '¿Está seguro de realizar esta acción?',
                message: '<strong>Tener cuidado en realizar esta acción.</strong>!!!',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Enviar',
                        handler: () => {
                            console.log(simNumber);
                            console.log(message);
                            console.log('+593' + simNumber.substring(1));
                            this.showLoader();
                            this.gpsService.sendSMS(JSON.stringify({
                                message: message,
                                number: '+593' + simNumber.substring(1),
                                validation: 'b1t4c0ra2022'
                            })).then((res) => {
                                if (res.data.errorMessage == null) {
                                    this.toastFunction('ok');
                                    if (message == 'monitor123456') {
                                        console.log(simNumber);
                                        this.callNumber.callNumber(simNumber, true)
                                            .then(res => console.log('Launched dialer!', res))
                                            .catch(err => console.log('Error launching dialer', err));
                                    }
                                    // this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
                                }
                                else {
                                    this.toastFunction('error');
                                }
                                console.log(res);
                            }).catch(error => console.log(error.message));
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ActioncarrComponent.ctorParameters = () => [
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__.SMS },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _api_gps_service__WEBPACK_IMPORTED_MODULE_3__.GpsService },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__.CallNumber }
];
ActioncarrComponent.propDecorators = {
    dataSMS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }]
};
ActioncarrComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-actioncarr',
        template: _raw_loader_actioncarr_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_actioncarr_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ActioncarrComponent);



/***/ }),

/***/ 1453:
/*!*********************************************************************!*\
  !*** ./src/app/list-car-actions/list-car-actions-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarActionsPageRoutingModule": () => (/* binding */ ListCarActionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _list_car_actions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-car-actions.page */ 4706);




const routes = [
    {
        path: '',
        component: _list_car_actions_page__WEBPACK_IMPORTED_MODULE_0__.ListCarActionsPage
    }
];
let ListCarActionsPageRoutingModule = class ListCarActionsPageRoutingModule {
};
ListCarActionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListCarActionsPageRoutingModule);



/***/ }),

/***/ 6091:
/*!*************************************************************!*\
  !*** ./src/app/list-car-actions/list-car-actions.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarActionsPageModule": () => (/* binding */ ListCarActionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _list_car_actions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-car-actions-routing.module */ 1453);
/* harmony import */ var _list_car_actions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-car-actions.page */ 4706);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let ListCarActionsPageModule = class ListCarActionsPageModule {
};
ListCarActionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _list_car_actions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListCarActionsPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_list_car_actions_page__WEBPACK_IMPORTED_MODULE_1__.ListCarActionsPage]
    })
], ListCarActionsPageModule);



/***/ }),

/***/ 4706:
/*!***********************************************************!*\
  !*** ./src/app/list-car-actions/list-car-actions.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCarActionsPage": () => (/* binding */ ListCarActionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_list_car_actions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./list-car-actions.page.html */ 9023);
/* harmony import */ var _list_car_actions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-car-actions.page.scss */ 8397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _actioncarr_actioncarr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actioncarr/actioncarr.component */ 4644);










let ListCarActionsPage = class ListCarActionsPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let dataSMS = {
                modelGPS: modelGPS,
                simNumber: simNumber,
                car: car
            };
            const popover = yield this.popoverController.create({
                component: _actioncarr_actioncarr_component__WEBPACK_IMPORTED_MODULE_5__.ActioncarrComponent,
                cssClass: 'pop-over-style',
                translucent: true,
                animated: true,
                componentProps: { dataSMS: dataSMS }
            });
            yield popover.present();
        });
    }
    goToHome() {
        this.router.navigateByUrl('/home');
    }
};
ListCarActionsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_4__.NativeGeocoder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController }
];
ListCarActionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-list-car-actions',
        template: _raw_loader_list_car_actions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_list_car_actions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ListCarActionsPage);



/***/ }),

/***/ 6266:
/*!******************************************************!*\
  !*** ./src/app/actioncarr/actioncarr.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".my-custom-class {\n  --background: #222;\n}\n\n.custom-ion-label {\n  color: grey;\n  padding: 5px;\n}\n\nion-icon {\n  color: #FFF150;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbmNhcnIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUFDRDs7QUFFQTtFQUNBLGNBQUE7QUFDQSIsImZpbGUiOiJhY3Rpb25jYXJyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWN1c3RvbS1jbGFzcyB7XG4gIC0tYmFja2dyb3VuZDogIzIyMjtcbn1cblxuLmN1c3RvbS1pb24tbGFiZWwge1xuIGNvbG9yOmdyZXk7XG4gcGFkZGluZzogNXB4O1xufVxuXG5pb24taWNvbiB7XG5jb2xvcjogI0ZGRjE1MDtcbn0iXX0= */");

/***/ }),

/***/ 8397:
/*!*************************************************************!*\
  !*** ./src/app/list-car-actions/list-car-actions.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #6B9727;\n}\n\n.my-custom-class {\n  --background: #222;\n  width: 600px;\n}\n\nion-icon {\n  color: #FFF150;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtY2FyLWFjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0EsY0FBQTtBQUNBOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJsaXN0LWNhci1hY3Rpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG59XG5cbi5teS1jdXN0b20tY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gIHdpZHRoOiA2MDBweDtcbn1cblxuaW9uLWljb24ge1xuY29sb3I6ICNGRkYxNTA7XG59XG5cbi5pY29uLWFycm93IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ 4875:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/actioncarr/actioncarr.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <ion-list>\n    <ion-list-header>\n      <ion-item>\n        <ion-icon (click)=\"dismiss()\" slot=\"end\" name=\"close\" class=\"icon-arrow\"></ion-icon>\n        <ion-label>{{dataSMS.car}}</ion-label>\n      </ion-item>\n    </ion-list-header>\n    <ion-item (click)=\"sendSMS('stop',dataSMS.modelGPS,dataSMS.simNumber)\">\n      <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n      <ion-label class=\"custom-ion-label\">Detener motor vehículo</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sendSMS('resume',dataSMS.modelGPS,dataSMS.simNumber)\">\n      <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n      <ion-label class=\"custom-ion-label\">Enceder motor vehículos</ion-label>\n    </ion-item>\n    <ion-item (click)=\"sendSMS('arm',dataSMS.modelGPS,dataSMS.simNumber)\">\n      <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n      <ion-label class=\"custom-ion-label\">Abrir Puerta</ion-label>\n    </ion-item>\n    <!--  <ion-item (click)=\"sendSMS('disarmm',dataSMS.modelGPS,dataSMS.simNumber)\">\n    <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n    <ion-label class=\"custom-ion-label\">Cerrar Puerta</ion-label>\n  </ion-item> -->\n    <ion-item (click)=\"sendSMS('monitor',dataSMS.modelGPS,dataSMS.simNumber)\">\n      <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n      <ion-label class=\"custom-ion-label\">Activar microfono</ion-label>\n    </ion-item>\n    <!-- <ion-item (click)=\"sendSMS('Tracker',dataSMS.modelGPS,dataSMS.simNumber)\">\n     <ion-icon slot=\"start\" name=\"car-sport\"></ion-icon>\n    <ion-label class=\"custom-ion-label\">Desactivar microfono</ion-label>\n  </ion-item> -->\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ 9023:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-car-actions/list-car-actions.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goToHome()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div *ngIf=\"dataListDevice; else skeleton\">\n    <ion-searchbar placeholder='Busca tu vehículo' [(ngModel)]=\"searchTerm\" showCancelButton=\"focus\" animanted>\n    </ion-searchbar>\n    <ion-list *ngFor=\"let dld of dataListDevice | filter:searchTerm\">\n\n      <!-- <ion-item (click)=\"addDirection(dld.lat,dld.lng, dld.car, dld.address, dld.valueCode, dld.speedKPH,dld.icon)\"> -->\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\n        <ion-label style=\"color: rgb(32, 137, 178)\">{{dld.car}} <br />\n          <p style=\"color: grey\">\n            <!--  Modelo Equipo: {{dld.modelGPS}} <br> -->\n            <!-- Teléfono GPS: {{dld.simNumber}} -->\n          </p>\n        </ion-label>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"addDirection(dld.modelGPS,dld.simNumber,dld.car)\">\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n        <br />\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <ng-template #skeleton>\n\n    <ion-list>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-skeleton-text animated style=\"width: 27px; height: 27px\" slot=\"start\"></ion-skeleton-text>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </ng-template>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_list-car-actions_list-car-actions_module_ts.js.map