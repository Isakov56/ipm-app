import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataMy = new BehaviorSubject<any[]>( [
  ])

  private jsonUrl = 'assets/tableData.json'; // Path to your JSON file

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    this.loadInitialData(); // Load initial data from the JSON file
  }

  private loadInitialData(): void {
    console.log('my datrat')
    this.loadingService.show(); // Push data to BehaviorSubject
    this.http.get<any[]>(this.jsonUrl)
    .pipe(
      delay(5000),
      tap(() => this.loadingService.hide()) // Add a delay of 2 seconds
    )
    .subscribe(data => {
      this.dataMy.next(data);
      console.log(data, "my data my data my dta]");
    });
  }

  //constructor() { }
  getTableData(): Observable<any[]> {
    
    return this.dataMy.asObservable(); 
  }
  addTableData(entry: any): void{
    const currentData = this.dataMy.getValue(); // Get current data
    this.dataMy.next([...currentData, entry]); // Update the data
  }
}

