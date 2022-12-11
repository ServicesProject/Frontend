import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Work } from '../models/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  apiUrl = environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  public list(): Observable<Work[]>{
    return this.httpClient.get<Work[]>(this.apiUrl+ 'work')
  }
 
  public details(id:number): Observable<Work[]>{
    return this.httpClient.get<Work[]>(this.apiUrl +`work/${id}`)
  }

  public save(work: Work): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'work', work)
  }

  public update(id:number, work: Work)
  {
    return this.httpClient.put<any>(this.apiUrl +`work/${id}`, work)
  }

  public delete(id:number)
  {
    return this.httpClient.delete<any>(this.apiUrl +`work/${id}`)
  }

}
