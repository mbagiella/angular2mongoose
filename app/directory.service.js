System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var DirectoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            DirectoryService = (function () {
                function DirectoryService(http) {
                    this.http = http;
                    this._directoryURL = 'http://localhost:8080/api/user';
                    this.header = new http_1.Headers();
                    this.header.append('Content-Type', 'application/json');
                }
                DirectoryService.prototype.getUsers = function () {
                    return this.http.get(this._directoryURL).map(function (res) { return res.json().data; }).catch(this.handleError);
                };
                DirectoryService.prototype.addUser = function (user) {
                    return this.http.post(this._directoryURL, JSON.stringify(user), { headers: this.header }).map(function (res) { return res.json().data; });
                };
                DirectoryService.prototype.removeUser = function (user) {
                    return this.http.delete(this._directoryURL + '/' + user._id);
                };
                DirectoryService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DirectoryService.prototype.saveUser = function (user) {
                    return this.http.put(this._directoryURL + '/' + user._id, JSON.stringify(user), { headers: this.header }).map(function (res) { return res.json().data; });
                };
                DirectoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DirectoryService);
                return DirectoryService;
            }());
            exports_1("DirectoryService", DirectoryService);
        }
    }
});
//# sourceMappingURL=directory.service.js.map