(self["webpackChunkBitacoraGPS"] = self["webpackChunkBitacoraGPS"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 6663:
/*!************************************!*\
  !*** ./src/app/api/gps.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GpsService": () => (/* binding */ GpsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);




let GpsService = class GpsService {
    constructor(http, httpNative) {
        this.http = http;
        this.httpNative = httpNative;
        this.apiURL = 'http://bitacoragps.com:8080/track/Service';
        //public apiSMS = 'http://34.218.164.47:3000/'
        this.apiSMS = 'http://23.239.12.79:3000/';
        this.headers = {
            // Specifying that we will send XML.
            "Content-type": 'text/xml;charset="utf-8"',
            // Specifying that we will except XML.
            "Accept": "text/xml",
        };
        // Setting the data serializer as "utf8" is very important so that
        // the HTTP will know that the body will not be a JSON object, but
        // a unicoded string which is the XML.
        this.httpNative.setDataSerializer("utf8");
    }
    postLogin(body) {
        return this.httpNative.post(this.apiURL, body, this.headers);
    }
    postDeviceID(body) {
        return this.httpNative.post(this.apiURL, body, this.headers);
    }
    postDeviceInformation(body) {
        return this.httpNative.post(this.apiURL, body, this.headers);
    }
    postEventData(body) {
        return this.httpNative.post(this.apiURL, body, this.headers);
    }
    xmlStringToJson(xml) {
        // Convert the XML string to an XML Document.
        const oParser = new DOMParser();
        const oDOM = oParser.parseFromString(xml, 'application/xml');
        // Convert the XML Document to a JSON Object.
        return this.xmlToJson(oDOM);
    }
    /**
     * REF: https://davidwalsh.name/convert-xml-json
     */
    xmlToJson(xml) {
        // Create the return object
        var obj = {};
        if (xml.nodeType == 1) {
            // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj['@attributes'] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
        else if (xml.nodeType == 3) {
            // text
            obj = xml.nodeValue;
        }
        // do children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof obj[nodeName] == 'undefined') {
                    obj[nodeName] = this.xmlToJson(item);
                }
                else {
                    if (typeof obj[nodeName].push == 'undefined') {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xmlToJson(item));
                }
            }
        }
        return obj;
    }
    sendSMS(body) {
        return this.httpNative.post(this.apiSMS + 'sms', body, {
            "Content-type": 'application/json'
        });
    }
};
GpsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP }
];
GpsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], GpsService);



/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_folder_folder_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./folder/folder.module */ 3412)).then(m => m.FolderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'list-car/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_list-car_list-car_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/list-car/list-car.module */ 3999)).then(m => m.ListCarPageModule)
    },
    {
        path: 'last-position/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_googlemapsWayPoints_googlemapsWayPoints_component_ts"), __webpack_require__.e("src_app_pages_last-position_last-position_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/last-position/last-position.module */ 7825)).then(m => m.LastPositionPageModule)
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule)
    },
    {
        path: 'last-position-car/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_googlemapsWayPoints_googlemapsWayPoints_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_last-position-car_last-position-car_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./last-position-car/last-position-car.module */ 3830)).then(m => m.LastPositionCarPageModule)
    },
    {
        path: 'list-car-actions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_list-car-actions_list-car-actions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list-car-actions/list-car-actions.module */ 6091)).then(m => m.ListCarActionsPageModule)
    },
    {
        path: 'list-car-report/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_list-car-report_list-car-report_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list-car-report/list-car-report.module */ 5413)).then(m => m.ListCarReportPageModule)
    },
    {
        path: 'car-report',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_car-report_car-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./car-report/car-report.module */ 9813)).then(m => m.CarReportPageModule)
    },
    {
        path: 'car-report-search/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_car-report-search_car-report-search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./car-report-search/car-report-search.module */ 3367)).then(m => m.CarReportSearchPageModule)
    },
    {
        path: 'list-car-actions-custom/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_list-car-actions-custom_list-car-actions-custom_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./list-car-actions-custom/list-car-actions-custom.module */ 2209)).then(m => m.ListCarActionsCustomPageModule)
    },
    {
        path: 'custom-message',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_custom-message_custom-message_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./custom-message/custom-message.module */ 7353)).then(m => m.CustomMessagePageModule)
    }
];
/* const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  }
]; */
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _pages_login_login_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.page */ 3058);





