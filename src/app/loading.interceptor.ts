import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from './services/loading.service';
import { delay, finalize } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let showLoading = false;

    if (req.method === 'GET') {
      this.loadingService.show();
      showLoading = true;
      console.log('Loading started on table page for request:', req.url);
    }

    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        if (showLoading) {
          this.loadingService.hide();
          console.log('Request completed and spinner hidden.');
        }
      })
    );
  }
}