import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import {EmptyPageComponent} from './components/empty-page/empty-page.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {NavbarComponent} from './components/mainpage/navbar/navbar.component'
//import {HomeComponent} from './components/mainpage/home/home.component'
//import { Router } from '@angular/router';


@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  MatTableModule, TableComponent, NgIf, FormsModule, EmptyPageComponent, RouterModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'NPM-app';
  model: string = '';

  onButtonClick(){
    console.log('the button is clicked')
  }
}
