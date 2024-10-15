import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { RouterOutlet } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import {EmptyPageComponent} from './empty-page/empty-page.component';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Router } from '@angular/router';


@Component({
  
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  MatTableModule, TableComponent, NgIf, FormsModule, EmptyPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'NPM-app';
  model: string = '';
}
