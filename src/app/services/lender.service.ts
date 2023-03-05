import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Lender } from '../models/lender';
import { Register } from '../models/register';
import { RegisterLender } from '../models/registerLender';

@Injectable({
  providedIn: 'root'
})
export class LenderService {

  apiUrl = environment.apiUrl

  constructor(private httpClient:HttpClient) { }

  public register(lender): Observable<any>{
    return this.httpClient.post<any>(this.apiUrl+ 'lender', lender)
  }


}
