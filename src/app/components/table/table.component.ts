import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableModule } from '../../modules/table-module/table-module.component';

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
  imports: [MatTableModule, NgIf, FormsModule, RouterModule, MatButtonModule, CommonModule, TableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {

  data = [
    { id: 1, name: 'Alice', age: 25, occupation: 'Engineer' },
    { id: 2, name: 'Bob', age: 30, occupation: 'Designer' },
    { id: 3, name: 'Charlie', age: 35, occupation: 'Manager' }
  ];

  // Column configuration
  columns = [
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age' },
    { key: 'occupation', header: 'Occupation' }
  ];


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'description'];
  tableData: any[] = [];
  newEntry = { name: '', weight: '', symbol: '' }; // Model for new entry
  showButton = false; // Tracks whether the hover button is shown
  showInputFields = false; // Tracks whether the input fields are shown
  hoveredRowIndex: number | null = null;
  highlightedId: string | null = null;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getTableData().subscribe(data => {
      this.tableData = data;
      console.log(data, 'ddddddddddd')
      if (this.highlightedId) {
        setTimeout(() => {
            this.highlightedId = null; // Clear the highlighted ID
        }, 2000); // 3000 milliseconds = 3 seconds
    }
    });

    // Capture 'highlightId' from the query parameters
    this.route.queryParams.subscribe(params => {
      this.highlightedId = params['highlightId'] || null;

      // If 'highlightId' exists, remove it from the URL after processing
      if (!this.highlightedId) {
        
      }
    });
    

  }


  isHighlighted(row: any): boolean {
    return row.name === this.highlightedId;
  }

  highlightRow(row: any): void {
    this.highlightedId = row.name; // Set the highlighted ID to the current row name

    // Add a timeout to allow the highlight to fade
    setTimeout(() => {
        this.highlightedId = null; // Reset after 2 seconds or any other desired duration
    }, 2000); // Adjust the time according to your needs
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
