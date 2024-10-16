import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DataService } from '../../data.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { NgIf } from '@angular/common';

import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, NgIf, FormsModule, RouterModule,],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource  = ELEMENT_DATA;

  tableData: any[] = [];
  
  newEntry = { name: '', weight: '', symbol: '' }; // Model for new entry

  showButton = false; // Tracks whether the hover button is shown
  showInputFields = false; // Tracks whether the input fields are shown

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTableData().subscribe(data => {
      this.tableData = data;
      console.log(data, 'ddddddddddd')
    });
  }

  addElement(): void {
    // Add the new entry to the tableData array
    if (this.newEntry.name && this.newEntry.weight && this.newEntry.symbol) {
      this.dataService.addTableData({...this.newEntry})
      //this.tableData.push({ ...this.newEntry });
      // this.tableData = [...this.tableData, { ...this.newEntry }];
      this.resetNewEntry(); // Clear input fields after adding
      this.showInputFields = false; // Hide input fields
      //this.tableData = [...this.tableData, { ...this.newEntry }]; // Create a new reference
        //this.cd.detectChanges(); // Trigger change detection
        //this.resetNewEntry(); // Clear input fields
    }
    console.log(this.tableData, 'rrrrrrrr')
  }


  private resetNewEntry(): void {
    this.newEntry = { name: '', weight: '', symbol: '' };
  }

}
