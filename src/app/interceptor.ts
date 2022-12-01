import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HASURA_SECRET } from './hasura-secret';

@Injectable()
export class HasuraInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isHasuraRequest = req.url.startsWith('https://grateful-flamingo');
    if (isHasuraRequest) {
      const headers = new HttpHeaders().set(
        'x-hasura-admin-secret',
        HASURA_SECRET
      );
      const modReq = req.clone({ headers });
      return next.handle(modReq);
    }
    return next.handle(req);
  }
}

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HasuraInterceptor, multi: true },
];

export const HasuraInterceptorFn: HttpInterceptorFn = (req, next) => {
  const isHasuraRequest = req.url.startsWith('https://grateful-flamingo');
  if (isHasuraRequest) {
    const headers = new HttpHeaders().set(
      'x-hasura-admin-secret',
      HASURA_SECRET
    );
    const modReq = req.clone({ headers });
    return next(modReq);
  }
  return next(req);
};
