System.register(['angular2/core', './directory.service'], function(exports_1, context_1) {
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
    var core_1, directory_service_1;
    var UserForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (directory_service_1_1) {
                directory_service_1 = directory_service_1_1;
            }],
        execute: function() {
            UserForm = (function () {
                function UserForm(_directoryService) {
                    this._directoryService = _directoryService;
                    this.add = new core_1.EventEmitter();
                    this.save = new core_1.EventEmitter();
                    this.cancel = new core_1.EventEmitter();
                }
                UserForm.prototype.cancelUser = function () {
                    this.cancel.emit('');
                };
                UserForm.prototype.showAdd = function () {
                    return this.user._id == undefined;
                };
                UserForm.prototype.showSave = function () {
                    return this.user._id;
                };
                UserForm.prototype.showRemove = function () {
                    return this.user._id;
                };
                UserForm.prototype.showCancel = function () {
                    return this.user.name || this.user.surname;
                };
                UserForm.prototype.addUser = function (name, surname) {
                    this.user.name = name;
                    this.user.surname = surname;
                    this.add.emit(this.user);
                };
                UserForm.prototype.onSubmit = function (name, surname, nameValid, surnameValid) {
                    if (nameValid && surnameValid)
                        this.user._id == undefined ? this.addUser(name, surname) : this.saveUser(name, surname);
                };
                UserForm.prototype.saveUser = function (name, surname) {
                    this.user.name = name;
                    this.user.surname = surname;
                    this.save.emit(this.user);
                };
                UserForm = __decorate([
                    core_1.Component({
                        selector: 'user-form',
                        templateUrl: 'app/html/user-form.component.html',
                        inputs: ['user'],
                        providers: [directory_service_1.DirectoryService],
                        events: ['add', 'save', 'cancel'],
                        styles: [".ng-valid[required] {border-left: 5px solid #42A948;}\n.ng-invalid {border-left: 5px solid #a94442;}"]
                    }), 
                    __metadata('design:paramtypes', [directory_service_1.DirectoryService])
                ], UserForm);
                return UserForm;
            }());
            exports_1("UserForm", UserForm);
        }
    }
});
//# sourceMappingURL=user-form.component.js.map