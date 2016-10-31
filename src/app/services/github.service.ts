import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id:'752a5b9a3c42703b73e8';
    private client_secret='9dde5e670a50af9cd3a81821906f8a5d6bd3fbf8';

    constructor(private _http: Http)
    {
        console.log('Github Service Ready...');
        this.username = 'JackMj';     
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='
        +this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='
        +this.client_id+'&client_secret='+this.client_secret).map(res => res.json());
    }

    updateUser(username:string){
        this.username=username;
    }
}