import { Injectable } from '@angular/core';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }


  public get currentUserValue(){
    let user_string = localStorage.getItem("token")
      if(user_string !== null){
          let token: Token = JSON.parse(user_string);
          return token;
      }
      else{
          return null;
      }
  }
}
