import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newEntryForm: FormGroup; // Define a FormGroup for the form
  tableData: any[] = [];
  errorMessage: string | null = null;
  isSubmitted: boolean = false;
  isEditMode: boolean = false; // New property to track edit state
  entry: any; // This will hold the current entry for editing

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router, private route: ActivatedRoute) {
    // Initialize the form with FormBuilder
    this.newEntryForm = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      symbol: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Load table data first
    this.dataService.getTableData().subscribe(data => {
      this.tableData = data; // Load table data into the component
      console.log(this.tableData, 'table data that I got');

      // Check for route params to find the entry
      this.route.params.subscribe(params => {
        const id = params['id']; // Get 'id' from the route

        if (id && this.tableData.length > 0) {
          // Find the entry based on the id
          this.entry = this.tableData.find(e => e.position.toString() === id.trim() || id.trim() === e.id);
          console.log(this.entry, "my entry");

          if (this.entry) {
            // Populate form with existing data using patchValue
            this.newEntryForm.patchValue({
              name: this.entry.name,
              weight: this.entry.weight,
              symbol: this.entry.symbol
            });
            console.log(this.newEntryForm.value, 'form populated with entry data');
            this.isEditMode = true;
          } else {
            console.error('Entry not found for id:', id); // Handle case where entry is not found
            this.isEditMode = false;
          }
        } else {
          this.isEditMode = false; // No entry found, set edit mode to false
        }
      });
    });
  }

  onSubmit(): void {
    this.errorMessage = null; // Reset any previous error message
  
    // Validate form fields
    if (this.newEntryForm.invalid) {
      this.errorMessage = 'Please complete all fields'; // Set error message if form is invalid
      return; // Exit the function if fields are incomplete
    }
  
    const formValue = this.newEntryForm.value; // Get the form values
    const newId = formValue.name; // Use name as ID for the new entry (you can adjust this if needed)
  
    if (this.isEditMode) {
      // In edit mode, we keep the existing position and only modify other fields
      const updatedEntry = {
        ...this.entry,  // Keep original entry values, including the position
        ...formValue,   // Override with form values (name, weight, symbol)
        position: this.entry.position // Ensure the original position is not modified
      };
  
      this.dataService.updateTableData(updatedEntry); // Update the existing entry
    } else {
      // In add mode, calculate a new position for the new entry
      const maxPosition = this.tableData.length > 0 ? Math.max(...this.tableData.map(e => e.position)) : 0;
      const newEntry = {
        position: maxPosition + 1,  // Assign the next available position
        ...formValue                // Spread the form values
      };
  
      this.dataService.addTableData(newEntry); // Add the new entry to the table
    }
  
    this.resetForm(); // Clear input fields after adding/updating
    this.isSubmitted = true; // Set submission state to true
  
    // Navigate back to the table after 2 seconds
    setTimeout(() => {
      this.router.navigate(['/table'], { queryParams: { highlightId: newId } }); // Navigate to the table component
    }, 2000); // 2000 milliseconds = 2 seconds
  }
  
  private resetForm(): void {
    this.newEntryForm.reset(); // Reset the form fields
    this.isSubmitted = false;  // Optionally reset submission state
  }

}

