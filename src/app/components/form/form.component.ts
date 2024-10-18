import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})



export class FormComponent implements OnInit {
  newEntry = {
    name: "",
    weight: "",
    symbol: ""
  }
  
  tableData: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getTableData().subscribe(data => {
      this.tableData = data;
      console.log(data, 'ddddddddddd')
    });
  }

  private resetNewEntry(): void {
    this.newEntry = { name: '', weight: '', symbol: '' };
  }

  errorMessage: string | null=null
  isSubmitted: boolean = false; // New property to track submission state

  addElement(): void {
    this.errorMessage = null


    // Validate fields
    if (!this.newEntry.name || !this.newEntry.weight || !this.newEntry.symbol) {
      this.errorMessage = 'Please complete all fields';
      return; // Exit the function if fields are incomplete
    }

    // Add the new entry to the tableData array
    this.dataService.addTableData({ ...this.newEntry });
    this.resetNewEntry(); // Clear input fields after adding
    this.isSubmitted = true; // Set submission state to true
    setTimeout(() => {
      this.router.navigate(['/table']); // Navigate to the table component
    }, 2000); // 2000 milliseconds = 2 seconds
  }
}
