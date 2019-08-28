// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urls: {
    customersApiUri: 'https://localhost:44327/api/customers',
    discountsApiUri: 'https://localhost:44327/api/discounts',
    productsApiUri: 'https://localhost:44327/api/products',
    reportsApiUri: 'https://localhost:44327/api/reports',
    salesApiUri: 'https://localhost:44327/api/sales',
    salesPersonsApiUri: 'https://localhost:44327/api/salespersons',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
