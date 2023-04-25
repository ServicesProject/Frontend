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
  
}
