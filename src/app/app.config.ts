import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/mainpage/navbar/navbar.component';


import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component'
import { EmptyPageComponent } from './components/empty-page/empty-page.component'; // Import your new component  

export const routes = [
  //{ path: '', component: AppComponent },
  { path: 'table', component: TableComponent }, // Add your new component here
  { path: 'empty-page', component: EmptyPageComponent }, // Add your new component here
  //{ path: '', component: NavbarComponent }, // Add your new component here
];
//import { routes } from './app.routes';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(), 
    importProvidersFrom(HttpClientModule)]
};
