import { User } from './user-cmp/user';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { catchError } from 'rxjs/operators';


@Injectable()
export class UserServiceService {

  //userUrl = "http://localhost:3000/user";

  userUrl = "http://localhost:8000/user";

  //Create constructor to get Http instance
  constructor(private http:Http) { 
  }

   //Fetch all users
  getAllUsers(): Observable<User[]> {
    return this.http.get(this.userUrl).pipe(map(this.extractData),
    catchError(this.handleError));
  }

  createUser(user: User):Observable<number> {
    console.log(user);
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    return this.http.post(this.userUrl + "/", user, options)
    .pipe(map(success => success.status),
        catchError(this.handleError));
  } 

  //Fetch user by id
  getUserById(userId: string): Observable<User> {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      //console.log(this.userUrl +"/"+ userId + "/");
      return this.http.get(this.userUrl +"/"+ userId + "/")
      .pipe(map(this.extractData),
      catchError(this.handleError));
  }	

  //Update user
  updateUser(user: User):Observable<number> {
      console.log(user);
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      return this.http.put(this.userUrl +"/"+ user.id + "/", user, options)
      .pipe(map(this.extractData),
      catchError(this.handleError));
  }

  //Delete user	
  deleteUserById(userId: string): Observable<number> {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });
      return this.http.delete(this.userUrl +"/"+ userId + "/")
      .pipe(map(this.extractData),
      catchError(this.handleError));
  }	

  private extractData(res: Response) {
    let body = res.json();
          return body;
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
