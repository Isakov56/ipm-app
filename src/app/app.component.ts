import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
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
import { DeviceDetectionService } from './services/device-detection.service';
import { trigger, transition, style, animate } from '@angular/animations';



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
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class AppComponent {
  title = 'NPM-app';
  model: string = '';

  isLoading: Observable<boolean>;


  constructor(private loadingService: LoadingService, private router: Router, private deviceDetectionService: DeviceDetectionService) {
    this.isLoading = this.loadingService.loading$;
  }
  deviceType: string = 'desktop'; // Default to desktop
  showAlert: boolean = false; // Flag to show the alert
  alertMessage: string = ''; // Message to display
  ngOnInit() {
    this.deviceType = this.deviceDetectionService.checkDevice(); // Check device type on initialization
    
    // Update the device type on window resize
    window.addEventListener('resize', this.updateDeviceType.bind(this));

    // Listen to router events to hide the loading spinner when navigating away

  }

  ngOnDestroy() {
    // Remove the event listener to prevent memory leaks
    window.removeEventListener('resize', this.updateDeviceType.bind(this));
  }

  // Method to update the device type
  private updateDeviceType(): void {
    const newDeviceType = this.deviceDetectionService.checkDevice();
    if (newDeviceType !== this.deviceType) {
      this.deviceType = newDeviceType; // Update device type
      this.showAlertOnChange(); // Show alert when device type changes
    }
  }

  private showAlertOnChange(): void {
    this.alertMessage = `Device changed to ${this.deviceType}`; // Set alert message
    this.showAlert = true; // Show alert

    // Hide alert after a delay
    setTimeout(() => {
      this.showAlert = false; // Hide alert after 3 seconds
    }, 3000);
  }
}