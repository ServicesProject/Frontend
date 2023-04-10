import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../../core/models/register';
import { User } from '../models/user';
import { UpdateUser } from '../models/update-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl+ 'user')
  }

  public details(id:number): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl +`user/${id}`)
  }

  public save(user: User): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'user', user)
  }

  public register(user: Register): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'user', user)
  }

  public update(id:number, user:UpdateUser)
  {
    return this.httpClient.put<any>(this.apiUrl +`user/${id}`, user)
  }
  public delete(id:number)
  {
    return this.httpClient.delete<any>(this.apiUrl +`user/${id}`)
  }

  public login(email:string,password:string){
    return this.httpClient.post<any>(this.apiUrl+ 'token', {email,password})
  }

  public validatedEmail(email:string){
    return this.httpClient.put<any>(this.apiUrl + 'token/validateEmail',{email})
  }


}
