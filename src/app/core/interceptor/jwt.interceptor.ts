import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = this.tokenService.currentUserValue
    let cloneRequest = request
    if(currentUser){
      cloneRequest = request.clone({headers: request.headers.set('Authorization', `Bearer ${currentUser.token}` )})
    }
    return next.handle(cloneRequest).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('iniciarSesion');
        }

        return throwError( err );

      })
    )
  }
}
