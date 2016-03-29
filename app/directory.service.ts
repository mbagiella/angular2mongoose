import {Injectable} from 'angular2/core';
import {Http,Response,Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {User} from './user';

@Injectable()
export class DirectoryService{
    private _directoryURL = 'http://localhost:8080/api/user';
    private header:Headers;

    constructor(private http:Http){
        this.header = new Headers();
        this.header.append('Content-Type','application/json');
    }

    getUsers() {
        return this.http.get(this._directoryURL).map(res => <User[]> res.json().data).catch(this.handleError);
    }

    addUser(user:User) {
        return this.http.post(this._directoryURL,JSON.stringify(user),{headers:this.header}).map(res => <User> res.json().data);
    }

    removeUser(user:User) {
        return this.http.delete(this._directoryURL+'/'+user._id);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    saveUser(user:User) {
        return this.http.put(this._directoryURL+'/'+user._id,JSON.stringify(user),{headers:this.header}).map(res => <User> res.json().data);
    }
}