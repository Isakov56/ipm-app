import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TableColumn {
  key: string;    // Property name in the data object
  header: string; // Display name for the column
}

@Component({
  selector: 'app-table-module',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './table-module.component.html',
  styleUrls: ['./table-module.component.css']
})
export class TableModule {
  @Input() tableData: any[] = [];
  @Input() tableColumns: TableColumn[] = [];
}