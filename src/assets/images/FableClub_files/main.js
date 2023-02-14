"use strict";
(self["webpackChunkfable_club"] = self["webpackChunkfable_club"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/homepage.component */ 4877);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    { path: "", component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'fable-club';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage/homepage.component */ 4877);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainpage/mainpage.component */ 9335);
/* harmony import */ var _mainpage_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mainpage/banner/banner.component */ 7348);
/* harmony import */ var _mainpage_card_l2_card_l2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainpage/card-l2/card-l2.component */ 563);
/* harmony import */ var _mainpage_card_l3_card_l3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mainpage/card-l3/card-l3.component */ 6449);
/* harmony import */ var _mainpage_card_l4_card_l4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mainpage/card-l4/card-l4.component */ 6221);
/* harmony import */ var _mainpage_cards_c3_cards_c3_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mainpage/cards-c3/cards-c3.component */ 7159);
/* harmony import */ var _mainpage_cards_c2_cards_c2_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainpage/cards-c2/cards-c2.component */ 402);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__.MainpageComponent,
        _mainpage_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent,
        _mainpage_card_l2_card_l2_component__WEBPACK_IMPORTED_MODULE_6__.CardL2Component,
        _mainpage_card_l3_card_l3_component__WEBPACK_IMPORTED_MODULE_7__.CardL3Component,
        _mainpage_card_l4_card_l4_component__WEBPACK_IMPORTED_MODULE_8__.CardL4Component,
        _mainpage_cards_c3_cards_c3_component__WEBPACK_IMPORTED_MODULE_9__.CardsC3Component,
        _mainpage_cards_c2_cards_c2_component__WEBPACK_IMPORTED_MODULE_10__.CardsC2Component], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 88, vars: 0, consts: [[1, "col-12", "advertisement"], [1, "container", "d-flex", "py-2", "justify-content-between"], [1, "left-block"], ["href", "#", 1, "p-2"], [1, "bi", "bi-geo-alt"], [1, "px-2"], [1, "bi", "bi-truck"], [1, "center-block"], [1, "d-flex"], [1, "discount", "px-2"], [1, "discount-description", "px-2"], [1, "right-block"], [1, "d-flex", "me-5"], [1, "bi", "bi-chevron-down", "ps-1", "fs-10"], [1, "col-12", "header", "py-2"], [1, "container"], [1, "row", "py-3"], [1, "col-7", "left-menu-block"], [1, "row"], [1, "col-2"], ["src", "../../assets/images/Fable-Club.svg", "alt", ""], [1, "col-10", "d-flex", "flex-row", "justify-content-around", "align-items-center", "left-menu"], ["href", "", 1, "p-2", "ps-5", "highlight"], ["href", "", 1, "p-2", "highlight"], [1, "bi", "bi-chevron-down", "fs-10", "ps-1"], [1, "col-5", "d-flex", "flex-row", "justify-content-around", "align-items-center", "right-menu-block"], [1, "search-box", "border", "rounded-pill"], ["type", "text", 1, "p-2"], [1, "user-icons", "fs-25"], [1, "btn-group"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "dropdown-toggle"], [1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#", 1, "highlight"], [1, "bi", "bi-person", "p-2", "ps-3"], ["href", "#", 1, "highlight", "d-inline-block", "position-relative"], [1, "d-inline-block", "position-absolute", "fs-10", "text-white", "border", "rounded-pill", "px-1", "right-0", 2, "background", "var(--e-global-color-primary)", "right", "0px", "top", "-5px"], [1, "bi", "bi-heart", "p-2", "ps-3"], [1, "bi", "bi-cart", "p-2", "ps-3"], [1, "fs-14", "ps-3"], [1, "bi", "bi-currency-rupee"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Find a Store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3)(9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "15% off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "$50+ when you buy online & pick up in-store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "INR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "div", 17)(30, "div", 18)(31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21)(34, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 23)(37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23)(42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 23)(47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25)(54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 28)(57, "div", 29)(58, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 31)(61, "li")(62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li")(65, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li")(68, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li")(73, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 36)(78, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 36)(82, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, styles: [".header[_ngcontent-%COMP%]   .right-menu-block[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.header[_ngcontent-%COMP%]   .left-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    position: relative;\n    display: inline-block;\n\n    font-size: 14px;\n    font-weight: 700;\n    text-transform: capitalize;\n    line-height: 40px;\n    \n    text-decoration: none;\n    color: var(--e-global-color-dark);\n}\n\na.highlight[_ngcontent-%COMP%]:hover, a.highlight[_ngcontent-%COMP%]:active {\n    color: var(--e-global-color-primary) !important;\n    text-decoration: underline !important;\n}\n\n.header[_ngcontent-%COMP%]   .left-meni[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after {\n    content: '';\n\n    width: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 1px;\n\n    border-width: 0 0 1px;\n    border-style: solid;\n}\n\n.header[_ngcontent-%COMP%] {\n    border-bottom: 2px dotted var(--e-global-color-border);\n}\n\n.advertisement[_ngcontent-%COMP%] {\n    background-color: var( --e-global-color-accent );\n    \n    color: #fff;\n}\n\n.advertisement[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 24px;\n}\n\n.advertisement[_ngcontent-%COMP%]   .left-block[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: var(--e-global-color-highlight) !important;\n    transition: ease-in-out 0.1s;\n}\n\n.advertisement[_ngcontent-%COMP%]   .center-block[_ngcontent-%COMP%] {\n    font-size: 14px;\n    font-weight: 100;\n    line-height: 24px;   \n}\n\n.advertisement[_ngcontent-%COMP%]   .center-block[_ngcontent-%COMP%]   .discount[_ngcontent-%COMP%]{\n    background-color: var(--e-global-color-primary);\n    border-radius: 25px;\n    \n    font-size: 0.875rem;\n    \n}\n\n.advertisement[_ngcontent-%COMP%]   .right-block[_ngcontent-%COMP%]{\n    font-weight: 700;\n    font-size: 0.875rem;\n}\n\n.search-box[_ngcontent-%COMP%]{\n    width: 200px !important;\n    height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7O0lBRXJCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLGlDQUFpQztBQUNyQzs7QUFHQTtJQUNJLCtDQUErQztJQUMvQyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxXQUFXOztJQUVYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7O0lBRVgscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpREFBaUQ7SUFDakQsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwrQ0FBK0M7SUFDL0MsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBOzs7R0FHRyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIgLnJpZ2h0LW1lbnUtYmxvY2sge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlciAubGVmdC1tZW51IGF7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIC8qIHBhZGRpbmc6IDY2cHggMjVweCA0MHB4IDI1cHg7ICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1lLWdsb2JhbC1jb2xvci1kYXJrKTtcbn1cblxuXG5hLmhpZ2hsaWdodDpob3ZlciwgYS5oaWdobGlnaHQ6YWN0aXZlIHtcbiAgICBjb2xvcjogdmFyKC0tZS1nbG9iYWwtY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIC5sZWZ0LW1lbmkgYTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAxcHg7XG5cbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGRvdHRlZCB2YXIoLS1lLWdsb2JhbC1jb2xvci1ib3JkZXIpO1xufVxuXG4uYWR2ZXJ0aXNlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLWUtZ2xvYmFsLWNvbG9yLWFjY2VudCApO1xuICAgIC8qIGhlaWdodDogMzBweDsgKi9cbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmFkdmVydGlzZW1lbnQgLmxlZnQtYmxvY2sgYXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmFkdmVydGlzZW1lbnQgLmxlZnQtYmxvY2sgYTpob3ZlciB7XG4gICAgY29sb3I6IHZhcigtLWUtZ2xvYmFsLWNvbG9yLWhpZ2hsaWdodCkgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjFzO1xufVxuXG4uYWR2ZXJ0aXNlbWVudCAuY2VudGVyLWJsb2NrIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBsaW5lLWhlaWdodDogMjRweDsgICBcbn1cblxuLmFkdmVydGlzZW1lbnQgLmNlbnRlci1ibG9jayAuZGlzY291bnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZS1nbG9iYWwtY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAvKiBmb250LXdlaWdodDogNzAwOyAqL1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgLyogcGFkZGluZzogMnB4OyAqL1xufVxuXG5cbi5hZHZlcnRpc2VtZW50IC5yaWdodC1ibG9ja3tcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG59XG5cbi5zZWFyY2gtYm94e1xuICAgIHdpZHRoOiAyMDBweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDBweDtcbn1cblxuLyogLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59ICovIl19 */"] });


/***/ }),

