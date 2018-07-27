import { Injectable } from '@angular/core';
import { Http } from '../../node_modules/@angular/http';

@Injectable()
export class GithubFollowersService{
  private url = "https://api.github.com/users/mosh-hamedani/followers";
  
  constructor(private http: Http) { }

  getAll(){
    return this.http.get(this.url);
  }

}
