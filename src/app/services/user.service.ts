import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<User[]>{
    console.log("OTRO MENSAJE AQUIII")
    return this.httpClient.get<User[]>(this.apiUrl+ 'user')
  
  }

  public details(id:number): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl +`user/${id}`)
  }

  public save(user: User): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'user', user)
  }

  public update(id:number, user:User)
  {
    return this.httpClient.put<any>(this.apiUrl +`user/${id}`, user)
  }
  public delete(id:number)
  {
    return this.httpClient.delete<any>(this.apiUrl +`user/${id}`)
  }


}
