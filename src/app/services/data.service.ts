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

  constructor(private http: HttpClient) {
    this.loadInitialData(); // Load initial data from the JSON file
  }

  private loadInitialData(): void {
    console.log('my datrat')
 
    this.http.get<any[]>(this.jsonUrl, { headers: { 'Cache-Control': 'no-cache' } })
    .pipe(
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