/***/ 4877:
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 3482);
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mainpage/mainpage.component */ 9335);



class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(); };
HomepageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 2, vars: 0, template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "app-mainpage");
    } }, dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_1__.MainpageComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lcGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7348:
/*!*****************************************************!*\
  !*** ./src/app/mainpage/banner/banner.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 14, vars: 0, consts: [[1, "slider-page"], [1, "container", "h-100"], [1, "h-100", "d-flex", "flex-row", "align-items-center", "justify-content-between", "overflow-hidden"], [1, "left", "mb-5"], [1, "text-orange", "fs-14", 2, "letter-spacing", "2px", "font-weight", "700"], [1, "fs-64", "mt-4"], [1, "fs-64", "m-0"], [1, "fs-16", "mt-4", "mb-5"], [1, "right", "me-5", "mt-5", "pe-5", "pt-5"], ["src", "assets/images/rev_home2_9.png", "alt", "", 1, "overflow-hidden"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAST & FREE SHIPPING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Indestructible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dog Toys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Good for aggressive chewers!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".slider-page[_ngcontent-%COMP%]{\n    background: var(--e-global-color-rama); \n    height: 720px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLGFBQWE7QUFDakIiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyLXBhZ2V7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZS1nbG9iYWwtY29sb3ItcmFtYSk7IFxuICAgIGhlaWdodDogNzIwcHg7XG59Il19 */"] });


