import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom, Component } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
export const routes = [
  { 
    path: '', 
    //component: HomeComponent
    loadComponent: () => import('./components/mainpage/home/home.component')
    .then(component => component.HomeComponent),
    children: [
      {
        path: 'table-home',
        loadComponent: () => 
          import('./shared/table-module/table-module.component').then((component) => component.TableModule)
      }
    ],   
  },
  { 
    path: 'table', 
    // component: TableComponent
    loadComponent: () => import('./components/table/table.component')
    .then(component => component.TableComponent) 
  },
  { 
    path: 'content', 
    loadComponent: () => import('./components/empty-page/empty-page.component')
    .then(component => component.EmptyPageComponent),
    children: [
      {
        path: 'table-module',
        loadComponent: () => 
          import('./shared/table-module/table-module.component').then((component) => component.TableModule)
      }
    ], 
  },
  // {
  //   path: 'content/table-module',
  //   loadComponent: () => import('./modules/table-module/table-module.component')
  //   .then(component => component.TableModule)
  // },
  // {
  //   path: '',
  //   loadComponent: () => import('./modules/table-module/table-module.component')
  //   .then(component => component.TableModule)
  // },

  { 
    path: 'form/add', 
    //component: FormComponent
    loadComponent: () => import('./components/form/form.component')
    .then(component => component.FormComponent)
    
  },
  { 
    path: 'form/edit/:id', 
    //component: FormComponent 
    loadComponent: () => import('./components/form/form.component')
    .then(component => component.FormComponent)
  },
  { 
    path: 'table/:id', 
    //component: TableElementComponent
    loadComponent: () => import('./components/table-element/table-element.component')
    .then(component => component.TableElementComponent)
  }
];

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(), 
    importProvidersFrom( HttpClientModule),
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
};
