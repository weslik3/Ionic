webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraFotosPageModule", function() { return MostraFotosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mostra_fotos__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MostraFotosPageModule = /** @class */ (function () {
    function MostraFotosPageModule() {
    }
    MostraFotosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mostra_fotos__["a" /* MostraFotosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mostra_fotos__["a" /* MostraFotosPage */]),
            ],
        })
    ], MostraFotosPageModule);
    return MostraFotosPageModule;
}());

//# sourceMappingURL=mostra-fotos.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MostraFotosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MostraFotosPage = /** @class */ (function () {
    function MostraFotosPage(navCtrl, navParams, httpRequest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpRequest = httpRequest;
        this.UrlImgRandom = new Array();
        this.indexObjJson = 0;
    }
    MostraFotosPage.prototype.ionViewDidLoad = function () {
        this.proximaFotoBuscar();
    };
    MostraFotosPage.prototype.proximaFoto = function () {
        if (this.UrlImgRandom.length == this.indexObjJson + 1) {
            this.proximaFotoBuscar();
        }
        else {
            this.indexObjJson = this.indexObjJson + 1;
        }
    };
    MostraFotosPage.prototype.imagemAnterior = function () {
        if (this.indexObjJson > 0) {
            this.indexObjJson = this.indexObjJson - 1;
        }
    };
    MostraFotosPage.prototype.proximaFotoBuscar = function () {
        var _this = this;
        this.httpRequest.getFotoRandomica().subscribe(function (data) {
            //Aplicando o retorno
            console.log(data.toString);
            console.log(data.url);
            //this.UrlImgRandom = data.url;
            if (_this.UrlImgRandom.length != 0) {
                _this.indexObjJson = _this.indexObjJson + 1;
            }
            _this.UrlImgRandom.push(data.url);
        }, function (error) {
            console.log("ERRO: " + error);
        });
    };
    MostraFotosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: "page-mostra-fotos",template:/*ion-inline-start:"C:\Ionic\src\pages\mostra-fotos\mostra-fotos.html"*/'<!--\n  Generated template for the MostraFotosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar> <ion-title>Mostra Fotos</ion-title> </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-2></ion-col>\n      <ion-col col-4>\n        <button ion-button outline (click)="imagemAnterior()">\n          Anterior\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-button outline (click)="proximaFoto()">Próximo</button>\n      </ion-col>\n    </ion-row>\n    <ion-row align-self-center>\n      <ion-img width="200" height="300" src="{{UrlImgRandom[indexObjJson]}}"></ion-img>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\src\pages\mostra-fotos\mostra-fotos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_http_request_http_request__["a" /* HttpRequestProvider */]])
    ], MostraFotosPage);
    return MostraFotosPage;
}());

//# sourceMappingURL=mostra-fotos.js.map

/***/ })

});
//# sourceMappingURL=0.js.map