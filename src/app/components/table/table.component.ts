import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, NgIf, FormsModule, RouterModule, MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description'];

  tableData: any[] = [];
  
  newEntry = { name: '', weight: '', symbol: '' }; // Model for new entry

  showButton = false; // Tracks whether the hover button is shown
  showInputFields = false; // Tracks whether the input fields are shown
  hoveredRowIndex: number | null = null;

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
      this.resetNewEntry(); // Clear input fields after adding
      this.showInputFields = false; // Hide input fields
    }
    console.log(this.tableData, 'rrrrrrrr')
  }


  private resetNewEntry(): void {
    this.newEntry = { name: '', weight: '', symbol: '' };
  }

}
