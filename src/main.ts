import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { GraphQLModule } from './app/graphql.module';

import { HasuraInterceptorFn } from './app/interceptor';
import { routes } from './routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule, GraphQLModule),
    provideStore(),
    provideHttpClient(withInterceptors([HasuraInterceptorFn])),
  ],
}).catch((err) => console.error(err));
