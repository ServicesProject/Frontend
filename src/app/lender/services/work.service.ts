import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Work } from '../models/work';
import { FilterWorks } from '../models/filterWorks';

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

  public create(work: Work): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'work', work)
  }

  public update(id:number, work: Work)
  {
    return this.httpClient.put<any>(this.apiUrl +`work/${id}`, work)
  }

  public deleteWork(id:number)
  {
    return this.httpClient.delete<any>(this.apiUrl +`work/${id}`)
  }

  public getLenderWorks(id:number){
    return this.httpClient.get<Work[]>(this.apiUrl+ 'lender/'+ `${id}/works`)
  }

  public FilterWorksintheMap(work){
    return this.httpClient.post<any>(this.apiUrl+ 'work/filtro', work)
  }

}