/***/ }),

/***/ 563:
/*!*******************************************************!*\
  !*** ./src/app/mainpage/card-l2/card-l2.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardL2Component": () => (/* binding */ CardL2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*", "*"];
class CardL2Component {
    constructor() { }
    ngOnInit() {
    }
}
CardL2Component.ɵfac = function CardL2Component_Factory(t) { return new (t || CardL2Component)(); };
CardL2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardL2Component, selectors: [["app-card-l2"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "col-12"]], template: function CardL2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 0, ["[selector]", "img", "style", "width: 100%; max-height: 200px"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWwyLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6449:
/*!*******************************************************!*\
  !*** ./src/app/mainpage/card-l3/card-l3.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardL3Component": () => (/* binding */ CardL3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*", "*"];
class CardL3Component {
    constructor() { }
    ngOnInit() {
    }
}
CardL3Component.ɵfac = function CardL3Component_Factory(t) { return new (t || CardL3Component)(); };
CardL3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardL3Component, selectors: [["app-card-l3"]], ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "col-12"]], template: function CardL3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 0, ["[selector]", "img", "style", "width: 100%; max-height: 260px"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWwzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6221:
/*!*******************************************************!*\
  !*** ./src/app/mainpage/card-l4/card-l4.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardL4Component": () => (/* binding */ CardL4Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CardL4Component {
    constructor() { }
    ngOnInit() {
    }
}
CardL4Component.ɵfac = function CardL4Component_Factory(t) { return new (t || CardL4Component)(); };
CardL4Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardL4Component, selectors: [["app-card-l4"]], decls: 2, vars: 0, template: function CardL4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "card-l4 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLWw0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 402:
/*!*********************************************************!*\
  !*** ./src/app/mainpage/cards-c2/cards-c2.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsC2Component": () => (/* binding */ CardsC2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _card_l3_card_l3_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card-l3/card-l3.component */ 6449);


