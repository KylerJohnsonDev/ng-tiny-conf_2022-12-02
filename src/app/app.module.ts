import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'
import { ApolloModule } from 'apollo-angular';
import { httpInterceptorProviders } from './interceptor';
import { CustomersModule } from './routes/customers/customers.component';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    EffectsModule.forRoot(),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    CustomersModule,
    GraphQLModule
  ],
  providers: [
    httpInterceptorProviders,
    HttpClientModule,
    ApolloModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
