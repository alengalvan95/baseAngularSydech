import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpContextToken,
    HttpResponse,
    HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, of, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../@services/auth.service';

export const LOGIN_REQUEST = new HttpContextToken(() => false);

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                if (error.status == 401) {
                    localStorage.clear();
                    sessionStorage.clear();
                    this.authService.EsEstaAutenticado(false);
                    this.router.navigate(['/login']);
                }
                return throwError(error);
            })
        );
    }

}