class CardsC2Component {
    constructor() { }
    ngOnInit() {
    }
}
CardsC2Component.ɵfac = function CardsC2Component_Factory(t) { return new (t || CardsC2Component)(); };
CardsC2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardsC2Component, selectors: [["app-cards-c2"]], decls: 31, vars: 0, consts: [[1, "container"], [1, "mt-5", "d-flex", "justify-content-between"], [1, "border", "rounded-1", 2, "background-image", "url('assets/images/h1-banner4.jpg')", "height", "300px", "width", "640px"], [1, "d-flex", "p-5", "flex-column", "text-white"], [1, "mt-3"], [1, "fs-20"], [1, "d-flex", "flex-row"], [1, "fs-64"], [1, "d-flex", "flex-column", "py-3", "pt-1"], [1, "fs-20", "font-weight-700"], [1, "px-3", 2, "background-image", "url('assets/images/h1-banner5.png')", "background-repeat", "no-repeat"], [1, "fs-16", "mt-3", "text-orange"], [1, "letter-spacing-1"], [1, "border", "rounded-1", 2, "background-image", "url('assets/images/h1-banner6.jpg')", "height", "300px", "width", "640px"], [1, "d-flex", "p-5", "flex-column", "text-white", 2, "max-width", "50%"], [1, "fs-16", "text-light", "letter-spacing-1"], [1, "fs-48", "font-weight-700", "mb-1"], [1, "mb-3", "fs-30", "font-weight-700"], [1, "text-yellow"]], template: function CardsC2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-card-l3", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Dog Supplies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8)(11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10)(16, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Hotline order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "(877)834-1434");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "app-card-l3", 13)(21, "div", 14)(22, "div")(23, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "GIFT FOR PET");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Premium Cat Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_card_l3_card_l3_component__WEBPACK_IMPORTED_MODULE_0__.CardL3Component], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy1jMi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7159:
/*!*********************************************************!*\
  !*** ./src/app/mainpage/cards-c3/cards-c3.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsC3Component": () => (/* binding */ CardsC3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _card_l2_card_l2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../card-l2/card-l2.component */ 563);


class CardsC3Component {
    constructor() { }
    ngOnInit() {
    }
}
CardsC3Component.ɵfac = function CardsC3Component_Factory(t) { return new (t || CardsC3Component)(); };
CardsC3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardsC3Component, selectors: [["app-cards-c3"]], decls: 34, vars: 0, consts: [[1, "container"], [1, "mt-5", "d-flex", "justify-content-between"], [1, "border", "rounded-1", 2, "background-image", "url('assets/images/h1-banner1.jpg')", "height", "300px", "width", "400px"], [1, "d-flex", "p-5", "flex-column", "text-white"], [1, "mt-3"], [1, "fs-64"], [1, "fs-16", "mt-3"], [1, "border", "rounded-1", 2, "background-image", "url('assets/images/h1-banner2.jpg')", "height", "300px", "width", "400px"], [1, "fs-16", "text-light", "letter-spacing-1"], [1, "fs-64", "font-weight-700"], [1, "mb-3", "fs-30", "font-weight-700"], [1, "e-btn", "rounded-5", "fs-14", "font-weight-700", "btn-with-arrow"], [1, "d-inline-block"], [1, "bi", "bi-chevron-right", "fs-12", "bg-white", "p-1", "ms-2", "rounded-pill", "text-black"], [1, "border", "rounded-1", 2, "background-image", "url('assets/images/h1-banner3.jpg')", "height", "300px", "width", "400px"], [1, "d-flex", "flex-column", "py-3", "px-5", "justify-content-center"], [1, "d-flex", "flex-column"], [1, "d-flex", "flex-row", "justify-content-center", "text-white", "font-weight-700", "fs-50", 2, "z-index", "10"], [1, "d-flex", "flex-row", "justify-content-center", "position-relative", "fs-20", 2, "top", "-32px", "font-family", "cursive"]], template: function CardsC3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-card-l2", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "50%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Pet Food & Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div")(11, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Everything for your pet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "app-card-l2", 7)(14, "div", 3)(15, "div")(16, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "FREE SHIPPING");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Sale Off");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Shop now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "app-card-l2", 14)(28, "div", 15)(29, "div", 16)(30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Parrot Food");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Healthy Formula");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_card_l2_card_l2_component__WEBPACK_IMPORTED_MODULE_0__.CardL2Component], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkcy1jMy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9335:
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainpageComponent": () => (/* binding */ MainpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ 7348);
/* harmony import */ var _cards_c3_cards_c3_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards-c3/cards-c3.component */ 7159);
/* harmony import */ var _cards_c2_cards_c2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards-c2/cards-c2.component */ 402);




class MainpageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainpageComponent.ɵfac = function MainpageComponent_Factory(t) { return new (t || MainpageComponent)(); };
MainpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainpageComponent, selectors: [["app-mainpage"]], decls: 3, vars: 0, template: function MainpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-banner")(1, "app-cards-c3")(2, "app-cards-c2");
    } }, dependencies: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _cards_c3_cards_c3_component__WEBPACK_IMPORTED_MODULE_1__.CardsC3Component, _cards_c2_cards_c2_component__WEBPACK_IMPORTED_MODULE_2__.CardsC2Component], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWlucGFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map