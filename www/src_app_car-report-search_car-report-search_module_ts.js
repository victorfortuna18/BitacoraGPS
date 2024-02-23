(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_car-report-search_car-report-search_module_ts"],{

/***/ 2989:
/*!***********************************************************************!*\
  !*** ./src/app/car-report-search/car-report-search-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReportSearchPageRoutingModule": () => (/* binding */ CarReportSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _car_report_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-report-search.page */ 8689);




const routes = [
    {
        path: '',
        component: _car_report_search_page__WEBPACK_IMPORTED_MODULE_0__.CarReportSearchPage
    }
];
let CarReportSearchPageRoutingModule = class CarReportSearchPageRoutingModule {
};
CarReportSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CarReportSearchPageRoutingModule);



/***/ }),

/***/ 3367:
/*!***************************************************************!*\
  !*** ./src/app/car-report-search/car-report-search.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReportSearchPageModule": () => (/* binding */ CarReportSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _car_report_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-report-search-routing.module */ 2989);
/* harmony import */ var _car_report_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-report-search.page */ 8689);







let CarReportSearchPageModule = class CarReportSearchPageModule {
};
CarReportSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _car_report_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarReportSearchPageRoutingModule
        ],
        declarations: [_car_report_search_page__WEBPACK_IMPORTED_MODULE_1__.CarReportSearchPage]
    })
], CarReportSearchPageModule);



/***/ }),

/***/ 8689:
/*!*************************************************************!*\
  !*** ./src/app/car-report-search/car-report-search.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarReportSearchPage": () => (/* binding */ CarReportSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_car_report_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./car-report-search.page.html */ 9504);
/* harmony import */ var _car_report_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-report-search.page.scss */ 2876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let CarReportSearchPage = class CarReportSearchPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.folder = 'Reporte de Movimientos';
        this.infoReport = {
            dateFrom: '',
            dateTo: '',
            limit: '',
            deviceID: '',
            dateFromI: '',
            dateFromF: ''
        };
        this.numberRegister = ['10', '50', '100', '500', '1000'];
        this.route.paramMap.subscribe(params => {
            this.deviceID = params;
            console.log(this.deviceID.params.id);
        });
    }
    ngOnInit() {
    }
    goToListCarReport() {
        this.router.navigateByUrl('/list-car-report/Consulta de Movimientos');
    }
    getValue(event, data) {
        if (data == 'from') {
            this.dateFrom = event.detail.value;
        }
        else {
            this.dateTos = event.detail.value;
        }
        console.log(this.dateFrom);
        console.log(this.dateTos);
    }
    sendInfoReport() {
        this.infoReport.deviceID = this.deviceID.params.id;
        if (this.infoReport.dateFrom == '' || this.infoReport.dateFromI == '' || this.infoReport.dateFromF == '') {
            alert('¡Por favor ingrese los campos requeridos!');
        }
        else {
            this.router.navigate(['/car-report'], { state: this.infoReport });
        }
    }
};
CarReportSearchPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CarReportSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-car-report-search',
        template: _raw_loader_car_report_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_car_report_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CarReportSearchPage);



/***/ }),

/***/ 2876:
/*!***************************************************************!*\
  !*** ./src/app/car-report-search/car-report-search.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #6B9727;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\nion-icon {\n  color: #FFF150;\n}\n\nion-button {\n  --background: #6B9727;\n  --border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZXBvcnQtc2VhcmNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7QUFDRiIsImZpbGUiOiJjYXItcmVwb3J0LXNlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xufVxuXG4uaWNvbi1hcnJvdyB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jdXN0b20taW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xufVxuXG5pb24taWNvbiB7XG5jb2xvcjogI0ZGRjE1MDtcbn1cblxuaW9uLWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ 9504:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/car-report-search/car-report-search.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-icon (click)=\"goToListCarReport()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n    <ion-title class=\"custom-ion-title\">Reporte de Movimiento Diario</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)=\"sendInfoReport()\">\n    <ion-list>\n      <ion-list-header>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"calendar\"></ion-icon>\n          <ion-label>Consultar movimientos</ion-label>\n        </ion-item>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Seleccionar fecha:</ion-label>\n        <ion-datetime [(ngModel)]=\"infoReport.dateFrom\" name=\"dateFrom\" displayFormat=\"YYYY MM DD\"\n          display-timezone=\"utc\">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Seleccionar hora inicio:</ion-label>\n        <ion-datetime [(ngModel)]=\"infoReport.dateFromI\" name=\"dateFrom\" displayFormat=\"H:mm\" display-timezone=\"utc\">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>Seleccionar hora fin:</ion-label>\n        <ion-datetime [(ngModel)]=\"infoReport.dateFromF\" name=\"dateFrom\" displayFormat=\"H:mm\" display-timezone=\"utc\">\n        </ion-datetime>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>Buscar hasta el:</ion-label>\n        <ion-datetime [(ngModel)]=\"infoReport.dateTo\" name=\"dateTo\" display-timezone=\"utc\">\n        </ion-datetime>\n      </ion-item> -->\n      <!-- <ion-item>\n        <ion-label>Número de registros</ion-label>\n        <ion-select name=\"limit\" [(ngModel)]=\"infoReport.limit\">\n          <ion-select-option *ngFor=\"let limit of numberRegister\" [value]=\"limit\">{{limit}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item> -->\n    </ion-list>\n\n    <!--  <ion-card>\n      <ion-card-content>\n        La busqueda se realiza a partir de las 00:00 horas de la fecha seleccionada.\n      </ion-card-content>\n    </ion-card> -->\n\n\n    <div align=\"center\">\n      <ion-button shape=\"round\" type=\"submit\">Consultar</ion-button>\n    </div>\n\n  </form>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_car-report-search_car-report-search_module_ts.js.map