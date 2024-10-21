import { TestBed } from '@angular/core/testing';
import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from './services/loading.service'; // Import LoadingService

describe('LoadingInterceptor', () => {
  let loadingService: LoadingService; // Declare a variable for LoadingService
  let interceptor: LoadingInterceptor; // Declare a variable for the interceptor

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService], // Provide LoadingService
    });

    // Inject the LoadingService and create an instance of LoadingInterceptor
    loadingService = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy(); // Check if the interceptor is created
  });
});