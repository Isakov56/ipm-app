import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TableColumn } from '../../../assets/model';



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

  @Output() view = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  viewRow(row: any) {
    this.view.emit(row);
  }

  editRow(row: any) {
    this.edit.emit(row);
  }

  deleteRow(row: any) {
    this.delete.emit(row);
  }

  isAnyRowHovered(): boolean {
    return this.tableData.some(row => row.hovered);
  }

  // constructor(private router: Router, private route: ActivatedRoute) {
  //   // Check if there's router state data and retrieve it
  //   const navigation = this.router.getCurrentNavigation();
  //   if (navigation?.extras.state) {
  //     this.tableData = navigation.extras.state['tableData'] || [];
  //     this.tableColumns = navigation.extras.state['tableColumns'] || [];
  //   }
  // }

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.tableData = params['tableData'] ? JSON.parse(params['tableData']) : [];
      this.tableColumns = params['tableColumns'] ? JSON.parse(params['tableColumns']) : [];
    });
  }
}