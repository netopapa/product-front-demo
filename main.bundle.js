webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_feedback_feedback_service__ = __webpack_require__("./src/app/service/feedback/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_product_product_service__ = __webpack_require__("./src/app/service/product/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_produto_cadastro_cadastro_component__ = __webpack_require__("./src/app/view/produto/cadastro/cadastro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view_produto_listagem_listagem_component__ = __webpack_require__("./src/app/view/produto/listagem/listagem.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatTooltipModule */],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__view_produto_cadastro_cadastro_component__["a" /* CadastroComponent */],
                __WEBPACK_IMPORTED_MODULE_13__view_produto_listagem_listagem_component__["a" /* ListagemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* appRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                MaterialModule
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__service_product_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_10__service_feedback_feedback_service__["a" /* FeedbackService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_produto_listagem_listagem_component__ = __webpack_require__("./src/app/view/produto/listagem/listagem.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_produto_cadastro_cadastro_component__ = __webpack_require__("./src/app/view/produto/cadastro/cadastro.component.ts");


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__view_produto_listagem_listagem_component__["a" /* ListagemComponent */] },
    { path: 'form', component: __WEBPACK_IMPORTED_MODULE_1__view_produto_cadastro_cadastro_component__["a" /* CadastroComponent */] },
    { path: 'form/:id', component: __WEBPACK_IMPORTED_MODULE_1__view_produto_cadastro_cadastro_component__["a" /* CadastroComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_0__view_produto_listagem_listagem_component__["a" /* ListagemComponent */] }
];


/***/ }),

/***/ "./src/app/model/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
        this.dtCreate = new Date();
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/service/feedback/feedback.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedbackService = /** @class */ (function () {
    function FeedbackService(snackBar) {
        this.snackBar = snackBar;
    }
    FeedbackService.prototype.openSuccessSnackBar = function (message) {
        this.snackBar.open(message, 'OK!', {
            duration: 2000,
            panelClass: ['success'],
        });
    };
    FeedbackService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBar */]])
    ], FeedbackService);
    return FeedbackService;
}());



/***/ }),

/***/ "./src/app/service/product/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductService = /** @class */ (function () {
    function ProductService() {
        this.produtos = [];
    }
    ProductService.prototype.getAll = function () {
        return this.produtos;
    };
    ProductService.prototype.getOne = function (id) {
        return this.produtos.find(function (prod) { return prod.id == id; });
    };
    ProductService.prototype.save = function (data) {
        data.id = this.buildNewId();
        this.produtos.push(data);
        return data;
    };
    ProductService.prototype.update = function (data) {
        var index = this.produtos.indexOf(this.getOne(data.id));
        this.produtos[index] = data;
        return this.produtos[index];
    };
    ProductService.prototype.delete = function (id) {
        var index = this.produtos.indexOf(this.getOne(id));
        this.produtos.splice(index, 1);
    };
    ProductService.prototype.buildNewId = function () {
        var id = this.produtos.length;
        while (this.getOne(id)) {
            id++;
        }
        return id;
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/view/produto/cadastro/cadastro.component.css":
/***/ (function(module, exports) {

module.exports = ".display-error {\r\n    color: red;\r\n    position: absolute;\r\n    top: 3.5em;\r\n    font-size: 0.9em;\r\n}\r\n\r\n.desc {\r\n    width: 600px !important;\r\n}\r\n\r\n.namei {\r\n    width: 623px !important;\r\n}"

/***/ }),

/***/ "./src/app/view/produto/cadastro/cadastro.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"produto-form\">\r\n  <div class=\"card blue-gray darken-1\">\r\n    <h3 class=header>Produto <span class=\"small\"> - {{txtHeader}}</span></h3>\r\n    <div class=\"divider\"></div>\r\n    <div class=\"space\"></div>\r\n\r\n    <div class=\"card-content\">\r\n      <form #produtoForm=\"ngForm\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            Nome:\r\n            <div class=\"input-field inline\">\r\n              <input class=\"namei\" type=\"text\" name=\"nome\" [(ngModel)]=\"prodName\" maxlength=\"60\" required>\r\n              <span *ngIf=\"!checkName()\" class=\"display-error\">Já existe um produto cadastrado com o mesmo nome</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            Descrição:\r\n            <div class=\"input-field inline\">\r\n              <input class=\"desc\"type=\"text\" name=\"description\" [(ngModel)]=\"produto.description\" maxlength=\"500\" required>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col s12 center-align\">\r\n            <button class=\"waves-effect waves-light btn\" type=\"button\" [routerLink]=\"['']\">Voltar</button>\r\n            <button class=\"waves-effect waves-light btn green\" type=\"submit\"\r\n              [disabled]=\"!produtoForm.form.valid || !checkName()\" (click)=\"save(produto)\">{{txtBtnSubmit}}</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/view/produto/cadastro/cadastro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_product_model__ = __webpack_require__("./src/app/model/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_feedback_feedback_service__ = __webpack_require__("./src/app/service/feedback/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_product_product_service__ = __webpack_require__("./src/app/service/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroComponent = /** @class */ (function () {
    function CadastroComponent(service, route, router, feedback) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.feedback = feedback;
        this.produtos = [];
        this.txtBtnSubmit = '';
        this.txtHeader = '';
    }
    CadastroComponent.prototype.ngOnInit = function () {
        this.prodName = '';
        this.produto = new __WEBPACK_IMPORTED_MODULE_2__model_product_model__["a" /* Product */]();
        this.getProducts();
        this.welcome();
    };
    CadastroComponent.prototype.welcome = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id'] != null) {
                _this.edit = true;
                _this.txtBtnSubmit = 'editar';
                _this.txtHeader = 'Edição';
                _this.getProduct(params['id']);
                _this.prodName = _this.produto.name;
            }
            else {
                _this.edit = false;
                _this.txtBtnSubmit = 'cadastrar';
                _this.txtHeader = 'Cadastro';
            }
        });
    };
    CadastroComponent.prototype.getProduct = function (id) {
        console.log(id);
        console.log(this.service.getOne(id));
        Object.assign(this.produto, this.service.getOne(id));
    };
    CadastroComponent.prototype.save = function (produto) {
        this.produto.name = this.prodName;
        if (this.edit) {
            this.service.update(produto);
            this.feedback.openSuccessSnackBar('Produto editado!');
            this.router.navigate(['/']);
        }
        else {
            this.service.save(produto);
            this.feedback.openSuccessSnackBar('Produto cadastrado!');
            this.router.navigate(['/']);
        }
    };
    CadastroComponent.prototype.getProducts = function () {
        this.produtos = this.service.getAll();
        console.log(this.produtos);
    };
    CadastroComponent.prototype.checkName = function () {
        var _this = this;
        var product = this.produtos.find(function (prod) { return prod.name === _this.prodName; });
        if (product && product.id !== this.produto.id) {
            return false;
        }
        return true;
    };
    CadastroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cadastro',
            template: __webpack_require__("./src/app/view/produto/cadastro/cadastro.component.html"),
            styles: [__webpack_require__("./src/app/view/produto/cadastro/cadastro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_feedback_feedback_service__["a" /* FeedbackService */]])
    ], CadastroComponent);
    return CadastroComponent;
}());



