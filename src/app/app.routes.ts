import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyPageComponent } from './components/empty-page/empty-page.component'; // Import your new component

const routes: Routes = [
  { path: 'empty-page', component: EmptyPageComponent }, // Add the route
  // Other routes can be added here
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Example home route
  { path: '**', redirectTo: '/home' } // Redirect to home for any unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