let AppComponent = class AppComponent {
    /* public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders']; */
    constructor() {
        this.rootPage = _pages_login_login_page__WEBPACK_IMPORTED_MODULE_2__.LoginPage;
        this.appPages = [
            { title: 'Lista de vehículos', url: '/list-car/Lista de Vehículos', icon: 'car' },
            { title: 'Últimas posiciones', url: '/last-position/Últimas Posiciones', icon: 'map' },
            { title: 'Cerrar sesión', url: '/login', icon: 'exit' },
            { title: 'Ultimas posiciones', url: '/last-position-car/Ultimas posiciones', icon: 'exit' }
            /* { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
            { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
            { title: 'Spam', url: '/folder/Spam', icon: 'warning' }, */
        ];
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/gps.service */ 6663);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ 3046);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ 8589);
/* harmony import */ var _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sms/ngx */ 3535);
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ 4687);
/* harmony import */ var _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/network/ngx */ 2623);














let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy },
            _api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService,
            _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_3__.NativeGeocoder,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__.HTTP,
            _ionic_native_sms_ngx__WEBPACK_IMPORTED_MODULE_5__.SMS,
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__.CallNumber,
            _awesome_cordova_plugins_network_ngx__WEBPACK_IMPORTED_MODULE_7__.Network
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 4364:
/*!****************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglemapsComponent": () => (/* binding */ GooglemapsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_googlemaps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./googlemaps.component.html */ 5581);
/* harmony import */ var _googlemaps_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlemaps.component.scss */ 5490);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _googlemaps_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googlemaps.service */ 4254);








const { Geolocation } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__.Plugins;
let GooglemapsComponent = class GooglemapsComponent {
    constructor(renderer, document, googlemapsService, modalController) {
        this.renderer = renderer;
        this.document = document;
        this.googlemapsService = googlemapsService;
        this.modalController = modalController;
        this.position = {
            lat: -2.89811,
            lng: -78.999581499999
        };
        this.label = {
            titulo: 'ubicacion',
            subtitulo: 'mi ubicacion',
            valueCode: 'Detenido',
            speedKPH: '0,0',
            icon: '',
            timeGPS: 'timeGPS'
        };
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
        let iconFinal;
        if (label.icon == '4x4' || label.icon == 'bltruck' || label.icon == 'bus' || label.icon == 'excav' ||
            label.icon == 'grnbike' || label.icon == 'grua' || label.icon == 'h100' || label.icon == 'medi' ||
            label.icon == 'moto' || label.icon == 'policia' || label.icon == 'rcar' || label.icon == 'remolque' ||
            label.icon == 'taxi' || label.icon == 'yeltruck') {
            iconFinal = 'assets/img/' + label.icon + '.png';
        }
        else {
            iconFinal = '';
        }
        let latLng = new google.maps.LatLng(position.lat, position.lng);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            clickableIcons: false
        };
        this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
        this.marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            draggable: false,
            icon: iconFinal
        });
        //this.clickHandleEvent();
        this.infowindow = new google.maps.InfoWindow();
        if (label.titulo.length) {
            this.addMarker(position);
            this.marker.addListener("click", () => {
                this.setInfoWindow(this.marker, label.titulo, label.subtitulo, label.valueCode, label.speedKPH, label.timeGPS);
            });
        }
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
    setInfoWindow(marker, titulo, subtitulo, valueCode, speedKPH, timeGPS) {
        const contentString = '<div id="contentInsideMap">' +
            '<div>' +
            '</div>' +
            '<p style="font-weight: bold; margin-botton: 5px; color:black;">' +
            '(' + valueCode + ')' + titulo + '</p>' +
            '<div id="bodyContent">' +
            '<p class="normal m-0" style="color:grey;">' +
            '(' + speedKPH + 'km/h)' + subtitulo + '</p>' +
            '<p class="normal m-0" style="color:grey;">' + timeGPS + '</p>' +
            '</div>' +
            '</div>';
        this.infowindow.setContent(contentString);
        this.infowindow.open(this.map, marker);
    }
    dismiss() {
        this.modalController.dismiss();
    }
    myLocation() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.addMarker(this.position);
        });
    }
};
GooglemapsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2 },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] },
    { type: _googlemaps_service__WEBPACK_IMPORTED_MODULE_3__.GooglemapsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
GooglemapsComponent.propDecorators = {
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    divMap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['divMap', { static: true },] }]
};
GooglemapsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'googlemaps',
        template: _raw_loader_googlemaps_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_googlemaps_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GooglemapsComponent);