/***/ }),

/***/ "./src/app/view/produto/listagem/listagem.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/produto/listagem/listagem.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"perfils\">\r\n  <div class=\"card blue-gray darken-1\">\r\n    <h3 class=header>Produtos</h3>\r\n    <div class=\"divider\"></div>\r\n    <div class=\"space\"></div>\r\n    <div class=\"row\">\r\n      <div class=\"col s6\">\r\n        <div class=\"row\">\r\n          <div class=\"input-field col s12\">\r\n            <input id=\"filtro\" type=\"text\" (keyup)=\"applyFilter($event.target.value)\">\r\n            <label for=\"filtro\">Pesquise</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s6\">\r\n        <a [routerLink]=\"['/form']\" class=\"waves-effect waves-light btn right\"><i class=\"fa fa-plus\"></i> Produto</a>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-content\">\r\n      <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n        <ng-container matColumnDef=\"name\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Nome </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let produto\"> {{produto.name}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"description\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Descrição </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let produto\"> {{produto.description}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"dtCreate\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Data de criação </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let produto\"> {{produto.dtCreate | date: 'h:mm a'}} </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"acoes\">\r\n          <mat-header-cell class=\"text-right\" *matHeaderCellDef>Ações</mat-header-cell>\r\n          <mat-cell class=\"text-right acoes\" *matCellDef=\"let produto\">\r\n            <a class=\"btn-floating btn-small waves-effect waves-light green acoes\" matTooltip=\"Editar\"\r\n              matTooltipPosition=\"left\" (click)=\"editThis(produto.id)\">\r\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n            </a>\r\n            <a class=\"btn-floating btn-small waves-effect waves-light red\" matTooltip=\"Deletar\"\r\n              matTooltipPosition=\"left\" (click)=\"deleteThis(produto.id)\">\r\n              <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n            </a>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let produto; columns: displayedColumns;\">\r\n        </mat-row>\r\n      </mat-table>\r\n\r\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/view/produto/listagem/listagem.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListagemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_feedback_feedback_service__ = __webpack_require__("./src/app/service/feedback/feedback.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_product_product_service__ = __webpack_require__("./src/app/service/product/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListagemComponent = /** @class */ (function () {
    function ListagemComponent(service, router, feedback) {
        this.service = service;
        this.router = router;
        this.feedback = feedback;
        this.displayedColumns = ['name', 'description', 'dtCreate', 'acoes'];
    }
    ListagemComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */]();
        this.dataSource.data = [];
        this.paginator.pageSize = 10;
        this.paginator._intl.itemsPerPageLabel = 'Itens por página';
        this.getProdutos();
    };
    ListagemComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ListagemComponent.prototype.getProdutos = function () {
        this.dataSource.data = this.service.getAll();
    };
    ListagemComponent.prototype.deleteThis = function (id) {
        this.service.delete(id);
        this.feedback.openSuccessSnackBar('Produto deletado!');
        this.getProdutos();
    };
    ListagemComponent.prototype.editThis = function (id) {
        this.router.navigate(["/form/" + id]);
    };
    ListagemComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginator */])
    ], ListagemComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], ListagemComponent.prototype, "sort", void 0);
    ListagemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listagem',
            template: __webpack_require__("./src/app/view/produto/listagem/listagem.component.html"),
            styles: [__webpack_require__("./src/app/view/produto/listagem/listagem.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__service_product_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__service_feedback_feedback_service__["a" /* FeedbackService */]])
    ], ListagemComponent);
    return ListagemComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map