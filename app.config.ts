import { provideRouter } from '@angular/router';
//import { importProvidersFrom } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
//import { AddmealComponent } from './addmeal/addmeal.component';


export const appConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes)
  ]
};
