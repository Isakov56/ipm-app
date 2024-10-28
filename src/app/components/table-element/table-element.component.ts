import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-table-element',
  standalone: true,
  imports: [RouterModule, MatButtonModule],
  templateUrl: './table-element.component.html',
  styleUrl: './table-element.component.css'
})
export class TableElementComponent implements OnInit {
  
  constructor(private dataService: DataService, private location: Location, private route: ActivatedRoute, private router: Router) {}

  tableData: any[] = [];
  errorMessage: string | null = null;
  entry: any; // This will hold the current entry for editing
  rowData: any; //

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    
    
    this.dataService.getTableData().subscribe(data =>{
      this.tableData = data;
      this.route.params.subscribe(params => {
        const id = params['id'];
        this.tableData.forEach(e => {
      });

        if (id) {
             // Enable edit mode
            // Convert id to the same type if necessary
            
            this.entry = this.tableData.find(e => e.position.toString() === id.trim() || id.trim() === e.id);
            console.log(this.entry, "mye entrydfsgdfgsdfg");

            
        }
    });
      this.tableData = data
    })

    const navigation = this.router.getCurrentNavigation();
    console.log('Received data from module table', navigation);
    if (navigation && navigation.extras.state) {
        this.rowData = navigation.extras.state['row'];
    }
  }
}
