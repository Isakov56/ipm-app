import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/mainpage/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { LoadingService } from './services/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatTableModule,
    TableComponent,
    NgIf,
    FormsModule,
    EmptyPageComponent,
    RouterModule,
    NavbarComponent,
    CommonModule,
    LoadingSpinnerComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ]
})
export class AppComponent {
  title = 'NPM-app';
  model: string = '';

  isLoading: Observable<boolean>;

  constructor(private loadingService: LoadingService) {
    this.isLoading = this.loadingService.loading$;
  }
}