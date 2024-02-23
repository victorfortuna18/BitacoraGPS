(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_custom-message_custom-message_module_ts"],{

/***/ 4776:
/*!*****************************************************************!*\
  !*** ./src/app/custom-message/custom-message-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMessagePageRoutingModule": () => (/* binding */ CustomMessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _custom_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-message.page */ 5050);




const routes = [
    {
        path: '',
        component: _custom_message_page__WEBPACK_IMPORTED_MODULE_0__.CustomMessagePage
    }
];
let CustomMessagePageRoutingModule = class CustomMessagePageRoutingModule {
};
CustomMessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomMessagePageRoutingModule);



/***/ }),

/***/ 7353:
/*!*********************************************************!*\
  !*** ./src/app/custom-message/custom-message.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMessagePageModule": () => (/* binding */ CustomMessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _custom_message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-message-routing.module */ 4776);
/* harmony import */ var _custom_message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-message.page */ 5050);







let CustomMessagePageModule = class CustomMessagePageModule {
};
CustomMessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _custom_message_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomMessagePageRoutingModule
        ],
        declarations: [_custom_message_page__WEBPACK_IMPORTED_MODULE_1__.CustomMessagePage]
    })
], CustomMessagePageModule);



/***/ }),

/***/ 5050:
/*!*******************************************************!*\
  !*** ./src/app/custom-message/custom-message.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMessagePage": () => (/* binding */ CustomMessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_custom_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./custom-message.page.html */ 1924);
/* harmony import */ var _custom_message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-message.page.scss */ 4652);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/gps.service */ 6663);







let CustomMessagePage = class CustomMessagePage {
    constructor(router, loadingCtrl, toastCtrl, alertCtrl, gpsService) {
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.gpsService = gpsService;
        this.dataMessage = {
            message: ''
        };
        console.log(this.router.getCurrentNavigation().extras.state);
        this.numberPhone = this.router.getCurrentNavigation().extras.state;
    }
    ngOnInit() {
    }
    goToListCarCustomMessage() {
        this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
    }
    sendMessage() {
        if (this.dataMessage.message == '') {
            this.showError();
        }
        else {
            this.presentAlertConfirm();
        }
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: '.my-custom-classAlert',
                header: 'El campo mensaje es obligatario',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    toastFunction(response) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (response == 'ok') {
                const toast = yield this.toastCtrl.create({
                    color: 'dark',
                    duration: 2000,
                    message: 'Mensaje Enviado'
                });
                yield toast.present();
            }
            else {
                const toast = yield this.toastCtrl.create({
                    color: 'dark',
                    duration: 2000,
                    message: 'Mensaje No Enviado'
                });
                yield toast.present();
            }
        });
    }
    presentAlertConfirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: '¿Está seguro de enviar el mensaje?',
                message: '<strong>Revise el texto ingresado</strong>!!!',
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
                            console.log(this.numberPhone);
                            console.log(this.dataMessage.message);
                            this.showLoader();
                            this.gpsService.sendSMS(JSON.stringify({
                                message: this.dataMessage.message,
                                number: '+593' + this.numberPhone.substring(1),
                                validation: 'b1t4c0ra2022'
                            })).then((res) => {
                                if (res.data.errorMessage == null) {
                                    this.toastFunction('ok');
                                    this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
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
CustomMessagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService }
];
CustomMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-custom-message',
        template: _raw_loader_custom_message_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_custom_message_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomMessagePage);



/***/ }),

/***/ 4652:
/*!*********************************************************!*\
  !*** ./src/app/custom-message/custom-message.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #6B9727;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\nion-icon {\n  color: #FFF150;\n}\n\nion-button {\n  --background: #6B9727;\n  --border-radius: 20px;\n}\n\n.my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n\n.my-custom-classAlert {\n  --background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1tZXNzYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGIiwiZmlsZSI6ImN1c3RvbS1tZXNzYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG59XG5cbi5pY29uLWFycm93IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG59XG5cbmlvbi1pY29uIHtcbmNvbG9yOiAjRkZGMTUwO1xufVxuXG5pb24tYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuXG4ubXktY3VzdG9tLWNsYXNzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAtLXNwaW5uZXItY29sb3I6ICNmZmY7XG5cbiAgY29sb3I6ICNmZmY7XG59XG5cbi5teS1jdXN0b20tY2xhc3NBbGVydCB7XG4gIC0tYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 1924:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/custom-message/custom-message.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goToListCarCustomMessage()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">Mensaje Personalizado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      Por favor ingrese el mensaje que desea enviar.\n    </ion-card-content>\n  </ion-card>\n  <form (submit)=\"sendMessage()\">\n    <ion-item>\n      <ion-label position=\"stacked\">Mensaje</ion-label>\n      <ion-textarea [(ngModel)]=\"dataMessage.message\" name=\"message\"\n        style=\"border-radius:10px;border: 2px solid #6B9727;\">\n      </ion-textarea>\n    </ion-item>\n    <br>\n    <div align=\"center\">\n      <ion-button shape=\"round\" type=\"submit\">Enviar Mensaje</ion-button>\n    </div>\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_custom-message_custom-message_module_ts.js.map