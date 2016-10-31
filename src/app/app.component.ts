import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[GithubService]
})
export class AppComponent 
{
  user:any;
    repos:any[];
    username:string;

        constructor(private _githubService: GithubService){
           this.user=false;


            this._githubService.getUser().subscribe(user => {
               this.user = user;
            });

            this._githubService.getRepos().subscribe(repos => {
               this.repos = repos;
            }); 
        }

}
