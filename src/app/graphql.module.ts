import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  InMemoryCache,
  DefaultOptions,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const uri = 'https://grateful-flamingo-14.hasura.app/v1/graphql';

function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const defaultOptions: DefaultOptions = {
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  };
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
    defaultOptions,
  };
}

@NgModule({
  exports: [ApolloModule, HttpClientModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
