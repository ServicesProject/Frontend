import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Rating } from '../models/rating';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  apiUrl = environment.apiUrl
  
  constructor(private httpClient:HttpClient) { }

  public createRating(rating: Rating): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'rating', rating)
  }

  public averagePointsForWork(id:number): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+ `rating/${id}/average-points`)
  }

  public messagesForWork(id:number): Observable<any>{
    return this.httpClient.get<any>(this.apiUrl+ `rating/${id}/messages`)
  }


}
