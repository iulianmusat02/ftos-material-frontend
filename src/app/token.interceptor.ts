import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() {}

  setAuthToken(token: string | null): void {
    this.authTokenSubject.next(token);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authTokenSubject.getValue();

    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
    }

    return next.handle(request);
  }
}
