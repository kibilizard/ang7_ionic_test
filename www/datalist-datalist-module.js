(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datalist-datalist-module"],{

/***/ "./src/app/datalist/datalist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/datalist/datalist.module.ts ***!
  \*********************************************/
/*! exports provided: DatalistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalistPageModule", function() { return DatalistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _datalist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datalist.page */ "./src/app/datalist/datalist.page.ts");
/* harmony import */ var _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-item/recipe-item.component */ "./src/app/datalist/recipe-item/recipe-item.component.ts");








var routes = [
    {
        path: '',
        component: _datalist_page__WEBPACK_IMPORTED_MODULE_6__["DatalistPage"]
    }
];
var DatalistPageModule = /** @class */ (function () {
    function DatalistPageModule() {
    }
    DatalistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_datalist_page__WEBPACK_IMPORTED_MODULE_6__["DatalistPage"], _recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_7__["RecipeItemComponent"]]
        })
    ], DatalistPageModule);
    return DatalistPageModule;
}());



/***/ }),

/***/ "./src/app/datalist/datalist.page.html":
/*!*********************************************!*\
  !*** ./src/app/datalist/datalist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Data List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <app-recipe-item *ngFor=\"let recipe of data\" [recipeItem]=\"recipe\"></app-recipe-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/datalist/datalist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/datalist/datalist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFsaXN0L2RhdGFsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/datalist/datalist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/datalist/datalist.page.ts ***!
  \*******************************************/
/*! exports provided: DatalistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalistPage", function() { return DatalistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recepies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recepies.service */ "./src/app/datalist/recepies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DatalistPage = /** @class */ (function () {
    function DatalistPage(recipesService, router) {
        this.recipesService = recipesService;
        this.router = router;
    }
    DatalistPage.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.data = _this.recipesService.getAllRecipes();
            }
        });
        this.data = this.recipesService.getAllRecipes();
    };
    DatalistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-datalist',
            template: __webpack_require__(/*! ./datalist.page.html */ "./src/app/datalist/datalist.page.html"),
            styles: [__webpack_require__(/*! ./datalist.page.scss */ "./src/app/datalist/datalist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recepies_service__WEBPACK_IMPORTED_MODULE_2__["RecepiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DatalistPage);
    return DatalistPage;
}());



/***/ }),

/***/ "./src/app/datalist/recipe-item/recipe-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/datalist/recipe-item/recipe-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item [routerLink]=\"['/datalist', recipeItem.id]\">\n  <ion-avatar>\n    <ion-img [src]=\"recipeItem.imageUrl\"></ion-img>\n  </ion-avatar>\n  <ion-label> {{ recipeItem.title }} </ion-label>\n</ion-item>"

/***/ }),

/***/ "./src/app/datalist/recipe-item/recipe-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/datalist/recipe-item/recipe-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFsaXN0L3JlY2lwZS1pdGVtL3JlY2lwZS1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/datalist/recipe-item/recipe-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/datalist/recipe-item/recipe-item.component.ts ***!
  \***************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeItemComponent.prototype, "recipeItem", void 0);
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/datalist/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.scss */ "./src/app/datalist/recipe-item/recipe-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ })

}]);
//# sourceMappingURL=datalist-datalist-module.js.map