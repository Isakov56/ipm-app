import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
import { NavbarComponent } from './navbar.component'; // Adjust the path as needed
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserModule
  ],
  exports: [] // Export it so you can use it in other modules
})
export class NavbarModule { }