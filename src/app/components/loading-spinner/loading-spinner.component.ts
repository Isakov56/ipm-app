import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent {
  // This will now hold the Observable from the LoadingService
  isLoading$!: Observable<boolean>;

  // Inject LoadingService in the constructor
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    // Subscribe to the loading$ observable from LoadingService
    this.isLoading$ = this.loadingService.loading$;
  }

}