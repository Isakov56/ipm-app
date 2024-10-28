import { Component } from '@angular/core';
import {SvgDisplayComponent} from './svg-display/svg-display.component'
import { TableModule } from '../../../shared/table-module/table-module.component';
import { NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SvgDisplayComponent,
    //TableModule, 
    NgIf, RouterOutlet, RouterLink, TableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public router: Router){}
 flowerData = [
    { id: 1, name: 'Rose', color: 'Red', bloomingSeason: 'Spring', nativeRegion: 'Asia' },
    { id: 2, name: 'Tulip', color: 'Various', bloomingSeason: 'Spring', nativeRegion: 'Central Asia' },
    { id: 3, name: 'Sunflower', color: 'Yellow', bloomingSeason: 'Summer', nativeRegion: 'North America' },
    { id: 4, name: 'Orchid', color: 'Various', bloomingSeason: 'Year-round', nativeRegion: 'Worldwide' },
    { id: 5, name: 'Lily', color: 'White', bloomingSeason: 'Summer', nativeRegion: 'Northern Hemisphere' },
    { id: 6, name: 'Daisy', color: 'White', bloomingSeason: 'Summer', nativeRegion: 'Europe' },
    { id: 7, name: 'Lavender', color: 'Purple', bloomingSeason: 'Summer', nativeRegion: 'Mediterranean' },
    { id: 8, name: 'Daffodil', color: 'Yellow', bloomingSeason: 'Spring', nativeRegion: 'Northern Europe' },
    { id: 9, name: 'Marigold', color: 'Orange', bloomingSeason: 'Summer', nativeRegion: 'South America' },
    { id: 10, name: 'Peony', color: 'Pink', bloomingSeason: 'Spring', nativeRegion: 'Asia' },
    { id: 11, name: 'Cherry Blossom', color: 'Pink', bloomingSeason: 'Spring', nativeRegion: 'East Asia' },
    { id: 12, name: 'Bluebell', color: 'Blue', bloomingSeason: 'Spring', nativeRegion: 'Europe' },
  ];
  
  // Column configuration
  flowerColumns = [
    { key: 'name', header: 'Name' },
    { key: 'color', header: 'Color' },
    { key: 'bloomingSeason', header: 'Blooming Season' },
    { key: 'nativeRegion', header: 'Native Region' }
  ];
}
