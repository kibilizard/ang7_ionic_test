(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["datalist-recipe-detail-recipe-detail-module"],{

/***/ "./src/app/datalist/recipe-detail/recipe-detail.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/datalist/recipe-detail/recipe-detail.module.ts ***!
  \****************************************************************/
/*! exports provided: RecipeDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPageModule", function() { return RecipeDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-detail.page */ "./src/app/datalist/recipe-detail/recipe-detail.page.ts");







var routes = [
    {
        path: '',
        component: _recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailPage"]
    }
];
var RecipeDetailPageModule = /** @class */ (function () {
    function RecipeDetailPageModule() {
    }
    RecipeDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_recipe_detail_page__WEBPACK_IMPORTED_MODULE_6__["RecipeDetailPage"]]
        })
    ], RecipeDetailPageModule);
    return RecipeDetailPageModule;
}());



/***/ }),

/***/ "./src/app/datalist/recipe-detail/recipe-detail.page.html":
/*!****************************************************************!*\
  !*** ./src/app/datalist/recipe-detail/recipe-detail.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/datalist\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ recipe.title }}</ion-title>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDeleteRecipe()\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon> \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col no-padding>\n        <ion-img [src]=\"recipe.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 text-center >{{recipe.title}}</h1>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let ig of recipe.ingredients\">\n            {{ ig }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/datalist/recipe-detail/recipe-detail.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/datalist/recipe-detail/recipe-detail.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhdGFsaXN0L3JlY2lwZS1kZXRhaWwvcmVjaXBlLWRldGFpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/datalist/recipe-detail/recipe-detail.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/datalist/recipe-detail/recipe-detail.page.ts ***!
  \**************************************************************/
/*! exports provided: RecipeDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPage", function() { return RecipeDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recepies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recepies.service */ "./src/app/datalist/recepies.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var RecipeDetailPage = /** @class */ (function () {
    function RecipeDetailPage(activatedRoute, recipesService, router, alertCtrl) {
        this.activatedRoute = activatedRoute;
        this.recipesService = recipesService;
        this.router = router;
        this.alertCtrl = alertCtrl;
    }
    RecipeDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (paramMap) {
            if (!paramMap.has('recipeId')) {
                // redirect
                _this.router.navigate(['/datalist']);
                return;
            }
            var recipeId = paramMap.get('recipeId');
            _this.recipe = _this.recipesService.getRecipe(recipeId);
        });
    };
    RecipeDetailPage.prototype.onDeleteRecipe = function () {
        var _this = this;
        this.alertCtrl.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete thi recipe',
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.recipesService.deleteRecipe(_this.recipe.id);
                        _this.router.navigate(['/datalist']);
                        console.log('DELETED');
                    }
                }
            ]
        }).then(function (alertEl) {
            alertEl.present();
        });
    };
    RecipeDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.page.html */ "./src/app/datalist/recipe-detail/recipe-detail.page.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.page.scss */ "./src/app/datalist/recipe-detail/recipe-detail.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _recepies_service__WEBPACK_IMPORTED_MODULE_2__["RecepiesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=datalist-recipe-detail-recipe-detail-module.js.map