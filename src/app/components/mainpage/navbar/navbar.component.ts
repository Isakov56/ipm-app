import {MediaMatcher} from '@angular/cdk/layout';
import { Component, ChangeDetectorRef, OnDestroy, inject, OnInit, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router , RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule, MatSidenavModule, MatListModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  
  mobileQuery: MediaQueryList;
  fillerNav = Array.from({length: 5}, (_, i) => `Nav Item ${i + 1}`);

  isSidenavOpen: boolean = false;

  ngOnInit(): void {
    // Add click listener on component initialization
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  private _mobileQueryListener: () => void;

  constructor(public router: Router) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);
    
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery = media.matchMedia('');
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  
  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    document.removeEventListener('click', this.onDocumentClick.bind(this));
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen; // Toggle logic
  }

  // Define the onDocumentClick method
  private onDocumentClick(event: MouseEvent): void {
    const sidenav = document.getElementById('sidenav'); // Replace with your sidenav element ID
    const target = event.target as HTMLElement;

    // Close sidenav if the click target is outside the sidenav
    if (this.isSidenavOpen && sidenav && !sidenav.contains(target)) {
      this.isSidenavOpen = false;
    }
  }

  //shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
