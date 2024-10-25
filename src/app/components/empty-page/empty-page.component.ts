import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentSvgComponent } from './content-svg/content-svg.component';
import { TableModule } from '../../modules/table-module/table-module.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'content',
  standalone: true,
  imports: [RouterModule, ContentSvgComponent, TableModule, NgIf, RouterOutlet],
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.css',
})
export class EmptyPageComponent {

  animalData = [
    { id: 1, name: 'Elephant', species: 'Loxodonta', age: 25, habitat: 'Savannah', weight: 6000 },
    { id: 2, name: 'Tiger', species: 'Panthera tigris', age: 10, habitat: 'Rainforest', weight: 220 },
    { id: 3, name: 'Penguin', species: 'Aptenodytes forsteri', age: 8, habitat: 'Antarctica', weight: 30 },
    { id: 4, name: 'Kangaroo', species: 'Macropus', age: 12, habitat: 'Grasslands', weight: 90 },
    { id: 5, name: 'Giraffe', species: 'Giraffa camelopardalis', age: 15, habitat: 'Savannah', weight: 800 },
    { id: 6, name: 'Polar Bear', species: 'Ursus maritimus', age: 20, habitat: 'Arctic', weight: 450 },
    { id: 7, name: 'Panda', species: 'Ailuropoda melanoleuca', age: 7, habitat: 'Bamboo Forest', weight: 110 },
    { id: 8, name: 'Wolf', species: 'Canis lupus', age: 9, habitat: 'Forests', weight: 40 },
    { id: 9, name: 'Dolphin', species: 'Delphinus delphis', age: 14, habitat: 'Ocean', weight: 200 },
    { id: 10, name: 'Eagle', species: 'Aquila chrysaetos', age: 5, habitat: 'Mountains', weight: 6 },
  ];

  animalColumns = [
    { key: 'name', header: 'Name' },
    { key: 'species', header: 'Species' },
    { key: 'age', header: 'Age' },
    { key: 'habitat', header: 'Habitat' },
    { key: 'weight', header: 'Weight (kg)' }
  ];


constructor(private router: Router) {}

  navigateToTable() {
    this.router.navigate(['/content/table-module'], {
      state: {
        tableData: [
          { id: 1, name: 'Tiger', species: 'Panthera tigris' },
          { id: 2, name: 'Elephant', species: 'Elephas maximus' }
        ],
        tableColumns: [
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Name' },
          { key: 'species', header: 'Species' }
        ]
      }
    });
  }
  
}
