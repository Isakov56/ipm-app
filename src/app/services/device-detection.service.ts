import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {
  constructor() {}

  public checkDevice(): string {
    // Get the user agent string
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

    // Check if the user agent matches mobile identifiers
    const isMobileUserAgent = /android|iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;

    // Check the window size to determine if it's a mobile view
    const isMobileWindow = window.innerWidth <= 768; // Define a threshold for mobile

    // Return the device type based on the checks
    return (isMobileUserAgent || isMobileWindow) ? 'mobile' : 'desktop';
  }
  
}

