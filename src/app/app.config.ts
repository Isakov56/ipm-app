import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HomeComponent } from './components/mainpage/home/home.component';
import { LoadingInterceptor } from './loading.interceptor';
import { TableElementComponent } from './components/table-element/table-element.component';


import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component'
import { EmptyPageComponent } from './components/empty-page/empty-page.component'; // Import your new component  
import { FormComponent } from './components/form/form.component'; // Import your new component  
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'table', component: TableComponent }, // Add your new component here
  { path: 'content', component: EmptyPageComponent }, // Add your new component here
  { path: 'form/:id', component: FormComponent }, // Add your new component here // Add your new component here
  { path: 'table/:id', component: TableElementComponent}
  //{ path: '', component: NavbarComponent }, // Add your new component here
];
//import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(), 
    importProvidersFrom(HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
};
