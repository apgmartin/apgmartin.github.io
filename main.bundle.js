webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-me {\n\tpadding-top: 8rem;\n}\n\n.about-me-link {\n\tborder: 1px solid black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container about-me\">\n<!-- \t<div class=\"row no-gutters justify-content-center\">\n\t\t<div class=\"about-me-nav row col-12 col-md-6 \">\n\t\t\t<div class=\"col about-me-link\"></div>\n\t\t\t<div class=\"col about-me-link\"></div>\n\t\t</div>\n\t</div>\n\t<div class=\"row no-gutters justify-content-center\">\n\t\t<div class=\"about-me-nav row col-12 col-md-6 \">\n\t\t\t<div class=\"col about-me-link\"></div>\n\t\t\t<div class=\"col about-me-link\"></div>\n\t\t</div>\n\t</div> -->\n\t<div class=\"row justify-content-center\">\n\t\t<div class=\"about-me-nav row col-12\">\n\t\t\t<div class=\"col-12 col-md-6 about-me-link\">\n\t\t\t\t<h2 class=\"text-center\">About Me</h2>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-6 about-me-link\">\n\t\t\t\t<h2 class=\"text-center\">Skills</h2>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"about-me-nav row col-12\">\n\t\t\t<div class=\"col-12 col-md-6 about-me-link\">\n\t\t\t\t<h2 class=\"text-center\">Employment</h2>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-6 about-me-link\">\n\t\t\t\t<h2 class=\"text-center\">Contact</h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-me',
            template: __webpack_require__("../../../../../src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-header {\n\tposition: fixed;\n\tz-index: 20;\n\twidth: 100%;\n\t/*background: rgba(255,255,255,0.9);*/\n\tbackground: -webkit-gradient(linear,left top, left bottom,from(rgba(255,255,255,1)),color-stop(rgba(255,255,255,0.9)),color-stop(rgba(255,255,255,0.8)),color-stop(rgba(255,255,255,0.6)),to(rgba(255,255,255,0)));\n\tbackground: linear-gradient(rgba(255,255,255,1),rgba(255,255,255,0.9),rgba(255,255,255,0.8),rgba(255,255,255,0.6),rgba(255,255,255,0));\n}\n\napp-home {\n\tpadding-bottom: 2rem;\n}\n\napp-about-me {\n\tmargin-top: 2rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <div class=\"container\">\n  <app-skills-viewer></app-skills-viewer>\n</div> -->\n<app-footer class=\"d-md-none\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skills_viewer_skills_viewer_component__ = __webpack_require__("../../../../../src/app/skills-viewer/skills-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_about_me_home_about_me_home_component__ = __webpack_require__("../../../../../src/app/home/about-me-home/about-me-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_projects_home_projects_home_component__ = __webpack_require__("../../../../../src/app/home/projects-home/projects-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_me_about_me_component__ = __webpack_require__("../../../../../src/app/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'about-me',
        component: __WEBPACK_IMPORTED_MODULE_10__about_me_about_me_component__["a" /* AboutMeComponent */]
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__skills_viewer_skills_viewer_component__["a" /* SkillsViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_about_me_home_about_me_home_component__["a" /* AboutMeHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_projects_home_projects_home_component__["a" /* ProjectsHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_me_about_me_component__["a" /* AboutMeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_carousel__["b" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-container {\n\tposition: fixed;\n\tright: 0;\n\tleft: 0;\n\tbottom: 0;\n\tz-index: 1000;\n\tmargin-bottom: 0;\n\tborder-top: 1px dashed #000000;\n\tpadding-top: 1rem;\n\tpadding-bottom: 0.5rem;\n\tbackground-color: #FFFFFF;\n}\n\n.footer-icon {\n\theight: 2.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row footer-container justify-content-center\">\n\t<a href=\"#\" class=\"col text-center\">\n\t\t<img class=\"footer-icon\" src=\"assets/icons/svg/ic_mail_outline_black.svg\" height=\"50px\">\n\t</a>\n\t<a href=\"#\" class=\"col text-center\">\n\t\t<img class=\"footer-icon\" src=\"assets/icons/png/linkedin.png\">\n\t</a>\n\t<a href=\"#\" class=\"col text-center\">\n\t\t<img class=\"footer-icon\" src=\"assets/icons/png/github.png\">\n\t</a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1.5rem;\n}\n\n.title {\n\tfont-family: 'Architects Daughter', cursive;\n\tfont-size: 3rem;\n\tfont-weight: bold;\n\tletter-spacing: 0.1rem;\n\tmargin: 0;\n}\n\n.footer-icon {\n\theight: 3rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container header\">\n\t<div class=\"row justify-content-center\">\n\t\t<a routerLink=\"/\" class=\"nostyle\">\n\t\t\t<h1 class=\"col-12 text-center title\">ALI MARTIN</h1>\n\t\t</a>\n\t</div>\n\t<div class=\"row justify-content-center d-none d-md-flex\">\n\t\t<a href=\"#\" class=\"col text-center\">\n\t\t\t<img class=\"footer-icon\" src=\"assets/icons/svg/ic_mail_outline_black.svg\" height=\"50px\">\n\t\t</a>\n\t\t<a href=\"#\" class=\"col text-center\">\n\t\t\t<img class=\"footer-icon\" src=\"assets/icons/png/linkedin.png\">\n\t\t</a>\n\t\t<a href=\"#\" class=\"col text-center\">\n\t\t\t<img class=\"footer-icon\" src=\"assets/icons/png/github.png\">\n\t\t</a>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/about-me-home/about-me-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about-me-image {\n\tmargin: auto;\n\twidth: 30%;\n\theight: 30%;\n}\n\n.about-me-home h2 {\n\tfont-family: 'Architects Daughter', cursive;\n\ttext-decoration: none;\n\tcolor: #000000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/about-me-home/about-me-home.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"about-me\" class=\"nostyle\">\n\t<div class=\"container about-me-home\">\n\t\t<div class=\"row\">\n\t\t\t<h2 class=\"col-12 text-center\">About me</h2>\n\t\t\t<img src=\"assets/images/me.jpg\" alt=\"picture of me\" class=\"about-me-image\">\n\t\t</div>\n\t</div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/home/about-me-home/about-me-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeHomeComponent = /** @class */ (function () {
    function AboutMeHomeComponent() {
    }
    AboutMeHomeComponent.prototype.ngOnInit = function () {
    };
    AboutMeHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-me-home',
            template: __webpack_require__("../../../../../src/app/home/about-me-home/about-me-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/about-me-home/about-me-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeHomeComponent);
    return AboutMeHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-links-container {\n\tpadding-bottom: 4rem;\n\tbackground-color: #f5f5f5;\n\t/*z-index: -5;*/\n\tmargin-top: -1.5rem;\n}\n\napp-about-me-home, app-projects-home {\n\tz-index: 1;\n\tpadding-top: 2rem;\n\tpadding-bottom: 1rem;\n\t/*background-color: #f5f5f5;*/\n\t/*border-bottom: 1px solid black;*/\n}\n\n.down-arrow {\n\tbackground-color: red;\n\theight: 2rem;\n\twidth: 2rem;\n\tmargin: auto;\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n\tmargin-top: -1.5rem;\n\tmargin-bottom: 1rem;\n\tz-index: 5;\n}\n\nslide {\n\tborder-bottom: 0.3rem solid red;\n\tz-index: 5;\n}\n\nslide img {\n\tdisplay: block;\n\twidth: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<carousel>\n  <slide>\n    <img src=\"assets/images/cray7.jpg\" alt=\"First slide\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </slide>\n  <slide>\n    <img src=\"assets/images/fjal.jpg\" alt=\"Second slide\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </slide>\n  <slide>\n    <img src=\"assets/images/umea.jpg\" alt=\"Third slide\">\n    <div class=\"carousel-caption d-none d-md-block\">\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </div>\n  </slide>\n</carousel>\n\n<div class=\"down-arrow\"></div>\n\n<div class=\"container-fluid home-links-container\">\n\t<div class=\"row\">\n\t\t<app-about-me-home class=\"col-12 col-md-6\"></app-about-me-home>\n\t\t<app-projects-home class=\"col-12 col-md-6\"></app-projects-home>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_carousel__["a" /* CarouselConfig */], useValue: { interval: 5000, noPause: true, showIndicators: true } }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/projects-home/projects-home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".projects-home-image {\n\tmargin: auto;\n\twidth: 30%;\n\theight: 30%;\n}\n\n.projects-home h2 {\n\tfont-family: 'Architects Daughter', cursive;\n\ttext-decoration: none;\n\tcolor: #000000;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/projects-home/projects-home.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"projects\">\n\t<div class=\"container projects-home\">\n\t\t<div class=\"row\">\n\t\t\t<h2 class=\"col-12 text-center\">Projects</h2>\n\t\t\t<img src=\"assets/images/me.jpg\" alt=\"picture of me\" class=\"projects-home-image\">\n\t\t</div>\n\t</div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/home/projects-home/projects-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsHomeComponent = /** @class */ (function () {
    function ProjectsHomeComponent() {
    }
    ProjectsHomeComponent.prototype.ngOnInit = function () {
    };
    ProjectsHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects-home',
            template: __webpack_require__("../../../../../src/app/home/projects-home/projects-home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/projects-home/projects-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsHomeComponent);
    return ProjectsHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills-viewer/skill.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skill; });
var Skill = /** @class */ (function () {
    function Skill(title, imageUrl, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
    }
    return Skill;
}());



/***/ }),

/***/ "../../../../../src/app/skills-viewer/skills-viewer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".skills-viewer-links {\n\tborder-top: 1px solid #000000;\n\tborder-bottom: 1px solid #000000;\n}\n\n.skill-box {\n\tborder-left: 1px dotted #000000;\n\tborder-right: 1px dotted #000000;\n}\n\n.skill-box.selected {\n\tbackground-color: red;\n}\n\n.skill-icon {\n\twidth: 100%;\n}\n\n.skills-viewer-content {\n\tpadding-top: 1rem;\n\tpadding-bottom: 3rem;\n}\n\n.skill-title {\n\tfont-size: 1.5rem;\n}\n\n.skill-description {\n\tfont-size: 0.9rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills-viewer/skills-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<h2 class=\"col-12 text-center skills-viewer-title\">\n\t\tSkills\n\t</h2>\n</div>\n\n<div class=\"row justify-content-center skills-viewer-links\">\n\t<div class=\"col-2 col-md-1 skill-box\" [ngClass]=\"{'selected': (selectedSkill === skill)}\" (click)=\"setSelectedSkill(skill)\" *ngFor=\"let skill of skills\">\n\t\t<img class=\"skill-icon\" src=\"{{skill.imageUrl}}\">\t\n\t</div>\n</div>\n<div class=\"row skills-viewer-content justify-content-center\">\n\t<h3 class=\"col-12 text-center skill-title\">{{selectedSkill.title}}</h3>\n\t<p class=\"col-11 skill-description\">{{selectedSkill.description}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/skills-viewer/skills-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__skill_model__ = __webpack_require__("../../../../../src/app/skills-viewer/skill.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsViewerComponent = /** @class */ (function () {
    function SkillsViewerComponent() {
    }
    SkillsViewerComponent.prototype.ngOnInit = function () {
        this.skills = [
            new __WEBPACK_IMPORTED_MODULE_1__skill_model__["a" /* Skill */]("Web Development", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with web technologies from React to Angular!<br><br>I have a lot of experience working with web technologies from React to Angular!<br><br>I have a lot of experience working with web technologies from React to Angular!<br><br>I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!I have a lot of experience working with web technologies from React to Angular!"),
            new __WEBPACK_IMPORTED_MODULE_1__skill_model__["a" /* Skill */]("Java Springboot APIs", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with Java from springboot to mayhemJava!"),
            new __WEBPACK_IMPORTED_MODULE_1__skill_model__["a" /* Skill */]("Certified Scrum Master", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with scrum methodologies and I am a certified scrum master!"),
            new __WEBPACK_IMPORTED_MODULE_1__skill_model__["a" /* Skill */]("Web Development", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with web technologies from React to Angular!"),
            new __WEBPACK_IMPORTED_MODULE_1__skill_model__["a" /* Skill */]("Web Development", "assets/icons/svg/ic_menu_black.svg", "I have a lot of experience working with web technologies from React to Angular!")
        ];
        this.selectedSkill = this.skills[0];
    };
    SkillsViewerComponent.prototype.setSelectedSkill = function (skill) {
        this.selectedSkill = skill;
    };
    SkillsViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skills-viewer',
            template: __webpack_require__("../../../../../src/app/skills-viewer/skills-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills-viewer/skills-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillsViewerComponent);
    return SkillsViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map