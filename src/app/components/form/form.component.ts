import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'] // Note: styleUrl should be styleUrls
})
export class FormComponent implements OnInit {
  newEntry = {
    id: "", // Added id property for updates
    name: "",
    weight: "",
    symbol: ""
  };

  tableData: any[] = [];
  errorMessage: string | null = null;
  isSubmitted: boolean = false;
  isEditMode: boolean = false; // New property to track edit state
  entry: any; // This will hold the current entry for editing

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Load table data first
    this.dataService.getTableData().subscribe(data => {
        this.tableData = data; // Load table data into the component
        console.log(this.tableData, 'table data that i got')
        // Now check for route params to find the entry
        this.route.params.subscribe(params => {
            const id = params['id'];
            this.tableData.forEach(e => {
          });

            if (id) {
                // Enable edit mode
                // Convert id to the same type if necessary
                
                this.entry = this.tableData.find(e => e.position.toString() === id.trim() || id.trim() === e.id);
                console.log(this.entry, "mye entry");

                if (this.entry) {
                    this.newEntry = { ...this.entry }; // Populate form with existing data
                    console.log(this.newEntry, 'new entry');
                    this.isEditMode = true;
                } else {
                    console.error('Entry not found for id:', id); // Handle case where entry is not found
                }
            } else{
              // No entry found, set edit mode to false
        this.isEditMode = false;
            }
        });
    });
    console.log(this.isEditMode, 'ahskldjf')
}


  private resetNewEntry(): void {
    this.newEntry = { id: '', name: '', weight: '', symbol: '' };
  }

  addElement(): void {
    this.errorMessage = null;

    // Validate fields
    if (!this.newEntry.name || !this.newEntry.weight || !this.newEntry.symbol) {
      this.errorMessage = 'Please complete all fields';
      return; // Exit the function if fields are incomplete
    }

    if (this.isEditMode) {
      // Update existing entry
      this.dataService.updateTableData(this.newEntry);
    } else {
      // Add a new entry
      this.dataService.addTableData({ ...this.newEntry });
    }

    this.resetNewEntry(); // Clear input fields after adding/updating
    this.isSubmitted = true; // Set submission state to true
    setTimeout(() => {
      this.router.navigate(['/table']); // Navigate to the table component
    }, 2000); // 2000 milliseconds = 2 seconds
  }
}
