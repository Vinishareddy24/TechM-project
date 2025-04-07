import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent,  {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())  
  ]
});
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));