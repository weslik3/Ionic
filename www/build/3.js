webpackJsonp([3],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaFotosPageModule", function() { return ListaFotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_fotos__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListaFotosPageModule = /** @class */ (function () {
    function ListaFotosPageModule() {
    }
    ListaFotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lista_fotos__["a" /* ListaFotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lista_fotos__["a" /* ListaFotosPage */]),
            ],
        })
    ], ListaFotosPageModule);
    return ListaFotosPageModule;
}());

//# sourceMappingURL=lista-fotos.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListaFotosPage = /** @class */ (function () {
    function ListaFotosPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
        this.objJSON = [];
    }
    ListaFotosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.httpRequest.getFotosLista().subscribe(function (data) {
            // tratando retorno JSON
            var obj = data;
            console.log("obj: ");
            console.log(obj);
            var objJSONFotoLista = JSON.parse(obj._body);
            for (var i = 0; i < 50; i++) {
                var model = objJSONFotoLista[i];
                model.image = "https://picsum.photos/200/200?image=" + model.id;
                _this.objJSON.push(model);
            }
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    ListaFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-lista-fotos",template:/*ion-inline-start:"C:\Ionic\src\pages\lista-fotos\lista-fotos.html"*/'<ion-header>\n  <ion-navbar> <ion-title>Lista Fotos</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list *ngFor="let obj of objJSON">\n    <ion-item>\n      <ion-avatar item-start> <img src="{{ obj.image }}" /> </ion-avatar>\n      <h2>{{ obj.author }}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\src\pages\lista-fotos\lista-fotos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], ListaFotosPage);
    return ListaFotosPage;
}());

//# sourceMappingURL=lista-fotos.js.map

/***/ })

});
//# sourceMappingURL=3.js.map