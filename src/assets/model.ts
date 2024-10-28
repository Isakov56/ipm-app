import { FormGroup } from "@angular/forms";


export interface TableColumn {
  key: string;    // Property name in the data object
  header: string; // Display name for the column
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
  