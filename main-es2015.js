(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{ title }}\n  </h1>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-create/employee-create.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-create/employee-create.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>wtf work!!</p>\n<div class=\"container custom-container\">\n  <div class=\"col-md-12\">\n    <h3 class=\"mb-3 text-center\">Create Employee</h3>\n\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"employeeDetails.UserNo\" class=\"form-control\" placeholder=\"Name\">\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"employeeDetails.UserName\" class=\"form-control\" placeholder=\"Email\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"addEmployee()\">Create Employee</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-details/employee-details.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-details/employee-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>employee-details works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employee-update/employee-update.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employee-update/employee-update.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>employee-update works!</p>\n<div class=\"container custom-container\">\n  <div class=\"col-md-12\">\n\n    <h3 class=\"mb-3 text-center\">Update Employee</h3>\n\n    <div class=\"form-group\">\n      <!--\n      <input type=\"text\" [(ngModel)]=\"employeeData.UserNo\" class=\"form-control\" placeholder=\"Name\">\n      -->\n      <p> {{ id }} </p>\n    </div>\n\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"employeeData.UserName\" class=\"form-control\" placeholder=\"Email\">\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"updateEmployee()\">Update Employee</button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/employees-list/employees-list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees-list/employees-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>list work!!</p>\n<div class=\"container custom-container-2\">\n  <!-- Show it when there is no employee -->\n  <!--<div class=\"no-data text-center\" *ngIf=\"Employee.length == 0\"></div>-->\n  <br />\n  <div class=\"no-data text-center\">\n    <button class=\"btn btn-outline-primary\" routerLink=\"/create-employee\">Add Empoyee</button>\n  </div>\n  <br />\n  <!-- Employees list table, it hides when there is no employee -->\n  <div *ngIf=\"Employee.length !== 0\">\n    <h3 class=\"mb-3 text-center\">Employees List</h3>\n\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">User Id</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let employee of Employee\">\n            <td>{{employee.UserNo}}</td>\n            <td>{{employee.UserName}}</td>\n            <td>\n              <span class=\"edit\" (click)=\"updateEmployee(employee.UserNo)\">Edit</span>\n              <span class=\"delete\" (click)=\"deleteEmployee(employee.UserNo)\">Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-create/employee-create.component */ "./src/app/employee-create/employee-create.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-update/employee-update.component */ "./src/app/employee-update/employee-update.component.ts");
/* harmony import */ var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees-list/employees-list.component */ "./src/app/employees-list/employees-list.component.ts");







