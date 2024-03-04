(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 8102);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sms/ngx */ 3535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);







let HomePage = class HomePage {
    constructor(router, sms, menuCtrl, loadingCtrl, toastCtrl) {
        this.router = router;
        this.sms = sms;
        this.menuCtrl = menuCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.admin = localStorage.getItem('admin');
        this.rpt = localStorage.getItem('rpt');
        localStorage.setItem('stopContador', '0');
        localStorage.setItem('resumeContador', '0');
        localStorage.setItem('armContador', '0');
        localStorage.setItem('monitorContador', '0');
    }
    goToListDevice() {
        this.router.navigateByUrl('/list-car/Lista de Vehículos');
    }
    goToLastPosition() {
        this.router.navigateByUrl('/last-position-car/Últimas Posiciones');
    }
    goToLogin() {
        localStorage.clear();
        this.router.navigateByUrl('/login');
    }
    sendSms() {
        this.sms.send('0983490060', 'Hello world!');
    }
    goToCarAction() {
        this.router.navigateByUrl('/list-car-actions/Acciones de Vehículo');
    }
    goToCustomMessage() {
        this.router.navigateByUrl('/list-car-actions-custom/Mensaje Personalizado');
    }
    goToListReport() {
        this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
    }
    reload() {
        this.showLoader();
        localStorage.setItem('stopContador', '0');
        localStorage.setItem('resumeContador', '0');
        localStorage.setItem('armContador', '0');
        localStorage.setItem('monitorContador', '0');
        this.toastFunction();
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            /* this.loading = this.loadingCtrl.create({
              content: 'Autenticando',
            });
        
            this.loading.present(); */
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Restaurando valores...',
                duration: 800,
            });
            yield this.loading.present();
            /*  const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!'); */
        });
    }
    toastFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                color: 'dark',
                duration: 2000,
                message: 'Valores restaurados'
            });
            yield toast.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_2__.SMS },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 7603:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-icon {\n  color: #FFF150;\n}\n\np {\n  color: #9B9B9B;\n  font-size: larger;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\n.custom-ion-title {\n  color: white;\n}\n\nion-button {\n  --background: #6B9727;\n  --border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsY0FBQTtBQUNBOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQUVGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xuY29sb3I6ICNGRkYxNTA7XG59XG5wIHtcbiAgICBjb2xvcjogIzlCOUI5QjtcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzZCOTcyNztcbn1cblxuLmN1c3RvbS1pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1idXR0b257XG4gIC0tYmFja2dyb3VuZDogIzZCOTcyNztcbiAgLS1ib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ 8102:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n    <ion-toolbar class=\"new-background-color\">\n        <ion-title class=\"custom-ion-title\">Principal</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-row>\n        <ion-col (click)=\"goToListDevice()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"car\" style=\"width: 120px;height: 120px\">\n\n                </ion-icon>\n\n            </div>\n            <p align=\"center\">Lista de Vehículos</p>\n\n        </ion-col>\n        <ion-col (click)=\"goToLastPosition()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"map\" style=\"width: 120px;height: 120px\">\n\n                </ion-icon>\n            </div>\n            <p align=\"center\">Últimas Posiciones</p>\n        </ion-col>\n\n\n    </ion-row>\n    <ion-row>\n        <ion-col *ngIf=\"rpt == 0\" (click)=\"goToCarAction()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"mail\" style=\"width: 120px;height: 120px\">\n                </ion-icon>\n            </div>\n            <p align=\"center\">Acciones de Vehículos</p>\n        </ion-col>\n        <ion-col (click)=\"goToListReport()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"document\" style=\"width: 120px;height: 120px\">\n                </ion-icon>\n            </div>\n            <p align=\"center\">Consulta de Movimientos</p>\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col *ngIf=\"admin == 1\" (click)=\"goToCustomMessage()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"mail\" style=\"width: 120px;height: 120px\">\n                </ion-icon>\n            </div>\n            <p align=\"center\">Mensaje Personalizado</p>\n        </ion-col>\n        <ion-col (click)=\"goToLogin()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"exit\" style=\"width: 120px;height: 120px\">\n                </ion-icon>\n            </div>\n            <p align=\"center\">Cerrar sesión</p>\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col *ngIf=\"admin == 1\" (click)=\"reload()\">\n            <div align=\"center\">\n                <br>\n                <ion-icon slot=\"start\" name=\"document\" style=\"width: 120px;height: 120px\">\n                </ion-icon>\n            </div>\n            <p align=\"center\">Reestablecer opciones</p>\n        </ion-col>\n    </ion-row>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map