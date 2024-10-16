import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, FormsModule],
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTableData().subscribe(data => {
      this.tableData = data;
      console.log(data, 'ddddddddddd')
    });
  }

  private resetNewEntry(): void {
    this.newEntry = { name: '', weight: '', symbol: '' };
  }

  addElement(): void {
    // Add the new entry to the tableData array
    if (this.newEntry.name && this.newEntry.weight && this.newEntry.symbol) {
      //this.tableData.push({ ...this.newEntry });
      this.dataService.addTableData({...this.newEntry})
      this.resetNewEntry(); // Clear input fields after adding
    }
    console.log(this.tableData, 'rrrrrrrr')
  }
}
