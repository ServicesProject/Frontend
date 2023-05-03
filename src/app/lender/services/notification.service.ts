import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  apiUrl = environment.apiUrl
  
  constructor(private httpClient:HttpClient) { }

  public sendNotification(notification: Notification): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'notification', notification)
  }

  public listUserNotification(id: number): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+ `notification/${id}/user`)
  }

  public lisLenderNotification(email: string): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+ `notification/${email}/lender`)
  }
  public changeState(id:number, newState:string, text:string){
    return this.httpClient.put<any>(this.apiUrl +`notification/${id}/state`, {state:newState, message:text})
  }

  public listAcceptedContracts(id: number): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+ `notification/${id}/state/accepted`)
  }

  public listAcceptLenderContracts(email: string): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+ `notification/${email}/state/accepted/lenders`)
  }

  
}