const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
    { path: 'create-employee', component: _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeCreateComponent"] },
    { path: 'employee-details/:id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDetailsComponent"] },
    { path: 'update-employee/:id', component: _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeUpdateComponent"] },
    { path: 'employees-list', component: _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesListComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-httpclient-app(test)';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-create/employee-create.component */ "./src/app/employee-create/employee-create.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-update/employee-update.component */ "./src/app/employee-update/employee-update.component.ts");
/* harmony import */ var _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees-list/employees-list.component */ "./src/app/employees-list/employees-list.component.ts");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _employee_create_employee_create_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeCreateComponent"],
            _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeDetailsComponent"],
            _employee_update_employee_update_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeUpdateComponent"],
            _employees_list_employees_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeesListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/employee-create/employee-create.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-create/employee-create.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWNyZWF0ZS9lbXBsb3llZS1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employee-create/employee-create.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-create/employee-create.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeCreateComponent", function() { return EmployeeCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");




let EmployeeCreateComponent = class EmployeeCreateComponent {
    constructor(restApi, router) {
        this.restApi = restApi;
        this.router = router;
        this.employeeDetails = { UserNo: '', UserName: '' };
    }
    ngOnInit() {
    }
    addEmployee(dataEmployee) {
        this.restApi.createEmployee(this.employeeDetails).subscribe((data) => {
            this.router.navigate(['/employees-list']);
        });
    }
};
EmployeeCreateComponent.ctorParameters = () => [
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmployeeCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-create',
        template: __webpack_require__(/*! raw-loader!./employee-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-create/employee-create.component.html"),
        styles: [__webpack_require__(/*! ./employee-create.component.css */ "./src/app/employee-create/employee-create.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EmployeeCreateComponent);



/***/ }),

/***/ "./src/app/employee-details/employee-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRldGFpbHMvZW1wbG95ZWUtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-details',
        template: __webpack_require__(/*! raw-loader!./employee-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-details/employee-details.component.html"),
        styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee-details/employee-details.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EmployeeDetailsComponent);



/***/ }),

/***/ "./src/app/employee-update/employee-update.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-update/employee-update.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLXVwZGF0ZS9lbXBsb3llZS11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employee-update/employee-update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-update/employee-update.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeUpdateComponent", function() { return EmployeeUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let EmployeeUpdateComponent = class EmployeeUpdateComponent {
    constructor(restApi, actRoute, router) {
        this.restApi = restApi;
        this.actRoute = actRoute;
        this.router = router;
        this.id = this.actRoute.snapshot.params.id;
        this.employeeData = {};
    }
    ngOnInit() {
        this.restApi.getEmployee(this.id).subscribe((data) => {
            this.employeeData = data;
        });
    }
    updateEmployee() {
        if (window.confirm('Are you sure, you want to update?')) {
            this.restApi.updateEmployee(this.id, this.employeeData).subscribe(data => {
                this.router.navigate(['/employees-list']);
            });
        }
    }
};
EmployeeUpdateComponent.ctorParameters = () => [
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
EmployeeUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-update',
        template: __webpack_require__(/*! raw-loader!./employee-update.component.html */ "./node_modules/raw-loader/index.js!./src/app/employee-update/employee-update.component.html"),
        styles: [__webpack_require__(/*! ./employee-update.component.css */ "./src/app/employee-update/employee-update.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], EmployeeUpdateComponent);



/***/ }),

/***/ "./src/app/employees-list/employees-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/employees-list/employees-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy1saXN0L2VtcGxveWVlcy1saXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employees-list/employees-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/employees-list/employees-list.component.ts ***!
  \************************************************************/
/*! exports provided: EmployeesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesListComponent", function() { return EmployeesListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");




let EmployeesListComponent = class EmployeesListComponent {
    constructor(restApi, router) {
        this.restApi = restApi;
        this.router = router;
        this.Employee = [];
    }
    ngOnInit() {
        this.loadEmployees();
    }
    loadEmployees() {
        return this.restApi.getEmployees().subscribe((data) => {
            this.Employee = data;
        });
    }
    // Delete employee
    deleteEmployee(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteEmployee(id).subscribe(data => {
                this.loadEmployees();
            });
        }
    }
    updateEmployee(id) {
        this.router.navigate(['/update-employee/' + id]);
    }
};
EmployeesListComponent.ctorParameters = () => [
    { type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EmployeesListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees-list',
        template: __webpack_require__(/*! raw-loader!./employees-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees-list/employees-list.component.html"),
        styles: [__webpack_require__(/*! ./employees-list.component.css */ "./src/app/employees-list/employees-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], EmployeesListComponent);



/***/ }),

/***/ "./src/app/shared/rest-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/rest-api.service.ts ***!
  \********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RestApiService = class RestApiService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://localhost/testApi/api';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // HttpClient API get() method => Fetch employees list
    getEmployees() {
        return this.http.get(this.apiURL + '/User')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API get() method => Fetch employee
    getEmployee(id) {
        return this.http.get(this.apiURL + '/User/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API post() method => Create employee
    createEmployee(employee) {
        return this.http.post(this.apiURL + '/User', JSON.stringify(employee), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API put() method => Update employee
    updateEmployee(id, employee) {
        return this.http.put(this.apiURL + '/User/' + id, JSON.stringify(employee), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API delete() method => Delete employee
    deleteEmployee(id) {
        return this.http.delete(this.apiURL + '/User/' + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
RestApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], RestApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\gitProject\angular-httpclient-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map