/***/ }),

/***/ 4254:
/*!**************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.service.ts ***!
  \**************************************************/
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

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 1021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/gps.service */ 6663);
/* harmony import */ var src_app_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/googlemaps/googlemaps.component */ 4364);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xml2js */ 9277);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_4__);









let LoginPage = class LoginPage {
    constructor(navCtrl, router, gpsService, loadingCtrl, toastCtrl, alertCtrl, modalController, menuCtrl) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.gpsService = gpsService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.menuCtrl = menuCtrl;
        this.loginData = {
            account: '',
            user: '',
            password: '',
        };
        this.menuCtrl.enable(false);
        if (localStorage.getItem('token')) {
            this.router.navigateByUrl('/home');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
    ngOnInit() { }
    /* ngAfterContentInit(): void {
      this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8
        });
    } */
    doLogin() {
        localStorage.setItem('account', this.loginData.account);
        localStorage.setItem('user', this.loginData.user);
        localStorage.setItem('password', this.loginData.password);
        if (this.loginData.user == '') {
            localStorage.setItem('admin', '1');
        }
        else {
            localStorage.setItem('admin', '0');
        }
        const rpt = 'rpt';
        if (this.loginData.user.startsWith(rpt)) {
            localStorage.setItem('rpt', '1');
        }
        else {
            localStorage.setItem('rpt', '0');
        }
        let body = '<GTSRequest command="version">' +
            ' <Authorization account="' +
            this.loginData.account +
            '" user="' +
            this.loginData.user +
            '" password="' +
            this.loginData.password +
            '"/>' +
            '</GTSRequest>';
        this.showLoader();
        this.gpsService.postLogin(body)
            .then((res) => {
            const parser = new xml2js__WEBPACK_IMPORTED_MODULE_4__.Parser({ strict: false, trim: true });
            parser.parseString(res.data, (err, result) => {
                this.xml = result;
                if (this.xml.GTSRESPONSE.$.RESULT == 'error') {
                    this.loading.dismiss();
                    this.showError();
                }
                else {
                    this.loading.dismiss();
                    localStorage.setItem('token', '111');
                    return this.router.navigateByUrl('/home');
                }
            });
        }).catch(error => alert('¡Al parecer tenemos inconvenientes, por favor revisar su conexión a internet o intentar más tarde.!'));
    }
    showLoader() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /* this.loading = this.loadingCtrl.create({
              content: 'Autenticando',
            });
        
            this.loading.present(); */
            this.loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                message: 'Autenticando...',
                duration: 2000,
            });
            yield this.loading.present();
            /*  const { role, data } = await loading.onDidDismiss();
            console.log('Loading dismissed!'); */
        });
    }
    showError() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            /*  let alert = this.alertCtrl.create({
              subTitle: 'El usuario o contraseña son invalidas.',
              buttons: ['OK'],
            });
            alert.present(); */
            const alert = yield this.alertCtrl.create({
                cssClass: '.my-custom-classAlert',
                header: 'El usuario o contraseña son invalidas.',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    /* presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom',
        dismissOnPageChange: true,
      });
  
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
  
      toast.present();
    } */
    addDirection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let position = {
                lat: -0.10522833333333333,
                lng: -78.49175
            };
            const modalAdd = yield this.modalController.create({
                component: src_app_googlemaps_googlemaps_component__WEBPACK_IMPORTED_MODULE_3__.GooglemapsComponent,
                mode: 'ios',
                swipeToClose: true,
                componentProps: { position: position }
            });
            yield modalAdd.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_api_gps_service__WEBPACK_IMPORTED_MODULE_2__.GpsService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController }
];
LoginPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['mapElement', { static: true },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ 5490:
/*!******************************************************!*\
  !*** ./src/app/googlemaps/googlemaps.component.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".map {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n\n.miubicacion {\n  position: fixed;\n  bottom: 0px;\n  background: #ffd740;\n}\n\n.aceptar {\n  position: fixed;\n  top: 50px;\n  right: 5px;\n  background: #80d894;\n}\n\n.search {\n  position: fixed;\n  top: 45px;\n  left: 0px;\n}\n\n.normal {\n  color: gray;\n}\n\n.new-background-color {\n  --background: #6B9727;\n}\n\n.custom-ion-title {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2dsZW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQztFQUNHLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0FBRUo7O0FBQ0E7RUFDRSxZQUFBO0FBRUYiLCJmaWxlIjoiZ29vZ2xlbWFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuIC5taXViaWNhY2lvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmQ3NDA7XG59XG5cbi5hY2VwdGFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MHB4O1xuICAgIHJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZDogIzgwZDg5NDtcbn1cblxuLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiAwcHg7XG59IFxuXG4ubm9ybWFsIHtcbiAgICBjb2xvcjogZ3JheTtcbn1cbi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG59XG5cbi5jdXN0b20taW9uLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ 8781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".my-custom-class {\n  --background: #222;\n  --spinner-color: #fff;\n  color: #fff;\n}\n\n.my-custom-classAlert {\n  --background: #e5e5e5;\n}\n\n.map {\n  height: 100%;\n}\n\nion-button {\n  --background: #6B9727;\n  --border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxXQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtBQUFGOztBQUdBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBQUFGIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1jdXN0b20tY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6ICMyMjI7XG4gIC0tc3Bpbm5lci1jb2xvcjogI2ZmZjtcblxuICBjb2xvcjogI2ZmZjtcbn1cblxuLm15LWN1c3RvbS1jbGFzc0FsZXJ0IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4ubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tYnV0dG9ue1xuICAtLWJhY2tncm91bmQ6ICM2Qjk3Mjc7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <!-- <ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note> -->\n          <div align=\"center\">\n            <img src=\"assets/img/logoLogin.png\" alt=\"\" padding-left=\"\" style=\"height: 60%; width: 80%\" />\n          </div>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <br />\n            <br />\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              routerLinkActive=\"selected\" padding>\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label style=\"font-size: larger\">{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <!-- <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list> -->\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\" [swipeGesture]=\"false\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>");

/***/ }),

