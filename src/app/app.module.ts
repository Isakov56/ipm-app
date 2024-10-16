import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmptyPageComponent } from './components/empty-page/empty-page.component'; // Import your new component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule  } from '@angular/material/toolbar';



//import { AppComponent } from './app.component'
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; // Import FormsModule (if needed elsewhere)

@NgModule({
    //declarations: [ AppComponent], 
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule, 
    // Add other modules here if you have other components or services
    // FormsModule, // Only if you need forms in another module
    // RouterModule.forRoot(routes) // Only if you have routes defined here
  ],
  providers: [],
  // Do not declare AppComponent here because it is standalone
  bootstrap: [] // No bootstrap component needed here
})
export class AppModule { }
