(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["src_app_pages_last-position_last-position_module_ts"],{

/***/ 5963:
/*!*********************************************************************!*\
  !*** ./src/app/pages/last-position/last-position-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionPageRoutingModule": () => (/* binding */ LastPositionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _last_position_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./last-position.page */ 8042);




const routes = [
    {
        path: '',
        component: _last_position_page__WEBPACK_IMPORTED_MODULE_0__.LastPositionPage
    }
];
let LastPositionPageRoutingModule = class LastPositionPageRoutingModule {
};
LastPositionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LastPositionPageRoutingModule);



/***/ }),

/***/ 7825:
/*!*************************************************************!*\
  !*** ./src/app/pages/last-position/last-position.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionPageModule": () => (/* binding */ LastPositionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _last_position_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./last-position-routing.module */ 5963);
/* harmony import */ var _last_position_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last-position.page */ 8042);
/* harmony import */ var src_app_googlemapsWayPoints_googlemapsWayPoints_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/googlemapsWayPoints/googlemapsWayPoints.component */ 7834);








let LastPositionPageModule = class LastPositionPageModule {
};
LastPositionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _last_position_routing_module__WEBPACK_IMPORTED_MODULE_0__.LastPositionPageRoutingModule
        ],
        declarations: [_last_position_page__WEBPACK_IMPORTED_MODULE_1__.LastPositionPage, src_app_googlemapsWayPoints_googlemapsWayPoints_component__WEBPACK_IMPORTED_MODULE_2__.GooglemapsComponent]
    })
], LastPositionPageModule);



/***/ }),

/***/ 8042:
/*!***********************************************************!*\
  !*** ./src/app/pages/last-position/last-position.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastPositionPage": () => (/* binding */ LastPositionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 5353);
/* harmony import */ var _raw_loader_last_position_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./last-position.page.html */ 3581);
/* harmony import */ var _last_position_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./last-position.page.scss */ 8348);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let LastPositionPage = class LastPositionPage {
    constructor(activatedRoute, router, menuCtrl) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(false);
    }
    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }
    goToHome() {
        this.router.navigateByUrl('/home');
    }
};
LastPositionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
LastPositionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-last-position',
        template: _raw_loader_last_position_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_last_position_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LastPositionPage);



/***/ }),

/***/ 8348:
/*!*************************************************************!*\
  !*** ./src/app/pages/last-position/last-position.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".new-background-color {\n  --background: #6B9727;\n}\n\n.icon-arrow {\n  padding-left: 5px;\n  height: 30px;\n  width: 30px;\n  color: white;\n}\n\n.custom-ion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhc3QtcG9zaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUYiLCJmaWxlIjoibGFzdC1wb3NpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjNkI5NzI3O1xufVxuXG5cbi5pY29uLWFycm93IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmN1c3RvbS1pb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ 3581:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/last-position/last-position.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n     <ion-icon (click)=\"goToHome()\" slot=\"start\" name=\"arrow-back\" class=\"icon-arrow\"></ion-icon>\n      <ion-title class=\"custom-ion-title\">{{ folder }}</ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <googlemapsWayPoints></googlemapsWayPoints>  \n\n <!--  <img src=\"assets/img/mapa.jpeg\" alt=\"\" /> -->\n  <!--   <div id=\"container\">\n    <strong class=\"capitalize\">{{ folder }}</strong>\n    <p>\n      Explore\n      <a\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n        href=\"https://ionicframework.com/docs/components\"\n        >UI Components</a\n      >\n    </p>\n  </div> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_last-position_last-position_module_ts.js.map