/***/ 5581:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/googlemaps/googlemaps.component.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"new-background-color\">\n  <ion-toolbar class=\"new-background-color\">\n    <ion-title class=\"custom-ion-title\">\n      Mi ubicación\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)=\"dismiss()\">\n        <span ion-text color=\"primary\" showWhen=\"ios\">Cerrar</span>\n        <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div #divMap class=\"map\">\n  </div>\n\n  <ion-chip class=\"miubicacion\" (click)=\"myLocation()\">\n    <ion-label>\n      Centrar posición\n    </ion-label>\n    <ion-icon name=\"locate\"></ion-icon>\n  </ion-chip>\n\n  <!-- <ion-chip class=\"aceptar\" (click)=\"aceptar()\">\n    <ion-label class=\"normal\">Aceptar</ion-label> \n    <ion-icon name=\"checkmark\"></ion-icon> \n  </ion-chip> -->\n</ion-content>");

/***/ }),

/***/ 1021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding style=\"background-color: #840017\">\n  <form (submit)=\"doLogin()\">\n    <br />\n    <br />\n    <br />\n    <br />\n    <br />\n    <img src=\"assets/img/logoLogin.png\" alt=\"\" />\n\n    <p align=\"center\" style=\"color: grey; font-size: large\">\n      Ingrese los datos de su cuenta para iniciar\n    </p>\n    <br />\n    <br />\n    <ion-item>\n      <ion-label position=\"floating\">Cuenta</ion-label>\n      <ion-input [(ngModel)]=\"loginData.account\" name=\"account\" type=\"text\" placeholder=\"Cuenta\"></ion-input>\n    </ion-item>\n    <br />\n    <ion-item>\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input [(ngModel)]=\"loginData.user\" name=\"user\" type=\"text\" placeholder=\"Usuario\"></ion-input>\n    </ion-item>\n    <br />\n\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input [(ngModel)]=\"loginData.password\" name=\"password\" type=\"password\" placeholder=\"Contraseña\"></ion-input>\n    </ion-item>\n    <br />\n    <div align=\"center\">\n      <ion-button shape=\"round\" type=\"submit\">Entrar</ion-button>\n      <!-- <ion-button (click)=\"addDirection()\">Mapa</ion-button> -->\n    </div>\n\n\n  </form>\n  <!-- <div #mapElement class=\"map\"></div> -->\n</ion-content>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map