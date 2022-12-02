# Angular Tiny Conf - 2 DEC 2022

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

Watch the conference here => https://www.youtube.com/watch?v=M65J8pSqU14

There are three branches:

1. main

- this branch shows the typical NgRx setup you're probably familiar with using create functions (e.g. `createAction`, `createSelectors`)
- module-based, SCAM (Single Component Angular Module) architecture

2. new-apis

- this branch shows the implementation of the of the `createActionGroup` and `createFeature` APIs
- module-based

3. standalone

- this branch shows what NgRx looks like in the new standalone architecture
- registers root store with `provideStore`
- registers feature store using route-based providers and the `provideState` and `provideEffects` APIs
- shows how to bootstrap your `AppComponent` instead of `AppModule`
- Use functional interceptor and register it with `provideHttpClient()` and the `withInterceptors` APIs
