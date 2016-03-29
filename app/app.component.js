System.register(['angular2/core', './user-form.component', './directory.service', './search-pipe'], function(exports_1, context_1) {
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
    var core_1, user_form_component_1, directory_service_1, search_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_form_component_1_1) {
                user_form_component_1 = user_form_component_1_1;
            },
            function (directory_service_1_1) {
                directory_service_1 = directory_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_directoryService) {
                    this._directoryService = _directoryService;
                    this.title = 'My Directory';
                    this.search = '';
                    this.order = ['surname', 'username'];
                    this.init();
                }
                AppComponent.prototype.init = function () {
                    this.selectedUser = { name: '', surname: '' };
                    this.search = '';
                };
                AppComponent.prototype.reload = function () {
                    this.ngOnInit();
                    this.init();
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._directoryService.getUsers().subscribe(function (users) { return _this.directory = users; });
                };
                AppComponent.prototype.select = function (user) {
                    this.selectedUser == user ? this.init() : this.selectedUser = user;
                };
                AppComponent.prototype.save = function (user) {
                    var i = this.directory.indexOf(user);
                    this._directoryService.saveUser(user).subscribe(function (user) {
                        return console.log(user);
                    });
                    this.init();
                };
                AppComponent.prototype.cancel = function () {
                    this.init();
                };
                AppComponent.prototype.remove = function (user, element) {
                    var _this = this;
                    element.className = element.className + " list-group-item-danger";
                    setTimeout(function () {
                        _this._directoryService.removeUser(user).subscribe(function (res) { _this.directory.splice(_this.directory.indexOf(user), 1); _this.init(); });
                        _this.init();
                    }, 0);
                };
                AppComponent.prototype.add = function (user) {
                    var _this = this;
                    this._directoryService.addUser(user).subscribe(function (res) { return _this.directory.push(res); });
                    this.init();
                };
                AppComponent.prototype.selectedClass = function (user) {
                    return this.selectedUser === user ? 'active' : '';
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        pipes: [search_pipe_1.SearchName],
                        directives: [user_form_component_1.UserForm],
                        providers: [directory_service_1.DirectoryService],
                        templateUrl: 'app/html/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [directory_service_1.DirectoryService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map