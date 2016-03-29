import {Component,EventEmitter} from 'angular2/core';
import {User} from './user';
import {DirectoryService} from './directory.service';

@Component({
    selector:'user-form',
    templateUrl:'app/html/user-form.component.html',
    inputs:['user'],
    providers:[DirectoryService],
    events:['add','save','cancel'],
    styles:[`.ng-valid[required] {border-left: 5px solid #42A948;}
.ng-invalid {border-left: 5px solid #a94442;}`]
})
export class UserForm{
    add = new EventEmitter();
    save = new EventEmitter();
    cancel = new EventEmitter();

    user:User;

    constructor(private _directoryService : DirectoryService){    }

    cancelUser(){
        this.cancel.emit('');
    }
    showAdd(){
        return this.user._id == undefined;
    }

    showSave(){
        return this.user._id;
    }

    showRemove(){
        return this.user._id;
    }

    showCancel(){
        return this.user.name || this.user.surname
    }

    addUser(name,surname){
        this.user.name = name;
        this.user.surname = surname;
        this.add.emit(this.user);
    }
    
    onSubmit(name,surname,nameValid,surnameValid){
        if (nameValid && surnameValid)
            this.user._id == undefined ? this.addUser(name,surname) : this.saveUser(name,surname);
    }

    saveUser(name,surname){
        this.user.name = name;
        this.user.surname = surname;
        this.save.emit(this.user);
    }
}