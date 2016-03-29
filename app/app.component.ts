import {Component,OnInit} from 'angular2/core';
import {User} from './user'
import {UserForm} from './user-form.component';
import {DirectoryService} from './directory.service';
import {SearchName} from './search-pipe';
@Component({
    selector: 'my-app',
    pipes:[SearchName],
    directives:[UserForm],
    providers:[DirectoryService],
    templateUrl: 'app/html/app.component.html'
})
export class AppComponent implements OnInit{
    title:string = 'My Directory';
    search:string = '';
    selectedUser: User ;
    directory:User[];
    order = ['surname','username'];

    constructor(private _directoryService:DirectoryService){this.init()}

    init(){
        this.selectedUser = {name:'',surname:''};
        this.search = '';
    }

    reload(){
        this.ngOnInit();
        this.init();
    }

    ngOnInit(){
        this._directoryService.getUsers().subscribe(users=> this.directory = users);
    }

    select(user: User){
        this.selectedUser == user ? this.init() : this.selectedUser = user;
    }

    save(user:User){
        const i = this.directory.indexOf(user);
        this._directoryService.saveUser(user).subscribe
            (user =>
                console.log(user)
            );
        this.init();
    }

    cancel(){
        this.init();
    }

    remove(user:User,element:Element){
        element.className=element.className + " list-group-item-danger";
        setTimeout(()=>{
            this._directoryService.removeUser(user).subscribe(res=>{this.directory.splice(this.directory.indexOf(user),1);this.init()})
            this.init();
        },0);
    }

    add(user:User){
        this._directoryService.addUser(user).subscribe(res=>this.directory.push(res));
        this.init();
    }

    selectedClass(user){
        return this.selectedUser === user ? 'active' : '';
    }

}

